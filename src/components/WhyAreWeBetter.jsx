"use client";

import { useState, useRef, useEffect } from "react";
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
  {
    id: "lawns",
    badge: "Grand Scale Venues",
    title: "Sprawling Lawn & AC Banquet",
    subtitle: "30,000 Sq.Ft Lawn + Pillarless Hall",
    image: "/images/night-lawn.jpg",
    alt: "Kala Farms 30,000 Sq.Ft Night Celebration Lawn",
    description:
      "Central India's largest manicured open-air wedding lawn paired with a palatial air-conditioned banquet hall. Accommodate up to 2,000+ guests with separate dining boulevards and private parking for 800+ cars.",
    perks: [
      "Weather-proof versatility: open lawn + AC grand banquet",
      "Dedicated dining boulevard for seamless live counters",
      "Grand 60-ft driveway for royal baraat & fireworks",
    ],
    highlight: "Up to 2,000+ Guests • 800+ Car Parking",
  },
  {
    id: "catering",
    badge: "Royal Hospitality",
    title: "Gourmet Live Boulevards",
    subtitle: "Zero Monopolies • 0% Royalty",
    image: "/images/royal-dining-feast.jpg",
    alt: "Kala Farms Royal Dining Feast and Gourmet Catering",
    description:
      "Silver cloche service with curated royal multi-course delicacies prepared by master banquet chefs. Bring your own preferred external caterers or decorators with absolutely 0% royalty or surcharge fees.",
    perks: [
      "Live chef counters: Italian, Continental, Awadhi & Chaat",
      "100% pure vegetarian live kitchen facilities available",
      "Full flexibility to bring your trusted outside vendors",
    ],
    highlight: "0% Outside Vendor Royalty • Bespoke Menus",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // Update active dot index based on scroll position
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, children } = carouselRef.current;
    if (!children.length) return;

    let closestIdx = 0;
    let minDiff = Infinity;
    const containerLeft = carouselRef.current.getBoundingClientRect().left;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const childLeft = child.getBoundingClientRect().left;
      const diff = Math.abs(childLeft - containerLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }
    setActiveIndex(closestIdx);
  };

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return;
    const children = carouselRef.current.children;
    if (children[index]) {
      children[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIndex === 0 ? ADVANTAGES.length - 1 : activeIndex - 1;
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === ADVANTAGES.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIdx);
  };

  return (
    <section
      className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FFFDF9] overflow-hidden"
      id="why_are_we_better_section"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-stone-200/30 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#9A2157]/10 px-4 py-1.5 border border-[#9A2157]/20">
              <span className="w-2 h-2 rounded-full bg-[#9A2157] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#9A2157] font-plus-jakarta-sans">
                The Kala Farms Advantage
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2431] leading-tight">
              Why Central India Chooses <br />
              <span className="text-[#9A2157]">Kala Farms</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-plus-jakarta-sans leading-relaxed">
              Explore why 300+ royal families choose our 25-acre destination estate for stress-free, luxurious wedding celebrations.
            </p>
          </div>

          {/* Desktop & Tablet Carousel Arrows & Counter */}
          <div className="flex items-center gap-4 self-start md:self-end">
            {/* Slide Counter */}
            <div className="text-xs sm:text-sm font-semibold text-gray-500 font-plus-jakarta-sans px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm">
              <span className="text-[#9A2157] font-bold">0{activeIndex + 1}</span> / 0{ADVANTAGES.length}
            </div>

            {/* Prev Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous advantage"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[#9A2157] hover:text-white hover:border-[#9A2157] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next advantage"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[#9A2157] hover:text-white hover:border-[#9A2157] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container (Native Touch Swipe + Snap on Mobile & Desktop) */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-5 sm:gap-6 lg:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1"
          >
            {ADVANTAGES.map((card, idx) => (
              <div
                key={card.id}
                className="w-[86vw] max-w-[340px] sm:w-[380px] sm:max-w-[380px] lg:w-[390px] lg:max-w-[390px] shrink-0 snap-center sm:snap-start group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(154,33,87,0.12)] transition-all duration-300 flex flex-col select-none"
              >
                {/* Photo Header */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-900 shrink-0">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/65 backdrop-blur-md text-amber-200 border border-white/20 text-xs font-semibold px-3 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  {/* Bottom Highlight Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white pointer-events-none">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                      {card.subtitle}
                    </p>
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-plus-jakarta-sans">
                    {card.description}
                  </p>

                  {/* Key Checklist Points */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    {card.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <span className="text-[#9A2157] font-bold shrink-0">✓</span>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Highlight Strip */}
                  <div className="mt-auto pt-2">
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

          {/* Carousel Dot Indicators */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {ADVANTAGES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => scrollToIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === dotIdx
                    ? "w-8 h-2.5 bg-[#9A2157]"
                    : "w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="sm:hidden text-center pt-2">
            <span className="text-[11px] text-gray-400 font-medium">
              ← Swipe horizontally to explore more →
            </span>
          </div>
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
