"use client";

export default function KalaFarmsLogo({ variant = "horizontal", className = "" }) {
  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center justify-center text-center group cursor-pointer ${className}`}>
        {/* Regal Heritage Crest */}
        <div className="relative mb-3 flex items-center justify-center">
          <svg
            width="58"
            height="58"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#9A2157] drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          >
            {/* Outer Circular Royal Halo */}
            <circle cx="50" cy="50" r="47" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="50" cy="50" r="43" stroke="#9A2157" strokeWidth="0.75" opacity="0.6" />
            
            {/* Center Royal Heritage Pavilion / Mandap Crown */}
            <path
              d="M50 16 L53 23 L61 24 L55 29 L57 37 L50 32 L43 37 L45 29 L39 24 L47 23 Z"
              fill="url(#goldGrad)"
            />
            {/* Palace Archway */}
            <path
              d="M30 72 V50 C30 38.9543 38.9543 30 50 30 C61.0457 30 70 38.9543 70 50 V72"
              stroke="url(#goldGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Inner Intricate Arch */}
            <path
              d="M36 72 V52 C36 44.268 42.268 38 50 38 C57.732 38 64 44.268 64 52 V72"
              stroke="#9A2157"
              strokeWidth="1.5"
            />
            {/* Grand Chandelier / Royal Sparkle */}
            <circle cx="50" cy="52" r="3.5" fill="url(#goldGrad)" />
            <path d="M50 43 V48" stroke="#9A2157" strokeWidth="1.5" strokeLinecap="round" />
            {/* Palace Base Plinth */}
            <rect x="25" y="72" width="50" height="3.5" rx="1.5" fill="url(#goldGrad)" />
            <rect x="22" y="75.5" width="56" height="2" rx="1" fill="#9A2157" />
            
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DFC07A" />
                <stop offset="50%" stopColor="#C59B4B" />
                <stop offset="100%" stopColor="#9E7628" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand Name */}
        <h2 className="font-playfair text-2xl lg:text-3xl font-extrabold tracking-[0.22em] text-gray-900 uppercase">
          Kala Farm &amp; Celebration
        </h2>

        {/* Devanagari & Destination Badges */}
        <div className="flex items-center gap-2 mt-1.5">
          <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#B38E4B]" />
          <p className="text-[11px] tracking-[0.24em] font-semibold text-[#9A2157] uppercase font-plus-jakarta-sans">
            कला Farms • Resort | Pool | Lawn | Hall
          </p>
          <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#B38E4B]" />
        </div>

        <p className="text-[9.5px] tracking-[0.22em] text-gray-500 font-medium uppercase mt-0.5 font-plus-jakarta-sans">
          Pawangaon Road, Nagpur • Best Destination Wedding Venue
        </p>
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar)
  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Royal Crest Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width="38"
          height="38"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#9A2157] transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Ring */}
          <circle cx="50" cy="50" r="46" stroke="url(#navGoldGrad)" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="42" stroke="#9A2157" strokeWidth="0.8" opacity="0.7" />

          {/* Crown */}
          <path
            d="M50 16 L53 23 L61 24 L55 29 L57 37 L50 32 L43 37 L45 29 L39 24 L47 23 Z"
            fill="url(#navGoldGrad)"
          />
          {/* Outer Palace Arch */}
          <path
            d="M30 72 V50 C30 38.9543 38.9543 30 50 30 C61.0457 30 70 38.9543 70 50 V72"
            stroke="url(#navGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Inner Arch */}
          <path
            d="M36 72 V52 C36 44.268 42.268 38 50 38 C57.732 38 64 44.268 64 52 V72"
            stroke="#9A2157"
            strokeWidth="1.5"
          />
          {/* Core Gem */}
          <circle cx="50" cy="52" r="3.5" fill="url(#navGoldGrad)" />
          {/* Base */}
          <rect x="25" y="72" width="50" height="3" rx="1.5" fill="url(#navGoldGrad)" />

          <defs>
            <linearGradient id="navGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFC07A" />
              <stop offset="50%" stopColor="#C59B4B" />
              <stop offset="100%" stopColor="#9E7628" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span className="font-playfair text-[18px] lg:text-[20px] font-extrabold tracking-[0.16em] text-[#1C2431] group-hover:text-[#9A2157] transition-colors uppercase">
            Kala Farms
          </span>
          <span className="text-[11px] font-semibold text-[#B38E4B] hidden sm:inline">
            कला
          </span>
        </div>
        <span className="text-[8.5px] lg:text-[9.5px] tracking-[0.24em] font-bold text-[#9A2157] uppercase font-plus-jakarta-sans mt-0.5">
          Resort &bull; Lawn &bull; Hall &bull; Nagpur
        </span>
      </div>
    </div>
  );
}
