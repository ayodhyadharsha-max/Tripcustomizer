"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, MessageCircle, Clock, MapPin, Hotel, Car, UserCheck, Ticket, Sparkles } from "lucide-react";

const WA_NUMBER = "919235222399";

const packages = [
  {
    id: "ayodhya-darshan",
    name: "Ayodhya Darshan",
    subtitle: "Ideal for a short, focused pilgrimage",
    duration: "2 Nights / 3 Days",
    cities: ["Ayodhya"],
    price: 22000,
    originalPrice: 28000,
    image: "/gallery/gallery-5.jpg",
    popular: false,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#FF6B00",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Hanuman Garhi & Kanak Bhawan",
      "Saryu River Ghat Walk",
      "24/7 WhatsApp Support",
    ],
    note: "Ideal for a short divine weekend escape",
  },
  {
    id: "ayodhya-varanasi",
    name: "Ayodhya Varanasi",
    subtitle: "Our most booked Ayodhya tour with Varanasi",
    duration: "3 Nights / 4 Days",
    cities: ["Ayodhya", "Varanasi"],
    price: 32000,
    originalPrice: 42000,
    image: "/gallery/gallery-24.jpg",
    popular: false,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#D4AF37",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Kashi Vishwanath Corridor Visit",
      "Ganga Aarti at Dashashwamedh Ghat",
      "Sarnath Excursion Included",
    ],
    note: "Perfect dual-city spiritual journey",
  },
  {
    id: "ayodhya-prayagraj-varanasi",
    name: "Ayodhya · Prayagraj · Varanasi",
    subtitle: "The complete tirthdham circuit",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi"],
    price: 40000,
    originalPrice: 52000,
    image: "/gallery/gallery-27.jpg",
    popular: false,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#7C3AED",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Triveni Sangam Prayagraj Visit",
      "Anand Bhawan & Heritage Tour",
      "Kashi Vishwanath + Ganga Aarti",
    ],
    note: "Covers three of India's holiest cities",
  },
  {
    id: "lucknow-ayodhya",
    name: "Lucknow · Ayodhya",
    subtitle: "Heritage & devotion beautifully combined",
    duration: "3 Nights / 4 Days",
    cities: ["Lucknow", "Ayodhya"],
    price: 30000,
    originalPrice: 38000,
    image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&w=600&q=80",
    popular: false,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#0891B2",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Bara Imambara & Heritage Tour",
      "Lucknow Food Walk Experience",
      "24/7 WhatsApp Support",
    ],
    note: "Nawabi culture meets Ram Bhumi devotion",
  },
  {
    id: "ayodhya-varanasi-chitrakoot",
    name: "Ayodhya · Varanasi · Chitrakoot",
    subtitle: "Tracing the sacred path of Lord Ram",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Varanasi", "Chitrakoot"],
    price: 40000,
    originalPrice: 52000,
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=600&q=80",
    popular: false,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#059669",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Kamadgiri Parikarama Chitrakoot",
      "Ramghat & Sati Anusuya Ashram",
      "Varanasi Ganga Aarti Experience",
    ],
    note: "Follow Ram's footsteps from Ayodhya to exile",
  },
  {
    id: "full-circuit",
    name: "Full Ramayana Circuit",
    subtitle: "The ultimate Ramayana pilgrimage",
    duration: "5 Nights / 6 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi", "Chitrakoot"],
    price: 50000,
    originalPrice: 65000,
    image: "/gallery/gallery-11.jpg",
    popular: false,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#8B0000",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "All 4 Sacred Destinations Covered",
      "Triveni Sangam + Kamadgiri Parikrama",
      "Ganga Aarti + Personal Puja Arranged",
    ],
    note: "Most complete Ramayana circuit — limited slots",
  },
  {
    id: "braj-taj-custom",
    name: "Braj Bhoomi & Taj Mahal",
    subtitle: "Perfect cultural loop around Mathura & Agra",
    duration: "3 Nights / 4 Days",
    cities: ["Mathura", "Vrindavan", "Agra"],
    price: 24000,
    originalPrice: 32000,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    popular: false,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#0891B2",
    features: [
      "Visit Taj Mahal & Agra Fort",
      "Krishna Janmabhoomi Darshan",
      "Banke Bihari & Prem Mandir visits",
      "Private AC Sedan/SUV transfer",
      "3-Star / 4-Star hotel stays",
      "All tolls, parking & taxes included",
      "Dedicated local guides in Vrindavan",
      "Flexible travel timeline options",
    ],
    note: "Great heritage & spiritual mix for families",
  },
  {
    id: "spiritual-triangle",
    name: "Spiritual Triangle of UP",
    subtitle: "Our most booked custom pilgrimage route",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi"],
    price: 36000,
    originalPrice: 46000,
    image: "/gallery/gallery-18.jpg",
    popular: true,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#FF6B00",
    features: [
      "Priority Ram Mandir Darshan pass",
      "Triveni Sangam boat ride in Prayagraj",
      "Kashi Vishwanath Corridor visit",
      "Subah-e-Banaras & Ganga Aarti",
      "Airport/Railway station pickup & drop",
      "Private AC SUV vehicle for travel",
      "3-Star / 4-Star hotel stays near temples",
      "Elderly assistance & wheelchair access",
    ],
    note: "Priority darshans arranged automatically",
  },
  {
    id: "purvanchal-custom",
    name: "Purvanchal Divine & Ramayana",
    subtitle: "Tracing Lord Ram's exile steps & sacred ghats",
    duration: "6 Nights / 7 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi", "Vindhyachal", "Chitrakoot"],
    price: 48000,
    originalPrice: 62000,
    image: "https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?auto=format&fit=crop&w=600&q=80",
    popular: false,
    featured: true,
    ctaText: "Customize This Circuit",
    accent: "#7C3AED",
    features: [
      "Covers 5 holy towns of Purvanchal",
      "Ram Mandir & Hanuman Garhi darshan",
      "Kamadgiri Parikrama & Ramghat walk",
      "Vindhyavasini Shaktipeeth Darshan",
      "Triveni Sangam & Kashi Vishwanath",
      "Dedicated private AC SUV transfers",
      "Premium hotel stays with breakfast",
      "Local puja arrangements on request",
    ],
    note: "Highly recommended for spiritual seekers",
  },
  {
    id: "grand-up-custom",
    name: "Grand UP Heritage & Spiritual",
    subtitle: "The ultimate exploration of Uttar Pradesh",
    duration: "9 Nights / 10 Days",
    cities: ["Mathura", "Vrindavan", "Agra", "Lucknow", "Naimisharanya", "Ayodhya", "Prayagraj", "Varanasi", "Bodhgaya"],
    price: 78000,
    originalPrice: 99000,
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=600&q=80",
    popular: false,
    featured: true,
    ctaText: "Customize This Circuit",
    accent: "#059669",
    features: [
      "Krishna Janmabhoomi & Taj Mahal",
      "Nawabi heritage & food in Lucknow",
      "VIP Ram Mandir Darshan in Ayodhya",
      "Kashi Vishwanath & Ganga Aarti",
      "Mahabodhi Temple in Bodhgaya",
      "Premium 4-Star / 5-Star accommodations",
      "Dedicated AC SUV / Tempo Traveller",
      "Licensed local guides in every city",
    ],
    note: "Covers 6 major cities with premium comfort",
  },
  {
    id: "chhapaiya-ayodhya-kashi",
    name: "Sacred Birthplace & Ayodhya-Kashi",
    subtitle: "Unique pilgrimage covering Swaminarayan Dham",
    duration: "4 Nights / 5 Days",
    cities: ["Chhapaiya", "Ayodhya", "Varanasi"],
    price: 34000,
    originalPrice: 44000,
    image: "https://images.unsplash.com/photo-1590142588602-73354f46d6a0?auto=format&fit=crop&w=600&q=80",
    popular: false,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#D4AF37",
    features: [
      "Chhapaiya Swaminarayan Birthplace temple",
      "Ram Mandir VIP Darshan in Ayodhya",
      "Kashi Vishwanath Corridor & Ganga Aarti",
      "Intercity AC Car Transfers included",
      "3 Star / 4 Star premium stays",
      "Expert local tour guides",
      "24/7 VIP helpline & support",
      "Hassle-free custom itinerary mapping",
    ],
    note: "Covers the divine birthplace of Swaminarayan Bhagwan",
  },
  {
    id: "naimisharanya-lucknow-ayodhya",
    name: "Naimisharanya Aranya & Ayodhya",
    subtitle: "Explore the ancient forest of 88,000 sages",
    duration: "4 Nights / 5 Days",
    cities: ["Naimisharanya", "Lucknow", "Ayodhya"],
    price: 35000,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    popular: false,
    featured: false,
    ctaText: "Customize This Circuit",
    accent: "#FF6B00",
    features: [
      "Chakra Tirth & Lalita Devi Darshan",
      "Ayodhya Shri Ram Mandir VIP Darshan",
      "Lucknow Bara Imambara & Nawabi Tour",
      "Private AC Sedan/SUV for transfers",
      "Premium hotel stay near holy shrines",
      "Daily Breakfast & Sattvic food guidance",
      "Local expert guide for Naimisharanya",
      "All taxes, tolls & parking covered",
    ],
    note: "Ideal for seeking high spiritual energy & deep peace",
  },
];

