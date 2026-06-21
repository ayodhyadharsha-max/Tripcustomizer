"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Star, Clock, Sparkles, ShieldCheck, Heart } from "lucide-react";

export default function VideoTestimonial() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section
      ref={ref}
      id="video-review"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-divine-dark to-[#160800] overflow-hidden"
    >
      {/* ── Background Aesthetics ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,107,0,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.1) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 pattern-bg opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── Text Content (Left on desktop) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/20 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-5">
                <Sparkles size={12} />
                Featured Vlogger Review
              </div>
              <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-white leading-tight">
                Watch Real Family <br />
                <span className="text-gradient-gold">Yatra Experience</span>
              </h2>
            </div>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light font-inter">
              Popular travel blogger <strong className="text-white font-medium">UnderTheSun</strong> visited Shri Ram Mandir in Ayodhya with her parents. Watch their complete, honest journey guide — demonstrating how they navigated local transport, hotel stays, and experienced hassle-free, priority temple darshan.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-inter">
              {[
                {
                  icon: Heart,
                  title: "Senior Citizen Safe",
                  desc: "Attentive pacing, wheelchair help, and priority seating.",
                },
                {
                  icon: Star,
                  title: "VIP-Style Darshan",
                  desc: "Skip long lines at Ram Mandir & Hanuman Garhi.",
                },
                {
                  icon: Clock,
                  title: "Airport/Station pickup",
                  desc: "Dedicated AC vehicle waits for you at the gate.",
                },
                {
                  icon: ShieldCheck,
                  title: "Pure Sattvic Meals",
                  desc: "Hygienic vegetarian dining included in hotel.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
                  <div className="w-8 h-8 rounded-xl bg-saffron-500/10 flex items-center justify-center text-saffron-400 flex-shrink-0">
                    <item.icon size={15} />
                  </div>
                  <div>
                    <h4 className="text-white text-[13px] font-semibold">{item.title}</h4>
                    <p className="text-white/40 text-[11px] leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 font-inter">
              <a
                href="#get-quote"
                className="wa-shimmer bg-saffron-gradient text-white px-8 py-3.5 rounded-full font-bold text-[14px] sm:text-[15px] transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] shadow-lg text-center w-full sm:w-auto"
              >
                Plan Your Family Tour
              </a>
              <a
                href="https://youtu.be/WTprQHMcQWw?si=Q_b4KZ2KskYAKfpG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/90 hover:text-white px-7 py-3.5 rounded-full font-medium text-[14px] sm:text-[15px] transition-all w-full sm:w-auto bg-white/5 hover:bg-white/10"
              >
                Watch on YouTube
              </a>
            </div>
          </motion.div>

          {/* ── YouTube Video Player Card (Right on desktop) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_24px_64px_rgba(0,0,0,0.6)] aspect-video group">
              {!playVideo ? (
                // ── Preview Thumbnail with Gold Play Button ──
                <div className="absolute inset-0 cursor-pointer overflow-hidden flex items-center justify-center">
                  {/* YouTube default high-res thumbnail */}
                  <img
                    src="https://img.youtube.com/vi/WTprQHMcQWw/maxresdefault.jpg"
                    alt="Ayodhya Ram Mandir VIP Darshan Blogger Video Review"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 brightness-90 group-hover:brightness-75"
                    loading="lazy"
                  />

                  {/* Pulsing play button overlay */}
                  <button
                    onClick={() => setPlayVideo(true)}
                    className="absolute w-20 h-20 rounded-full bg-saffron-600 hover:bg-saffron-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 z-20"
                    aria-label="Play video testimonial"
                  >
                    <Play size={26} className="fill-white translate-x-0.5" />
                  </button>

                  {/* Decorative glowing pulse */}
                  <div className="absolute w-24 h-24 rounded-full border border-saffron-500/30 animate-ping z-10 pointer-events-none" />

                  {/* Video Metadata Floating Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-2xl flex items-center justify-between gap-4 font-inter">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-saffron-100 flex items-center justify-center font-playfair font-bold text-saffron-800 text-[14px]">
                        US
                      </div>
                      <div>
                        <div className="text-white text-xs sm:text-sm font-semibold">UnderTheSun (Travel Vlogger)</div>
                        <div className="text-white/40 text-[10px] sm:text-xs">Ayodhya Ram Mandir with Parents Guide</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-gold-400 text-xs sm:text-sm font-medium">
                      <Star size={13} className="fill-gold-400" />
                      5.0 Review
                    </div>
                  </div>
                </div>
              ) : (
                // ── YouTube Embedded Iframe (Loaded only on play action) ──
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/WTprQHMcQWw?autoplay=1"
                  title="Ayodhya Ram Mandir VIP Darshan Blogger Video Review"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
