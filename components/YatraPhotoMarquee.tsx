"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface MarqueeItem {
  id: number;
  src: string;
  location: string;
  tag: string;
  caption: string;
}

const marqueeItems: MarqueeItem[] = [
  { id: 1, src: "/gallery/gallery-1.jpg", location: "Ayodhya Dham", tag: "Travel Group", caption: "Happy yatra group next to their private tourist van." },
  { id: 2, src: "/gallery/gallery-2.jpg", location: "Sattvic Dining", tag: "Pure Meals", caption: "Pilgrims enjoying hygienic sattvic dinner at the hotel." },
  { id: 3, src: "/gallery/gallery-3.jpg", location: "Ayodhya Dham", tag: "Railway Station", caption: "Devotees arriving at the Ayodhya Dham Railway Station." },
  { id: 4, src: "/gallery/gallery-4.jpg", location: "Ayodhya Dham", tag: "Temple Sanctum", caption: "Senior pilgrims inside the gold-door temple sanctum." },
  { id: 5, src: "/gallery/gallery-5.jpg", location: "Ayodhya Dham", tag: "Ram Mandir", caption: "Group of young devotees at the newly constructed Shri Ram Mandir." },
  { id: 6, src: "/gallery/gallery-6.jpg", location: "Ayodhya Airport", tag: "Airport Arrival", caption: "Family taking a selfie after arriving at Ayodhya Airport D1." },
  { id: 7, src: "/gallery/gallery-14.jpg", location: "Varanasi Ghats", tag: "Kashi Yatra", caption: "Devotees standing at the Ganga River ghats platform." },
  { id: 8, src: "/gallery/gallery-17.jpg", location: "Triveni Sangam", tag: "Prayagraj", caption: "Family group standing by the holy Triveni Sangam." },
  { id: 9, src: "/gallery/gallery-18.jpg", location: "Varanasi", tag: "Ganga Boat Ride", caption: "Pilgrims in life jackets during the Kashi Ganga boat ride." },
  { id: 10, src: "/gallery/gallery-19.jpg", location: "Ayodhya Dham", tag: "Tempo Traveller", caption: "A group of pilgrims next to their luxury private coach." },
  { id: 11, src: "/gallery/gallery-24.jpg", location: "Varanasi", tag: "Ganga Ghats", caption: "Devotees group posing next to the holy Ganga river at Varanasi." },
  { id: 12, src: "/gallery/gallery-25.jpg", location: "Varanasi Airport", tag: "Arrival", caption: "Family standing together at Lal Bahadur Shastri Airport, Babatpur." },
  { id: 13, src: "/gallery/gallery-26.jpg", location: "Ayodhya Dham", tag: "Temple Gate", caption: "A family group posing in front of the main temple entrance gate." },
  { id: 14, src: "/gallery/gallery-27.jpg", location: "Triveni Sangam", tag: "Prayagraj", caption: "Family group standing next to the holy Ganga river at Sangam." },
  { id: 15, src: "/gallery/gallery-29.jpg", location: "Ayodhya Dham", tag: "Luxury Coach", caption: "Pilgrims wearing saffron stoles posing with the luxury tour coach." },
];

export default function YatraPhotoMarquee() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((activePhotoIndex + 1) % marqueeItems.length);
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((activePhotoIndex - 1 + marqueeItems.length) % marqueeItems.length);
      } else if (e.key === "Escape") {
        setActivePhotoIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  const activeItem = activePhotoIndex !== null ? marqueeItems[activePhotoIndex] : null;

  // Duplicate items for seamless infinite loop
  const doubleItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative bg-[#fffaf5] py-10 overflow-hidden border-b border-gray-100">
      
      {/* Decorative Warm Accent Gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-saffron-600 text-[10px] font-bold uppercase tracking-widest block mb-1">
              ✨ Live Yatra Moments
            </span>
            <h3 className="font-playfair font-bold text-xl sm:text-2xl text-divine-dark">
              Our Recent Devotee Batches
            </h3>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md sm:text-right leading-relaxed">
            Real families, senior citizens, and groups enjoying their journeys. Click any photo to see it full-size.
          </p>
        </div>
      </div>

      {/* Scrolling Track */}
      <div className="relative w-full overflow-hidden select-none">
        
        {/* Left & Right overlay gradient to hide edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#fffaf5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#fffaf5] to-transparent z-10 pointer-events-none" />

        <div className="w-full flex">
          <div className="animate-marquee flex gap-4 pr-4">
            {doubleItems.map((item, index) => {
              // Map index to corresponding original item index for lightbox reference
              const originalIndex = index % marqueeItems.length;
              return (
                <div
                  key={`${item.id}-${index}`}
                  onClick={() => setActivePhotoIndex(originalIndex)}
                  className="relative w-[210px] h-[140px] sm:w-[240px] sm:h-[160px] rounded-xl overflow-hidden shadow-sm border border-gray-100/50 bg-white cursor-pointer group flex-shrink-0"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle info bottom bar */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-center gap-1.5">
                      <span className="bg-saffron-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <span className="text-gold-300 text-[9px] font-medium tracking-wider">
                        📍 {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center w-full z-10 text-white pt-2">
              <div className="flex items-center gap-2.5">
                <span className="bg-saffron-600 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest text-white">
                  {activeItem.tag}
                </span>
                <span className="text-gold-400 text-xs sm:text-sm font-medium tracking-wide">
                  📍 {activeItem.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/50 text-xs sm:text-sm">
                  {activePhotoIndex + 1} / {marqueeItems.length}
                </span>
                <button
                  onClick={() => setActivePhotoIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                  aria-label="Close lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative flex-1 w-full flex items-center justify-center my-4 overflow-hidden">
              {/* Prev Button */}
              <button
                onClick={() => setActivePhotoIndex((activePhotoIndex - 1 + marqueeItems.length) % marqueeItems.length)}
                className="absolute left-2 sm:left-4 z-10 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Frame */}
              <motion.img
                key={activeItem.id}
                src={activeItem.src}
                alt={activeItem.caption}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[72vh] sm:max-h-[76vh] object-contain rounded-xl shadow-2xl"
              />

              {/* Next Button */}
              <button
                onClick={() => setActivePhotoIndex((activePhotoIndex + 1) % marqueeItems.length)}
                className="absolute right-2 sm:right-4 z-10 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full text-center pb-4 sm:pb-6 max-w-2xl mx-auto z-10">
              <p className="text-white/95 text-sm sm:text-base md:text-lg italic leading-relaxed font-playfair">
                &ldquo;{activeItem.caption}&rdquo;
              </p>
              <div className="flex justify-center gap-0.5 mt-2.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
