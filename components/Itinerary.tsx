"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Sun, Sunset, Moon, MapPin, MessageCircle } from "lucide-react";

const WA_NUMBER = "919235222399";

type DayActivity = {
  time: "Morning" | "Afternoon" | "Evening";
  activity: string;
};

type Day = {
  title: string;
  activities: DayActivity[];
};

type ItineraryItem = {
  id: string;
  destination: string;
  duration: string;
  package: string;
  days: Day[];
};

const itineraries: ItineraryItem[] = [
  {
    id: "braj-taj-custom",
    destination: "Mathura, Vrindavan & Agra",
    duration: "3N / 4D",
    package: "Braj Bhoomi & Taj Mahal Circuit",
    days: [
      {
        title: "Day 1 — Arrival in Delhi & Drive to Mathura-Vrindavan",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Delhi airport/railway station. Meet our chauffeur and proceed to Vrindavan via Yamuna Expressway (3 hours). Check-in at hotel and freshen up.",
          },
          {
            time: "Afternoon",
            activity: "Visit the grand Prem Mandir (famous for its exquisite carvings and garden displays) and Banke Bihari Temple, the heart of devotion in Vrindavan.",
          },
          {
            time: "Evening",
            activity: "Explore ISKCON Temple and participate in the evening sandhya aarti. Enjoy pure veg Braj-special dinner at a local heritage restaurant.",
          },
        ],
      },
      {
        title: "Day 2 — Mathura Temple Circuit & Barsana Excursion",
        activities: [
          {
            time: "Morning",
            activity: "Visit Krishna Janmabhoomi Temple (birthplace of Lord Krishna) and Dwarkadhish Temple in Mathura. Take a walk along the holy Vishram Ghat.",
          },
          {
            time: "Afternoon",
            activity: "Excursion to Barsana (birthplace of Radha Rani) and Govardhan Hill. Visit the sacred Mansi Ganga and Radha Kund.",
          },
          {
            time: "Evening",
            activity: "Witness the sunset from Kusum Sarovar. Return to Vrindavan hotel for rest and dinner.",
          },
        ],
      },
      {
        title: "Day 3 — Drive to Agra & Taj Mahal Sunset",
        activities: [
          {
            time: "Morning",
            activity: "Check-out from Vrindavan hotel and drive to Agra (approx 1.5 hours). Check-in at Agra hotel.",
          },
          {
            time: "Afternoon",
            activity: "Visit the spectacular Agra Fort (UNESCO World Heritage Site), exploring its grand palaces and gardens.",
          },
          {
            time: "Evening",
            activity: "Witness the breathtaking sunset view of the Taj Mahal from Mehtab Bagh across the Yamuna River. Overnight stay in Agra.",
          },
        ],
      },
      {
        title: "Day 4 — Sunrise Taj Mahal & Departure",
        activities: [
          {
            time: "Morning",
            activity: "Early morning visit to the Taj Mahal at sunrise — when the white marble glows in golden hues. Return to hotel for breakfast.",
          },
          {
            time: "Afternoon",
            activity: "Check-out and optionally visit Fatehpur Sikri (40 km). Drive back to Delhi airport / railway station for onward departure.",
          },
          {
            time: "Evening",
            activity: "Depart with sweet memories of the Braj region and the magnificent Taj Mahal.",
          },
        ],
      },
    ],
  },
  {
    id: "spiritual-triangle",
    destination: "Ayodhya, Prayagraj & Varanasi",
    duration: "4N / 5D",
    package: "Spiritual Triangle of UP",
    days: [
      {
        title: "Day 1 — Arrival in Ayodhya & Ram Mandir Darshan",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Ayodhya Railway Station / Airport. Warm traditional welcome and transfer to hotel. Check-in and freshen up.",
          },
          {
            time: "Afternoon",
            activity: "Proceed to Shri Ram Janmabhoomi (Ram Mandir). Experience divine darshan of Ram Lalla with our priority passes.",
          },
          {
            time: "Evening",
            activity: "Visit Hanuman Garhi temple and attend evening aarti. Walk along Ram Ki Paidi and light a diya at Saryu River. Return to hotel for dinner.",
          },
        ],
      },
      {
        title: "Day 2 — Ayodhya Sightseeing & Drive to Prayagraj",
        activities: [
          {
            time: "Morning",
            activity: "Visit Kanak Bhawan and Dashrath Mahal. Have a holy dip in Saryu River and breakfast.",
          },
          {
            time: "Afternoon",
            activity: "Check-out and drive to Prayagraj (approx 3.5 hours). Check-in at hotel and rest.",
          },
          {
            time: "Evening",
            activity: "Visit the sacred Alopi Devi Mandir and Sri Bade Hanuman Ji Temple (unique reclining posture). Dinner at hotel.",
          },
        ],
      },
      {
        title: "Day 3 — Triveni Sangam Snan & Drive to Varanasi",
        activities: [
          {
            time: "Morning",
            activity: "Early morning boat ride to Triveni Sangam — the holy confluence of Ganga, Yamuna, and Saraswati. Perform ritual snan and puja.",
          },
          {
            time: "Afternoon",
            activity: "Visit Anand Bhawan (historical Nehru family home) and Allahabad Fort. Drive to Varanasi (approx 2.5 hours). Check-in at hotel.",
          },
          {
            time: "Evening",
            activity: "Stroll along the Dashashwamedh Ghat to experience the spiritual energy of the oldest living city. Dinner at hotel.",
          },
        ],
      },
      {
        title: "Day 4 — Kashi Vishwanath Darshan & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity: "Early morning boat ride on Ganga to witness sunrise rituals at ghats. Guided walk through the narrow Kashi lanes.",
          },
          {
            time: "Afternoon",
            activity: "VIP Darshan at Shri Kashi Vishwanath temple (Jyotirlinga). Visit Annapurna Mandir, Kaal Bhairav, and Sankat Mochan Hanuman Temple.",
          },
          {
            time: "Evening",
            activity: "Attend the world-famous evening Ganga Aarti at Dashashwamedh Ghat from a private boat. Pure vegetarian dinner.",
          },
        ],
      },
      {
        title: "Day 5 — Sarnath Excursion & Departure",
        activities: [
          {
            time: "Morning",
            activity: "Visit Sarnath (the Buddhist hub where Lord Buddha gave his first sermon). Explore Dhamek Stupa and Sarnath Archaeological Museum.",
          },
          {
            time: "Afternoon",
            activity: "Check-out from hotel. Transfer to Varanasi Airport / Railway Station for departure.",
          },
          {
            time: "Evening",
            activity: "Depart carrying deep spiritual energy and memories of the sacred UP triangle.",
          },
        ],
      },
    ],
  },
  {
    id: "purvanchal-custom",
    destination: "Ayodhya, Prayagraj, Varanasi, Vindhyachal & Chitrakoot",
    duration: "6N / 7D",
    package: "Purvanchal Divine & Ramayana Circuit",
    days: [
      {
        title: "Day 1 — Ayodhya Arrival & Ram Mandir",
        activities: [
          {
            time: "Morning",
            activity: "Arrive in Ayodhya. Transfer to hotel and freshen up.",
          },
          {
            time: "Afternoon",
            activity: "VIP Darshan of Ram Lalla at the grand Ram Mandir. Guide shows you the architectural masterwork.",
          },
          {
            time: "Evening",
            activity: "Visit Hanuman Garhi and Kanak Bhawan. Evening Saryu River walkthrough.",
          },
        ],
      },
      {
        title: "Day 2 — Drive to Chitrakoot (Holy Exile Town)",
        activities: [
          {
            time: "Morning",
            activity: "Drive to Chitrakoot (approx 4 hours), the peaceful forest region where Lord Ram spent 11 years of exile.",
          },
          {
            time: "Afternoon",
            activity: "Visit Janaki Kund and Sphatik Shila (rocks bearing footprints of Ram and Sita). Check-in at hotel.",
          },
          {
            time: "Evening",
            activity: "Attend the evening Mandakini river aarti at Ramghat. Boat ride on the tranquil river.",
          },
        ],
      },
      {
        title: "Day 3 — Chitrakoot Parikrama & Gupt Godavari",
        activities: [
          {
            time: "Morning",
            activity: "Perform the sacred 5 km Kamadgiri Parikrama walk. Visit Kamtanath Temple.",
          },
          {
            time: "Afternoon",
            activity: "Explore Gupt Godavari caves (natural streams inside cavernous rocks) and Sati Anusuya Ashram.",
          },
          {
            time: "Evening",
            activity: "Relax at Ramghat. Enjoy a traditional Bundelkhand-style dinner.",
          },
        ],
      },
      {
        title: "Day 4 — Drive to Prayagraj (Triveni Sangam)",
        activities: [
          {
            time: "Morning",
            activity: "Proceed to Prayagraj (approx 3 hours). Transfer to hotel.",
          },
          {
            time: "Afternoon",
            activity: "Visit Triveni Sangam for holy snan. Explore Akbar Fort and Reclining Hanuman Temple.",
          },
          {
            time: "Evening",
            activity: "Visit Anand Bhawan museum. Dinner and overnight stay in Prayagraj.",
          },
        ],
      },
      {
        title: "Day 5 — Vindhyachal Shaktipeeth & Varanasi",
        activities: [
          {
            time: "Morning",
            activity: "Check-out and drive to Vindhyachal (approx 2 hours). Perform darshan at the famous Maa Vindhyavasini Shaktipeeth temple.",
          },
          {
            time: "Afternoon",
            activity: "Drive to Varanasi (approx 1.5 hours). Check-in at hotel and rest.",
          },
          {
            time: "Evening",
            activity: "Witness the magnificent Ganga Aarti at Dashashwamedh Ghat. Walk the bustling streets of Varanasi.",
          },
        ],
      },
      {
        title: "Day 6 — Complete Kashi Spiritual Tour",
        activities: [
          {
            time: "Morning",
            activity: "Sunrise boat ride on Ganga. Special VIP Darshan at Kashi Vishwanath Jyotirlinga temple.",
          },
          {
            time: "Afternoon",
            activity: "Visit Annapurna Mandir, Sankat Mochan, and BHU Vishwanath temple.",
          },
          {
            time: "Evening",
            activity: "Explore local handloom weavers (Banarasi silk). Enjoy a traditional dinner. Overnight in Kashi.",
          },
        ],
      },
      {
        title: "Day 7 — Sarnath & Departure",
        activities: [
          {
            time: "Morning",
            activity: "Excursion to Sarnath where Buddha gave his first sermon. Explore ruins and monasteries.",
          },
          {
            time: "Afternoon",
            activity: "Check-out and transfer to Varanasi airport or railway station for your return journey.",
          },
          {
            time: "Evening",
            activity: "Depart with a heart filled with holy blessings from the entire Purvanchal circuit.",
          },
        ],
      },
    ],
  },
  {
    id: "grand-up-custom",
    destination: "Mathura, Agra, Lucknow, Ayodhya, Varanasi & Bodhgaya",
    duration: "9N / 10D",
    package: "Grand UP Heritage & Spiritual Tour",
    days: [
      {
        title: "Day 1 — Delhi to Mathura & Vrindavan",
        activities: [
          { time: "Morning", activity: "Pickup from Delhi and drive to Mathura. Visit Krishna Janmabhoomi." },
          { time: "Afternoon", activity: "Check-in at Vrindavan hotel. Visit Prem Mandir and Banke Bihari." },
          { time: "Evening", activity: "Attend ISKCON temple sandhya aarti. Rest at Vrindavan." },
        ],
      },
      {
        title: "Day 2 — Agra Heritage & Taj Mahal",
        activities: [
          { time: "Morning", activity: "Check-out and drive to Agra. Check-in at Agra hotel." },
          { time: "Afternoon", activity: "Visit the majestic Agra Fort and local artisan marble workshops." },
          { time: "Evening", activity: "Visit Taj Mahal at sunset. Overnight in Agra." },
        ],
      },
      {
        title: "Day 3 — Agra to Lucknow (Heritage Capital)",
        activities: [
          { time: "Morning", activity: "Drive to Lucknow (approx 4 hours) via Agra-Lucknow Expressway." },
          { time: "Afternoon", activity: "Check-in at Lucknow hotel. Visit the unique Rumi Darwaza and Husainabad Clock Tower." },
          { time: "Evening", activity: "Explore the bustling Hazratganj market. Enjoy Awadhi dinner (Tunday Kababi)." },
        ],
      },
      {
        title: "Day 4 — Lucknow Heritage & Naimisharanya",
        activities: [
          { time: "Morning", activity: "Visit Bara Imambara (Bhool Bhulaiya) and British Residency." },
          { time: "Afternoon", activity: "Day excursion to Naimisharanya (approx 2 hours) — visit Chakra Tirth and Lalita Devi temple." },
          { time: "Evening", activity: "Return to Lucknow. Dinner and overnight stay in Lucknow." },
        ],
      },
      {
        title: "Day 5 — Lucknow to Ayodhya & Evening Aarti",
        activities: [
          { time: "Morning", activity: "Proceed to Ayodhya (approx 2.5 hours). Check-in at hotel." },
          { time: "Afternoon", activity: "Visit Hanuman Garhi and Kanak Bhawan temples with local guide." },
          { time: "Evening", activity: "Attend Saryu Aarti at Ram Ki Paidi ghat. Return to hotel." },
        ],
      },
      {
        title: "Day 6 — Ram Mandir VIP Darshan & Drive to Kashi",
        activities: [
          { time: "Morning", activity: "VIP Darshan of Ram Lalla at Ram Mandir. Checkout from hotel." },
          { time: "Afternoon", activity: "Drive to Varanasi (approx 4.5 hours). Transfer to hotel." },
          { time: "Evening", activity: "Relax at Varanasi ghats. Leisure walk through old alleys." },
        ],
      },
      {
        title: "Day 7 — Varanasi Sunrise Boat & Kashi Vishwanath",
        activities: [
          { time: "Morning", activity: "Sunrise boat ride on Ganga. VIP entry to Kashi Vishwanath temple." },
          { time: "Afternoon", activity: "Visit Kaal Bhairav, Annapurna Temple, and Sarnath Buddhist complex." },
          { time: "Evening", activity: "Attend the spectacular evening Ganga Aarti. Overnight stay in Varanasi." },
        ],
      },
      {
        title: "Day 8 — Varanasi to Bodhgaya (Buddhist Cradle)",
        activities: [
          { time: "Morning", activity: "Drive from Varanasi to Bodhgaya in Bihar (approx 5 hours). Check-in at hotel." },
          { time: "Afternoon", activity: "Visit the UNESCO site Mahabodhi Temple and the sacred Bodhi Tree where Buddha attained enlightenment." },
          { time: "Evening", activity: "Explore international Buddhist monasteries (Thai, Japanese, Bhutanese). Dinner at hotel." },
        ],
      },
      {
        title: "Day 9 — Bodhgaya Exploration & Drive back to Varanasi",
        activities: [
          { time: "Morning", activity: "Visit 80-feet Great Buddha Statue, Sujata Kuti, and Dungeshwari Caves." },
          { time: "Afternoon", activity: "Check-out and drive back to Varanasi hotel (approx 5 hours)." },
          { time: "Evening", activity: "Last evening shopping in Kashi (Banarasi Sarees / brass items). Overnight in Kashi." },
        ],
      },
      {
        title: "Day 10 — Varanasi Departure",
        activities: [
          { time: "Morning", activity: "Visit Sankat Mochan temple. Enjoy Banaras breakfast (Kachori Sabzi & Jalebi)." },
          { time: "Afternoon", activity: "Check-out and transfer to Varanasi Airport or Railway Station for onward journey." },
          { time: "Evening", activity: "Depart carrying deep blessings and culture of the ultimate UP & Bihar loop." },
        ],
      },
    ],
  },
];

