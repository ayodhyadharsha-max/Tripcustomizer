"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ramkumar Sharma",
    location: "Lucknow, Uttar Pradesh",
    initials: "RS",
    avatar: "/customer-1.jpg",
    yatraPhoto: "/customer-1.jpg",
    photoCaption: "Sharma ji's family starting their travel from Lucknow",
    rating: 5,
    package: "Ayodhya Varanasi Package",
    date: "March 2025",
    highlight: "VIP darshan in 18 minutes — others waited 6 hours",
    review:
      "Jai Shri Ram! This was the most spiritually fulfilling experience of our life. The darshan arrangement was flawless — we stood before Ram Lalla in under 20 minutes while others waited for hours. The guide was deeply knowledgeable. My entire family wept with joy. We are booking again this year.",
  },
  {
    name: "Sunita Devi",
    location: "New Delhi",
    initials: "SD",
    avatar: "/customer-2.jpg",
    yatraPhoto: "/customer-2.jpg",
    photoCaption: "Sunita Devi & group enjoying pure sattvic meals at the hotel",
    rating: 5,
    package: "Full Ramayana Circuit",
    date: "January 2025",
    highlight: "The private Saryu aarti arrangement left us speechless",
    review:
      "From the moment we landed in Ayodhya, every moment was perfectly orchestrated. Our guide Ramesh ji brought every temple story to life. The hotel was pristine, the food was pure sattvic. The private Saryu aarti they arranged for us on the last evening — I will carry that memory for a lifetime.",
  },
  {
    name: "Anil Gupta",
    location: "Mumbai, Maharashtra",
    initials: "AG",
    avatar: "/customer-3.jpg",
    yatraPhoto: "/customer-3.jpg",
    photoCaption: "Gupta family's group of 12 arriving at Ayodhya Dham Railway Station",
    rating: 5,
    package: "Ayodhya Varanasi Package",
    date: "February 2025",
    highlight: "12 people, last-minute booking — flawless execution",
    review:
      "We booked for a family group of 12 with just 4 days notice. Divine Ayodhya Tours delivered absolutely everything they promised. Professional coordination, zero chaos, perfect timing. The hotel was far better than expected. Not a single hidden charge. Every rupee was worth it.",
  },
  {
    name: "Priya & Rajesh Malhotra",
    location: "Chandigarh, Punjab",
    initials: "PM",
    avatar: "/customer-4.jpg",
    yatraPhoto: "/customer-4.jpg",
    photoCaption: "Malhotra family during their morning Ganga Snan & Aarti",
    rating: 5,
    package: "Ayodhya Darshan Package",
    date: "April 2025",
    highlight: "Exceptional care for our 70-year-old parents — truly moved",
    review:
      "We booked for our elderly parents (both 70+). The team's thoughtfulness was extraordinary — wheelchair assistance at every temple, slower pacing, early morning darshan when crowds were thin, special dietary food. Our parents called it the greatest gift of their lives.",
  },
  {
    name: "Dr. Vikram Tiwari",
    location: "Bhopal, Madhya Pradesh",
    initials: "VT",
    avatar: "/customer-5.jpg",
    yatraPhoto: "/customer-5.jpg",
    photoCaption: "Dr. Tiwari's family at the Shri Ram Mandir entrance gate",
    rating: 5,
    package: "Ayodhya Prayagraj Varanasi Package",
    date: "May 2025",
    highlight: "The Akhand Puja arrangement was completely divine",
    review:
      "As someone who has visited Kashi and Haridwar many times on my own, I was sceptical about a tour operator. But Divine Ayodhya Tours exceeded every expectation. The three-city itinerary was perfectly paced. The Akhand Puja arrangement at Ram Mandir was one of the most profound spiritual experiences of my life.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < n ? "text-gold-500 fill-gold-500" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [current, setCurrent] = useState(0);
  const [auto,    setAuto]    = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, [auto]);

  const go = (dir: number) => {
    setAuto(false);
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle warm radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 60%, rgba(255,140,0,0.04) 0%, transparent 55%), radial-gradient(ellipse at 85% 40%, rgba(212,175,55,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="ornament-line max-w-[200px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Real Stories · Real Pilgrims
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            What Devotees Say{" "}
            <span className="text-gradient-gold">About Us</span>
          </h2>

          {/* Google badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-3 bg-white border border-gray-100 shadow-sm rounded-2xl px-5 py-3"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-hidden>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-divine-dark text-[17px] leading-none">4.9</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
              </div>
              <div className="text-gray-400 text-[11px] mt-0.5">2,847 Google Reviews</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main carousel card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="relative bg-divine-dark rounded-3xl overflow-hidden">
            {/* Decorative gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.08) 0%, transparent 60%)",
              }}
            />
            {/* Large faint quote mark */}
            <div
              className="absolute top-6 right-8 font-playfair text-gold-500/[0.07] text-[200px] leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              "
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left Side: Testimonial Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Highlight quote */}
                      <p className="font-playfair text-gold-400 text-xl sm:text-2xl lg:text-3xl italic mb-6 leading-snug max-w-3xl">
                        &ldquo;{active.highlight}&rdquo;
                      </p>

                      {/* Full review */}
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
                        {active.review}
                      </p>
                    </div>

                    {/* Reviewer row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-4">
                        {active.avatar ? (
                          <img
                            src={active.avatar}
                            alt={active.name}
                            className="w-12 h-12 rounded-full object-cover border border-gold-400/50 flex-shrink-0"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-saffron-700 flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                            {active.initials}
                          </div>
                        )}
                        <div>
                          <div className="text-white font-semibold text-[15px]">{active.name}</div>
                          <div className="text-white/50 text-sm">{active.location}</div>
                          <Stars n={active.rating} />
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-gold-400/60 text-[10px] font-semibold uppercase tracking-widest mb-1">
                          Package
                        </div>
                        <div className="text-white/75 text-sm font-medium">{active.package}</div>
                        <div className="text-white/40 text-xs mt-0.5">{active.date}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Yatra Group Photo */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20 group">
                      <img
                        src={active.yatraPhoto}
                        alt={active.name + "'s Yatra"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Gold gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-divine-dark/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                    {active.photoCaption && (
                      <p className="text-[12px] text-gold-400/70 italic mt-3 text-center leading-relaxed">
                        📸 {active.photoCaption}
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.08]">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setAuto(false); setCurrent(i); }}
                      className={`rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-7 h-2.5 bg-gold-500"
                          : "w-2.5 h-2.5 bg-white/18 hover:bg-white/35"
                      }`}
                      aria-label={`Review ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2.5">
                  <button
                    onClick={() => go(-1)}
                    className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/35 transition-all duration-200 hover:bg-white/5"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={17} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/35 transition-all duration-200 hover:bg-white/5"
                    aria-label="Next"
                  >
                    <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              onClick={() => { setAuto(false); setCurrent(i); }}
              className={`bg-white border rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                current === i ? "border-gold-300 shadow-[0_0_0_1px_rgba(212,175,55,0.3)]" : "border-gray-100"
              }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={11} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-gray-600 text-[13px] leading-relaxed line-clamp-3 mb-4">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-8 h-8 rounded-full object-cover border border-saffron-200 flex-shrink-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-700 text-[11px] font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                )}
                <div>
                  <div className="text-divine-dark text-xs font-semibold leading-tight">{t.name}</div>
                  <div className="text-gray-400 text-[10px]">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
