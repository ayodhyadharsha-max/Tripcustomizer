"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone, FileText } from "lucide-react";

const WA_NUMBER = "919235222399";
const WA_MESSAGE = encodeURIComponent(
  "Jai Shri Ram 🙏 I want to book an Ayodhya tour package. Please share full details."
);
const WA_ITINERARY = encodeURIComponent(
  "Jai Shri Ram 🙏 Please share the full itinerary and pricing for your Ayodhya tour packages."
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 3000);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltip);
    };
  }, []);

  return (
    <>
      {/* ── Desktop floating button ── */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 right-6 z-50 hidden sm:flex flex-col items-end gap-3"
          >
            {/* Chat bubble tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-[230px]"
                >
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600"
                    aria-label="Dismiss"
                  >
                    <X size={10} />
                  </button>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-700 font-bold text-xs">
                      RA
                    </div>
                    <div>
                      <div className="text-divine-dark text-xs font-semibold">Rahul (Travel Expert)</div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                        <span className="text-green-600 text-[10px]">Online now</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Jai Shri Ram! 🙏 Planning an Ayodhya yatra? Get a free custom tour quote within your budget. Enquire now!
                  </p>
                  <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main WhatsApp button with pulse rings */}
            <div className="relative">
              <span className="wa-pulse-ring absolute inset-0 rounded-full" />
              <span
                className="wa-pulse-ring absolute inset-0 rounded-full"
                style={{ animationDelay: "0.75s" }}
              />
              <a
                href="#get-quote"
                onMouseEnter={() => setShowTooltip(true)}
                aria-label="Book Your Tour"
                className="relative flex items-center gap-3 bg-saffron-600 hover:bg-saffron-700 text-white rounded-full shadow-[0_8px_30px_rgba(255,107,0,0.4)] hover:shadow-[0_8px_40px_rgba(255,107,0,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
                data-cta="scroll-quote"
                data-source="sticky-desktop"
              >
                <div className="w-14 h-14 flex items-center justify-center">
                  <FileText size={22} />
                </div>
                <span className="pr-5 font-bold text-sm whitespace-nowrap">
                  Book Your Tour
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile sticky bottom bar — 3 buttons ── */}
      <AnimatePresence>
        {visible && !dismissed && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
          >
            {/* Top mini info bar */}
            <div className="bg-divine-dark flex items-center justify-between px-4 py-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                <p className="text-white text-xs font-medium">
                  🙏 Ayodhya Packages from <span className="text-saffron-400 font-bold">₹22,000 for Couple</span>
                </p>
              </div>
              <button
                onClick={() => setDismissed(true)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60"
                aria-label="Dismiss"
              >
                <X size={13} />
              </button>
            </div>

            {/* 2-Button row */}
            <div className="bg-white border-t border-gray-100 shadow-2xl px-4 py-3 grid grid-cols-2 gap-3 safe-bottom">
              {/* Call */}
              <a
                href="tel:+919235222399"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-divine-dark text-divine-dark font-bold text-sm active:scale-95 transition-transform"
                aria-label="Call now"
                data-cta="call"
                data-source="sticky-mobile"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>

              {/* Get Quote */}
              <a
                href="#get-quote"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-saffron-600 text-white font-bold text-sm active:scale-95 transition-transform shadow-md"
                aria-label="Get Free Quote"
                data-cta="scroll-quote"
                data-source="sticky-mobile"
              >
                <FileText size={16} />
                <span>Enquire Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
