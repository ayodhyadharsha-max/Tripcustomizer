"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";

const WA_NUMBER   = "919235222399";
const PHONE       = "+91 9235222399";
const PHONE_TEL   = "tel:+919235222399";
const WA_MESSAGE  = encodeURIComponent(
  "Namaste 🙏 I want to plan a custom Uttar Pradesh tour. Please share details."
);

const navLinks = [
  { label: "Packages",   href: "#packages" },
  { label: "Itinerary",  href: "#itinerary" },
  { label: "Why Us",     href: "#why-us" },
  { label: "Reviews",    href: "#testimonials" },
  { label: "FAQ",        href: "#faq" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? "top-0 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-b border-gold-500/15"
            : "top-10 bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="UP Tours Customizer">
            <div className="relative flex-shrink-0 w-[44px] h-[44px] md:w-[56px] md:h-[56px]">
              <Image
                src="/logo.png"
                alt="UP Tours Customizer"
                fill
                sizes="(max-width: 768px) 44px, 56px"
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
            <div className={`transition-colors duration-300 ${scrolled || menuOpen ? "text-divine-dark" : "text-white"}`}>
              <div className="font-playfair font-bold text-[15px] leading-tight tracking-wide">
                UP Tours Customizer
              </div>
              <div className={`text-[9px] tracking-[0.24em] uppercase font-semibold ${scrolled || menuOpen ? "text-saffron-600" : "text-gold-300"}`}>
                Custom Tour Planner
              </div>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide hover:text-saffron-600 transition-colors duration-200 ${
                  scrolled ? "text-divine-dark/75" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_TEL}
              className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors ${
                scrolled ? "text-divine-dark/70 hover:text-saffron-600" : "text-white/70 hover:text-white"
              }`}
              aria-label="Call us"
              data-cta="call"
              data-source="navbar"
            >
              <Phone size={14} />
              <span className="hidden lg:inline">{PHONE}</span>
            </a>
            <a
              href="#get-quote"
              className="flex items-center justify-center bg-saffron-600 hover:bg-saffron-700 text-white px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-250 hover:shadow-saffron-glow hover:scale-[1.04] active:scale-[0.97]"
              data-cta="scroll-quote"
              data-source="navbar"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled || menuOpen ? "text-divine-dark hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed left-4 right-4 z-40 md:hidden bg-white rounded-2xl shadow-2xl border border-gold-500/15 overflow-hidden transition-all duration-300 ${
              scrolled || menuOpen ? "top-[4.5rem]" : "top-[7rem]"
            }`}
          >
            <div className="p-4 space-y-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-divine-dark font-medium rounded-xl hover:bg-saffron-50 hover:text-saffron-700 transition-colors text-[15px]"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3 pb-1 space-y-2 border-t border-gray-50 mt-2">
                <a
                  href={PHONE_TEL}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-100 text-divine-dark font-medium text-[14px] hover:bg-gray-50 transition-colors"
                  data-cta="call"
                  data-source="navbar-mobile"
                >
                  <Phone size={15} />
                  {PHONE}
                </a>
                <a
                  href="#get-quote"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-saffron-600 text-white font-semibold text-[14px] hover:bg-saffron-700 transition-colors"
                  data-cta="scroll-quote"
                  data-source="navbar-mobile"
                >
                  Book Your Tour
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
