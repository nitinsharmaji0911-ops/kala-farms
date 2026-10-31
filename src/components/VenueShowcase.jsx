"use client";

import { useState } from "react";
import Image from "next/image";

const VENUES = [
  {
    id: "mandap-lawn",
    name: "The Grand Mandap Lawn",
    tagline: "Delhi NCR's largest manicured open-air royal lawn",
    capacity: "400 – 1,800 Guests",
    area: "45,000 sq. ft.",
    image: "/images/hero-mandap.jpg",
    altImage: "/images/reception-stage.jpg",
    bestFor: "Grand Wedding Pheras, Royal Reception & Sangeet",
    highlights: [
      "Custom 4-pillar floral mandap setup with 360° guest viewing",
      "Immense manicured green turf with embedded fairy illumination",
      "Dedicated fireworks and baarat entry procession boulevard",
      "Dual live gourmet kitchen stations with exhaust provisions",
    ],
  },
  {
    id: "heritage-palace",
    name: "The Heritage Palace Banquet",
    tagline: "Magnificent climate-controlled indoor royal ballroom",
    capacity: "250 – 800 Guests",
    area: "22,000 sq. ft.",
    image: "/images/royal-palace-hero.jpg",
    altImage: "/images/royal-dining-feast.jpg",
    bestFor: "Indoor Banquets, Monsoon Weddings & Ring Ceremonies",
    highlights: [
      "24-ft high ornate ceilings adorned with imported crystal chandeliers",
      "Pillarless ballroom design for unobstructed stage sightlines",
      "Italian marble flooring with state-of-the-art HVAC cooling",
      "Private VIP VIP lounge and separate senior citizen dining wing",
    ],
  },
  {
    id: "poolside-deck",
    name: "Sunset Poolside Courtyard",
    tagline: "Vibrant tropical oasis for celebratory daytime ceremonies",
    capacity: "150 – 500 Guests",
    area: "16,000 sq. ft.",
    image: "/images/poolside-farm.jpg",
    altImage: "/images/haldi-ceremony.jpg",
    bestFor: "Vibrant Haldi, Mehendi Carnival & Cocktail Sundowners",
    highlights: [
      "Infinity-edge designer pool with floating stage options",
      "Moroccan-style shaded cabanas and breezy cocktail lounge seating",
      "Sunken bar counter and dedicated acoustic music station",
      "Lush palm groves with ambient golden hour sunset lighting",
    ],
  },
  {
    id: "bridal-villas",
    name: "Imperial Royal Villas & Suites",
    tagline: "5-Star residential comfort for family and bridal party",
    capacity: "12 Luxury Suites • 60+ Stay Guests",
    area: "Private Villa Wing",
    image: "/images/bridal-suite-regal.jpg",
    altImage: "/images/estate-aerial-twilight.jpg",
    bestFor: "Bridal Preparation, Family Stay & After-Parties",
    highlights: [
      "Bridal master suite with 360° illuminated salon makeup mirrors",
      "Private jacuzzi, plush king bedding and heritage decor",
      "Dedicated 24/7 bridal butler and valet concierge",
      "Groom's dressing lounge with steam press and refreshments station",
    ],
  },
];

export default function VenueShowcase({ onOpenPlanner }) {
  const [selectedVenue, setSelectedVenue] = useState(VENUES[0]);
  const [activePhoto, setActivePhoto] = useState(0);

  const handleSelectVenue = (venue) => {
    setSelectedVenue(venue);
    setActivePhoto(0);
  };

  return (
    <section id="venues" className="py-20 lg:py-28 bg-[#fffaf0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B38E4B]/15 text-[#9A2157] text-xs uppercase tracking-widest font-bold">
            <span>25-Acre Royal Estate</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-semibold text-[#1A1A1A]">
            Explore Lawns & Spaces
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Every lawn, palace hall, and poolside deck at Kala Farms is designed with architectural grandeur to host your dream wedding ceremonies.
          </p>
        </div>

        {/* Venue Selection Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {VENUES.map((venue) => {
            const isCurrent = venue.id === selectedVenue.id;
            return (
              <button
                key={venue.id}
                type="button"
                onClick={() => handleSelectVenue(venue)}
                className={`px-5 py-3 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? "btn-wine-gradient text-white shadow-md font-semibold scale-105"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {venue.name}
              </button>
            );
          })}
        </div>

        {/* Selected Venue Showcase Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Image with Switcher */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] lg:h-[540px] bg-black">
            <Image
              src={activePhoto === 0 ? selectedVenue.image : selectedVenue.altImage}
              alt={selectedVenue.name}
              fill
              className="object-cover object-center transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Badge on Image */}
            <div className="absolute top-5 left-5 z-10 flex gap-2">
              <span className="bg-black/60 backdrop-blur-md text-amber-200 border border-white/20 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                {selectedVenue.capacity}
              </span>
              <span className="bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs px-3 py-1.5 rounded-full">
                {selectedVenue.area}
              </span>
            </div>

            {/* Photo Switcher Thumbnails */}
            <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActivePhoto(0)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activePhoto === 0 ? "border-[#B38E4B] scale-105" : "border-white/50 opacity-70"
                }`}
              >
                <Image
                  src={selectedVenue.image}
                  alt="Thumb 1"
                  fill
                  className="object-cover"
                />
              </button>
              <button
                type="button"
                onClick={() => setActivePhoto(1)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activePhoto === 1 ? "border-[#B38E4B] scale-105" : "border-white/50 opacity-70"
                }`}
              >
                <Image
                  src={selectedVenue.altImage}
                  alt="Thumb 2"
                  fill
                  className="object-cover"
                />
              </button>
              <span className="text-[11px] text-white/90 bg-black/50 px-2 py-1 rounded ml-1">
                Click to switch angle
              </span>
            </div>
          </div>

          {/* Right Column: Venue Details */}
          <div className="lg:col-span-5 p-7 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-[#B38E4B] mb-1">
                Featured Space
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                {selectedVenue.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-medium mt-1">
                {selectedVenue.tagline}
              </p>

              {/* Best For Tag */}
              <div className="mt-4 p-3 bg-[#FFFEF8] border border-[#B38E4B]/30 rounded-xl">
                <span className="text-xs font-semibold text-[#9A2157] block mb-0.5">
                  Recommended For:
                </span>
                <span className="text-xs sm:text-sm text-stone-700 font-medium">
                  {selectedVenue.bestFor}
                </span>
              </div>

              {/* Highlights List */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Estate Specifications:
                </div>
                {selectedVenue.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onOpenPlanner}
                className="btn-wine-gradient text-white font-semibold py-3.5 px-6 rounded-xl text-sm shadow-md flex-1 text-center cursor-pointer hover:scale-[1.02] transition-transform"
              >
                Inquire For This Venue
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=919810082910&text=Hi%20Kala%20Farms%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-gradient text-white font-semibold py-3.5 px-5 rounded-xl text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <span>Book Site Visit</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
