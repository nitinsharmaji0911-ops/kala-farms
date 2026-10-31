"use client";

import Image from "next/image";

const categories = [
  { name: "Mandap Ideas", icon: "🏛️", count: "1,200+ photos" },
  { name: "Bridal Wear", icon: "👗", count: "2,400+ styles" },
  { name: "Floral Decor", icon: "🌸", count: "3,100+ themes" },
  { name: "Haldi & Mehendi", icon: "💛", count: "1,800+ setups" },
  { name: "Photography Poses", icon: "📸", count: "4,000+ shots" },
  { name: "Groom Outfits", icon: "👑", count: "950+ designs" },
];

export default function ExploreWeddingIdeas({ onOpenPlanner }) {
  return (
    <section
      className="relative mt-20 w-full overflow-hidden px-3 pb-10 pt-2 md:px-0 md:py-12"
      id="explore_wedding_ideas_section"
    >
      {/* Side Mandalas */}
      <img
        alt="Mandala bg pattern"
        className="absolute left-0 top-1/2 z-0 aspect-square w-[200px] -translate-x-1/2 -translate-y-1/2 object-contain md:w-[400px] opacity-40 pointer-events-none"
        src="/images/HomePage/new/big-mandala.webp"
      />
      <img
        alt="Mandala bg pattern"
        className="absolute right-0 top-1/2 z-0 w-[200px] -translate-y-1/2 translate-x-1/2 object-contain md:w-[400px] opacity-40 pointer-events-none"
        src="/images/HomePage/new/big-mandala.webp"
      />

      <div className="flex flex-col items-center relative z-10">
        <div className="text-center px-4">
          <h2 className="pb-2 font-playfair text-3xl font-semibold text-[#121212] md:pb-4 lg:text-5xl">
            Explore wedding ideas
          </h2>
          <p className="mt-2 whitespace-pre-wrap text-center text-gray-600 md:text-xl font-plus-jakarta-sans">
            10,000+ unique wedding ideas for your special day. Create your ideabook!
          </p>
        </div>

        {/* Categories Carousel */}
        <div className="no-scrollbar z-10 flex w-full justify-start gap-6 overflow-x-auto px-4 py-8 md:mx-auto md:w-full md:justify-center md:py-12">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={onOpenPlanner}
              className="flex flex-col items-center justify-center gap-2.5 md:gap-4 shrink-0 cursor-pointer group"
            >
              <div className="flex w-full flex-col items-center justify-center rounded-full border-4 border-white bg-white text-3xl shadow-lg aspect-square h-[80px] md:h-24 lg:h-28 group-hover:bg-[#9A2157] group-hover:text-white transition-all duration-300">
                <span>{cat.icon}</span>
              </div>
              <span className="text-center text-xs font-semibold text-[#1C2431] group-hover:text-[#9A2157] transition-colors md:text-sm lg:text-base">
                {cat.name}
              </span>
              <span className="text-[11px] text-gray-400 -mt-2">{cat.count}</span>
            </div>
          ))}

          {/* And more pill */}
          <div
            onClick={onOpenPlanner}
            className="flex flex-col items-center justify-center gap-2.5 md:gap-4 shrink-0 cursor-pointer"
          >
            <div className="flex w-full flex-col items-center justify-center rounded-full border-4 border-white bg-[#9A2157] text-white shadow-lg aspect-square h-[80px] md:h-24 lg:h-28 hover:bg-[#7D2049] transition-all">
              <svg
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-center text-xs font-semibold text-[#9A2157] md:text-sm lg:text-base">
              and more
            </span>
          </div>
        </div>

        {/* View All Button */}
        <button
          onClick={onOpenPlanner}
          className="group flex w-max items-center gap-x-2 rounded-2xl border-2 border-[#9A2157] px-8 py-3 text-lg font-bold text-[#9A2157] hover:bg-[#9A2157] hover:text-white transition-all shadow-sm md:text-xl"
        >
          <span>View all</span>
          <svg
            className="transition-transform duration-500 group-hover:translate-x-1"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
