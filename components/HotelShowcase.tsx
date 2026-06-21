"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, MessageCircle, Wifi, Utensils, Car, Wind, Shield, Coffee } from "lucide-react";

const WA_NUMBER = "919235222399";

const hotels = [
  {
    id: "comfort",
    tier: "3 Star",
    label: "Comfort Stay",
    tagline: "Clean, devotee-friendly & conveniently located",
    description:
      "Comfortable, well-maintained hotels within 10–20 minutes of Ram Mandir. Perfect for budget-conscious pilgrims who want a clean, peaceful stay without compromising on essentials.",
    gradient: "from-amber-50 via-orange-50 to-amber-50",
    accentColor: "#FF6B00",
    borderColor: "border-orange-100",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    pattern: "M4 4h4v4H4zm8 0h4v4h-4zm8 0h4v4h-4zM4 12h4v4H4zm8 0h4v4h-4zm8 0h4v4h-4zM4 20h4v4H4zm8 0h4v4h-4zm8 0h4v4h-4z",
    badgeColor: "bg-orange-100 text-orange-700",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    amenities: [
      { icon: Wind, label: "AC Rooms" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Utensils, label: "Pure Veg Restaurant" },
      { icon: Car, label: "Parking Available" },
      { icon: Coffee, label: "Morning Chai Service" },
      { icon: Shield, label: "24/7 Reception" },
    ],
    features: [
      "AC rooms with attached bathroom",
      "Pure vegetarian sattvic meals",
      "Temple proximity (10–20 min)",
      "Daily housekeeping",
      "Locker & safe facility",
      "Laundry service available",
    ],
    usedIn: ["Ayodhya Darshan Package", "Lucknow Ayodhya Package"],
    priceNote: "Included in packages starting ₹22,000 / couple",
  },
  {
    id: "premium",
    tier: "4 Star",
    label: "Premium Stay",
    tagline: "Spacious, elegant & spiritually serene",
    description:
      "Premium 4-star properties combining modern comfort with traditional hospitality. Spacious rooms, superior amenities and a peaceful atmosphere — ideal for families and senior citizens.",
    gradient: "from-divine-dark via-divine-brown to-divine-dark",
    accentColor: "#D4AF37",
    borderColor: "border-gold-500/30",
    iconBg: "bg-gold-900/40",
    iconColor: "text-gold-400",
    pattern: "M4 4h4v4H4zm8 0h4v4h-4zm8 0h4v4h-4zM4 12h4v4H4zm8 0h4v4h-4zm8 0h4v4h-4zM4 20h4v4H4zm8 0h4v4h-4zm8 0h4v4h-4z",
    badgeColor: "bg-gold-400/20 text-gold-300",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    amenities: [
      { icon: Wind, label: "Premium AC Rooms" },
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Utensils, label: "Multi-cuisine Restaurant" },
      { icon: Car, label: "Valet Parking" },
      { icon: Coffee, label: "Room Service" },
      { icon: Shield, label: "24/7 Concierge" },
    ],
    features: [
      "Spacious deluxe & suite rooms",
      "All meals included (B+L+D)",
      "Temple proximity (5–15 min)",
      "Swimming pool at select properties",
      "Fitness centre & spa",
      "Airport / station pickup arranged",
    ],
    usedIn: ["Ayodhya Varanasi Package", "Ayodhya Prayagraj Varanasi Package"],
    priceNote: "Included in packages starting ₹32,000 / couple",
    dark: true,
  },
  {
    id: "boutique",
    tier: "Heritage / Boutique",
    label: "Heritage Boutique",
    tagline: "Curated luxury with a spiritual soul",
    description:
      "Handpicked heritage properties and boutique hotels that combine architectural grandeur with intimate spiritual ambience. An experience in itself — not just accommodation.",
    gradient: "from-red-50 via-rose-50 to-red-50",
    accentColor: "#8B0000",
    borderColor: "border-red-200",
    iconBg: "bg-red-50",
    iconColor: "text-red-700",
    badgeColor: "bg-red-100 text-red-800",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    amenities: [
      { icon: Wind, label: "Heritage AC Rooms" },
      { icon: Wifi, label: "Premium Wi-Fi" },
      { icon: Utensils, label: "Private Dining" },
      { icon: Car, label: "Chauffeured Transfers" },
      { icon: Coffee, label: "Butler Service" },
      { icon: Shield, label: "Dedicated Host" },
    ],
    features: [
      "Themed heritage rooms & suites",
      "Private rooftop terrace / courtyard",
      "Customised spiritual decor",
      "Chef-curated sattvic menu",
      "Personal puja arrangement",
      "Exclusive darshan slot coordination",
    ],
    usedIn: ["Full Circuit Package (5N/6D)"],
    priceNote: "Included in packages starting ₹50,000 / couple",
  },
];

