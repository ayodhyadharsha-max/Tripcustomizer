"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Star, ShieldCheck, Users, ChevronDown, CheckCircle2 } from "lucide-react";

const WA_NUMBER = "919235222399";
const WA_MESSAGE = encodeURIComponent(
  "Jai Shri Ram 🙏 I want to book an Ayodhya tour package. Please share full details."
);

const particles = [
  { size: 3, top: "12%", left: "7%",  delay: 0,   dur: 7 },
  { size: 5, top: "22%", left: "18%", delay: 1.5, dur: 9 },
  { size: 2, top: "38%", left: "4%",  delay: 0.8, dur: 6 },
  { size: 4, top: "58%", left: "13%", delay: 2,   dur: 8 },
  { size: 3, top: "74%", left: "23%", delay: 0.3, dur: 7.5 },
  { size: 6, top: "9%",  left: "78%", delay: 1,   dur: 8 },
  { size: 2, top: "28%", left: "87%", delay: 2.5, dur: 6.5 },
  { size: 4, top: "48%", left: "91%", delay: 0.5, dur: 9 },
  { size: 3, top: "68%", left: "83%", delay: 1.8, dur: 7 },
  { size: 5, top: "83%", left: "73%", delay: 0.7, dur: 8.5 },
  { size: 2, top: "18%", left: "48%", delay: 1.2, dur: 6 },
  { size: 4, top: "43%", left: "43%", delay: 3,   dur: 10 },
  { size: 3, top: "55%", left: "60%", delay: 1.6, dur: 7.2 },
  { size: 5, top: "30%", left: "33%", delay: 2.2, dur: 8.8 },
];

const inclusions = [
  { label: "100% Customizable" },
  { label: "Your Choice of Hotels" },
  { label: "Private AC Vehicle" },
  { label: "Dedicated Local Guides" },
  { label: "Elderly & Family Friendly" },
];

