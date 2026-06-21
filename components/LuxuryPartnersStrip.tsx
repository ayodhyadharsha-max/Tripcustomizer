"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LuxuryPartnersStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      ref={ref} 
      className="py-12 border-b border-gray-100"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFFAF5 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-xs tracking-[0.2em] uppercase font-bold text-center mb-7">
            Our 5-Star Luxury Hotel Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50 hover:opacity-80 transition-opacity duration-300">
            <span className="font-playfair font-black text-xl md:text-2xl text-divine-dark tracking-wider">TAJ HOTELS</span>
            <span className="font-sans font-bold text-lg md:text-xl text-divine-dark tracking-[0.3em]">RAMADA</span>
            <span className="font-playfair italic font-extrabold text-xl md:text-2xl text-divine-dark tracking-wide">The Oberoi</span>
            <span className="font-sans font-medium text-lg md:text-xl text-divine-dark tracking-[0.2em]">HYATT</span>
            <span className="font-sans font-black text-lg md:text-xl text-divine-dark tracking-[0.1em]">Radisson</span>
          </div>
          <p className="text-center text-[11px] text-gray-400 mt-5 leading-relaxed max-w-md mx-auto">
            Custom luxury 5-star packages featuring premium accommodation upgrades are fully available on request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
