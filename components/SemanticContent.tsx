"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Users, Calendar, Star, Check } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const quickAnswers = [
  {
    question: "Which Ayodhya tour package is best for a first-time pilgrim?",
    answer:
      "If this is your first visit to Ayodhya, the Ayodhya Darshan Package (2 Nights / 3 Days, starting ₹22,000 for couple) covers everything essential — Ram Mandir darshan, Hanuman Garhi, Kanak Bhawan, and Saryu Ghat. You get a pre-arranged darshan pass, hotel near the temple, and a knowledgeable guide. No queuing, no logistics stress — just devotion.",
    icon: Star,
    accent: "#D4AF37",
    tag: "Best for beginners",
  },
  {
    question: "Can I do an Ayodhya same-day tour from Lucknow?",
    answer:
      "Yes. A same-day Ayodhya tour from Lucknow is very popular. Ayodhya is about 130 km from Lucknow — approximately 2.5 hours by road or 1.5 hours by train. In a single day you can comfortably cover Ram Mandir darshan, Hanuman Garhi, Kanak Bhawan, and the Saryu Ghat walk. We arrange the AC cab and guide. WhatsApp us your departure time and we will plan the route for you.",
    icon: Clock,
    accent: "#FF6B00",
    tag: "Same-day tour",
  },
  {
    question: "Which tour covers Ayodhya, Varanasi and Prayagraj together?",
    answer:
      "Our Ayodhya–Prayagraj–Varanasi Tour Package (4 Nights / 5 Days, ₹40,000 for couple) is designed exactly for this. Day 1–2 in Ayodhya for Ram Mandir darshan, Day 3 in Prayagraj for Triveni Sangam, Day 4–5 in Varanasi for Kashi Vishwanath and Ganga Aarti. Everything is pre-arranged — hotels, AC transfers, darshan passes and a guide.",
    icon: MapPin,
    accent: "#7C3AED",
    tag: "Triple circuit",
  },
  {
    question: "Is the Ayodhya Varanasi package possible in 3 days?",
    answer:
      "Our Ayodhya Varanasi tour is a 3 Nights / 4 Days package — the most efficient way to cover both cities properly. Because we hold pre-arranged darshan passes, no time is wasted queuing at Ram Mandir. Day 2 you travel from Ayodhya to Varanasi and see the Kashi Vishwanath Corridor in the evening. Day 3 covers Sarnath and the world-famous Ganga Aarti. It is achievable and deeply fulfilling.",
    icon: Calendar,
    accent: "#34D399",
    tag: "Ayodhya + Varanasi",
  },
  {
    question: "What makes a good Ayodhya travel package?",
    answer:
      "A good Ayodhya travel package must include five things: a confirmed Ram Mandir darshan pass (so you don't spend hours in queue), a hotel within 20 minutes of the temple, all transport pre-arranged in AC vehicles, a licensed guide who knows the temple history and timings, and responsive support during the trip. Our packages include all five — that is why over 50,000 pilgrims have trusted us since 2009.",
    icon: Check,
    accent: "#60A5FA",
    tag: "What to look for",
  },
  {
    question: "Which Ayodhya package is best for large families and groups?",
    answer:
      "Our Custom Group Tour option is designed for families and groups of 8 or more. We arrange a dedicated AC tempo traveller or bus, block adjacent hotel rooms, arrange a group darshan slot at Ram Mandir, and assign a dedicated guide. Group bookings get priority scheduling and flexible meal arrangements. Rates are lower on a per-head basis for groups above 10 people.",
    icon: Users,
    accent: "#FB923C",
    tag: "Family & groups",
  },
];

const packageMatrix = [
  {
    name: "Ayodhya Darshan",
    duration: "2N / 3D",
    price: "₹22,000",
    best: "First-time pilgrims, short trips",
    includes: ["Ram Mandir darshan", "Hanuman Garhi", "Kanak Bhawan", "Saryu Ghat"],
  },
  {
    name: "Ayodhya – Varanasi",
    duration: "3N / 4D",
    price: "₹32,000",
    best: "Most popular circuit",
    includes: ["Ram Mandir", "Kashi Vishwanath", "Ganga Aarti", "Sarnath"],
  },
  {
    name: "Ayodhya – Prayagraj – Varanasi",
    duration: "4N / 5D",
    price: "₹40,000",
    best: "Three holy cities in one journey",
    includes: ["Ram Mandir", "Triveni Sangam", "Kashi Vishwanath", "Ganga Aarti"],
  },
  {
    name: "Full Ramayana Circuit",
    duration: "5N / 6D",
    price: "₹50,000",
    best: "Ultimate pilgrimage experience",
    includes: ["Ayodhya", "Prayagraj", "Varanasi", "Chitrakoot"],
  },
];

// ─── Components ────────────────────────────────────────────────────────────────