const timeIcons = {
  Morning: Sun,
  Afternoon: Sunset,
  Evening: Moon,
};

const timeColors = {
  Morning: "text-amber-500",
  Afternoon: "text-orange-500",
  Evening: "text-indigo-400",
};

function ItineraryDay({ day, index }: { day: Day; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <details
      open={isOpen}
      onToggle={(e) => setIsOpen(e.currentTarget.open)}
      className="group"
    >
      <summary
        className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-4 text-left hover:bg-gray-50/50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0">
            <span className="text-saffron-700 font-bold text-xs">{index + 1}</span>
          </div>
          <span className="font-semibold text-divine-dark text-sm sm:text-base leading-snug">
            {day.title}
          </span>
        </div>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-gray-50 group-open:bg-saffron-100 transition-colors duration-300"
        >
          <ChevronDown
            size={15}
            className="text-gray-400 group-open:text-saffron-600 group-open:rotate-180 transition-transform duration-300"
          />
        </div>
      </summary>

      <div className="px-6 sm:px-8 pb-5 space-y-4">
        {day.activities.map((act, ai) => {
          const Icon = timeIcons[act.time];
          return (
            <div key={ai} className="flex gap-4">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Icon size={15} className={timeColors[act.time]} />
                </div>
                {ai < day.activities.length - 1 && (
                  <div className="w-px flex-1 bg-gray-100 min-h-[20px]" />
                )}
              </div>
              <div className="pt-1 pb-2">
                <div className={`text-xs font-semibold mb-1.5 ${timeColors[act.time]}`}>
                  {act.time}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{act.activity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </details>
  );
}

function ItineraryCard({ item }: { item: ItineraryItem }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Card Header */}
      <div
        className="px-6 sm:px-8 py-6 border-b border-gray-50"
        style={{
          background:
            "linear-gradient(135deg, #FFF8F0 0%, #FFFAF5 100%)",
        }}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-saffron-100 text-saffron-700">
                {item.duration}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500 px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
                <MapPin size={11} />
                {item.destination}
              </span>
            </div>
            <h3 className="font-playfair font-bold text-xl text-divine-dark">{item.package}</h3>
          </div>
          <a
            href="#get-quote"
            onClick={() => {
              const event = new CustomEvent("select-tour", { detail: item.id });
              window.dispatchEvent(event);
            }}
            className="flex items-center justify-center bg-saffron-600 hover:bg-saffron-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 flex-shrink-0 shadow-md"
          >
            Customize This Plan
          </a>
        </div>
      </div>

      {/* Days Accordion (Native <details> for 100% search engine/crawler indexing) */}
      <div className="divide-y divide-gray-50">
        {item.days.map((day, di) => (
          <ItineraryDay key={di} day={day} index={di} />
        ))}
      </div>
    </div>
  );
}

export default function Itinerary() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} id="itinerary" className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="ornament-line max-w-xs mx-auto mb-4">
            <span className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium whitespace-nowrap px-4">
              Day-by-Day Travel Plan
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            Detailed{" "}
            <span className="text-gradient-saffron">Day-by-Day Plan</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Explore our carefully crafted pilgrimage plans — so you know exactly what to expect at every step of your sacred journey.
          </p>
        </motion.div>

        {/* Destination Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {itineraries.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === i
                  ? "bg-saffron-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-600 border border-gray-100 hover:border-saffron-200 hover:text-saffron-600"
              }`}
            >
              {item.destination} ({item.duration})
            </button>
          ))}
        </motion.div>

        {/* All Itineraries (Rendered in DOM, toggled with hidden class for 100% crawlability) */}
        <div className="relative">
          {itineraries.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={activeTab === i ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.45 }}
              className={activeTab === i ? "block" : "hidden"}
            >
              <ItineraryCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Bottom nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          All itineraries are customisable.{" "}
          <a
            href="#get-quote"
            className="text-saffron-600 font-semibold hover:underline"
          >
            Enquire here to personalise your plan →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
