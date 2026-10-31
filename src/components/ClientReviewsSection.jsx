"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const reelsData = [
  {
    id: 1,
    views: "1.4M VIEWS",
    video: "/videos/real_reel_2.mp4",
    poster: "/images/reels/real_reel_2.jpg",
    instagramLink: "https://www.instagram.com/reel/DZZEPvPintQ/",
    tag: "Venue Magic ✨",
    title: "From Empty Space to Absolute Magic ✨",
    location: "Kala Farms • Nagpur 📍",
  },
  {
    id: 2,
    views: "850K VIEWS",
    video: "/videos/real_reel_1.mp4",
    poster: "/images/reels/real_reel_1.jpg",
    instagramLink: "https://www.instagram.com/reel/DaDowoxS7CT/",
    tag: "Haldi Carnival 🎪💛",
    title: "Zero-Stress Haldi Carnival 🎪💛",
    location: "Kala Farms • Nagpur 📍",
  },
  {
    id: 3,
    views: "620K VIEWS",
    video: "/videos/real_reel_3.mp4",
    poster: "/images/reels/real_reel_3.jpg",
    instagramLink: "https://www.instagram.com/reel/DaLFGopysOR/",
    tag: "Sangeet Night 🎶",
    title: "Two Hearts, One Rhythm • Sangeet Night 🎶✨",
    location: "Kala Farms • Nagpur 📍",
  },
  {
    id: 4,
    views: "490K VIEWS",
    video: "/videos/real_reel_4.mp4",
    poster: "/images/reels/real_reel_4.jpg",
    instagramLink: "https://www.instagram.com/reel/DZ5g4gHxruQ/",
    tag: "Royal Wedding 👑",
    title: "Destination Wedding Celebrations 💫",
    location: "Kala Farms • Nagpur 📍",
  },
];

const coupleReviews = [
  {
    couple: "Priyanka & Rohit",
    event: "3-Day Royal Wedding",
    location: "Kala Farms Grand Lawn",
    rating: 5,
    text: "Hosting our royal wedding celebration at Kala Farms was the best decision of our lives. The mandap was breathtaking, the catering received endless compliments from all 900 guests, and the estate team handled every detail seamlessly!",
    image: "/images/wedding-couple.jpg",
    date: "November 2025",
  },
  {
    couple: "Devanshi & Karan",
    event: "Sundowner Poolside Sangeet",
    location: "Kala Farms Poolside & Lawn",
    rating: 5,
    text: "The estate is truly 25 acres of paradise. Having 18 luxury suites on-site meant our entire bridal party stayed together. Their price beat guarantee saved us over ₹4 Lakhs on decor and production alone!",
    image: "/images/sangeet-dance.jpg",
    date: "January 2026",
  },
  {
    couple: "Meera & Siddharth",
    event: "Destination Farm Wedding",
    location: "Heritage Courtyard",
    rating: 5,
    text: "From our first recce to the final bidaai, the dedicated relationship manager treated our family like royalty. Transparent billing with zero hidden costs. Truly unforgettable!",
    image: "/images/couple-royal-mandap.jpg",
    date: "February 2026",
  },
];