function AnswerCard({
  item,
  index,
}: {
  item: (typeof quickAnswers)[0];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-350"
    >
      {/* Tag */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
          style={{ color: item.accent, backgroundColor: `${item.accent}14` }}
        >
          {item.tag}
        </span>
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${item.accent}12` }}
        >
          <Icon size={15} style={{ color: item.accent }} />
        </div>
      </div>

      {/* Question as H3 for semantic structure */}
      <h3 className="font-playfair font-semibold text-divine-dark text-[16px] leading-snug mb-3">
        {item.question}
      </h3>

      {/* Answer */}
      <p className="text-gray-500 text-[13.5px] leading-relaxed">{item.answer}</p>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function SemanticContent() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="ayodhya-tour-guide"
      aria-label="Ayodhya tour package guide and frequently asked questions"
      className="py-20 sm:py-28 bg-sacred-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="ornament-line max-w-[240px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Your Questions Answered
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-divine-dark mb-4 leading-tight">
            Everything About{" "}
            <span className="text-gradient-saffron">Ayodhya Tour Packages</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            From same-day Ayodhya tours to the full Ramayana circuit — clear, honest answers
            to help you choose the right pilgrimage package.
          </p>
        </motion.div>

        {/* ── Answer Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {quickAnswers.map((item, i) => (
            <AnswerCard key={item.tag} item={item} index={i} />
          ))}
        </div>

        {/* ── Package Comparison Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm"
        >
          {/* Table header */}
          <div className="px-6 sm:px-8 py-6 border-b border-gray-50">
            <h2 className="font-playfair font-bold text-divine-dark text-2xl sm:text-3xl">
              Ayodhya Tour Package Comparison
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              All packages include hotel, darshan pass, AC transport, and expert guide.
            </p>
          </div>

          {/* Mobile: stacked cards */}
          <div className="lg:hidden divide-y divide-gray-50">
            {packageMatrix.map((pkg) => (
              <div key={pkg.name} className="px-6 py-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-playfair font-semibold text-divine-dark text-[15px] leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="text-saffron-600 text-[12px] font-medium mt-0.5">{pkg.best}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-playfair font-bold text-divine-dark text-xl">{pkg.price}</div>
                    <div className="text-gray-400 text-[11px]">{pkg.duration}</div>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5 text-gray-500 text-[12px] bg-gray-50 rounded-lg px-2.5 py-1"
                    >
                      <Check size={9} className="text-saffron-500 flex-shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/70 border-b border-gray-100">
                  <th className="text-left px-8 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Package</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Duration</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Starting Price</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Best For</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Destinations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {packageMatrix.map((pkg, i) => (
                  <tr
                    key={pkg.name}
                    className="hover:bg-saffron-50/40 transition-colors group"
                  >
                    <td className="px-8 py-5">
                      <span className="font-playfair font-semibold text-divine-dark text-[15px] group-hover:text-saffron-700 transition-colors">
                        {pkg.name}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-gray-500 text-[13px] font-medium">{pkg.duration}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-playfair font-bold text-divine-dark text-[17px]">{pkg.price}</span>
                      <span className="text-gray-300 text-[11px] ml-1">/couple</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-saffron-600 text-[13px]">{pkg.best}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.includes.map((dest) => (
                          <span
                            key={dest}
                            className="text-gray-500 text-[11px] bg-gray-50 border border-gray-100 rounded-lg px-2 py-0.5"
                          >
                            {dest}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="px-6 sm:px-8 py-5 bg-gray-50/50 border-t border-gray-50">
            <p className="text-gray-400 text-[12px]">
              * All prices are for a couple on double-sharing basis · inclusive of hotel, darshan pass, AC transport, meals (3N+ packages) and professional guide ·{" "}
              <span className="text-saffron-600 font-medium">
                Same-day Ayodhya tour packages also available — WhatsApp us for details.
              </span>
            </p>
          </div>
        </motion.div>

        {/* ── Pilgrimage Context Block — Topical authority for AI ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {[
            {
              heading: "About Ayodhya Pilgrimage",
              body: "Ayodhya is the birthplace of Lord Ram and one of the seven sacred cities of Hinduism. The newly consecrated Ram Mandir — Shri Ram Janmabhoomi Temple — is now among the grandest Hindu temples in India. A pilgrimage to Ayodhya is considered deeply auspicious, combining temple darshan, sacred river bathing, and ancient Ram Katha.",
            },
            {
              heading: "Why Book a Guided Ayodhya Tour",
              body: "Ayodhya's temple circuit — Ram Mandir, Hanuman Garhi, Kanak Bhawan, Nageshwarnath Temple, and Saryu Ghat — spans several kilometres and requires local knowledge to navigate. A guided Ayodhya tour package ensures you visit every site in the right order, at the right time, without missing the morning aarti or the significance behind each temple's story.",
            },
            {
              heading: "Ayodhya as Part of a Larger Circuit",
              body: "Many pilgrims combine Ayodhya with Varanasi (Kashi), Prayagraj (Triveni Sangam), and Chitrakoot — together forming the sacred Ramayana pilgrimage circuit of Uttar Pradesh. Our multi-city packages are designed to cover all four destinations with the right balance of travel time, rest, and darshan — so you return home spiritually fulfilled, not exhausted.",
            },
          ].map(({ heading, body }) => (
            <div
              key={heading}
              className="bg-white rounded-2xl border border-gray-100 p-6"
            >
              <h3 className="font-playfair font-semibold text-divine-dark text-[16px] mb-3 leading-snug">
                {heading}
              </h3>
              <p className="text-gray-500 text-[13.5px] leading-relaxed">{body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
