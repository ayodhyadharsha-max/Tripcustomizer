"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, ShieldCheck, CalendarRange, TicketPercent } from "lucide-react";

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasClosed = sessionStorage.getItem("offer_popup_closed");
      if (!hasClosed) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("offer_popup_closed", "true");
  };

  const handleClaim = () => {
    setIsOpen(false);
    sessionStorage.setItem("offer_popup_closed", "true");
    
    // Set localStorage so it persists across reloads
    localStorage.setItem("price_lock_discount", "true");

    // Dispatch the custom event to update lead form and packages
    const event = new CustomEvent("apply-discount");
    window.dispatchEvent(event);

    // Scroll to the lead form
    const formElement = document.getElementById("get-quote");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          {/* Overlay background close click */}
          <div className="absolute inset-0 cursor-default" onClick={handleClose} />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative z-10 w-full max-w-lg overflow-hidden border border-saffron-500/20 bg-[#160800] rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
          >
            {/* Top decorative gradient line */}
            <div className="h-[4px] w-full bg-gradient-to-r from-saffron-500 via-amber-400 to-saffron-600" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Close offer"
            >
              <X size={15} />
            </button>

            {/* Glowing Accent */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-saffron-500/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px]" />

            <div className="p-6 sm:p-8 text-center relative z-10">
              {/* Badges row */}
              <div className="inline-flex items-center gap-1.5 bg-saffron-500/15 border border-saffron-500/35 rounded-full px-4 py-1.5 mb-5 text-[11px] font-bold text-saffron-400 uppercase tracking-widest">
                <Flame size={12} className="animate-pulse" />
                Limited Time Devotee Offer
              </div>

              {/* Title */}
              <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-white mb-2 leading-tight">
                🚩 Flat ₹250 Discount!
              </h2>
              <p className="text-white/70 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed mb-6">
                Avoid up to 45% seasonal hotel hikes. Lock today's lowest package rates for any future month at just ₹1,749 instead of ₹1,999!
              </p>

              {/* Ticket Graphic */}
              <div className="relative border border-white/[0.08] bg-white/[0.03] rounded-2xl p-5 mb-6 max-w-sm mx-auto overflow-hidden">
                {/* Left/Right ticket notches */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-[#160800] border-r border-white/[0.08] rounded-full" />
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-[#160800] border-l border-white/[0.08] rounded-full" />

                <div className="flex justify-between items-center px-4">
                  <div className="text-left">
                    <span className="text-white/40 text-[10px] uppercase font-bold block tracking-wider">Regular Lock Price</span>
                    <span className="text-white/30 line-through text-lg font-bold">₹1,999</span>
                  </div>
                  <div className="h-8 w-[1px] bg-white/[0.08] dashed" />
                  <div className="text-right">
                    <span className="text-emerald-400 text-[10px] uppercase font-bold block tracking-wider">Your Price Today</span>
                    <span className="text-emerald-400 text-2xl font-black block leading-none">₹1,749</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                  <TicketPercent size={12} />
                  <span>Coupon Applied: DEVOTEE250 (Flat ₹250 Off)</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleClaim}
                className="w-full bg-saffron-gradient text-white py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_25px_rgba(255,107,0,0.35)] cursor-pointer"
              >
                Claim Discount & Lock Price
              </button>

              {/* Trust Details */}
              <div className="flex items-center justify-center gap-4 mt-6 text-[10px] text-white/40">
                <span className="flex items-center gap-1">
                  <CalendarRange size={11} className="text-saffron-400/50" />
                  Flexible Dates
                </span>
                <span className="h-3 w-[1px] bg-white/10" />
                <span className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-emerald-400/50" />
                  12 Months Validity
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