const executedWeddings = [
  {
    id: 1,
    title: "Royal Mandap & Floral Lotus",
    tag: "Mandap Decor",
    pieceNumber: "UNIQUE SETUP (1 OF 6)",
    year: "2025",
    medium: "Nagpur • 10,000+ Fresh Blooms & Lotus Kund",
    image: "/images/couple-royal-mandap.jpg",
    details:
      "Handcrafted royal mandap featuring 10,000+ exotic blush roses, custom lotus petals canopy, sacred havan kund, and ambient heritage lighting on the Grand Lawn.",
  },
  {
    id: 2,
    title: "Night Illumination Grand Lawn",
    tag: "Reception",
    pieceNumber: "UNIQUE SETUP (2 OF 6)",
    year: "2025",
    medium: "Nagpur • 30,000 sq.ft Lawn & Amber Canopy",
    image: "/images/night-lawn.jpg",
    details:
      "Sprawling 30,000 sq.ft outdoor reception lawn illuminated with warm fairy canopies, crystal chandeliers, and gourmet dining for 1,200+ guests.",
  },
  {
    id: 3,
    title: "Enchanted Garden Entrance",
    tag: "Entrance Setup",
    pieceNumber: "UNIQUE SETUP (3 OF 6)",
    year: "2025",
    medium: "Nagpur • 60-Foot Botanical Arch & Lanterns",
    image: "/images/entrance-decor.jpg",
    details:
      "Palatial 60-foot entrance driveway adorned with pastel roses, vintage Moroccan hanging lanterns, and royal red carpet aisle for a grand procession.",
  },
  {
    id: 4,
    title: "Suspended Floral Ceiling Banquet",
    tag: "Dining & Stage",
    pieceNumber: "UNIQUE SETUP (4 OF 6)",
    year: "2025",
    medium: "Nagpur • Air-Conditioned Royal Banquet",
    image: "/images/floral-ceiling.jpg",
    details:
      "Pillarless climate-controlled luxury banquet hall featuring inverted suspended floral chandeliers, royal stage, and live gourmet buffet counters.",
  },
  {
    id: 5,
    title: "Carnival Haldi by the Pool",
    tag: "Haldi Fest",
    pieceNumber: "UNIQUE SETUP (5 OF 6)",
    year: "2026",
    medium: "Nagpur • Poolside Deck & Marigold Theme",
    image: "/images/haldi-ceremony.jpg",
    details:
      "High-energy open-air carnival around the turquoise swimming pool featuring marigold curtains, poolside cabanas, Punjabi dhol, and phoolon ki holi.",
  },
  {
    id: 6,
    title: "Live Sangeet & Concert Stage",
    tag: "Sangeet Night",
    pieceNumber: "UNIQUE SETUP (6 OF 6)",
    year: "2026",
    medium: "Nagpur • 4K LED Screen & Concert Truss",
    image: "/images/sangeet-live-music.jpg",
    details:
      "State-of-the-art concert setup with stadium-grade truss lighting, massive 4K LED backdrop, and hydraulic dance performance stage.",
  },
];

const googleReviews = [
  {
    author: "Rajesh Singhania",
    relation: "Father of the Bride",
    rating: 5,
    review:
      "Hosted my daughter's wedding at Kala Farms. Exceptional hospitality, sprawling 25-acre estate, valet parking for 800+ cars, and the best wedding planning coordination.",
    time: "2 weeks ago",
  },
  {
    author: "Ananya Deshmukh",
    relation: "Bride",
    rating: 5,
    review:
      "The bridal suite was palatial and the decor execution was 100% true to our 3D proposal renders. Highly recommend Kala Farms and their dedicated estate management team!",
    time: "1 month ago",
  },
  {
    author: "Vikram Malhotra",
    relation: "Groom",
    rating: 5,
    review:
      "Flawless execution! Gourmet catering, royal heritage backdrop, and unbelievable value. All our guests from Mumbai & London were blown away.",
    time: "3 weeks ago",
  },
];

