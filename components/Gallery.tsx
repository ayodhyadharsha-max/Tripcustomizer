"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  location: string;
  tag: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/gallery/gallery-1.jpg", location: "Ayodhya Dham", tag: "Ram Mandir Yatra", caption: "Happy yatra group next to their private tourist van." },
  { id: 2, src: "/gallery/gallery-2.jpg", location: "Sattvic Dining", tag: "Pure Meals", caption: "Pilgrims enjoying hygienic sattvic dinner at the hotel." },
  { id: 3, src: "/gallery/gallery-3.jpg", location: "Ayodhya Dham", tag: "Railway Station", caption: "Devotees arriving at the Ayodhya Dham Railway Station." },
  { id: 4, src: "/gallery/gallery-4.jpg", location: "Ayodhya Dham", tag: "Temple Darshan", caption: "Senior pilgrims inside the gold-door temple sanctum." },
  { id: 5, src: "/gallery/gallery-5.jpg", location: "Ayodhya Dham", tag: "Ram Mandir", caption: "Group of young devotees at the newly constructed Shri Ram Mandir." },
  { id: 6, src: "/gallery/gallery-6.jpg", location: "Ayodhya Dham", tag: "Airport Arrival", caption: "Family taking a selfie after arriving at Ayodhya Airport D1." },
  { id: 7, src: "/gallery/gallery-7.jpg", location: "Ayodhya Dham", tag: "Temple Visit", caption: "Ladies group seeking blessings inside a holy temple." },
  { id: 8, src: "/gallery/gallery-8.jpg", location: "Ayodhya Dham", tag: "Ram Lalla Darshan", caption: "Young devotee fold hands in front of Ram Lalla." },
  { id: 9, src: "/gallery/gallery-9.jpg", location: "Ayodhya Dham", tag: "Family Group", caption: "A large family posing on the steps of the sacred temple." },
  { id: 10, src: "/gallery/gallery-10.jpg", location: "Ayodhya Dham", tag: "Temple Entrance", caption: "Pilgrims gathering at the main entrance gate of the temple." },
  { id: 11, src: "/gallery/gallery-11.jpg", location: "Ayodhya Dham", tag: "Women Devotees", caption: "Group of women devotees wearing matching yellow/white sarees." },
  { id: 12, src: "/gallery/gallery-12.jpg", location: "Ayodhya Dham", tag: "Night Darshan", caption: "A large group of devotees in front of the illuminated gate at night." },
  { id: 13, src: "/gallery/gallery-13.jpg", location: "Hotel Lobby", tag: "Yatra Prasadam", caption: "A family holding gift boxes after checking into their premium hotel." },
  { id: 14, src: "/gallery/gallery-14.jpg", location: "Varanasi Ghats", tag: "Kashi Yatra", caption: "Devotees standing at the Ganga River ghats platform." },
  { id: 15, src: "/gallery/gallery-15.jpg", location: "Varanasi Airport", tag: "Arrival", caption: "Family next to their private tourist van at Varanasi Airport." },
  { id: 16, src: "/gallery/gallery-16.jpg", location: "Ayodhya Dham", tag: "Ram Mandir Gate", caption: "Devotees group holding prayer items in front of the temple gate." },
  { id: 17, src: "/gallery/gallery-17.jpg", location: "Triveni Sangam", tag: "Prayagraj", caption: "Family group standing by the holy Triveni Sangam." },
  { id: 18, src: "/gallery/gallery-18.jpg", location: "Varanasi", tag: "Ganga Boat Ride", caption: "Pilgrims in life jackets during the Kashi Ganga boat ride." },
  { id: 19, src: "/gallery/gallery-19.jpg", location: "Ayodhya Dham", tag: "Tempo Traveller", caption: "A group of pilgrims in saffron stoles next to their luxury private vehicle." },
  { id: 20, src: "/gallery/gallery-20.jpg", location: "Ayodhya Dham", tag: "Ram Mandir", caption: "Pilgrims in saffron stoles standing at the temple gates." },
  { id: 21, src: "/gallery/gallery-21.jpg", location: "Ayodhya Dham", tag: "Ram Mandir Front", caption: "Devotees chanting and posing at the newly built Ram Mandir." },
  { id: 22, src: "/gallery/gallery-22.jpg", location: "Varanasi", tag: "Kashi Ghats", caption: "Large group posing at night at the Dashashwamedh Ghat gate." },
  { id: 23, src: "/gallery/gallery-23.jpg", location: "Hotel Lobby", tag: "Varanasi Yatra", caption: "Devotees holding prasadam box after Kashi Darshan." },
  { id: 24, src: "/gallery/gallery-24.jpg", location: "Varanasi", tag: "Ganga Ghats", caption: "Devotees group posing next to the holy Ganga river at Varanasi." },
  { id: 25, src: "/gallery/gallery-25.jpg", location: "Varanasi Airport", tag: "Arrival", caption: "Family standing together at Lal Bahadur Shastri Airport, Babatpur." },
  { id: 26, src: "/gallery/gallery-26.jpg", location: "Ayodhya Dham", tag: "Temple Entrance", caption: "A family group posing in front of the main temple entrance gate." },
  { id: 27, src: "/gallery/gallery-27.jpg", location: "Triveni Sangam", tag: "Prayagraj", caption: "Family group standing next to the holy Ganga river at Sangam." },
  { id: 28, src: "/gallery/gallery-28.jpg", location: "Varanasi", tag: "Ganga Boat Ride", caption: "Devotees sitting inside a boat on the Ganga river." },
  { id: 29, src: "/gallery/gallery-29.jpg", location: "Ayodhya Dham", tag: "Luxury Tempo", caption: "Pilgrims wearing saffron stoles posing with the luxury tour coach." },
];

export default function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((activePhotoIndex + 1) % galleryItems.length);
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((activePhotoIndex - 1 + galleryItems.length) % galleryItems.length);
      } else if (e.key === "Escape") {
        setActivePhotoIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  const visibleItems = expanded ? galleryItems : galleryItems.slice(0, 8);
  const activeItem = activePhotoIndex !== null ? galleryItems[activePhotoIndex] : null;

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background aesthetics */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(255,140,0,0.02) 0%, transparent 60%), radial-gradient(circle at 20% 20%, rgba(212,175,55,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="ornament-line max-w-[200px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Yatra Memories
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            Our Happy <span className="text-gradient-gold">Devotee Groups</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real, unedited photos of families, senior citizens, and pilgrim groups completing their sacred journeys to Ayodhya, Kashi, and Prayagraj with us.
          </p>
        </div>

        {/* Masonry-style/Premium Responsive Grid */}
        <motion.div 
          layout="position"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActivePhotoIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 aspect-[4/3] flex items-center justify-center"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Glassmorphism details footer */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-center gap-2 mb-1">
                    <span className="bg-saffron-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-gold-300 text-[10px] font-medium uppercase tracking-wider">
                      📍 {item.location}
                    </span>
                  </div>
                  <p className="text-white/90 text-xs line-clamp-1 italic">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                </div>

                {/* Subtle camera icon on hover for desktop */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ImageIcon size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 bg-divine-dark text-white hover:bg-saffron-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {expanded ? "Show Less Memories" : `View All Yatra Memories (${galleryItems.length - 8}+)`}
          </button>
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
                  {activePhotoIndex + 1} / {galleryItems.length}
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
                onClick={() => setActivePhotoIndex((activePhotoIndex - 1 + galleryItems.length) % galleryItems.length)}
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
                onClick={() => setActivePhotoIndex((activePhotoIndex + 1) % galleryItems.length)}
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
