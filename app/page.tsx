import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadCapture from "@/components/LeadCapture";
import TrustStrip from "@/components/TrustStrip";
import YatraPhotoMarquee from "@/components/YatraPhotoMarquee";
import TrustMetrics from "@/components/TrustMetrics";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Itinerary from "@/components/Itinerary";
import HotelShowcase from "@/components/HotelShowcase";
import LuxuryPartnersStrip from "@/components/LuxuryPartnersStrip";
import Testimonials from "@/components/Testimonials";
import VideoTestimonial from "@/components/VideoTestimonial";
import Gallery from "@/components/Gallery";
import GoogleReviews from "@/components/GoogleReviews";
import SemanticContent from "@/components/SemanticContent";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import OfferPopup from "@/components/OfferPopup";
import { faqData } from "@/lib/faqData";

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TourOperator", "LocalBusiness"],
  name: "UP Tours Customizer",
  alternateName: ["UP Custom Tours", "Uttar Pradesh Tour Planner"],
  url: "https://tripcustomizer.vercel.app", // Keeping original domain configuration
  logo: "https://tripcustomizer.vercel.app/logo.png",
  image: "https://tripcustomizer.vercel.app/logo.png",
  description:
    "UP Tours Customizer specializes in tailor-made travel packages across Uttar Pradesh. We design custom itineraries covering Agra, Mathura, Vrindavan, Lucknow, Naimisharanya, Ayodhya, Chhapaiya, Prayagraj, Varanasi, Vindhyachal, Bodhgaya, and Chitrakoot, including premium hotel stays, private AC vehicles, and licensed local guides.",
  telephone: "+919235222399",
  email: "tripcustomizer@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Second Floor, Plot No 12, Transport Nagar",
    addressLocality: "Ayodhya",
    addressRegion: "Uttar Pradesh",
    postalCode: "224001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.7922",
    longitude: "82.1998",
  },
  areaServed: [
    { "@type": "City", name: "Agra" },
    { "@type": "City", name: "Mathura" },
    { "@type": "City", name: "Vrindavan" },
    { "@type": "City", name: "Lucknow" },
    { "@type": "City", name: "Naimisharanya" },
    { "@type": "City", name: "Ayodhya" },
    { "@type": "City", name: "Chhapaiya" },
    { "@type": "City", name: "Prayagraj" },
    { "@type": "City", name: "Varanasi" },
    { "@type": "City", name: "Vindhyachal" },
    { "@type": "City", name: "Bodhgaya" },
    { "@type": "City", name: "Chitrakoot" },
    { "@type": "Country", name: "India" },
  ],
  touristType: ["Religious pilgrims", "Family pilgrims", "Senior citizens", "Spiritual groups"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "4812",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ramesh Gupta" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The custom trip builder was amazing! We planned a 7-day trip covering Ayodhya, Prayagraj, and Varanasi. The hotels were premium and local transfers were super smooth.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sunita Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Travelled with senior parents. Customizing the itinerary to have ground floor rooms, wheelchair access at Varanasi ghats, and a slower pace was a blessing.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Customizable UP Tour Circuits",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Braj Bhoomi & Taj Mahal Circuit",
          description: "3 Nights 4 Days customizable tour covering Mathura, Vrindavan, and Agra",
        },
        price: "24000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Purvanchal Divine & Ramayana Circuit",
          description: "6 Nights 7 Days customizable tour covering Ayodhya, Prayagraj, Varanasi, Vindhyachal, and Chitrakoot",
        },
        price: "48000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Spiritual Triangle of UP",
          description: "4 Nights 5 Days customizable tour covering Ayodhya, Prayagraj, and Varanasi",
        },
        price: "36000",
        priceCurrency: "INR",
      },
    ],
  },
  priceRange: "₹-₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer, Credit Card",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.instagram.com/ayodhyadharshan/",
    "https://www.facebook.com/Ayodhhyadharsha/",
  ],
};

// Tourist Destination — Uttar Pradesh covering key attractions
const destinationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Uttar Pradesh Custom Tours",
  description:
    "Uttar Pradesh holds deep religious, historical, and cultural value. It features major landmarks like Taj Mahal, Ram Mandir in Ayodhya, Dashashwamedh Ghat & Kashi Vishwanath in Varanasi, and Triveni Sangam in Prayagraj.",
  url: "https://tripcustomizer.vercel.app",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.8467",
    longitude: "80.9462",
  },
  includesAttraction: [
    {
      "@type": "TouristAttraction",
      name: "Taj Mahal (Agra)",
      description: "Symbol of love and architectural marvel in Agra.",
    },
    {
      "@type": "TouristAttraction",
      name: "Ram Mandir (Ayodhya)",
      description: "Birthplace of Lord Ram and a major pilgrimage temple.",
    },
    {
      "@type": "TouristAttraction",
      name: "Kashi Vishwanath Temple (Varanasi)",
      description: "Historic temple dedicated to Lord Shiva on the sacred Ganga.",
    },
    {
      "@type": "TouristAttraction",
      name: "Triveni Sangam (Prayagraj)",
      description: "Confluence of Ganga, Yamuna, and Saraswati rivers.",
    },
  ],
};

