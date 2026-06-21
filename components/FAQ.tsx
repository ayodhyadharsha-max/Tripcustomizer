"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/lib/faqData";

const WA_NUMBER = "919235222399";

function FAQItem({ item, index }: { item: (typeof faqData)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <details
        name="faq-accordion"
        className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-gray-200 open:shadow-[0_4px_24px_rgba(0,0,0,0.07)] open:border-saffron-100 transition-all duration-300"
      >
        <summary
          className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none"
        >
          <span className="font-playfair font-semibold text-base sm:text-lg leading-snug text-divine-dark group-open:text-saffron-700 transition-colors duration-300">
            {item.question}
          </span>
          <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 group-open:bg-saffron-100 transition-all duration-300">
            <Plus size={15} className="text-gray-400 group-open:hidden" />
            <Minus size={15} className="text-saffron-600 hidden group-open:block" />
          </div>
        </summary>

        <div className="px-5 sm:px-6 pb-6">
          <div className="h-px bg-saffron-100 mb-4" />
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
            {item.answer}
          </p>
        </div>
      </details>
    </motion.div>
  );
}

export default function FAQ() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="faq" className="py-24 sm:py-32 bg-sacred-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="ornament-line max-w-[220px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Common Questions Answered
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-divine-dark mb-4 leading-tight">
            Frequently Asked{" "}
            <span className="text-gradient-saffron">Questions</span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Everything you need to know before booking your Ayodhya yatra. Still have questions? We respond in 2 minutes.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqData.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA block below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 bg-divine-dark rounded-3xl p-8 sm:p-10 text-center"
        >
          <div className="text-3xl mb-3" aria-hidden>🙏</div>
          <h3 className="font-playfair font-bold text-white text-2xl mb-2">
            Still Have Questions?
          </h3>
          <p className="text-white/70 text-sm mb-7 max-w-xs mx-auto">
            Our travel experts will call you to answer all questions — free of charge.
          </p>
          <a
            href="#get-quote"
            className="wa-shimmer inline-flex items-center justify-center bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-4 rounded-full font-semibold text-[15px] transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] shadow-lg"
          >
            Enquire Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