export default function ClientReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Executed Weddings Carousel State
  const [weddingIndex, setWeddingIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const total = reelsData.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const currentReel = reelsData[currentIndex];
  const prevReel = reelsData[prevIndex];
  const nextReel = reelsData[nextIndex];

  // Executed Weddings Nav Handlers
  const totalWeddings = executedWeddings.length;
  const prevWeddingIndex = (weddingIndex - 1 + totalWeddings) % totalWeddings;
  const nextWeddingIndex = (weddingIndex + 1) % totalWeddings;

  const handlePrevWedding = () => {
    setWeddingIndex((prev) => (prev - 1 + totalWeddings) % totalWeddings);
  };

  const handleNextWedding = () => {
    setWeddingIndex((prev) => (prev + 1) % totalWeddings);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNextWedding();
    } else if (distance < -50) {
      handlePrevWedding();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentWedding = executedWeddings[weddingIndex];
  const prevWedding = executedWeddings[prevWeddingIndex];
  const nextWedding = executedWeddings[nextWeddingIndex];

  return (
    <section className="space-y-16 bg-[#fffaf0] pt-14 pb-28 md:pb-36" id="client-reviews-section">
      {/* 1. Our Clients’ Reviews & Experiences - Instagram Video Reels Carousel */}
      <div className="space-y-8">
        <div className="space-y-2 px-5 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 border border-pink-200/50 text-[#9A2157] text-xs font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
            Real Instagram Reels • @kalafarms
          </div>
          <h2 className="font-playfair text-center text-2xl font-semibold lg:text-4xl text-[#1C2431]">
            Our Clients’ Reviews &amp; Experiences
          </h2>
          <p className="font-plus-jakarta-sans text-center text-sm text-gray-600 max-w-2xl mx-auto">
            Catch real, joyful celebration reels straight from our 25-acre luxury wedding destination in Nagpur
          </p>
        </div>

        {/* 3D Coverflow Carousel matching user's exact screenshot format */}
        <div className="relative mx-auto w-full max-w-6xl px-2 sm:px-4 md:px-6 select-none overflow-hidden sm:overflow-visible">
          <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6 py-4">
            
            {/* LEFT CARD (Side Reel Preview) */}
            <div
              onClick={handlePrev}
              className="group relative w-[105px] xs:w-[130px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16] rounded-[18px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden shadow-lg border border-gray-300/80 bg-neutral-900 cursor-pointer transition-all duration-500 scale-[0.88] origin-center opacity-80 hover:opacity-100 hover:scale-[0.90] shrink-0"
            >
              <img
                src={prevReel.poster}
                alt={prevReel.title}
                className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25" />

              {/* Navigation Controls: Left Arrow (<) and Play button (▶) */}
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 sm:gap-3 z-10 pointer-events-auto">
                {/* Left Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Previous Reel"
                  className="w-7 h-7 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.22)] flex items-center justify-center text-gray-800 hover:scale-110 active:scale-95 transition-transform"
                >
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Play Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Play Previous Reel"
                  className="w-7 h-7 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.22)] flex items-center justify-center text-gray-800 hover:scale-110 active:scale-95 transition-transform"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-gray-800 ml-0.5" viewBox="0 0 24 24">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* CENTER CARD (Active Reel) */}
            <div className="relative w-[210px] xs:w-[240px] sm:w-[310px] md:w-[350px] lg:w-[380px] aspect-[9/16] rounded-[20px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.22)] border border-gray-300/90 bg-black z-20 transition-all duration-500 shrink-0">
              <video
                key={currentReel.id}
                ref={videoRef}
                src={currentReel.video}
                poster={currentReel.poster}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />

              {/* Top Vignette Gradient */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/15 to-transparent pointer-events-none" />

              {/* Bottom Vignette Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

              {/* Top-Left View Count Badge (Exact match to screenshot: cyan eye + view count) */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white shadow-md border border-white/10">
                <svg className="w-3.5 h-3.5 text-[#00F0FF] fill-current" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider">
                  {currentReel.views}
                </span>
              </div>

              {/* Bottom-Right Audio Mute/Unmute Button (Exact match to screenshot) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/75 backdrop-blur-md flex items-center justify-center text-white hover:bg-black transition-colors shadow-md border border-white/10"
                aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
            </div>

            {/* RIGHT CARD (Side Reel Preview) */}
            <div
              onClick={handleNext}
              className="group relative w-[105px] xs:w-[130px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16] rounded-[18px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden shadow-lg border border-gray-300/80 bg-neutral-900 cursor-pointer transition-all duration-500 scale-[0.88] origin-center opacity-80 hover:opacity-100 hover:scale-[0.90] shrink-0"
            >
              <img
                src={nextReel.poster}
                alt={nextReel.title}
                className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25" />

              {/* Navigation Controls: Play button (▶) and Right Arrow (>) */}
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 sm:gap-3 z-10 pointer-events-auto">
                {/* Play Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Play Next Reel"
                  className="w-7 h-7 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.22)] flex items-center justify-center text-gray-800 hover:scale-110 active:scale-95 transition-transform"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-gray-800 ml-0.5" viewBox="0 0 24 24">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Next Reel"
                  className="w-7 h-7 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.22)] flex items-center justify-center text-gray-800 hover:scale-110 active:scale-95 transition-transform"
                >
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {reelsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to reel ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-[#9A2157]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Follow on Instagram link */}
          <div className="flex items-center justify-center mt-5">
            <a
              href="https://www.instagram.com/kalafarms/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-gray-200 text-xs font-semibold text-gray-700 hover:text-[#9A2157] hover:border-pink-300 hover:shadow-md transition-all"
            >
              <svg className="w-4 h-4 fill-[#E1306C]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Follow @kalafarms on Instagram</span>
              <span className="text-[#9A2157] font-bold">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. A Glimpse Into Our Recently Executed Weddings - Exact Carousel Format without Black BG or Badges */}
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-2 px-5 text-center">
          <h3 className="font-playfair text-center text-2xl font-semibold lg:text-4xl text-[#1C2431]">
            A Glimpse Into Our Recently Executed Weddings
          </h3>
          <p className="font-plus-jakarta-sans text-center text-sm text-gray-600 max-w-2xl mx-auto">
            Real celebrations brought to life across our 25-acre luxury royal estate
          </p>
        </div>

        {/* 3D Coverflow Carousel matching user's exact carousel format without black bg or badges */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative mx-auto w-full max-w-6xl px-2 sm:px-4 md:px-6 select-none overflow-hidden sm:overflow-visible"
        >
          <div className="relative flex items-center justify-center gap-3 sm:gap-6 md:gap-8 py-2">
            
            {/* LEFT FLANKING CARD */}
            <div
              onClick={handlePrevWedding}
              className="group relative w-[130px] xs:w-[160px] sm:w-[300px] md:w-[360px] lg:w-[400px] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-gray-200/90 bg-white cursor-pointer scale-[0.88] origin-center opacity-60 hover:opacity-90 transition-all duration-500 shrink-0 shadow-lg flex flex-col"
            >
              {/* Top Image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-gray-100">
                <img
                  src={prevWedding.image}
                  alt={prevWedding.title}
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Left Card Bottom Info Bar */}
              <div className="p-3 sm:p-5 bg-white flex items-center justify-between gap-2 border-t border-gray-100">
                <div className="space-y-0.5 max-w-[85%]">
                  <h4 className="font-playfair text-xs sm:text-lg text-[#1C2431] font-semibold truncate">
                    {prevWedding.title}
                  </h4>
                  <p className="text-[9px] sm:text-xs text-gray-500 truncate font-plus-jakarta-sans">
                    {prevWedding.year} | {prevWedding.medium}
                  </p>
                </div>
              </div>
            </div>

            {/* CENTER ACTIVE CARD */}
            <div className="relative w-[240px] xs:w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] rounded-[22px] sm:rounded-[32px] overflow-hidden border border-amber-200/70 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20 shrink-0 transition-all duration-500 flex flex-col">
              {/* Top Image Container - Clean Photo (No Badges or Overlays) */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-gray-100">
                <img
                  src={currentWedding.image}
                  alt={currentWedding.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Solid Card Bottom Container: Title + Subtitle + Circular Arrow */}
              <div className="p-3.5 sm:p-5 lg:p-6 bg-white flex items-center justify-between gap-3 border-t border-gray-100">
                <div className="space-y-1 max-w-[76%] sm:max-w-[80%]">
                  <h4 className="font-playfair text-sm sm:text-xl lg:text-2xl text-[#1C2431] font-semibold tracking-tight truncate">
                    {currentWedding.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-plus-jakarta-sans truncate">
                    {currentWedding.year} | {currentWedding.medium}
                  </p>
                </div>

                {/* Circular Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextWedding();
                  }}
                  aria-label="Next Wedding Setup"
                  className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-gray-200 bg-[#FAF7F2] flex items-center justify-center text-[#1C2431] hover:bg-[#9A2157] hover:border-[#9A2157] hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm shrink-0 cursor-pointer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT FLANKING CARD */}
            <div
              onClick={handleNextWedding}
              className="group relative w-[130px] xs:w-[160px] sm:w-[300px] md:w-[360px] lg:w-[400px] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-gray-200/90 bg-white cursor-pointer scale-[0.88] origin-center opacity-60 hover:opacity-90 transition-all duration-500 shrink-0 shadow-lg flex flex-col"
            >
              {/* Top Image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-gray-100">
                <img
                  src={nextWedding.image}
                  alt={nextWedding.title}
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right Card Bottom Info Bar with Arrow Button */}
              <div className="p-3 sm:p-5 bg-white flex items-center justify-between gap-2 border-t border-gray-100">
                <div className="space-y-0.5 max-w-[75%]">
                  <h4 className="font-playfair text-xs sm:text-lg text-[#1C2431] font-semibold truncate">
                    {nextWedding.title}
                  </h4>
                  <p className="text-[9px] sm:text-xs text-gray-500 truncate font-plus-jakarta-sans">
                    {nextWedding.year} | {nextWedding.medium}
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border border-gray-200 bg-[#FAF7F2] flex items-center justify-center text-gray-600 shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {executedWeddings.map((_, i) => (
              <button
                key={i}
                onClick={() => setWeddingIndex(i)}
                aria-label={`Go to wedding setup ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === weddingIndex ? "w-8 bg-[#9A2157]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Our Google Reviews */}
      <div className="space-y-7">
        <div className="space-y-2 px-5 text-center">
          <p className="font-playfair text-center text-[28px] font-semibold lg:text-[36px] text-[#1C2431]">
            Our Google Business Reviews
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600 font-medium">
            <span className="flex text-amber-500 text-lg">★★★★★</span>
            <span className="font-bold text-gray-900 text-base">4.6 / 5.0</span>
            <span className="text-gray-500">(74+ verified Google reviews on GMB)</span>
          </div>
        </div>

        <div className="mx-auto w-full lg:w-[88%] px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {googleReviews.map((g, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow">
                        {g.author[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{g.author}</p>
                        <p className="text-xs text-gray-400">{g.relation}</p>
                      </div>
                    </div>
                    {/* Google G icon */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>

                  <div className="flex text-amber-400 text-xs">
                    {"★".repeat(g.rating)}
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {g.review}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>Google Verified Review</span>
                  <span>{g.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
