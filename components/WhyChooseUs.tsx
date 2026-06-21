"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Star,
  BookOpen,
  HeadphonesIcon,
  Banknote,
  MapPin,
  Utensils,
  Users,
} from "lucide-react";

const usps = [
  {
    icon: Star,
    title: "100% Customized Trips",
    description:
      "No fixed templates. You select the cities, hotel classes, vehicle types, and number of days. We build the exact yatra you want.",
    iconColor: "#D4AF37",
    iconBg: "rgba(212,175,55,0.12)",
  },
  {
    icon: BookOpen,
    title: "Optimized Driving Routes",
    description:
      "Our planners sort your selected cities into a logical geographical order to minimize travel time and highway fatigue.",
    iconColor: "#FF8C00",
    iconBg: "rgba(255,140,0,0.12)",
  },
  {
    icon: ShieldCheck,
    title: "Vetted Clean Hotels",
    description:
      "Every hotel in Mathura, Varanasi, Ayodhya, or Lucknow is personally inspected for safety, cleanliness, and devotee-friendly staff.",
    iconColor: "#34D399",
    iconBg: "rgba(52,211,153,0.12)",
  },
  {
    icon: Banknote,
    title: "Transparent Custom Pricing",
    description:
      "Get clear, itemized quotes. No hidden driver allowances, parking fees, toll taxes, or entry charges. Period.",
    iconColor: "#60A5FA",
    iconBg: "rgba(96,165,250,0.12)",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Dedicated Support",
    description:
      "Local support in every city you visit. From hotel check-ins to local guide coordination, we handle it all.",
    iconColor: "#A78BFA",
    iconBg: "rgba(167,139,250,0.12)",
  },
  {
    icon: MapPin,
    title: "Local Temple Guides",
    description:
      "Vedic-trained local guides in Vrindavan, Ayodhya, and Varanasi who explain heritage stories with devotion.",
    iconColor: "#F87171",
    iconBg: "rgba(248,113,113,0.12)",
  },
  {
    icon: Utensils,
    title: "Pure Vegetarian Meals",
    description:
      "100% pure veg sattvic meals (no onion/garlic on request) served at clean, certified partner dining halls.",
    iconColor: "#FB923C",
    iconBg: "rgba(251,146,60,0.12)",
  },
  {
    icon: Users,
    title: "Senior Citizen Support",
    description:
      "Priority entries, wheelchair setups, slower travel paces, and ground-floor rooms arranged with special care.",
    iconColor: "#2DD4BF",
    iconBg: "rgba(45,212,180,0.12)",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="why-us"
      className="py-24 sm:py-32 bg-divine-dark relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Saffron glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(255,140,0,0.1) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="ornament-line max-w-[220px] mx-auto mb-5">
            <span className="text-gold-400 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Why 50,000+ Families Choose Us
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-white mb-5 leading-tight">
            The Difference You{" "}
            <span className="text-gradient-gold">Feel on Day One</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            We don&apos;t sell tours. We craft stress-free pilgrimages that let you focus entirely on your devotion.
          </p>
        </motion.div>

        {/* USP Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative group rounded-2xl p-6 border border-white/[0.07] hover:border-white/[0.15] transition-all duration-350 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${usp.iconBg} 0%, transparent 70%)`,
                }}
              />

              {/* Number */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: usp.iconBg }}
                >
                  <usp.icon size={20} style={{ color: usp.iconColor }} />
                </div>
                <span
                  className="card-number text-[11px] font-bold tabular-nums"
                  style={{ color: `${usp.iconColor}40` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-playfair font-semibold text-white text-[17px] mb-2 leading-snug group-hover:text-white transition-colors">
                {usp.title}
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed group-hover:text-white/90 transition-colors">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="mt-10 rounded-2xl border border-emerald-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
          style={{ background: "rgba(52,211,153,0.05)" }}
        >
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
            <ShieldCheck size={28} className="text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-playfair font-bold text-white text-xl mb-1.5">
              100% Satisfaction &amp; Custom Route Guarantee
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Planning your custom yatra? We optimize every detail of your route for comfort and efficiency. Lock in your custom pricing today by booking in advance. If you need to make changes to your route sequence later, our support team will update it for you at zero extra planning fee!
            </p>
          </div>
          <div className="flex-shrink-0 text-emerald-400 font-playfair font-bold text-2xl sm:text-3xl whitespace-nowrap">
            Route Guarantee
          </div>
        </motion.div>
      </div>
    </section>
  );
}
