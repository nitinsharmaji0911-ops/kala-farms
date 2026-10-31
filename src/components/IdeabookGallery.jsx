"use client";

import { useState } from "react";
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Grand Mandap Under Celestial Canopy",
    category: "mandap",
    categoryLabel: "Mandap & Decor",
    image: "/images/hero-mandap.jpg",
    description: "Handcrafted 4-pillar Vedic mandap adorned with fresh imported orchids, tuberose and rajnigandha.",
  },
  {
    id: 2,
    title: "Royal Palace Facade at Twilight",
    category: "estate",
    categoryLabel: "Estate & Lawns",
    image: "/images/royal-palace-hero.jpg",
    description: "Architectural grandeur illuminated with warm amber floodlighting and royal ceremonial arches.",
  },
  {
    id: 3,
    title: "Imperial Grand Reception Stage",
    category: "mandap",
    categoryLabel: "Mandap & Decor",
    image: "/images/reception-stage.jpg",
    description: "60-foot cascading floral wall with custom gold filigree throne seating for bride and groom.",
  },
  {
    id: 4,
    title: "Moroccan Poolside Haldi Carnival",
    category: "ceremonies",
    categoryLabel: "Haldi & Sangeet",
    image: "/images/haldi-ceremony.jpg",
    description: "Joyful daytime Haldi celebrations with marigold petal showers by the turquoise poolside deck.",
  },
  {
    id: 5,
    title: "Live Sangeet & Musical Extravaganza",
    category: "ceremonies",
    categoryLabel: "Haldi & Sangeet",
    image: "/images/sangeet-live-music.jpg",
    description: "Concert-grade acoustics and custom LED stage for Bollywood artists and family performances.",
  },
  {
    id: 6,
    title: "Bespoke Royal Feasts & Gourmet Dining",
    category: "feasts",
    categoryLabel: "Royal Feasts",
    image: "/images/royal-dining-feast.jpg",
    description: "Silver cloche service with curated 7-course royal delicacies prepared by master banquet chefs.",
  },
  {
    id: 7,
    title: "Live Interactive Food Boulevard",
    category: "feasts",
    categoryLabel: "Royal Feasts",
    image: "/images/food-buffet.jpg",
    description: "Multi-cuisine gourmet counters spanning Italian woodfired grills, sushi rolls, and Dilli 6 chaat.",
  },
  {
    id: 8,
    title: "Vibrant Sangeet Dance Celebrations",
    category: "ceremonies",
    categoryLabel: "Haldi & Sangeet",
    image: "/images/sangeet-dance.jpg",
    description: "Unforgettable high-energy family dance battles on the grand banquet stage.",
  },
  {
    id: 9,
    title: "Ornate Grand Entrance Decor",
    category: "mandap",
    categoryLabel: "Mandap & Decor",
    image: "/images/entrance-decor.jpg",
    description: "Royal torchlit passage welcoming baraat with shehnai musicians and flower showers.",
  },
  {
    id: 10,
    title: "Luminous Night Lawn Ambiance",
    category: "estate",
    categoryLabel: "Estate & Lawns",
    image: "/images/night-lawn.jpg",
    description: "Thousands of fairy lights draping majestic eucalyptus and palm trees across the 25-acre estate.",
  },
  {
    id: 11,
    title: "Bridal Preparation Villa Suite",
    category: "estate",
    categoryLabel: "Estate & Lawns",
    image: "/images/bridal-suite-regal.jpg",
    description: "Opulent private bridal suite equipped with daylight salon makeup stations and royal lounge.",
  },
  {
    id: 12,
    title: "Golden Hour Pheras Ceremony",
    category: "mandap",
    categoryLabel: "Mandap & Decor",
    image: "/images/couple-royal-mandap.jpg",
    description: "Sacred vows taken amidst sunset chants, surrounded by family blessings and fragrant flowers.",
  },
];

export default function IdeabookGallery({ onOpenPlanner }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: "all", label: "All Inspirations" },
    { id: "mandap", label: "Mandap & Decor" },
    { id: "estate", label: "Estate & Lawns" },
    { id: "ceremonies", label: "Haldi & Sangeet" },
    { id: "feasts", label: "Royal Feasts" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FFFEF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B38E4B]/15 text-[#9A2157] text-xs font-bold uppercase tracking-widest">
            <span>Visual Ideabook</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl font-semibold text-[#1A1A1A]">
            Real Weddings & Celebrations
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-light">
            Draw inspiration from authentic weddings celebrated across Kala Farms' sprawling estate.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#9A2157] text-white shadow-md font-semibold"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 bg-stone-900"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Pill on Card */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-black/60 backdrop-blur-md text-amber-200 border border-white/20 text-[11px] font-semibold px-3 py-1 rounded-full">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Details on Bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                <h3 className="font-playfair text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 font-light">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[11px] text-amber-300 font-medium">
                  <span>View in High-Resolution</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenPlanner}
            className="btn-wine-gradient text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Design Your Custom Wedding Theme →
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Close Preview"
            >
              ✕
            </button>
            <div className="relative h-[420px] sm:h-[550px] w-full">
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
            <div className="p-6 bg-stone-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  {lightboxImage.categoryLabel}
                </span>
                <h3 className="font-playfair text-xl font-bold">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1 max-w-xl">
                  {lightboxImage.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setLightboxImage(null);
                  onOpenPlanner();
                }}
                className="btn-wine-gradient text-white text-xs font-semibold px-5 py-3 rounded-xl whitespace-nowrap"
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
