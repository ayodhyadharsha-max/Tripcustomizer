"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  User, Phone, CalendarDays, Mail, MessageSquare, ChevronDown,
  ChevronLeft, ChevronRight, CheckCircle2, Loader2, AlertCircle,
  Star, Users, ShieldCheck, BadgeCheck, MapPin, Plus, Minus,
  Sparkles, Check, Car, Hotel, Compass
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY      = "91c6129d-ac01-41e8-ae6a-3b04e733c34f";
const REDIRECT    = "/thank-you";

const CITIES = [
  { id: "agra", name: "Agra", attractions: "Taj Mahal, Agra Fort, Fatehpur Sikri", order: 1, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80" },
  { id: "mathura", name: "Mathura", attractions: "Krishna Janmabhoomi, Dwarkadhish Mandir", order: 2, img: "/gallery/mathura-holi.jpg" },
  { id: "vrindavan", name: "Vrindavan", attractions: "Banke Bihari Mandir, Prem Mandir", order: 3, img: "/gallery/vrindavan-premmandir.png" },
  { id: "lucknow", name: "Lucknow", attractions: "Bara Imambara, British Residency", order: 4, img: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&w=600&q=80" },
  { id: "namishrayan", name: "Naimisharanya", attractions: "Chakra Tirth, Lalita Devi Temple", order: 5, img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80" },
  { id: "ayodhya", name: "Ayodhya", attractions: "Ram Mandir, Hanuman Garhi, Saryu Ghat", order: 6, img: "/gallery/gallery-5.jpg" },
  { id: "chappiya", name: "Chhapaiya", attractions: "Swaminarayan Birthplace Temple", order: 7, img: "https://images.unsplash.com/photo-1590142588602-73354f46d6a0?auto=format&fit=crop&w=600&q=80" },
  { id: "prayagraj", name: "Prayagraj", attractions: "Triveni Sangam, Anand Bhawan", order: 8, img: "/gallery/gallery-27.jpg" },
  { id: "varanasi", name: "Varanasi", attractions: "Kashi Vishwanath, Ganga Aarti", order: 9, img: "/gallery/varanasi-sunset.jpg" },
  { id: "vindhyachal", name: "Vindhyachal", attractions: "Vindhyavasini Devi Mandir", order: 10, img: "/gallery/vindhyachal-devi.jpg" },
  { id: "chitrakoot", name: "Chitrakoot", attractions: "Ramghat, Kamadgiri Parikrama", order: 11, img: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=600&q=80" },
  { id: "bodhgaya", name: "Bodhgaya", attractions: "Mahabodhi Temple, Buddha Statue", order: 12, img: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=600&q=80" },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const DAYS_ABBR = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// ─── Mini Calendar ─────────────────────────────────────────────────────────────
function Calendar({
  selected,
  onSelect,
  onClose,
}: {
  selected?: Date;
  onSelect: (d: Date) => void;
  onClose: () => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const initDate = selected && selected >= today ? selected : today;
  const [view, setView] = useState({ month: initDate.getMonth(), year: initDate.getFullYear() });

  const daysInMonth    = new Date(view.year, view.month + 1, 0).getDate();
  const rawFirstDay    = new Date(view.year, view.month, 1).getDay();
  const startOffset    = (rawFirstDay + 6) % 7; // Monday-first

  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isSelected = (d: number) =>
    !!selected &&
    selected.getDate() === d &&
    selected.getMonth() === view.month &&
    selected.getFullYear() === view.year;

  const isDisabled = (d: number) =>
    new Date(view.year, view.month, d) < today;

  const isToday = (d: number) =>
    today.getDate() === d &&
    today.getMonth() === view.month &&
    today.getFullYear() === view.year;

  const prevMonth = () =>
    setView(v =>
      v.month === 0
        ? { month: 11, year: v.year - 1 }
        : { month: v.month - 1, year: v.year }
    );

  const nextMonth = () =>
    setView(v =>
      v.month === 11
        ? { month: 0, year: v.year + 1 }
        : { month: v.month + 1, year: v.year }
    );

  const canGoPrev =
    view.year > today.getFullYear() ||
    (view.year === today.getFullYear() && view.month > today.getMonth());

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-[#160800] border border-white/[0.15] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08]">
        <button
          type="button"
          onClick={prevMonth}
          disabled={!canGoPrev}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft size={14} />
        </button>
        <span className="font-playfair font-semibold text-white text-sm">
          {MONTHS[view.month]} {view.year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="p-3">
        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1.5">
          {DAYS_ABBR.map(d => (
            <div
              key={d}
              className="flex items-center justify-center h-7 text-white/30 text-[10px] font-semibold tracking-wide"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-0.5">
          {cells.map((day, i) => {
            if (!day) return <div key={`e-${i}`} className="h-8" />;
            const disabled  = isDisabled(day);
            const sel       = isSelected(day);
            const tod       = isToday(day);
            return (
              <button
                key={day}
                type="button"
                disabled={disabled}
                onClick={() => {
                  onSelect(new Date(view.year, view.month, day));
                  onClose();
                }}
                className={[
                  "h-8 w-full rounded-lg text-[13px] flex items-center justify-center transition-all duration-150",
                  disabled
                    ? "text-white/18 cursor-not-allowed"
                    : "text-white/75 cursor-pointer hover:bg-white/10 hover:text-white",
                  sel
                    ? "!bg-saffron-500 !text-white font-semibold shadow-[0_2px_12px_rgba(255,107,0,0.4)]"
                    : "",
                  tod && !sel
                    ? "border border-saffron-400/50 text-saffron-400"
                    : "",
                ].join(" ")}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] px-4 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            onSelect(today);
            onClose();
          }}
          className="text-saffron-400 text-[12px] font-medium hover:text-saffron-300 transition-colors"
        >
          Select today
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-white/30 text-[12px] hover:text-white/60 transition-colors"
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
}

// ─── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase mb-2">
        {label}
        {required && <span className="text-saffron-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder-white/25 text-[14px] focus:outline-none focus:border-saffron-400/70 focus:bg-white/[0.09] focus:ring-2 focus:ring-saffron-400/15 transition-all duration-200 appearance-none";

function fmtDate(d: Date) {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export default function LeadCapture() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // ─── Customizer States ───────────────────────────────────────────────────────
  const [step, setStep] = useState(1);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [duration, setDuration] = useState(5);
  const [dateType, setDateType] = useState<"flexible" | "exact">("flexible");
  const [flexMonth, setFlexMonth] = useState("");
  const [exactDate, setExactDate] = useState<Date | undefined>(undefined);
  const [calOpen, setCalOpen] = useState(false);
  const calRef = useRef<HTMLDivElement>(null);

  // Group Details
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  // Preferences
  const [hotelClass, setHotelClass] = useState("Standard (3★)");
  const [transportType, setTransportType] = useState("SUV (Innova)");

  // Contact
  const [contact, setContact] = useState({ name: "", phone: "", email: "", request: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  // logical order mapping to display the route in order
  const getSortedRoute = () => {
    return CITIES.filter(c => selectedCities.includes(c.id))
      .sort((a, b) => a.order - b.order)
      .map(c => c.name);
  };

  // Preset configuration map to load when a package card requests customization
  useEffect(() => {
    const handleSelectTour = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const tourId = typeof detail === "string" ? detail : detail?.tourId;
      
      const presetMapping: Record<string, { cities: string[]; duration: number }> = {
        "ayodhya-darshan": { cities: ["ayodhya"], duration: 3 },
        "ayodhya-varanasi": { cities: ["ayodhya", "varanasi"], duration: 4 },
        "ayodhya-prayagraj-varanasi": { cities: ["ayodhya", "prayagraj", "varanasi"], duration: 5 },
        "lucknow-ayodhya": { cities: ["lucknow", "ayodhya"], duration: 4 },
        "ayodhya-varanasi-chitrakoot": { cities: ["ayodhya", "varanasi", "chitrakoot"], duration: 5 },
        "full-circuit": { cities: ["ayodhya", "prayagraj", "varanasi", "chitrakoot"], duration: 6 },
        "braj-taj-custom": { cities: ["mathura", "vrindavan", "agra"], duration: 4 },
        "purvanchal-custom": { cities: ["ayodhya", "prayagraj", "varanasi", "vindhyachal", "chitrakoot"], duration: 7 },
        "spiritual-triangle": { cities: ["ayodhya", "prayagraj", "varanasi"], duration: 5 },
        "grand-up-custom": { cities: ["mathura", "vrindavan", "agra", "lucknow", "namishrayan", "ayodhya", "prayagraj", "varanasi", "bodhgaya"], duration: 10 },
        "chhapaiya-ayodhya-kashi": { cities: ["chappiya", "ayodhya", "varanasi"], duration: 5 },
        "naimisharanya-lucknow-ayodhya": { cities: ["namishrayan", "lucknow", "ayodhya"], duration: 5 },
      };

      const preset = presetMapping[tourId];
      if (preset) {
        setSelectedCities(preset.cities);
        setDuration(preset.duration);
        setStep(2); // Jump to Step 2 to configure dates
        // Scroll smoothly to form
        const el = document.getElementById("get-quote");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("select-tour", handleSelectTour);
    return () => window.removeEventListener("select-tour", handleSelectTour);
  }, []);

  // Close calendar on click outside
  useEffect(() => {
    if (!calOpen) return;
    const handler = (e: MouseEvent) => {
      if (calRef.current && !calRef.current.contains(e.target as Node)) setCalOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [calOpen]);

  const toggleCity = (cityId: string) => {
    if (selectedCities.includes(cityId)) {
      setSelectedCities(selectedCities.filter(id => id !== cityId));
    } else {
      setSelectedCities([...selectedCities, cityId]);
    }
  };

  const handleContactChange = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContact(c => ({ ...c, [k]: e.target.value }));
    if (errors[k]) setErrors(er => { const n = { ...er }; delete n[k]; return n; });
  };

  const validateStep = (s: number) => {
    const err: Record<string, string> = {};
    if (s === 1 && selectedCities.length === 0) {
      err.cities = "Please select at least one city to visit";
    }
    if (s === 2) {
      if (dateType === "exact" && !exactDate) {
        err.date = "Please select your travel date";
      }
      if (dateType === "flexible" && !flexMonth) {
        err.flexMonth = "Please select a tentative travel month";
      }
    }
    if (s === 4) {
      if (!contact.name.trim()) err.name = "Please enter your name";
      if (!contact.phone.trim()) {
        err.phone = "Please enter your phone number";
      } else if (!/^[6-9]\d{9}$/.test(contact.phone.replace(/\s/g, ""))) {
        err.phone = "Enter a valid 10-digit Indian mobile number";
      }
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;
    setStatus("submitting");

    const travelDateString = dateType === "flexible" ? `Flexible: ${flexMonth}` : (exactDate ? fmtDate(exactDate) : "");
    const sortedRoute = getSortedRoute().join(" ➔ ");

    try {
      const payload: Record<string, string> = {
        access_key:     WEB3FORMS_KEY,
        name:           contact.name,
        phone:          contact.phone,
        email:          contact.email || "(not provided)",
        custom_route:   sortedRoute,
        duration:       `${duration} Days`,
        travel_date:    travelDateString,
        travellers:     `${adults} Adults, ${childrenCount} Children`,
        hotels:         hotelClass,
        transport:      transportType,
        special_request:contact.request || "(none)",
      };

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // Track event
        if (typeof window !== "undefined") {
          const w = window as unknown as { dataLayer?: object[] };
          if (w.dataLayer) {
            w.dataLayer.push({
              event: "customizer_submit",
              cities: sortedRoute,
              duration: duration,
              hotel_class: hotelClass,
              transport: transportType,
            });
          }
        }

        // Construct query parameters for redirect & WA builder
        const queryParams = new URLSearchParams({
          name: contact.name,
          phone: contact.phone,
          tour: `Custom Tour: ${sortedRoute}`,
          date: travelDateString,
          package_type: `${hotelClass} Stay + ${transportType}`,
          is_flexible: dateType === "flexible" ? "true" : "false",
          booking_type: "customizer",
          cities: selectedCities.join(","),
          duration: duration.toString(),
          adults: adults.toString(),
          children: childrenCount.toString(),
          hotel_class: hotelClass,
          transport: transportType,
          special_request: contact.request,
        }).toString();

        window.location.href = `${REDIRECT}?${queryParams}`;
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const stepsInfo = [
    { num: 1, title: "Destinations" },
    { num: 2, title: "Duration & Date" },
    { num: 3, title: "Stays & Vehicle" },
    { num: 4, title: "Contact" },
  ];

  return (
    <section
      ref={ref}
      id="get-quote"
      className="relative overflow-hidden"
      data-section="lead-form"
      style={{
        background: "linear-gradient(180deg, #100500 0%, #160800 40%, #1c0a00 80%, #1f0c00 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.25) 30%, rgba(255,107,0,0.3) 50%, rgba(212,175,55,0.25) 70%, transparent 100%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 65% 50%, rgba(255,107,0,0.07) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start animate-fade-in">
          
          {/* ── Left Column: Value Prop ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-saffron-500/40" />
              <span className="text-saffron-400 text-[10px] font-bold tracking-[0.35em] uppercase">
                UP Tour Planner
              </span>
            </div>

            <h2 className="font-playfair font-bold text-white leading-[1.1] mb-5 text-[clamp(1.85rem,4vw,2.8rem)]">
              Interactive <br />
              <span className="text-gradient-gold">Trip Customizer</span>
            </h2>

            <p className="text-white/50 text-[15px] leading-relaxed mb-8">
              Why settle for a pre-made package? Mix and match historical and religious cities to create your custom Uttar Pradesh yatra. 
            </p>

            {/* USPs */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
                <Compass className="text-saffron-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-sm font-semibold">Smart Route Optimization</h4>
                  <p className="text-white/40 text-xs mt-0.5">We rearrange your selected cities to create the fastest, most comfortable driving loop.</p>
                </div>
              </div>
              <div className="flex gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
                <Hotel className="text-saffron-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-sm font-semibold">Curated Hotel Partners</h4>
                  <p className="text-white/40 text-xs mt-0.5">Clean, vetted, and devotee-friendly hotels near core temples or heritage sites.</p>
                </div>
              </div>
              <div className="flex gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
                <Car className="text-saffron-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-sm font-semibold">Private AC Ground Transport</h4>
                  <p className="text-white/40 text-xs mt-0.5">Experienced drivers who know local routes, highway eateries, and tolls inside out.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-saffron-500/10 flex items-center justify-center text-saffron-400 font-bold text-xs">
                ★
              </div>
              <div className="text-xs text-white/50">
                <span className="text-white font-semibold">4,812 families</span> customized their trips with us since 2009.
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Form ── */}
          <div className="lg:col-span-8">
            <div
              className="rounded-3xl border overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                borderColor: "rgba(212,175,55,0.2)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Wizard Progress Header */}
              <div className="bg-black/25 border-b border-white/[0.06] px-6 py-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-saffron-400 font-semibold tracking-widest uppercase">
                    Step {step} of 4
                  </span>
                  <span className="text-xs text-white/45 font-medium">
                    {step === 1 && "Choose Cities"}
                    {step === 2 && "Configure Travel Dates"}
                    {step === 3 && "Accommodations & Vehicles"}
                    {step === 4 && "Final Details"}
                  </span>
                </div>
                
                {/* Horizontal Progress Bar */}
                <div className="flex gap-1.5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  {stepsInfo.map(s => (
                    <div
                      key={s.num}
                      className={`h-full flex-1 rounded-full transition-all duration-300 ${
                        s.num <= step ? "bg-saffron-gradient shadow-[0_0_8px_#FF6B00]" : "bg-white/5"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Wizard Content Panels */}
              <div className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} noValidate>
                  <AnimatePresence mode="wait">
                    
                    {/* STEP 1: City Selection */}
                    {step === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="font-playfair font-bold text-white text-xl sm:text-2xl mb-2">
                            Which cities would you like to cover?
                          </h3>
                          <p className="text-white/40 text-xs sm:text-sm">
                            Select all destinations you want to include in your customized route.
                          </p>
                        </div>

                        {/* City Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {CITIES.map(c => {
                            const isSelected = selectedCities.includes(c.id);
                            return (
                              <button
                                key={c.id}
                                type="button"
                                onClick={() => toggleCity(c.id)}
                                className={`group relative rounded-2xl overflow-hidden border text-left flex flex-col h-[130px] transition-all duration-300 ${
                                  isSelected
                                    ? "border-saffron-500 shadow-[0_0_15px_rgba(255,107,0,0.25)] bg-[#240e00]/40"
                                    : "border-white/10 hover:border-white/20 bg-white/[0.02]"
                                }`}
                              >
                                {/* Thumbnail */}
                                <div className="h-16 w-full relative overflow-hidden bg-white/5">
                                  <img
                                    src={c.img}
                                    alt={c.name}
                                    className="w-full h-full object-cover grayscale-[35%] group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                                  
                                  {/* Selection marker */}
                                  <div className={`absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                                    isSelected 
                                      ? "bg-saffron-500 border-saffron-400 text-white" 
                                      : "border-white/25 bg-black/40 text-transparent"
                                  }`}>
                                    <Check size={11} className="stroke-[3]" />
                                  </div>
                                </div>

                                {/* Text info */}
                                <div className="p-2.5 flex-1 flex flex-col justify-between">
                                  <span className="text-white text-[13px] font-bold block">{c.name}</span>
                                  <span className="text-white/35 text-[9px] line-clamp-1 leading-tight group-hover:text-white/45 transition-colors">
                                    {c.attractions}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Selected Cities Visual Loop */}
                        {selectedCities.length > 0 && (
                          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
                            <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider block mb-2">
                              Optimized Route Sequence:
                            </span>
                            <div className="flex flex-wrap items-center gap-y-2 text-xs font-semibold text-white/95">
                              {getSortedRoute().map((name, i) => (
                                <div key={name} className="flex items-center">
                                  <span className="bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 px-2.5 py-1 rounded-full">
                                    {name}
                                  </span>
                                  {i < selectedCities.length - 1 && (
                                    <span className="text-white/25 px-2 font-light">➔</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {errors.cities && (
                          <p className="text-red-400 text-xs flex items-center gap-1.5 bg-red-500/5 p-2.5 rounded-lg border border-red-500/15">
                            <AlertCircle size={14} />
                            {errors.cities}
                          </p>
                        )}

                        {/* Actions */}
                        <div className="flex justify-end pt-2">
                          <button
                            type="button"
                            onClick={handleNext}
                            className="bg-saffron-gradient text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:brightness-105 active:scale-98 shadow-[0_4px_16px_rgba(255,107,0,0.25)] flex items-center gap-2"
                          >
                            Next: Date &amp; Duration <ChevronRight size={15} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: Duration & Dates */}
                    {step === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="font-playfair font-bold text-white text-xl sm:text-2xl mb-2">
                            Trip Duration &amp; Timeline
                          </h3>
                          <p className="text-white/40 text-xs sm:text-sm">
                            How long do you plan to travel, and when are you starting?
                          </p>
                        </div>

                        {/* Duration Selector */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <label className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                              Total Days: <span className="text-saffron-400 text-[15px] font-bold ml-1">{duration} Days</span>
                            </label>
                            <span className="text-[10px] text-white/35">Range: 2 to 15 Days</span>
                          </div>
                          
                          {/* Visual Range Slider */}
                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              onClick={() => setDuration(d => Math.max(2, d - 1))}
                              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                            >
                              <Minus size={15} />
                            </button>
                            <input
                              type="range"
                              min="2"
                              max="15"
                              value={duration}
                              onChange={(e) => setDuration(parseInt(e.target.value))}
                              className="flex-1 accent-saffron-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
                            />
                            <button
                              type="button"
                              onClick={() => setDuration(d => Math.min(15, d + 1))}
                              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                            >
                              <Plus size={15} />
                            </button>
                          </div>
                        </div>

                        {/* Timeline Date Toggle */}
                        <div className="space-y-3 pt-2">
                          <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase">
                            Date Selection Mode
                          </label>
                          <div className="grid grid-cols-2 gap-2 bg-white/[0.04] p-1.5 rounded-xl border border-white/[0.08]">
                            <button
                              type="button"
                              onClick={() => { setDateType("flexible"); setExactDate(undefined); }}
                              className={`py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                                dateType === "flexible"
                                  ? "bg-saffron-600 text-white shadow-[0_2px_8px_rgba(255,107,0,0.3)]"
                                  : "text-white/50 hover:text-white"
                              }`}
                            >
                              Flexible Month
                            </button>
                            <button
                              type="button"
                              onClick={() => { setDateType("exact"); setFlexMonth(""); }}
                              className={`py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                                dateType === "exact"
                                  ? "bg-saffron-600 text-white shadow-[0_2px_8px_rgba(255,107,0,0.3)]"
                                  : "text-white/50 hover:text-white"
                              }`}
                            >
                              Exact Calendar Date
                            </button>
                          </div>

                          {/* Conditional Fields */}
                          <div className="pt-2">
                            {dateType === "flexible" ? (
                              <div className="relative">
                                <select
                                  value={flexMonth}
                                  onChange={(e) => {
                                    setFlexMonth(e.target.value);
                                    if (errors.flexMonth) setErrors(er => { const n = { ...er }; delete n.flexMonth; return n; });
                                  }}
                                  className={`${inputClass} pr-10 ${errors.flexMonth ? "border-red-400/60" : ""} cursor-pointer`}
                                  style={{ background: "rgba(255,255,255,0.06)" }}
                                >
                                  <option value="" disabled style={{ background: "#160800" }}>Select tentative travel month</option>
                                  <option value="June 2026" style={{ background: "#160800" }}>June 2026</option>
                                  <option value="July 2026" style={{ background: "#160800" }}>July 2026</option>
                                  <option value="August 2026" style={{ background: "#160800" }}>August 2026</option>
                                  <option value="September 2026" style={{ background: "#160800" }}>September 2026</option>
                                  <option value="October 2026" style={{ background: "#160800" }}>October 2026 (Festive Season)</option>
                                  <option value="November 2026" style={{ background: "#160800" }}>November 2026</option>
                                  <option value="December 2026" style={{ background: "#160800" }}>December 2026</option>
                                  <option value="Later / Undecided" style={{ background: "#160800" }}>Later / Undecided</option>
                                </select>
                                <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                                {errors.flexMonth && <p className="text-red-400 text-xs mt-1.5">{errors.flexMonth}</p>}
                              </div>
                            ) : (
                              <div className="relative" ref={calRef}>
                                <button
                                  type="button"
                                  onClick={() => setCalOpen(o => !o)}
                                  className={`${inputClass} flex items-center gap-3 text-left ${errors.date ? "border-red-400/60" : ""} ${calOpen ? "border-saffron-400/70 bg-white/[0.09] ring-2 ring-saffron-400/15" : ""}`}
                                >
                                  <CalendarDays size={15} className={exactDate ? "text-saffron-400" : "text-white/25"} />
                                  <span className={exactDate ? "text-white" : "text-white/25"}>
                                    {exactDate ? fmtDate(exactDate) : "Select travel date"}
                                  </span>
                                </button>
                                <AnimatePresence>
                                  {calOpen && (
                                    <Calendar
                                      selected={exactDate}
                                      onSelect={d => { setExactDate(d); if (errors.date) setErrors(er => { const n = {...er}; delete n.date; return n; }); }}
                                      onClose={() => setCalOpen(false)}
                                    />
                                  )}
                                </AnimatePresence>
                                {errors.date && <p className="text-red-400 text-xs mt-1.5">{errors.date}</p>}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="flex items-center gap-2 border border-white/20 text-white/70 hover:text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-white/5"
                          >
                            <ChevronLeft size={15} /> Back
                          </button>
                          <button
                            type="button"
                            onClick={handleNext}
                            className="bg-saffron-gradient text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:brightness-105 active:scale-98 shadow-[0_4px_16px_rgba(255,107,0,0.25)] flex items-center gap-2"
                          >
                            Next: Preferences <ChevronRight size={15} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: Accommodation & Vehicle */}
                    {step === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="font-playfair font-bold text-white text-xl sm:text-2xl mb-2">
                            Accommodations &amp; Preferences
                          </h3>
                          <p className="text-white/40 text-xs sm:text-sm">
                            Tailor your stay, group size, and local transport options.
                          </p>
                        </div>

                        {/* Hotel preference */}
                        <div className="space-y-3">
                          <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase">
                            Hotel Class Preference
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Budget Stay", desc: "Clean guest houses / Standard hotels" },
                              { label: "Standard (3★)", desc: "Comfortable rooms, breakfast included" },
                              { label: "Premium (4★)", desc: "Spacious hotels, best locations" },
                              { label: "Luxury (5★)", desc: "Premium 5-star & heritage resorts" },
                            ].map(h => (
                              <button
                                key={h.label}
                                type="button"
                                onClick={() => setHotelClass(h.label)}
                                className={`p-4.5 rounded-2xl text-left border transition-all duration-300 ${
                                  hotelClass === h.label
                                    ? "border-saffron-500 bg-[#240e00]/30 shadow-[0_0_12px_rgba(255,107,0,0.15)]"
                                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                                }`}
                              >
                                <span className={`text-[13px] font-bold block ${hotelClass === h.label ? "text-saffron-400" : "text-white"}`}>
                                  {h.label}
                                </span>
                                <span className="text-[10px] text-white/35 block mt-1 leading-tight">{h.desc}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Transport Option */}
                        <div className="space-y-3">
                          <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase">
                            Ground AC Transport Option
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Sedan (AC)", desc: "Dzire/Etios. Ideal for 2-3 travellers" },
                              { label: "SUV (Innova)", desc: "Innova Crysta. Ideal for 4-6 travellers" },
                              { label: "Tempo Traveller", desc: "For group size of 9 to 15+ passengers" },
                              { label: "No Transport", desc: "Only book stays + local temple guides" },
                            ].map(t => (
                              <button
                                key={t.label}
                                type="button"
                                onClick={() => setTransportType(t.label)}
                                className={`p-4.5 rounded-2xl text-left border transition-all duration-300 ${
                                  transportType === t.label
                                    ? "border-saffron-500 bg-[#240e00]/30 shadow-[0_0_12px_rgba(255,107,0,0.15)]"
                                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                                }`}
                              >
                                <span className={`text-[13px] font-bold block ${transportType === t.label ? "text-saffron-400" : "text-white"}`}>
                                  {t.label}
                                </span>
                                <span className="text-[10px] text-white/35 block mt-1 leading-tight">{t.desc}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Group details */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase mb-2">
                              Adults (12+ yrs)
                            </label>
                            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.12] rounded-xl p-2.5 justify-between">
                              <button
                                type="button"
                                onClick={() => setAdults(a => Math.max(1, a - 1))}
                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/80 hover:bg-white/10"
                              >
                                <Minus size={13} />
                              </button>
                              <span className="text-white text-sm font-bold">{adults}</span>
                              <button
                                type="button"
                                onClick={() => setAdults(a => Math.min(30, a + 1))}
                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/80 hover:bg-white/10"
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase mb-2">
                              Children (2-11 yrs)
                            </label>
                            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.12] rounded-xl p-2.5 justify-between">
                              <button
                                type="button"
                                onClick={() => setChildrenCount(c => Math.max(0, c - 1))}
                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/80 hover:bg-white/10"
                              >
                                <Minus size={13} />
                              </button>
                              <span className="text-white text-sm font-bold">{childrenCount}</span>
                              <button
                                type="button"
                                onClick={() => setChildrenCount(c => Math.min(15, c + 1))}
                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/80 hover:bg-white/10"
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="flex items-center gap-2 border border-white/20 text-white/70 hover:text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-white/5"
                          >
                            <ChevronLeft size={15} /> Back
                          </button>
                          <button
                            type="button"
                            onClick={handleNext}
                            className="bg-saffron-gradient text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:brightness-105 active:scale-98 shadow-[0_4px_16px_rgba(255,107,0,0.25)] flex items-center gap-2"
                          >
                            Next: Contact Details <ChevronRight size={15} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4: Final Contact Form */}
                    {step === 4 && (
                      <motion.div
                        key="step-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-5"
                      >
                        <div>
                          <h3 className="font-playfair font-bold text-white text-xl sm:text-2xl mb-2">
                            Where should we send your custom plan?
                          </h3>
                          <p className="text-white/40 text-xs sm:text-sm">
                            Almost ready! Share your details, and a travel planner will connect to share your final itinerary and pricing.
                          </p>
                        </div>

                        {/* Name + Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Field label="Full Name" required>
                            <div className="relative">
                              <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                              <input
                                type="text"
                                value={contact.name}
                                onChange={handleContactChange("name")}
                                placeholder="Your name"
                                className={`${inputClass} pl-10 ${errors.name ? "border-red-400/60 focus:border-red-400/70" : ""}`}
                                autoComplete="name"
                              />
                            </div>
                            {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                          </Field>

                          <Field label="Phone Number" required>
                            <div className="relative">
                              <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                              <input
                                type="tel"
                                value={contact.phone}
                                onChange={handleContactChange("phone")}
                                placeholder="10-digit mobile number"
                                className={`${inputClass} pl-10 ${errors.phone ? "border-red-400/60 focus:border-red-400/70" : ""}`}
                                autoComplete="tel"
                                inputMode="numeric"
                              />
                            </div>
                            {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                          </Field>
                        </div>

                        {/* Email */}
                        <Field label="Email Address">
                          <div className="relative">
                            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                            <input
                              type="email"
                              value={contact.email}
                              onChange={handleContactChange("email")}
                              placeholder="your@email.com (optional)"
                              className={`${inputClass} pl-10`}
                              autoComplete="email"
                            />
                          </div>
                        </Field>

                        {/* Special requests */}
                        <Field label="Special Requests / Custom Notes">
                          <div className="relative">
                            <MessageSquare size={15} className="absolute left-3.5 top-4 text-white/25 pointer-events-none" />
                            <textarea
                              value={contact.request}
                              onChange={handleContactChange("request")}
                              placeholder="Elderly pilgrims, wheelchair request, food requirements, specific temples or puja details... (optional)"
                              rows={3}
                              className={`${inputClass} pl-10 resize-none leading-relaxed`}
                            />
                          </div>
                        </Field>

                        {status === "error" && (
                          <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-400/20 rounded-xl px-4 py-3">
                            <AlertCircle size={15} className="text-red-400 flex-shrink-0" />
                            <p className="text-red-300 text-xs">
                              Something went wrong. Please connect with us directly on WhatsApp.
                            </p>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            type="button"
                            onClick={handleBack}
                            disabled={status === "submitting"}
                            className="flex items-center gap-2 border border-white/20 text-white/70 hover:text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-white/5 disabled:opacity-50"
                          >
                            <ChevronLeft size={15} /> Back
                          </button>
                          
                          <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="wa-shimmer bg-saffron-gradient text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:brightness-105 active:scale-98 shadow-[0_4px_16px_rgba(255,107,0,0.25)] flex items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                          >
                            {status === "submitting" ? (
                              <>
                                <Loader2 size={15} className="animate-spin" />
                                Processing Request...
                              </>
                            ) : (
                              <>
                                Generate Custom Itinerary <Sparkles size={14} />
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </form>
              </div>

              {/* Wizard Footer Trust Stats */}
              <div className="bg-white/[0.02] border-t border-white/[0.06] px-6 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                  No Hidden Costs
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                  Free Quote Response
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                  Verified Local Stays
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