// HowTo schema for customization process
const bookingHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Customize Your UP Tour",
  description:
    "Steps to build and book a custom tour package across Uttar Pradesh's major spiritual and heritage hubs.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      position: "1",
      name: "Select Cities to Visit",
      text: "Select one or multiple cities like Varanasi, Ayodhya, Prayagraj, Mathura, Agra, etc.",
    },
    {
      "@type": "HowToStep",
      position: "2",
      name: "Choose Duration & Dates",
      text: "Input number of travel days and select your start date or tentative month.",
    },
    {
      "@type": "HowToStep",
      position: "3",
      name: "Choose Hotel and Vehicle Preferences",
      text: "Choose between standard 3★, premium 4★, or luxury 5★ hotels and Sedan/SUV vehicles.",
    },
    {
      "@type": "HowToStep",
      position: "4",
      name: "Receive Custom Quote & Book",
      text: "Review the generated WhatsApp itinerary summary and connect with a booking specialist to finalize your reservation.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.slice(0, 10).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Customizable UP Tour Packages",
  description:
    "Tailor-made tour packages covering Ayodhya, Varanasi, Prayagraj, Mathura, Vrindavan, Agra, and more.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Braj Bhoomi & Taj Mahal Circuit — 3 Nights / 4 Days",
        description:
          "Custom tour covering Mathura, Vrindavan, and Agra with stays and AC transfers.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bara_Imambara_Lucknow.jpg/960px-Bara_Imambara_Lucknow.jpg"
        ],
        sku: "braj-taj-custom",
        brand: {
          "@type": "Brand",
          name: "UP Tours"
        },
        offers: {
          "@type": "Offer",
          price: "24000",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://tripcustomizer.vercel.app/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Purvanchal Divine & Ramayana Circuit — 6 Nights / 7 Days",
        description:
          "Custom pilgrimage covering Ayodhya, Prayagraj, Varanasi, Vindhyachal, and Chitrakoot.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png"
        ],
        sku: "purvanchal-custom",
        brand: {
          "@type": "Brand",
          name: "UP Tours"
        },
        offers: {
          "@type": "Offer",
          price: "48000",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://tripcustomizer.vercel.app/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://tripcustomizer.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "UP Tour Customizer",
      item: "https://tripcustomizer.vercel.app/#get-quote",
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema Markup — TourOperator + LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* FAQPage — 20 Q&As for AI Overview and voice search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ItemList — 6 tour packages with pricing */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      {/* BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* TouristDestination — Ayodhya with key attractions */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }} />
      {/* HowTo — booking process for voice search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingHowToSchema) }} />

      <AnnouncementBar />
      <Navbar />

      <main>
        {/* 1. Hero — above-the-fold conversion section */}
        <Hero />

        {/* 2. Lead Capture — form immediately after hero for Google Ads conversion */}
        <LeadCapture />

        {/* 3. Trust Strip — immediate social proof */}
        <TrustStrip />

        {/* 3b. Yatra Photo Marquee — sliding track of real devotee group photos */}
        <YatraPhotoMarquee />

        {/* 3c. Trust Metrics — animated numbers */}
        <TrustMetrics />

        {/* 4. Luxury Partners Strip — luxury 5-star brand trust strip */}
        <LuxuryPartnersStrip />

        {/* 5. Packages — 6 destination packages */}
        <Packages />

        {/* 6. Why Choose Us — USP grid */}
        <WhyChooseUs />

        {/* 7. Itinerary — day-wise expandable plans */}
        <Itinerary />

        {/* 8. Hotel Showcase — trust signal for hotel searches */}
        <HotelShowcase />

        {/* 9. Testimonials — social proof carousel */}
        <Testimonials />

        {/* 9a. Video Testimonial — Blogger UnderTheSun yatra review with parents */}
        <VideoTestimonial />

        {/* 9b. Gallery — real pilgrim memories to build devotee trust */}
        <Gallery />

        {/* 10. Google Reviews — verified third-party trust signal */}
        <GoogleReviews />

        {/* 10. Semantic Content — conversational Q&A + package matrix for AI/voice SEO */}
        <SemanticContent />

        {/* 11. FAQ — 20 Q&As for featured snippets and Google AI Overview */}
        <FAQ />

        {/* 12. Final CTA — conversion push */}
        <FinalCTA />
      </main>

      <Footer />
      <StickyWhatsApp />
      <OfferPopup />
    </>
  );
}