const coreInclusions = [
  { icon: Car,      label: "AC Transfer" },
  { icon: Hotel,    label: "3★/4★ Hotel" },
  { icon: Ticket,   label: "Darshan Pass" },
  { icon: UserCheck,label: "Expert Guide" },
];

function PackageCard({ pkg, index, tokenAmount }: { pkg: (typeof packages)[0]; index: number; tokenAmount: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(cardRef, { once: true, margin: "-60px" });

  const waMsg = encodeURIComponent(
    `Jai Shri Ram! 🙏 I'm interested in the "${pkg.name}" tour package (₹${pkg.price.toLocaleString("en-IN")} for couple). Please share availability and full itinerary.`
  );

  const isPopular = pkg.popular;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 ${
        isPopular
          ? "bg-divine-dark ring-2 ring-gold-500/80 shadow-gold-glow hover:shadow-[0_28px_80px_rgba(212,175,55,0.3)]"
          : "premium-card shine-effect"
      }`}
    >
      {/* Popular banner */}
      {isPopular && (
        <div className="bg-gold-gradient text-divine-dark text-center py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
          <Sparkles size={12} />
          Most Popular — Best Value
          <Sparkles size={12} />
        </div>
      )}

      {/* Featured badge (non-popular) */}
      {pkg.featured && !isPopular && (
        <div
          className="absolute top-4 right-4 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md"
          style={{ backgroundColor: `${pkg.accent}25`, color: pkg.accent, border: `1px solid ${pkg.accent}40` }}
        >
          ✦ Best Value
        </div>
      )}

      {/* Package Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Duration + cities */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full ${
            isPopular ? "bg-white/10 text-gold-300 border border-gold-500/25" : "bg-gray-50 border border-gray-100 text-gray-500"
          }`}>
            <Clock size={11} />
            {pkg.duration}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full ${
            isPopular ? "bg-white/8 text-white/55 border border-white/12" : "bg-gray-50 border border-gray-100 text-gray-400"
          }`}>
            <MapPin size={11} />
            {pkg.cities.join(" · ")}
          </span>
        </div>

        {/* Name */}
        <h3 className={`font-playfair font-bold text-xl sm:text-2xl leading-snug mb-1 ${
          isPopular ? "text-white" : "text-divine-dark"
        }`}>
          {pkg.name}
        </h3>
        <p className={`text-sm mb-5 ${isPopular ? "text-gold-300" : "text-gray-400"}`}>
          {pkg.subtitle}
        </p>

        {/* Core inclusions icons */}
        <div className={`flex items-center justify-between mb-5 pb-5 border-b ${
          isPopular ? "border-white/10" : "border-gray-100"
        }`}>
          {coreInclusions.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: isPopular ? "rgba(212,175,55,0.12)" : `${pkg.accent}12` }}
              >
                <Icon size={16} style={{ color: isPopular ? "#D4AF37" : pkg.accent }} />
              </div>
              <span className={`text-[9px] font-medium text-center leading-tight ${
                isPopular ? "text-white/60" : "text-gray-400"
              }`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Price & Lock Section */}
        <div className={`mb-6 flex items-center justify-between gap-3 border-t border-b py-4 ${
          isPopular ? "border-white/10" : "border-gray-100"
        }`}>
          {/* Lock Price Pill */}
          <a
            href="#get-quote"
            onClick={() => {
              const event = new CustomEvent("select-tour", {
                detail: { tourId: pkg.id, mode: "lock" }
              });
              window.dispatchEvent(event);
            }}
            className={`flex items-center gap-1 px-3 py-2 rounded-xl text-[12px] font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm ${
              isPopular
                ? "bg-gradient-to-r from-saffron-500/25 to-amber-500/25 text-amber-200 border border-saffron-500/40 hover:from-saffron-500/35 hover:to-amber-500/35"
                : "bg-gradient-to-r from-amber-50 to-amber-100/60 text-amber-900 border border-amber-200/80 hover:from-amber-100 hover:to-amber-200/50"
            }`}
          >
            <span className="text-[11px]">🔒</span>
            <span>Lock Price at ₹{tokenAmount.toLocaleString("en-IN")}</span>
            <span className="text-[9px] opacity-70">❯</span>
          </a>

          {/* Pricing */}
          <div className="text-right">
            <div className="flex items-baseline justify-end gap-1.5">
              <span className={`text-[12px] line-through ${
                isPopular ? "text-white/35" : "text-gray-400"
              }`}>
                ₹{pkg.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className={`font-playfair font-bold text-2xl sm:text-[1.7rem] leading-none ${
                isPopular ? "text-gold-400" : "text-divine-dark"
              }`}>
                ₹{pkg.price.toLocaleString("en-IN")}
              </span>
            </div>
            <p className={`text-[10px] mt-1 ${isPopular ? "text-white/30" : "text-gray-400"}`}>
              Onwards / couple
            </p>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2.5 flex-1 mb-5">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <div
                className="flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center mt-[1px]"
                style={{
                  backgroundColor: isPopular ? "rgba(212,175,55,0.15)" : `${pkg.accent}18`,
                }}
              >
                <Check
                  size={10}
                  strokeWidth={3}
                  style={{ color: isPopular ? "#D4AF37" : pkg.accent }}
                />
              </div>
              <span className={`text-[13px] leading-snug ${
                isPopular ? "text-white/80" : "text-gray-600"
              }`}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* Urgency note */}
        {pkg.note && (
          <div className={`mb-4 text-[12px] font-medium px-3.5 py-2.5 rounded-xl ${
            isPopular
              ? "bg-saffron-500/15 text-saffron-300 border border-saffron-500/20"
              : "bg-amber-50 text-amber-700 border border-amber-100"
          }`}>
            🔔 {pkg.note}
          </div>
        )}

        {/* Exclusions block inside card */}
        <div className={`mb-6 pt-4 border-t ${isPopular ? "border-white/10" : "border-gray-100"}`}>
          <div className={`text-[10px] font-bold uppercase tracking-wider mb-2.5 ${isPopular ? "text-gold-300" : "text-gray-400"}`}>
            Exclusions & Important Notes:
          </div>
          <ul className="space-y-2 text-[11px] leading-tight">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-[10px] mt-[1.5px] flex-shrink-0">✕</span>
              <span className={isPopular ? "text-white/60" : "text-gray-500"}>
                Transport tickets (Bus, Train, Flight) are NOT included
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-[10px] mt-[1.5px] flex-shrink-0">✕</span>
              <span className={isPopular ? "text-white/60" : "text-gray-500"}>
                5% GST / Service Tax not included in package price
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold text-[10px] mt-[1.5px] flex-shrink-0">⚠️</span>
              <span className={isPopular ? "text-white/60" : "text-gray-500"}>
                Darshan pass is ONLY provided with complete package
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <a
          href="#get-quote"
          onClick={() => {
            const event = new CustomEvent("select-tour", {
              detail: { tourId: pkg.id, mode: "confirm" }
            });
            window.dispatchEvent(event);
          }}
          className={`wa-shimmer flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-white font-bold text-[14px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
            isPopular
              ? "bg-gold-gradient text-divine-dark hover:brightness-105"
              : "hover:brightness-110"
          }`}
          style={
            isPopular
              ? {}
              : { backgroundColor: pkg.accent }
          }
          data-cta="scroll-quote"
          data-source="packages"
          data-package={pkg.id}
        >
          {pkg.ctaText}
        </a>

        <p className={`text-center text-[11px] mt-2.5 ${
          isPopular ? "text-white/30" : "text-gray-300"
        }`}>
          Confirm with 25% Advance &nbsp;·&nbsp; Or Lock Rates with ₹{tokenAmount.toLocaleString("en-IN")}
        </p>
      </div>
    </motion.div>
  );
}
export default function Packages() {
  const ref   = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [tokenAmount, setTokenAmount] = useState(1999);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("price_lock_discount") === "true") {
        setTokenAmount(1749);
      }
      const handleDiscount = () => setTokenAmount(1749);
      window.addEventListener("apply-discount", handleDiscount);
      return () => window.removeEventListener("apply-discount", handleDiscount);
    }
  }, []);

  return (
    <section ref={ref} id="packages" className="py-24 sm:py-32 bg-sacred-cream" data-section="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="ornament-line max-w-[200px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Customizable Circuits
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            Pre-Curated Custom{" "}
            <span className="text-gradient-saffron">UP Tour Loops</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose a popular template circuit below to pre-fill our Interactive Customizer, or customize your own loop from scratch.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 text-sm text-gray-500 bg-white border border-gray-100 shadow-sm rounded-full px-5 py-2.5">
            <MapPin size={13} className="text-saffron-500" />
            Departures from all major cities across India
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} tokenAmount={tokenAmount} />
          ))}
        </div>

        {/* General Exclusions and Guidelines Disclaimer Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm"
        >
          <h3 className="font-playfair font-bold text-lg sm:text-xl text-divine-dark text-center mb-6 flex items-center justify-center gap-2">
            📋 Booking Guidelines & Package Exclusions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600 font-bold text-sm">✕</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">No Transport Tickets</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Any type of transportation tickets (like flights, train tickets, or interstate buses) are not included. Devotees must book their own travel, or we can assist at actual cost.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600 font-bold text-sm">✕</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">5% Tax Excluded</h4>
                <p className="text-gray-400 text-xs leading-relaxed">A standard 5% GST/Service Tax is not included in the package prices shown. The final tax amount will be detailed clearly in your invoice before booking.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600 font-bold text-sm">⚠️</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">Darshan Pass Booking</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Ram Mandir darshan passes are arranged strictly as part of our complete tour packages. We do not provide or sell standalone passes without hotel/transport booking.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Early bird price lock warning card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-3xl p-5 sm:p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-amber-200 text-sm mb-0.5">Early Bird Tip for Future Travels</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Traveling this month? Pay a 25% advance to confirm your dates immediately. Traveling in future months? Avoid seasonal price surges of up to 45% by securing a Flexi-Date Price Lock for just ₹{tokenAmount.toLocaleString("en-IN")} today. Finalize your exact dates later!
            </p>
          </div>
        </motion.div>

        {/* Custom nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Need a custom group tour, senior citizen plan or a different itinerary?{" "}
            <a
              href="#get-quote"
              className="text-saffron-600 font-semibold hover:text-saffron-700 underline underline-offset-2"
            >
              Plan your custom trip here →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
