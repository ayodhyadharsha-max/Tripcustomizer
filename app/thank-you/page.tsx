"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Home, Phone, CalendarDays, Map, User, Users, Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const WA_NUMBER = "919235222399";

function ThankYouDetails() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const phone = searchParams.get("phone") || "";
  const tour = searchParams.get("tour") || "";
  const date = searchParams.get("date") || "";
  const isFlexible = searchParams.get("is_flexible") === "true";
  const bookingType = searchParams.get("booking_type") || "confirm";
  const packageType = searchParams.get("package_type") || "";
  const tokenAmount = searchParams.get("token_amount") || "1,999";

  // Customizer params
  const isCustomizer = bookingType === "customizer";
  const cities = searchParams.get("cities") || "";
  const duration = searchParams.get("duration") || "";
  const adults = searchParams.get("adults") || "";
  const children = searchParams.get("children") || "";
  const hotelClass = searchParams.get("hotel_class") || "";
  const transport = searchParams.get("transport") || "";
  const specialRequest = searchParams.get("special_request") || "";

  const [countdown, setCountdown] = useState(3);
  const [redirected, setRedirected] = useState(false);

  let waMsgText = "";
  if (isCustomizer) {
    const routeText = cities
      .split(",")
      .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
      .join(" ➔ ");
    waMsgText = `Namaste! 🙏 I have built a custom UP tour plan using the Trip Customizer:\n\n• *Name*: ${name}\n• *Phone*: ${phone}\n• *Custom Route*: ${routeText}\n• *Duration*: ${duration} Days\n• *Travel Date*: ${date}\n• *Travellers*: ${adults} Adults, ${children} Children\n• *Hotel Class*: ${hotelClass}\n• *Transport*: ${transport}${
      specialRequest ? `\n• *Special Notes*: ${specialRequest}` : ""
    }\n\nPlease share the customized day-wise itinerary and quote.`;
  } else {
    const noteString =
      bookingType === "lock"
        ? `\n• *Note*: I want to lock today's special rate with a flexible ₹${tokenAmount} token deposit`
        : "\n• *Note*: I want to confirm my booking with a 25% advance payment";
    const packageTypeLine = packageType ? `\n• *Package Class*: ${packageType}` : "";
    waMsgText = `Jai Shri Ram! 🙏 I have submitted the yatra inquiry form:\n\n• *Name*: ${name}\n• *Phone*: ${phone}\n• *Tour*: ${tour}${packageTypeLine}\n• *Travel Date*: ${date}${noteString}\n\nPlease share the details and custom itinerary.`;
  }

  const waMsg = encodeURIComponent(waMsgText);
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (!redirected) {
      setRedirected(true);
      window.location.href = waUrl;
    }
  }, [countdown, redirected, waUrl]);

  return (
    <div className="w-full max-w-xl mx-auto text-center px-4">
      {/* Icon checkmark */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-8 flex justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <CheckCircle2 size={44} />
        </div>
      </motion.div>

      {/* Success Title */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="font-playfair font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight"
      >
        {isCustomizer ? "Trip Customization Submitted!" : "Enquiry Submitted Successfully!"}
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-white/70 text-base sm:text-lg mb-4 leading-relaxed"
      >
        {name ? `Thank you, ${name}! ` : "Thank you! "}
        Your custom tour preferences have been saved. We are redirecting you to WhatsApp to connect with our travel expert...
      </motion.p>

      {/* Redirect Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-2 mb-8 text-saffron-400 font-medium text-sm"
      >
        <Loader2 size={16} className="animate-spin text-saffron-500" />
        <span>Redirecting to WhatsApp in {countdown}s...</span>
      </motion.div>

      {/* Details Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-6 mb-8 text-left space-y-4"
      >
        <h3 className="font-playfair font-bold text-white text-lg border-b border-white/[0.06] pb-3 mb-1">
          {isCustomizer ? "Custom Route Preferences" : "Yatra Details Summary"}
        </h3>

        <div className="grid grid-cols-1 gap-3.5">
          <div className="flex items-center gap-3">
            <User size={16} className="text-saffron-400" />
            <div>
              <span className="text-white/45 text-[11px] block uppercase font-semibold">Devotee Name</span>
              <span className="text-white text-[14px]">{name || "Not provided"}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={16} className="text-saffron-400" />
            <div>
              <span className="text-white/45 text-[11px] block uppercase font-semibold">Contact Number</span>
              <span className="text-white text-[14px]">{phone || "Not provided"}</span>
            </div>
          </div>

          {isCustomizer ? (
            <>
              <div className="flex items-center gap-3">
                <Map size={16} className="text-saffron-400" />
                <div>
                  <span className="text-white/45 text-[11px] block uppercase font-semibold">Custom Sequence</span>
                  <span className="text-white text-[14px] leading-snug">
                    {cities
                      .split(",")
                      .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
                      .join(" ➔ ")}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Sparkles size={16} className="text-saffron-400" />
                <div>
                  <span className="text-white/45 text-[11px] block uppercase font-semibold">Stays &amp; Vehicle</span>
                  <span className="text-white text-[14px]">{`${hotelClass} Stays · ${transport} Transfers`}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users size={16} className="text-saffron-400" />
                <div>
                  <span className="text-white/45 text-[11px] block uppercase font-semibold">Group Size &amp; Duration</span>
                  <span className="text-white text-[14px]">{`${duration} Days yatra · ${adults} Adults, ${children} Kids`}</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <Map size={16} className="text-saffron-400" />
                <div>
                  <span className="text-white/45 text-[11px] block uppercase font-semibold">Selected Yatra</span>
                  <span className="text-white text-[14px]">{tour || "Custom Trip"}</span>
                </div>
              </div>

              {packageType && (
                <div className="flex items-center gap-3">
                  <Sparkles size={16} className="text-saffron-400" />
                  <div>
                    <span className="text-white/45 text-[11px] block uppercase font-semibold">Package Class Preference</span>
                    <span className="text-white text-[14px]">{packageType}</span>
                  </div>
                </div>
              )}
            </>
          )}

          <div className="flex items-center gap-3">
            <CalendarDays size={16} className="text-saffron-400" />
            <div>
              <span className="text-white/45 text-[11px] block uppercase font-semibold">Travel Date</span>
              <span className="text-white text-[14px]">{date || "Flexible Dates"}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href={waUrl}
          className="wa-shimmer flex items-center justify-center gap-2.5 bg-saffron-gradient text-white py-3.5 px-8 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-[0_4px_20px_rgba(255,107,0,0.3)]"
        >
          <span>Continue to Booking Confirmation</span>
        </a>

        <a
          href="/"
          className="flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/40 text-white/70 hover:text-white py-3.5 px-6 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto hover:bg-white/5"
        >
          <Home size={16} />
          <span>Back to Homepage</span>
        </a>
      </motion.div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4"
      style={{
        background: "linear-gradient(180deg, #100500 0%, #160800 50%, #0d0400 100%)",
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Top divider accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[3px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center text-white/50 gap-3">
            <span className="animate-spin text-2xl text-saffron-500">⏳</span>
            <span>Loading details...</span>
          </div>
        }>
          <ThankYouDetails />
        </Suspense>
      </div>
    </div>
  );
}
