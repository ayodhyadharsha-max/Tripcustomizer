"use client";

import { motion } from "framer-motion";
import { Building2, Car, BookOpen, HeadphonesIcon, BadgeCheck } from "lucide-react";

const items = [
  { icon: Building2,      label: "Verified Hotel Stays",    sub: "Pre-inspected properties" },
  { icon: Car,            label: "Comfortable Transport",    sub: "AC vehicle throughout" },
  { icon: BookOpen,       label: "Pilgrimage Experts",       sub: "15+ years experience" },
  { icon: HeadphonesIcon, label: "24/7 Local Support",       sub: "Reply in 2 minutes" },
  { icon: BadgeCheck,     label: "Transparent Pricing",      sub: "Zero hidden charges" },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-saffron-600 py-4 sm:py-5 overflow-hidden">
      {/* subtle inner top shadow */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/15" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              {/* Item */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex items-center gap-2.5 px-5 sm:px-7 lg:px-10"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-[13px] leading-tight">{item.label}</div>
                  <div className="text-white/65 text-[11px] leading-tight">{item.sub}</div>
                </div>
              </motion.div>

              {/* Separator between items (not after last) */}
              {i < items.length - 1 && (
                <div className="hidden sm:block w-px h-7 bg-white/20 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
