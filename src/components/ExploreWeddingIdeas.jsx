"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: "mandap",
    name: "Grand Mandaps",
    count: "50+ Royal Setups",
    image: "/images/couple-royal-mandap.jpg",
    desc: "Celestial floral canopies, lotus havan kunds & royal lawn backdrops.",
  },
  {
    id: "poolside",
    name: "Poolside Haldi",
    count: "Carnival & Sundowners",
    image: "/images/haldi-ceremony.jpg",
    desc: "Daytime marigold showers, poolside cabanas & festive vibrant decor.",
  },
  {
    id: "banquet",
    name: "Royal AC Banquet",
    count: "Pillarless Grand Hall",
    image: "/images/floral-ceiling.jpg",
    desc: "Inverted suspended floral ceilings, crystal chandeliers & AC comfort.",
  },
  {
    id: "sangeet",
    name: "Sangeet & DJ Arena",
    count: "Concert Truss Stage",
    image: "/images/sangeet-live-music.jpg",
    desc: "Stadium-grade truss lighting, 4K LED screen & live acoustic dance stages.",
  },
  {
    id: "lawn",
    name: "Night Lawn Lights",
    count: "30,000 sq.ft Ambiance",
    image: "/images/night-lawn.jpg",
    desc: "Fairy light tree canopies, Moroccan floor lanterns & twilight glamour.",
  },
  {
    id: "feasts",
    name: "Gourmet Feasts",
    count: "Live Chef Boulevards",
    image: "/images/royal-dining-feast.jpg",
    desc: "Silver cloche service, international live counters & royal culinary spreads.",
  },
  {
    id: "bridal",
    name: "Bridal Villa Suite",
    count: "18+ Luxury Suites",
    image: "/images/bridal-suite-regal.jpg",
    desc: "Opulent private bridal dressing suite with daylight vanity and royal lounge.",
  },
  {
    id: "entrance",
    name: "Royal Entrances",
    count: "60-Ft Floral Arches",
    image: "/images/entrance-decor.jpg",
    desc: "Palatial botanical driveway arches, Moroccan lamps & red-carpet baraat entry.",
  },
];

const IDEABOOK_ITEMS = [
  {
    id: 1,
    title: "Grand Mandap Under Celestial Canopy",
    category: "mandap",
    categoryLabel: "Grand Mandaps",
    image: "/images/hero-mandap.jpg",
    description:
      "Handcrafted 4-pillar Vedic mandap adorned with fresh imported orchids, tuberose, and royal havan kund on the Grand Lawn.",
  },
  {
    id: 2,
    title: "Golden Hour Pheras Ceremony",
    category: "mandap",
    categoryLabel: "Grand Mandaps",
    image: "/images/couple-royal-mandap.jpg",
    description:
      "Sacred vows taken amidst sunset chants, surrounded by family blessings and 10,000+ fresh blooms.",
  },
  {
    id: 3,
    title: "Moroccan Poolside Haldi Carnival",
    category: "poolside",
    categoryLabel: "Poolside Haldi",
    image: "/images/haldi-ceremony.jpg",
    description:
      "High-energy open-air carnival around the turquoise swimming pool with marigold drapes, cabanas, and phoolon ki holi.",
  },
  {
    id: 4,
    title: "Tropical Poolside Deck & Sundowner",
    category: "poolside",
    categoryLabel: "Poolside Haldi",
    image: "/images/poolside-farm.jpg",
    description:
      "Lush palm trees, turquoise waters, and poolside cocktail lounge for relaxed pre-wedding celebrations.",
  },
  {
    id: 5,
    title: "Suspended Floral Ceiling Banquet",
    category: "banquet",
    categoryLabel: "Royal AC Banquet",
    image: "/images/floral-ceiling.jpg",
    description:
      "Pillarless climate-controlled luxury banquet hall featuring inverted suspended floral chandeliers and royal stage.",
  },
  {
    id: 6,
    title: "Imperial Grand Reception Stage",
    category: "banquet",
    categoryLabel: "Royal AC Banquet",
    image: "/images/reception-stage.jpg",
    description:
      "60-foot cascading floral wall with custom gold filigree throne seating for the couple.",
  },
  {
    id: 7,
    title: "Live Sangeet & Musical Extravaganza",
    category: "sangeet",
    categoryLabel: "Sangeet & DJ Arena",
    image: "/images/sangeet-live-music.jpg",
    description:
      "Concert-grade acoustics and custom LED stage for Bollywood artists, live bands, and family dance performances.",
  },
  {
    id: 8,
    title: "High-Energy Sangeet Dance Stage",
    category: "sangeet",
    categoryLabel: "Sangeet & DJ Arena",
    image: "/images/sangeet-dance.jpg",
    description:
      "Unforgettable family dance battles and choreographed performances on the grand stage.",
  },
  {
    id: 9,
    title: "Luminous Night Lawn Ambiance",
    category: "lawn",
    categoryLabel: "Night Lawn Lights",
    image: "/images/night-lawn.jpg",
    description:
      "Warm fairy lights draping majestic palms across our sprawling 30,000 sq.ft lawn for 1,200+ guests.",
  },
  {
    id: 10,
    title: "25-Acre Estate Aerial at Twilight",
    category: "lawn",
    categoryLabel: "Night Lawn Lights",
    image: "/images/estate-aerial-twilight.jpg",
    description:
      "Sprawling resort illuminated under evening skies with private parking for 800+ cars.",
  },
  {
    id: 11,
    title: "Bespoke Royal Feasts & Gourmet Dining",
    category: "feasts",
    categoryLabel: "Gourmet Feasts",
    image: "/images/royal-dining-feast.jpg",
    description:
      "Silver cloche service with curated royal multi-course delicacies prepared by master banquet chefs.",
  },
  {
    id: 12,
    title: "Live Interactive Food Boulevard",
    category: "feasts",
    categoryLabel: "Gourmet Feasts",
    image: "/images/food-buffet.jpg",
    description:
      "Multi-cuisine gourmet counters spanning live Italian grills, tandoor specials, and Dilli 6 chaat.",
  },
  {
    id: 13,
    title: "Bridal Preparation Villa Suite",
    category: "bridal",
    categoryLabel: "Bridal Villa Suite",
    image: "/images/bridal-suite-regal.jpg",
    description:
      "Opulent private bridal suite equipped with daylight salon makeup stations and royal lounge.",
  },
  {
    id: 14,
    title: "Ornate Grand Entrance Decor",
    category: "entrance",
    categoryLabel: "Royal Entrances",
    image: "/images/entrance-decor.jpg",
    description:
      "Royal torchlit passage welcoming baraat with shehnai musicians, Moroccan lamps, and flower showers.",
  },
];

