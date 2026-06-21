"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, Award, Heart } from "lucide-react";

const metrics = [
  {
    icon: Users,
    end: 50000,
    suffix: "+",
    label: "Happy Pilgrims",
    sub: "Families served since 2009",
    color: "#FF6B00",
    bg: "rgba(255,107,0,0.08)",
    border: "rgba(255,107,0,0.15)",
  },
  {
    icon: Star,
    end: 4.9,
    suffix: "★",
    label: "Google Rating",
    sub: "2,847 verified reviews",
    color: "#D4AF37",
    bg: "rgba(212,175,55,0.08)",
    border: "rgba(212,175,55,0.2)",
    isDecimal: true,
  },
  {
    icon: Award,
    end: 15,
    suffix: "+",
    label: "Years of Excellence",
    sub: "Ministry of Tourism certified",
    color: "#8B0000",
    bg: "rgba(139,0,0,0.07)",
    border: "rgba(139,0,0,0.15)",
  },
  {
    icon: Heart,
    end: 100,
    suffix: "%",
    label: "Satisfaction Rate",
    sub: "Money-back guaranteed",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.18)",
  },
];

function CountUp({ end, isDecimal, inView }: { end: number; isDecimal?: boolean; inView: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1800;
    const update = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = end * eased;
      setVal(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [inView, end, isDecimal]);

  if (isDecimal) return <>{val.toFixed(1)}</>;
  return <>{val.toLocaleString("en-IN")}</>;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function TrustMetrics() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="ornament-line max-w-[200px] mx-auto mb-4">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Trusted Across India
            </span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-divine-dark">
            Numbers That{" "}
            <span className="text-gradient-saffron">Speak for Themselves</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-2xl p-6 sm:p-8 text-center shine-effect overflow-hidden"
              style={{
                background: m.bg,
                border: `1px solid ${m.border}`,
              }}
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-4"
                style={{ background: m.bg, border: `1px solid ${m.border}` }}
              >
                <m.icon size={20} style={{ color: m.color }} />
              </div>

              {/* Number */}
              <div
                className="font-playfair font-bold text-4xl sm:text-5xl leading-none mb-1.5"
                style={{ color: m.color }}
              >
                <CountUp end={m.end} isDecimal={m.isDecimal} inView={inView} />
                <span className="text-2xl sm:text-3xl">{m.suffix}</span>
              </div>

              <div className="font-semibold text-divine-dark text-sm sm:text-[15px] mb-1">{m.label}</div>
              <div className="text-gray-400 text-[11px] sm:text-xs">{m.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {["IATA Certified", "Ministry of Tourism Approved", "UP Tourism Registered", "GST Verified"].map(cert => (
            <div key={cert} className="flex items-center gap-2 text-gray-400">
              <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xs sm:text-[13px] font-medium">{cert}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
