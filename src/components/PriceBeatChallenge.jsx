"use client";

export default function PriceBeatChallenge({ onOpenPlanner }) {
  const comparisonItems = [
    {
      feature: "Venue Rental & Lawn Expanse",
      kalaFarms: "25 Acres with 45,000 sq ft uninterrupted greens",
      others: "Often restricted to 15,000–25,000 sq ft or split areas",
    },
    {
      feature: "Generator & Power Backup",
      kalaFarms: "100% Dual Silent DG Set Included (No fuel surcharge)",
      others: "Extra ₹40,000 – ₹75,000 fuel charge billed separately",
    },
    {
      feature: "Valet & Parking Capacity",
      kalaFarms: "Complimentary valet with 500+ paved internal bays",
      others: "Roadside parking or valet charged ₹35,000 extra",
    },
    {
      feature: "Bridal Suites & Check-in",
      kalaFarms: "2 Complimentary Royal Villa Suites (24-Hour flexible access)",
      others: "Standard 4-6 hour slot; extra charges for early morning makeup",
    },
    {
      feature: "Catering & Masterchef Tasting",
      kalaFarms: "Exclusive multi-cuisine tasting session for 6 family members",
      others: "Tasting often chargeable or limited to 2 items",
    },
  ];

  return (
    <section id="price-beat" className="py-20 lg:py-28 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#9A2157]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#B38E4B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B38E4B]/20 border border-[#B38E4B]/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <svg className="w-4 h-4 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
            </svg>
            <span>Exclusive Price Beat Challenge</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Unmatched Luxury.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100">
              Guaranteed Best Value.
            </span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Have an official quote from another luxury farmhouse or 5-star banquet in Delhi NCR? Share it with us. We will not only match the experience—we guarantee to beat their final quotation by up to <strong className="text-amber-300 font-semibold">10%</strong> with superior royal hospitality.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-stone-900/90 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-black/60 p-4 sm:p-6 border-b border-white/10 text-xs sm:text-sm font-semibold text-stone-300">
            <div className="md:col-span-4 uppercase tracking-wider text-amber-400">
              Deliverables & Privileges
            </div>
            <div className="md:col-span-4 hidden md:block text-[#BC2D6D] uppercase tracking-wider">
              Kala Farms Standard
            </div>
            <div className="md:col-span-4 hidden md:block text-stone-400 uppercase tracking-wider">
              Typical Delhi NCR Venues
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonItems.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-2 md:gap-4 hover:bg-white/[0.02] transition-colors text-xs sm:text-sm"
              >
                <div className="md:col-span-4 font-semibold text-white">
                  {row.feature}
                </div>
                <div className="md:col-span-4 text-emerald-300 font-medium flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>{row.kalaFarms}</span>
                </div>
                <div className="md:col-span-4 text-stone-400 text-xs leading-relaxed flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✗
                  </span>
                  <span>{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge Action Box */}
        <div className="bg-gradient-to-r from-[#9A2157]/40 via-[#9A2157]/20 to-[#B38E4B]/20 border border-[#B38E4B]/30 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
              Put Our Price Beat Challenge To The Test
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Send us your quotation or guest requirements today. Our wedding economists will prepare a transparent, line-by-line comparative estimate within 2 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenPlanner}
              className="btn-wine-gradient text-white text-sm sm:text-base font-semibold py-3.5 px-7 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform w-full sm:w-auto text-center"
            >
              Upload / Submit Quote →
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=919810082910&text=Hi%20Kala%20Farms%2C%20I%20have%20an%20existing%20wedding%20quote%20and%20want%20to%20try%20the%20Price%20Beat%20Challenge."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-gradient text-white text-sm font-semibold py-3.5 px-5 rounded-xl shadow-md w-full sm:w-auto text-center hover:scale-105 transition-transform"
            >
              WhatsApp Quote Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