export default function HotelShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="hotels" className="py-24 sm:py-32 bg-sacred-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="ornament-line max-w-xs mx-auto mb-4">
            <span className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium whitespace-nowrap px-4">
              Where You'll Rest & Recharge
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            Handpicked{" "}
            <span className="text-gradient-saffron">Pilgrimage Hotels</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every hotel we partner with is personally inspected for cleanliness, comfort and proximity to the Ram Mandir — so you can focus on your devotion, not logistics.
          </p>
        </motion.div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {hotels.map((hotel, i) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-3xl overflow-hidden border ${hotel.borderColor} shadow-sm hover:shadow-lg transition-shadow duration-500 flex flex-col ${
                hotel.dark ? "bg-divine-dark text-white" : "bg-white"
              }`}
            >
              {/* Visual Header — High-Quality Hotel Image */}
              <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
                <img
                  src={hotel.image}
                  alt={hotel.label}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                {/* Tier badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm ${hotel.badgeColor}`}
                  >
                    ⭐ {hotel.tier}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <h3
                  className={`font-playfair font-bold text-2xl mb-1 ${
                    hotel.dark ? "text-white" : "text-divine-dark"
                  }`}
                >
                  {hotel.label}
                </h3>
                <p
                  className={`text-sm font-medium mb-3 ${
                    hotel.dark ? "text-gold-400" : "text-saffron-600"
                  }`}
                >
                  {hotel.tagline}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    hotel.dark ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  {hotel.description}
                </p>

                {/* Amenity Icons */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {hotel.amenities.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl text-center ${
                        hotel.dark ? "bg-white/5" : "bg-gray-50"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={hotel.dark ? "text-gold-400" : hotel.iconColor}
                      />
                      <span
                        className={`text-[10px] font-medium leading-tight ${
                          hotel.dark ? "text-white/60" : "text-gray-500"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features Checklist */}
                <ul className="space-y-2 mb-6 flex-1">
                  {hotel.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: `${hotel.accentColor}20` }}
                      >
                        <Check size={10} style={{ color: hotel.accentColor }} strokeWidth={3} />
                      </div>
                      <span
                        className={`text-sm ${hotel.dark ? "text-white/70" : "text-gray-600"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Packages using this hotel */}
                <div
                  className={`mb-5 px-4 py-3 rounded-xl text-xs ${
                    hotel.dark
                      ? "bg-white/5 text-white/50"
                      : "bg-gray-50 text-gray-500 border border-gray-100"
                  }`}
                >
                  <span className="font-semibold">Included in: </span>
                  {hotel.usedIn.join(" · ")}
                </div>

                {/* Price note + CTA */}
                <div>
                  <p
                    className={`text-xs mb-3 font-medium ${
                      hotel.dark ? "text-gold-400/70" : "text-saffron-600"
                    }`}
                  >
                    {hotel.priceNote}
                  </p>
                  <a
                    href="#get-quote"
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
                      hotel.dark
                        ? "bg-gold-gradient text-divine-dark"
                        : "bg-saffron-600 hover:bg-saffron-700 text-white"
                    }`}
                  >
                    Enquire About This Hotel
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm">
            🏨 All hotels are personally vetted by our team · Pre-confirmed before your booking · No last-minute surprises
          </p>
        </motion.div>
      </div>
    </section>
  );
}
