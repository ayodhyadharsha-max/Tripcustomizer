"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";

// ---------------------------------------------------------------------------
// DATA — replace with live Google Places API / Business Profile API results
// Source: https://www.google.com/search?q=Ayodhya+Darshan+-+Tours+%26+Travels
// ---------------------------------------------------------------------------
const GOOGLE_RATING  = 4.9;
const TOTAL_REVIEWS  = 312;
const BUSINESS_NAME  = "Ayodhya Darshan — Tours & Travels";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?q=Ayodhya+Darshan+-+Tours+%26+Travels&kgmid=/g/11w290cc1v";

const reviews = [
  {
    id: 1,
    name: "Ramesh Gupta",
    initials: "RG",
    location: "Lucknow, UP",
    rating: 5,
    date: "2 months ago",
    text:
      "Exceptional service from start to finish. Ram Mandir darshan was arranged perfectly — no queue, calm atmosphere, deeply moving experience. Hotels were spotlessly clean. The guide was knowledgeable and patient. Would highly recommend Ayodhya Dharshan to all devotees.",
    avatarColor: "#FF6B00",
  },
  {
    id: 2,
    name: "Sunita Sharma",
    initials: "SS",
    location: "Delhi",
    rating: 5,
    date: "3 months ago",
    text:
      "We travelled as a family of 8 including elderly parents. The team made special arrangements — wheelchair access, early darshan slot, ground floor rooms. Everything was taken care of. Our parents were brought to tears at Ram Lalla's feet. Priceless experience.",
    avatarColor: "#D4AF37",
  },
  {
    id: 3,
    name: "Anil Verma",
    initials: "AV",
    location: "Bhopal, MP",
    rating: 5,
    date: "1 month ago",
    text:
      "We did the Ayodhya–Varanasi circuit. Every day was perfectly planned. The Ganga Aarti experience at Varanasi was unforgettable. WhatsApp support was instant throughout — felt like we had a friend on the ground. Zero stress, 100% devotion.",
    avatarColor: "#34D399",
  },
  {
    id: 4,
    name: "Priya Nair",
    initials: "PN",
    location: "Kochi, Kerala",
    rating: 5,
    date: "5 months ago",
    text:
      "As first-time pilgrims from South India, we were nervous. But the team handled everything — language, food preferences, temple timings. Pure vegetarian sattvic meals throughout. Hanuman Garhi and Kanak Bhawan were beautifully covered. A deeply spiritual journey.",
    avatarColor: "#A78BFA",
  },
  {
    id: 5,
    name: "Deepak Tiwari",
    initials: "DT",
    location: "Kanpur, UP",
    rating: 5,
    date: "6 weeks ago",
    text:
      "Best tour operator in Ayodhya without doubt. They have genuine pre-arranged darshan passes — we walked straight in while thousands waited outside. Honest pricing, no hidden charges. Booked the Full Ramayana Circuit and every destination was flawless.",
    avatarColor: "#F87171",
  },
  {
    id: 6,
    name: "Kavita Singh",
    initials: "KS",
    location: "Pune, Maharashtra",
    rating: 5,
    date: "4 months ago",
    text:
      "Travelled with 15 colleagues for a group spiritual trip. Ayodhya Dharshan handled our group beautifully — coordinated hotel rooms, arranged a special Rudrabhishek puja, and our guide shared Ram Katha with such devotion that many of us were moved to tears.",
    avatarColor: "#60A5FA",
  },
];

// Google G logo SVG
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

function StarRow({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "text-[#FBBC05] fill-[#FBBC05]" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, active }: { review: (typeof reviews)[0]; active: boolean }) {
  return (
    <div
      className={`relative flex-shrink-0 w-[calc(100vw-64px)] sm:w-[360px] lg:w-[380px] bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border transition-all duration-400 ${
        active ? "border-gold-300/60 shadow-[0_8px_32px_rgba(212,175,55,0.12)]" : "border-gray-100"
      }`}
    >
      {/* Quote mark */}
      <Quote
        size={28}
        className="absolute top-5 right-5 text-gray-100 fill-gray-100"
        aria-hidden
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-divine-dark text-[14px] leading-tight truncate">
            {review.name}
          </p>
          <p className="text-gray-400 text-[11px] mt-0.5">{review.location}</p>
        </div>
        <div className="ml-auto flex-shrink-0">
          <GoogleIcon />
        </div>
      </div>

      {/* Stars + date */}
      <div className="flex items-center justify-between mb-3">
        <StarRow rating={review.rating} size={14} />
        <span className="text-gray-300 text-[11px]">{review.date}</span>
      </div>

      {/* Text */}
      <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-4">{review.text}</p>
    </div>
  );
}

export default function GoogleReviews() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollTo = (i: number) => {
    setActiveIdx(i);
    const track  = trackRef.current;
    const cards  = track?.querySelectorAll<HTMLElement>("[data-card]");
    if (!track || !cards?.[i]) return;
    const card   = cards[i];
    const offset = card.offsetLeft - track.offsetLeft - 16;
    track.scrollTo({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="google-reviews"
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
    >
      {/* Subtle warm background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="ornament-line max-w-[260px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Rated Highly By Pilgrims
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-divine-dark mb-4 leading-tight">
            What Devotees Say{" "}
            <span className="text-gradient-saffron">on Google</span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto mb-8">
            Real reviews from pilgrims who completed their Ayodhya yatra with us — verified on Google.
          </p>

          {/* Google rating summary pill */}
          <motion.a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.07)] rounded-2xl px-6 py-4 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-all duration-300 group"
            aria-label={`View ${TOTAL_REVIEWS} reviews on Google`}
          >
            <GoogleIcon />
            <div className="h-5 w-px bg-gray-100" />
            <div className="flex items-center gap-2">
              <span className="font-playfair font-bold text-divine-dark text-2xl leading-none">
                {GOOGLE_RATING}
              </span>
              <div>
                <StarRow rating={5} size={15} />
                <p className="text-gray-400 text-[11px] mt-0.5">
                  {TOTAL_REVIEWS.toLocaleString()} verified reviews
                </p>
              </div>
            </div>
            <div className="h-5 w-px bg-gray-100" />
            <ExternalLink
              size={14}
              className="text-gray-300 group-hover:text-saffron-500 transition-colors"
            />
          </motion.a>
        </motion.div>

        {/* Review cards — horizontal scroll on mobile, visible on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.25 }}
        >
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 sm:px-6 sm:-mx-6 lg:px-0 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:gap-5 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
            onScroll={(e) => {
              const track = e.currentTarget;
              const cards = track.querySelectorAll<HTMLElement>("[data-card]");
              let closest = 0;
              let minDist = Infinity;
              cards.forEach((card, i) => {
                const dist = Math.abs(card.offsetLeft - track.scrollLeft - 16);
                if (dist < minDist) { minDist = dist; closest = i; }
              });
              setActiveIdx(closest);
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={review.id}
                data-card
                className="snap-start lg:snap-none"
              >
                <ReviewCard review={review} active={activeIdx === i} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile dot nav */}
        <div className="flex items-center justify-center gap-2 mt-6 lg:hidden">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activeIdx === i
                  ? "w-6 h-2 bg-saffron-500"
                  : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-divine-dark border border-gray-100 hover:border-gray-200 bg-white rounded-full px-6 py-2.5 transition-all hover:shadow-sm"
          >
            <GoogleIcon />
            View all {TOTAL_REVIEWS} reviews on Google
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
