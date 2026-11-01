"use client";

import { useState } from "react";
import Image from "next/image";

const ADVANTAGES = [
  {
    id: "exclusivity",
    badge: "100% Private Estate",
    title: "One Wedding at a Time",
    subtitle: "Complete Estate Exclusivity",
    image: "/images/estate-aerial-twilight.jpg",
    alt: "Kala Farms 25-Acre Private Estate at Twilight",
    description:
      "Unlike crowded city banquet halls and hotels, Kala Farms is solely reserved for your family during your wedding dates. 25 sprawling acres, zero overlapping events, and total privacy for your sacred celebrations.",
    perks: [
      "No conflicting weddings or outside banquet crowds",
      "Full estate freedom: Lawns, Banquet, Pool & Villas",
      "Bespoke security & VIP gate hospitality for your guests",
    ],
    highlight: "1 Wedding per Day • 100% Privacy",
  },
  {
    id: "stay",
    badge: "Resort Hospitality",
    title: "Stay & Celebrate Together",
    subtitle: "18+ Luxury Suites On-Site",
    image: "/images/bridal-suite-regal.jpg",
    alt: "Kala Farms Luxury Bridal Suite and Resort Accommodation",
    description:
      "Keep both families, friends, and elders together under one roof. Our air-conditioned resort suites and private bridal villa eliminate hectic cross-city traffic, allowing you to relax and celebrate effortlessly.",
    perks: [
      "18+ boutique AC suites with modern ensuite baths",
      "Opulent bridal dressing villa with 360° daylight mirrors",
      "Turquoise swimming pool for daytime haldi & sundowners",
    ],
    highlight: "Zero City Commute • Family Stays Together",
  },
  {
    id: "production",
    badge: "End-to-End Execution",
    title: "In-House Master Production",
    subtitle: "Price Beat Guarantee",
    image: "/images/floral-ceiling.jpg",
    alt: "Kala Farms Suspended Floral Ceiling and Banquet Decor",
    description:
      "From concert-grade sound & lighting truss to 50+ Vedic mandap setups and royal multi-cuisine chef boulevards. We deliver turnkey perfection with transparent pricing and full freedom for outside vendors.",
    perks: [
      "In-house floral artisans, sound engineers & lighting crews",
      "Bring your favorite decorators & caterers with 0% royalty",
      "Price Beat Guarantee: We beat comparable quotes by 10-15%",
    ],
    highlight: "Save ₹3-5 Lakhs • Zero Hidden Surcharges",
  },
];

const COMPARISON_POINTS = [
  {
    feature: "Venue Privacy",
    kalaFarms: "Entire 25 acres reserved exclusively for your family. Zero strangers.",
    others: "Multiple weddings sharing common lobbies, elevators, and parking.",
  },
  {
    feature: "Guest Accommodations",
    kalaFarms: "18+ luxury AC suites right on property with resort swimming pool.",
    others: "Guests scattered across distant hotels with endless city transit.",
  },
  {
    feature: "Celebration Timelines",
    kalaFarms: "Flexible midnight pheras & uninterrupted sangeet DJ sessions.",
    others: "Rigid banquet time limits with steep overtime penalties.",
  },
  {
    feature: "Outside Vendors",
    kalaFarms: "Bring outside caterers, photographers & artists with 0% royalty.",
    others: "Compulsory vendor monopolies or hefty outside royalty charges.",
  },
];

export default function WhyAreWeBetter({ onOpenPlanner }) {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section
      className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FFFDF9] overflow-hidden"
      id="why_are_we_better_section"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-stone-200/30 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#9A2157]/10 px-4 py-1.5 border border-[#9A2157]/20">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9A2157] font-plus-jakarta-sans">
              The Kala Farms Advantage
            </span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2431] leading-tight">
            Why Central India Chooses <br className="hidden sm:inline" />
            <span className="text-[#9A2157]">Kala Farms</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-plus-jakarta-sans leading-relaxed">
            Experience the rare luxury of a private 25-acre destination estate designed specifically to make royal Indian weddings stress-free, magnificent, and unforgettable.
          </p>
        </div>

        {/* 3 Pillars of Distinction Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(154,33,87,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Photo Header */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-900">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-md text-amber-200 border border-white/20 text-xs font-semibold px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>

                {/* Bottom Highlight Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider text-amber-300">
                    {card.subtitle}
                  </p>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-sm text-gray-600 leading-relaxed font-plus-jakarta-sans">
                  {card.description}
                </p>

                {/* Key Checklist Points */}
                <div className="space-y-2.5 pt-2 border-t border-stone-100">
                  {card.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <span className="text-[#9A2157] font-bold mt-0.5 shrink-0">✓</span>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Highlight Strip */}
                <div className="mt-auto pt-3">
                  <div className="rounded-xl bg-[#FAF6F0] p-3 text-center border border-[#9A2157]/15">
                    <span className="text-xs font-bold text-[#9A2157]">
                      ★ {card.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Section Toggle */}
        <div className="mt-12 bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-900">
                Kala Farms vs Standard City Banquets &amp; Hotels
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-plus-jakarta-sans">
                See why 300+ couples chose a 25-acre destination estate over traditional banquet halls.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowComparison(!showComparison)}
              className="text-xs sm:text-sm font-bold text-[#9A2157] hover:text-[#7A1844] flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#9A2157]/10 transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>{showComparison ? "Hide Detailed Comparison" : "View Detailed Comparison"}</span>
              <span className="text-base">{showComparison ? "▲" : "▼"}</span>
            </button>
          </div>

          {showComparison && (
            <div className="mt-6 overflow-x-auto pt-2 border-t border-stone-100">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-gray-500 font-semibold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-3">Decision Factor</th>
                    <th className="py-3 px-3 text-[#9A2157] bg-[#FFF8FA] rounded-t-lg">Kala Farms Estate</th>
                    <th className="py-3 px-3 text-gray-500">Standard City Banquets</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {COMPARISON_POINTS.map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-3.5 px-3 font-semibold text-gray-800 align-top">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-3 text-gray-900 bg-[#FFF8FA] font-medium align-top">
                        <span className="text-emerald-700 font-bold mr-1.5">✓</span>
                        {row.kalaFarms}
                      </td>
                      <td className="py-3.5 px-3 text-gray-500 align-top">
                        <span className="text-rose-500 font-bold mr-1.5">✕</span>
                        {row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Bottom Dual Action Call-To-Action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            type="button"
            onClick={onOpenPlanner}
            className="btn-wine-gradient text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Plan My Wedding at Kala Farms</span>
            <span>→</span>
          </button>

          <a
            href="https://api.whatsapp.com/send?phone=918668719180&text=Hi%20Kala%20Farms%2C%20I%20would%20like%20to%20know%20more%20about%20your%20wedding%20packages%20and%20availabilities"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl border-2 border-[#1FAF38] text-[#1FAF38] hover:bg-[#1FAF38] hover:text-white font-bold text-base transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <span>Chat With Senior Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
}
