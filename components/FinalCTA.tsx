"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Users, Clock } from "lucide-react";

const WA_NUMBER = "919235222399";
const WA_MESSAGE = encodeURIComponent(
  "Jai Shri Ram! 🙏 I'm ready to plan my Ayodhya yatra. Please guide me to the best package."
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

function Countdown() {
  const endOfDay = () => {
    const d = new Date();
    d.setHours(23, 59, 59, 999);
    return d;
  };

  const [t, setT] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, endOfDay().getTime() - Date.now());
      setT({
        h: Math.floor(diff / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1_000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {[
        { val: pad(t.h), lbl: "HRS" },
        { val: pad(t.m), lbl: "MIN" },
        { val: pad(t.s), lbl: "SEC" },
      ].map(({ val, lbl }, i) => (
        <div key={lbl} className="flex items-center gap-2 sm:gap-3">
          {i > 0 && <span className="text-saffron-400/70 font-bold text-xl">:</span>}
          <div className="text-center">
            <div className="bg-white/[0.08] border border-white/[0.14] rounded-xl px-3.5 py-2.5 sm:px-5 sm:py-3 min-w-[56px] sm:min-w-[68px] backdrop-blur-sm">
              <span className="font-playfair font-bold text-2xl sm:text-3xl text-white tabular-nums">
                {val}
              </span>
            </div>
            <div className="text-white/50 text-[9px] tracking-[0.2em] mt-1.5 font-medium">{lbl}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FinalCTA() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-divine-dark relative overflow-hidden" data-section="final-cta">
      {/* Layered background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(255,107,0,0.22) 0%, rgba(255,140,0,0.08) 35%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[3px]"
        style={{
          background: "linear-gradient(90deg, transparent 5%, rgba(212,175,55,0.5) 30%, rgba(255,107,0,0.4) 50%, rgba(212,175,55,0.5) 70%, transparent 95%)",
        }}
      />
      <div className="absolute inset-0 pattern-bg opacity-60" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">

        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-saffron-500/15 border border-saffron-400/25 text-saffron-300 rounded-full px-5 py-2 text-[13px] font-medium mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse inline-block" />
          Limited seats available — book before prices change
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair font-bold text-[clamp(2rem,6vw,3.4rem)] text-white mb-5 leading-[1.1] text-balance"
        >
          Your Ayodhya Yatra Is{" "}
          <span className="text-gradient-gold">One Message Away</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-white/50 text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Join 50,000+ devotees who have experienced the divine grace of Ram Lalla with us. Book in under 15 minutes on WhatsApp.
        </motion.p>

        {/* Urgency signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 mb-10"
        >
          <div className="flex items-center gap-2 text-white/60">
            <Users size={14} className="text-saffron-400" />
            <span className="text-sm">
              <span className="text-white font-semibold">8 seats</span> remaining this month
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Clock size={14} className="text-gold-400" />
            <span className="text-sm">
              Current pricing valid <span className="text-white font-semibold">today only</span>
            </span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="flex flex-col items-center mb-12"
        >
          <p className="text-white/30 text-[10px] tracking-[0.22em] uppercase font-medium mb-4">
            Today&apos;s offer expires in
          </p>
          <Countdown />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.44 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          <a
            href="#get-quote"
            className="wa-shimmer flex items-center justify-center gap-3 bg-saffron-gradient hover:brightness-105 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] w-full sm:w-auto justify-center shadow-[0_4px_24px_rgba(255,107,0,0.35)]"
            data-cta="scroll-quote"
            data-source="final-cta"
          >
            Plan My Ayodhya Yatra
          </a>
          <a
            href="tel:+919235222399"
            className="flex items-center gap-3 border-2 border-white/22 hover:border-white/50 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-white/[0.07] transition-all duration-300 w-full sm:w-auto justify-center"
            data-cta="call"
            data-source="final-cta"
          >
            <Phone size={19} />
            Call Us Free
          </a>
        </motion.div>

        {/* Micro trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.58 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-7 text-white/40 text-[12px]"
        >
          {[
            "✓ No advance payment",
            "✓ Free cancellation 48 h",
            "✓ Response in 2 minutes",
            "✓ 15 years of trust",
          ].map(item => (
            <span key={item} className="whitespace-nowrap">{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
