"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Do you offer customisable packages to suit different budgets?",
    a: "Yes, we are committed to provide you all the services tailored to your budget and requirements. Our dedicated planners ensure to turn your dream wedding into reality without turning it heavy on your pockets.",
  },
  {
    q: "Where is Kala Farm & Celebration located and what amenities are available?",
    a: "We are located on Pawangaon Ghorpad Road, Kamptee, Nagpur, Maharashtra. Kala Farms is an all-in-one destination wedding venue featuring a luxury resort with family stay suites, swimming pool for haldi & sundowners, a grand open celebration lawn, and a palatial air-conditioned banquet hall.",
  },
  {
    q: "How early should we book Kala Farms for our wedding or celebration?",
    a: "Ideally, venue recce and booking should be done 6-12 months in advance as popular auspicious Muhurat dates, winter wedding slots, and weekend dates book up very quickly.",
  },
  {
    q: "Are there additional hidden costs beyond our venue booking quote?",
    a: "We maintain 100% transparent pricing with no hidden charges. All inclusions (lawn, hall, pool, rooms, electricity/genset, valet parking) are clearly outlined in your proposal.",
  },
  {
    q: "What is the guest and accommodation capacity at Kala Farms?",
    a: "Kala Farms easily accommodates gatherings from 200 up to 1,500+ guests across our expansive wedding lawns and grand indoor AC hall. For destination weddings, on-site luxury resort rooms accommodate close family members with direct pool access.",
  },
];

export default function FAQSection({ onOpenPlanner }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center gap-y-8 bg-[#D1E9DE]/30 py-12 md:gap-y-12 md:p-16 my-8"
      id="frequently_asked_questions_section"
    >
      {/* Decorative Corner Floral Patterns */}
      <img
        alt="FAQ Icon"
        className="pointer-events-none absolute right-0 top-0 hidden object-contain opacity-25 mix-blend-multiply md:block"
        width={300}
        height={300}
        src="/images/HomePage/new/flower-pattern.png"
      />
      <img
        alt="FAQ Icon"
        className="pointer-events-none absolute bottom-0 left-0 hidden rotate-180 object-contain opacity-25 mix-blend-multiply md:block"
        width={300}
        height={300}
        src="/images/HomePage/new/flower-pattern.png"
      />

      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-y-2 md:gap-y-4 relative z-10 text-center px-4">
        <h2 className="font-playfair text-3xl font-semibold md:text-[44px] text-[#1C2431]">
          <span className="hidden md:block">Frequently asked questions</span>
          <span className="md:hidden">FAQs</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base font-plus-jakarta-sans">
          Everything you need to know about planning your luxury wedding
        </p>
      </div>

      {/* Accordion Container */}
      <div className="max-w-2xl w-full space-y-3 px-4 text-[#1C2431] relative z-10">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-gray-200/80 bg-white p-4 md:p-5 shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-3 text-left focus:outline-none"
              >
                <span className="text-[15px] font-semibold text-gray-900 lg:text-lg">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#9A2157]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {isOpen && (
                <div className="pt-3 text-sm text-gray-600 lg:text-base leading-relaxed border-t border-gray-100 mt-3 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions CTA */}
      <div className="relative z-10 text-center pt-2">
        <p className="text-sm text-gray-600 mb-3">Still have questions regarding your date or budget?</p>
        <button
          onClick={onOpenPlanner}
          className="px-6 py-2.5 rounded-xl bg-white border border-[#9A2157] text-[#9A2157] font-semibold text-sm hover:bg-[#9A2157] hover:text-white transition-all shadow-sm"
        >
          Talk to a Wedding Consultant
        </button>
      </div>

      {/* Bottom Green Curve */}
      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full">
        <div className="relative">
          <img
            alt=""
            className="max-h-24 w-full object-cover object-bottom"
            src="/images/HomePage/new/green-curve.svg"
          />
        </div>
      </div>
    </section>
  );
}
