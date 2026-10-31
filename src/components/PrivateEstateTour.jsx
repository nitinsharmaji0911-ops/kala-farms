"use client";

export default function PrivateEstateTour({ onOpenPlanner }) {
  return (
    <section
      className="relative mt-12 lg:mt-20 overflow-x-hidden px-4 pb-16 pt-8 md:px-8 md:py-20 bg-gradient-to-b from-[#FFF9FA] via-[#FCF8F5] to-white"
      id="private_estate_tour_section"
    >
      {/* Background Side Heritage Mandalas */}
      <img
        alt="Mandala pattern"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-0 aspect-square w-[220px] -translate-x-1/2 md:w-[380px] opacity-25 pointer-events-none"
        src="/images/HomePage/new/big-mandala.webp"
      />
      <img
        alt="Mandala pattern"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 aspect-square w-[220px] translate-x-1/2 md:w-[380px] opacity-25 pointer-events-none"
        src="/images/HomePage/new/big-mandala.webp"
      />

      <div className="relative z-10 mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: VIP Estate Tour Invitation */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
          {/* Royal Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#9A2157]/10 px-4 py-1.5 border border-[#9A2157]/20">
            <span className="h-2 w-2 rounded-full bg-[#9A2157] animate-pulse" />
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#9A2157] uppercase font-plus-jakarta-sans">
              Complimentary VIP Recce
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2431] leading-[1.18]">
              Experience Kala Farms <br />
              <span className="text-[#9A2157]">in Person</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-lg font-plus-jakarta-sans leading-relaxed">
              Photos cannot capture the grandeur of 25 lush green acres. Schedule a private guided walk-through with our Senior Wedding Concierge before finalizing your dates.
            </p>
          </div>

          {/* 3 VIP Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full pt-1">
            <div className="flex flex-col items-center lg:items-start p-3.5 rounded-xl bg-white shadow-sm border border-stone-200/80">
              <span className="text-2xl mb-1">🌿</span>
              <h4 className="font-bold text-sm text-gray-900">Full Estate Recce</h4>
              <p className="text-xs text-gray-500 mt-0.5">Lawns, pool, hall &amp; suites</p>
            </div>

            <div className="flex flex-col items-center lg:items-start p-3.5 rounded-xl bg-white shadow-sm border border-stone-200/80">
              <span className="text-2xl mb-1">☕</span>
              <h4 className="font-bold text-sm text-gray-900">Tea &amp; Tasting</h4>
              <p className="text-xs text-gray-500 mt-0.5">Complimentary menu tasting</p>
            </div>

            <div className="flex flex-col items-center lg:items-start p-3.5 rounded-xl bg-white shadow-sm border border-stone-200/80">
              <span className="text-2xl mb-1">🏷️</span>
              <h4 className="font-bold text-sm text-gray-900">Custom Quote</h4>
              <p className="text-xs text-gray-500 mt-0.5">Guaranteed Price Beat Offer</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-3 w-full sm:w-auto">
            <button
              onClick={onOpenPlanner}
              id="hp-schedule-tour-btn"
              className="btn-wine-gradient w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-2xl px-8 py-4 text-base lg:text-lg font-bold text-white shadow-[0px_6px_20px_rgba(154,33,87,0.35)] hover:shadow-xl transition-all cursor-pointer group"
            >
              <span>Schedule My Free Tour</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <a
              href="https://api.whatsapp.com/send?phone=918668719180&text=Hi%20Kala%20Farms%2C%20I%20would%20like%20to%20schedule%20a%20personal%20visit%20%2F%20recce%20of%20the%20venue"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border-2 border-[#1FAF38] px-7 py-3.5 text-base font-bold text-[#1FAF38] hover:bg-[#1FAF38] hover:text-white transition-all shadow-sm"
            >
              <span>Quick WhatsApp Enquiry</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3-Image Editorial Collage */}
        <div className="w-full lg:w-[460px] shrink-0 flex items-center justify-center pt-4 lg:pt-0">
          <div className="relative w-full max-w-[420px] h-[330px] sm:h-[360px]">
            {/* Primary Large Card: Poolside & Lawn */}
            <div className="absolute right-0 top-0 w-[82%] h-[78%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                alt="Kala Farms Poolside & Lawn"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                src="/images/poolside-farm.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-white text-xs font-semibold tracking-wide uppercase drop-shadow">
                  🌴 Poolside &amp; Grand Lawn
                </span>
              </div>
            </div>

            {/* Overlapping Top-Left Card: Luxury Resort Suite */}
            <div className="absolute left-0 top-4 w-[52%] h-[52%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img
                alt="Luxury Resort Suite"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                src="/images/bridal-suite-regal.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-white text-[10px] font-semibold tracking-wide uppercase drop-shadow">
                  🛏 Luxury Bridal Suite
                </span>
              </div>
            </div>

            {/* Overlapping Bottom-Center Card: Royal Gourmet Feast */}
            <div className="absolute left-6 bottom-0 w-[56%] h-[48%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                alt="Royal Gourmet Feast"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                src="/images/royal-dining-feast.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-white text-[10px] font-semibold tracking-wide uppercase drop-shadow">
                  🍽 Royal Gourmet Feast
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