const trustBadges = [
  { icon: Star,         label: "4.9★  Google Rated",  sub: "4,812 verified reviews" },
  { icon: Users,        label: "50,000+ Travellers",   sub: "Trusted since 2009" },
  { icon: ShieldCheck,  label: "Flexible Routing",     sub: "Change plans anytime" },
  { icon: CheckCircle2, label: "Flexi-Booking Options",  sub: "20% advance confirm · Easy booking" },
];

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY   = useTransform(scrollYProgress, [0, 1], ["0%",   "40%"]);
  const fade  = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const templeOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      id="home"
      data-section="hero"
    >
      {/* ── Background Gradient ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #080200 0%, #140600 15%, #240e00 30%, #3d1800 50%, #6b2400 72%, #a03a00 90%, #d45000 110%)",
          }}
        />
        {/* Breathing radial glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[65vh] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center bottom, rgba(255,107,0,0.45) 0%, rgba(255,140,0,0.2) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Subtle top-left cool glow */}
        <div
          className="absolute top-0 left-0 w-[50vw] h-[50vh] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top left, rgba(212,175,55,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 pattern-bg" />
      </motion.div>

      {/* ── Background OM symbol (very faint) ── */}
      <div
        className="om-breathe absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-playfair text-white select-none"
          style={{ fontSize: "clamp(280px, 50vw, 640px)", lineHeight: 1, opacity: 0.042 }}
        >
          ॐ
        </span>
      </div>

      {/* ── Floating Particles ── */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle-animate absolute rounded-full pointer-events-none z-10"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            backgroundColor: "#FFD700",
            opacity: 0.55,
            boxShadow: `0 0 ${p.size * 4}px ${p.size * 1.5}px rgba(255,215,0,0.35)`,
            "--duration": `${p.dur}s`,
            "--delay": `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* ── Temple Silhouette ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 flex justify-center"
        style={{ opacity: templeOpacity }}
      >
        <svg
          viewBox="0 0 1400 480"
          className="w-full max-w-6xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Main shikhar */}
          <polygon points="700,16 768,195 632,195" fill="#D4AF37" opacity="0.55" />
          <polygon points="700,16 790,215 610,215" fill="#D4AF37" opacity="0.38" />
          {/* Platforms */}
          <rect x="575" y="215" width="250" height="28" rx="3" fill="#D4AF37" opacity="0.45" />
          <rect x="545" y="241" width="310" height="28" rx="3" fill="#D4AF37" opacity="0.35" />
          <rect x="495" y="267" width="410" height="38" rx="3" fill="#D4AF37" opacity="0.28" />
          <rect x="440" y="303" width="520" height="177" rx="4" fill="#D4AF37" opacity="0.18" />
          {/* Side towers */}
          <polygon points="558,116 590,234 526,234" fill="#D4AF37" opacity="0.32" />
          <polygon points="842,116 874,234 810,234" fill="#D4AF37" opacity="0.32" />
          {/* Pillars */}
          {[482, 534, 586, 638, 690, 742, 794, 846, 898].map((x, idx) => (
            <rect key={idx} x={x} y="303" width="13" height="177" fill="#D4AF37" opacity="0.13" />
          ))}
          {/* Finial */}
          <circle cx="700" cy="16" r="9" fill="#FFD700" opacity="0.75" />
          <circle cx="700" cy="16" r="4" fill="#fff"   opacity="0.9" />
          {/* Wings */}
          <rect x="190" y="370" width="250" height="110" rx="4" fill="#D4AF37" opacity="0.08" />
          <rect x="960" y="370" width="250" height="110" rx="4" fill="#D4AF37" opacity="0.08" />
        </svg>
      </motion.div>

      {/* ── Main Content ── */}
      <motion.div
        className="relative z-20 text-center px-5 sm:px-8 max-w-5xl mx-auto pt-32 pb-24"
        style={{ opacity: fade }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/50" />
          <span className="text-gold-400 text-[11px] font-semibold tracking-[0.4em] uppercase">
            ॐ &nbsp; Divine &amp; Heritage UP Tours &nbsp; ॐ
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/50" />
        </motion.div>

        {/* Headline */}
        <h1 className="font-playfair font-bold leading-[1.08] tracking-tight mb-0 text-balance">
          {/* Line 1 */}
          <motion.span
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block text-white text-[clamp(2.4rem,7vw,5.5rem)]"
          >
            Design Your Custom
          </motion.span>
          {/* Line 2 — gradient */}
          <motion.span
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gradient-gold text-[clamp(2.4rem,7vw,5.5rem)]"
          >
            Uttar Pradesh Tour
          </motion.span>
        </h1>

        {/* Emotional subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/70 text-base sm:text-lg lg:text-xl font-inter font-light mt-6 mb-2 max-w-3xl mx-auto leading-relaxed"
        >
          Varanasi · Ayodhya · Prayagraj · Mathura · Vrindavan · Agra · Lucknow · Chitrakoot &amp; more
          <br className="hidden sm:block" />
          <span className="text-white/80 font-normal sm:mt-1 inline-block">
            Select your cities, choose your stays &amp; vehicles. We build the perfect route.
          </span>
        </motion.p>

        {/* Price anchor badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 1.0 }}
          className="inline-flex items-center gap-2 mt-5 mb-8 bg-white/8 border border-white/18 backdrop-blur-md rounded-full px-5 py-2.5"
        >
          <span className="text-white/80 text-sm font-semibold">100% Customized Tour Packages</span>
          <span className="text-white/25 text-sm">·</span>
          <span className="text-gold-300 text-sm font-medium">Best Price &amp; Route Guaranteed</span>
        </motion.div>

        {/* Inclusions row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.12 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
        >
          {inclusions.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-white/[0.07] border border-white/[0.13] backdrop-blur-sm rounded-full px-3.5 py-1.5"
            >
              <span className="text-gold-400 text-[10px] leading-none">✦</span>
              <span className="text-white/80 text-xs sm:text-[13px] font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.28, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          {/* Primary — Scroll to Form */}
          <a
            href="#get-quote"
            className="wa-shimmer bg-saffron-gradient hover:brightness-105 text-white px-8 py-4 rounded-full font-bold text-[15px] sm:text-base transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] w-full sm:w-auto justify-center text-center shadow-[0_4px_24px_rgba(255,107,0,0.3)]"
            aria-label="Start Customizing"
            data-cta="scroll-quote"
            data-source="hero"
          >
            <span>Start Customizing Your Trip</span>
          </a>

          {/* Secondary — Call */}
          <a
            href="tel:+919235222399"
            className="flex items-center gap-2.5 border border-white/28 hover:border-white/55 text-white px-7 py-4 rounded-full font-medium text-[15px] sm:text-base backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300 w-full sm:w-auto justify-center"
            aria-label="Call now"
            data-cta="call"
            data-source="hero"
          >
            <Phone size={17} />
            Call Now — Free
          </a>
        </motion.div>

        {/* Trust Badges row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.52 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8"
        >
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70">
              <div className="w-7 h-7 rounded-full bg-white/[0.09] border border-white/[0.16] flex items-center justify-center flex-shrink-0">
                <badge.icon size={13} className="text-gold-400" />
              </div>
              <div className="text-left">
                <div className="text-white/90 text-[11px] font-semibold leading-tight">{badge.label}</div>
                <div className="text-white/40 text-[10px] leading-tight">{badge.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/40"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-medium">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