export default function ExploreWeddingIdeas({ onOpenPlanner }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState(null);

  const handleOpenIdeabook = (categoryId = "all") => {
    setSelectedCategory(categoryId);
    setModalOpen(true);
  };

  const filteredItems =
    selectedCategory === "all"
      ? IDEABOOK_ITEMS
      : IDEABOOK_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      className="relative mt-20 w-full overflow-hidden px-3 pb-10 pt-4 md:px-0 md:py-14 bg-[#fffdf9]"
      id="explore_wedding_ideas_section"
    >
      {/* Side Decorative Mandalas */}
      <img
        alt="Mandala background pattern"
        className="absolute left-0 top-1/2 z-0 aspect-square w-[220px] -translate-x-1/2 -translate-y-1/2 object-contain md:w-[420px] opacity-25 pointer-events-none"
        src="/images/HomePage/new/big-mandala.webp"
      />
      <img
        alt="Mandala background pattern"
        className="absolute right-0 top-1/2 z-0 w-[220px] -translate-y-1/2 translate-x-1/2 object-contain md:w-[420px] opacity-25 pointer-events-none"
        src="/images/HomePage/new/big-mandala.webp"
      />

      <div className="flex flex-col items-center relative z-10 max-w-7xl mx-auto">
        {/* Section Header tailored to Kala Farms */}
        <div className="text-center px-4 max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9A2157]/10 text-[#9A2157] text-xs font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-[#9A2157] animate-pulse"></span>
            Real Venue Themes &amp; Setups • Kala Farms Nagpur
          </div>

          <h2 className="font-playfair text-3xl font-semibold text-[#1C2431] md:text-4xl lg:text-5xl">
            Explore wedding ideas
          </h2>

          <p className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real mandap concepts, poolside carnival themes, and grand banquet setups crafted across our 25-acre estate.
          </p>
        </div>

        {/* Categories Carousel with Authentic Photos */}
        <div className="no-scrollbar z-10 flex w-full justify-start gap-4 sm:gap-6 overflow-x-auto px-4 py-8 md:mx-auto md:w-full md:justify-center md:py-12 touch-pan-x select-none">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleOpenIdeabook(cat.id)}
              className="flex flex-col items-center justify-center gap-2.5 md:gap-3 shrink-0 cursor-pointer group"
            >
              {/* Circular Real Photo Thumbnail */}
              <div className="relative flex items-center justify-center rounded-full border-4 border-white bg-white shadow-md aspect-square w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] md:w-[110px] md:h-[110px] overflow-hidden group-hover:border-[#9A2157] group-hover:shadow-xl transition-all duration-300 ring-1 ring-gray-200 group-hover:ring-4 group-hover:ring-[#9A2157]/20">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-115 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:from-[#9A2157]/40 transition-colors" />
              </div>

              {/* Title & Subtitle */}
              <span className="text-center text-xs sm:text-sm font-semibold text-[#1C2431] group-hover:text-[#9A2157] transition-colors whitespace-nowrap">
                {cat.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-gray-400 -mt-2 font-plus-jakarta-sans whitespace-nowrap">
                {cat.count}
              </span>
            </div>
          ))}

          {/* "And More" Pill */}
          <div
            onClick={() => handleOpenIdeabook("all")}
            className="flex flex-col items-center justify-center gap-2.5 md:gap-3 shrink-0 cursor-pointer group"
          >
            <div className="flex flex-col items-center justify-center rounded-full border-4 border-white bg-[#9A2157] text-white shadow-md aspect-square w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] md:w-[110px] md:h-[110px] group-hover:bg-[#7D2049] group-hover:scale-105 transition-all">
              <svg
                className="h-8 w-8 sm:h-9 sm:w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-center text-xs sm:text-sm font-semibold text-[#9A2157] whitespace-nowrap">
              and more
            </span>
            <span className="text-[10px] sm:text-[11px] text-gray-400 -mt-2 whitespace-nowrap">
              Full Ideabook
            </span>
          </div>
        </div>

        {/* View All Button */}
        <button
          onClick={() => handleOpenIdeabook("all")}
          className="group flex w-max items-center gap-x-2 rounded-2xl border-2 border-[#9A2157] px-8 py-3.5 text-base sm:text-lg font-bold text-[#9A2157] hover:bg-[#9A2157] hover:text-white transition-all shadow-sm cursor-pointer"
        >
          <span>View all</span>
          <svg
            className="transition-transform duration-500 group-hover:translate-x-1"
            fill="none"
            height="22"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            width="22"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>

      {/* Visual Ideabook Modal for Kala Farms */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-[#fffaf5]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9A2157]">
                  Kala Farms Visual Ideabook
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#1C2431]">
                  Real Wedding Inspirations &amp; Setups
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors text-lg font-bold"
                aria-label="Close Ideabook"
              >
                ✕
              </button>
            </div>

            {/* Filter Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto p-4 border-b border-gray-100 no-scrollbar bg-white">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === "all"
                    ? "bg-[#9A2157] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Inspirations ({IDEABOOK_ITEMS.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === c.id
                      ? "bg-[#9A2157] text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Grid of Inspiration Cards */}
            <div className="overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[60vh]">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 bg-neutral-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-black/60 backdrop-blur-md text-amber-200 border border-white/20 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 text-white space-y-1">
                    <h4 className="font-playfair text-base font-bold group-hover:text-amber-200 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-300 font-light line-clamp-2">
                      {item.description}
                    </p>
                    <div className="pt-1 flex items-center gap-1 text-[11px] text-amber-300 font-medium">
                      <span>View Full Setup</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-4 sm:p-5 border-t border-gray-100 bg-[#fffaf5] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-gray-600 font-plus-jakarta-sans text-center sm:text-left">
                Want this exact decor theme or custom production for your wedding?
              </p>
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  onOpenPlanner();
                }}
                className="btn-wine-gradient text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
              >
                Inquire For This Theme →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Preview */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors font-bold"
              aria-label="Close Preview"
            >
              ✕
            </button>
            <div className="relative h-[360px] sm:h-[500px] w-full bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 sm:p-6 bg-neutral-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  {lightboxItem.categoryLabel}
                </span>
                <h4 className="font-playfair text-xl font-bold">
                  {lightboxItem.title}
                </h4>
                <p className="text-xs text-gray-300 mt-1 max-w-xl">
                  {lightboxItem.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setLightboxItem(null);
                  setModalOpen(false);
                  onOpenPlanner();
                }}
                className="btn-wine-gradient text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl whitespace-nowrap cursor-pointer"
              >
                Inquire For This Theme
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
