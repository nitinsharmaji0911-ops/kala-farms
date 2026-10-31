"use client";

import { useState } from "react";
import Image from "next/image";

const proposalSlides = [
  { src: "/images/proposals/proposal-overview.webp", title: "Overview & Itinerary" },
  { src: "/images/proposals/proposal-process.webp", title: "Budget & Allocation" },
  { src: "/images/proposals/proposal-budget.webp", title: "Decor & Production Renders" },
  { src: "/images/proposals/proposal-venue-curation.webp", title: "Catering & Menu Curations" },
];

export default function WeddingProposals({ onOpenPlanner }) {
  const [currentProposal, setCurrentProposal] = useState(0);

  const prevSlide = () => {
    setCurrentProposal((prev) => (prev === 0 ? proposalSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentProposal((prev) => (prev + 1) % proposalSlides.length);
  };

  return (
    <section
      className="relative flex w-full flex-col items-center gap-5 bg-[linear-gradient(180deg,rgba(255,239,244,0.00)_7.21%,rgba(255,239,244,0.70)_70.13%)] pt-8 pb-12 lg:gap-10"
      id="wedding_proposals_section"
    >
      {/* Title flanked by Gold Ornamental Sticks */}
      <div className="flex items-center gap-2 lg:gap-8">
        <svg
          className="hidden scale-[0.6] lg:block lg:scale-100"
          fill="none"
          height="10"
          width="86"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="85" height="4" y="3" fill="#B38E4B" rx="2" />
          <circle cx="43" cy="5" r="4" fill="#8C6A2E" />
        </svg>

        <h2 className="font-playfair text-2xl font-semibold lg:text-5xl text-[#1C2431] text-center">
          Sample wedding proposal
        </h2>

        <svg
          className="hidden scale-[0.6] lg:block lg:scale-100"
          fill="none"
          height="10"
          width="86"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="85" height="4" y="3" fill="#B38E4B" rx="2" />
          <circle cx="43" cy="5" r="4" fill="#8C6A2E" />
        </svg>
      </div>

      {/* Interactive Slider Showcase */}
      <div className="relative flex w-full items-center justify-center gap-x-2 px-2 md:h-4/5 md:w-[65%] md:px-0">
        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous proposal page"
          className="hidden md:block p-3 rounded-full hover:bg-white/80 transition-all text-[#777] hover:text-black z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="22"
            fill="currentColor"
            viewBox="0 0 12 20"
          >
            <path d="M9.125 19.1.7 10.7a.871.871 0 0 1-.212-.325A1.098 1.098 0 0 1 .425 10c0-.133.02-.258.063-.375A.872.872 0 0 1 .7 9.3L9.125.875c.233-.233.525-.35.875-.35s.65.125.9.375.375.542.375.875a1.2 1.2 0 0 1-.375.875L3.55 10l7.35 7.35c.233.233.35.52.35.862 0 .342-.125.638-.375.888a1.2 1.2 0 0 1-.875.375 1.2 1.2 0 0 1-.875-.375Z" />
          </svg>
        </button>

        {/* Current Proposal Slide */}
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#E8DCC4] p-2 md:p-4">
          <img
            alt={proposalSlides[currentProposal].title}
            className="w-full h-auto object-contain rounded-xl transition-all duration-500"
            src={proposalSlides[currentProposal].src}
          />
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next proposal page"
          className="hidden md:block p-3 rounded-full hover:bg-white/80 transition-all text-[#777] hover:text-black z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="22"
            fill="currentColor"
            className="rotate-180"
            viewBox="0 0 12 20"
          >
            <path d="M9.125 19.1.7 10.7a.871.871 0 0 1-.212-.325A1.098 1.098 0 0 1 .425 10c0-.133.02-.258.063-.375A.872.872 0 0 1 .7 9.3L9.125.875c.233-.233.525-.35.875-.35s.65.125.9.375.375.542.375.875a1.2 1.2 0 0 1-.375.875L3.55 10l7.35 7.35c.233.233.35.52.35.862 0 .342-.125.638-.375.888a1.2 1.2 0 0 1-.875.375 1.2 1.2 0 0 1-.875-.375Z" />
          </svg>
        </button>
      </div>

      {/* Slide dots for mobile */}
      <div className="flex items-center gap-2 md:hidden">
        {proposalSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentProposal(i)}
            className={`h-2 rounded-full transition-all ${
              currentProposal === i ? "w-6 bg-[#9A2157]" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Subtext */}
      <p className="whitespace-pre-wrap px-4 text-center text-base text-gray-600 md:px-0 md:text-xl lg:w-1/2">
        This is just an example of a personalized proposal. We’ll create a new one for you as per your requirements.
      </p>

      {/* CTA Button */}
      <button
        onClick={onOpenPlanner}
        className="btn-wine-gradient px-8 py-3.5 rounded-2xl text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all cursor-pointer"
      >
        Get My Custom Proposal
      </button>

      {/* Bottom Pink Curve */}
      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full">
        <div className="relative w-full scale-[-1]">
          <img
            alt=""
            className="max-h-20 w-full object-cover object-top opacity-70"
            src="/images/HomePage/new/pink-curve.svg"
          />
        </div>
      </div>
    </section>
  );
}
