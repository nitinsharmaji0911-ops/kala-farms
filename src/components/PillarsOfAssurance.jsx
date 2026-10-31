"use client";

const PILLARS = [
  {
    icon: "👑",
    title: "100% Single-Wedding Exclusivity",
    description:
      "We never double-book our estate. When you book Kala Farms, our entire 25-acre venue, bridal suites, and staff are exclusively dedicated to your family.",
  },
  {
    icon: "💎",
    title: "Guaranteed Price Beat Challenge",
    description:
      "We beat any verified quotation from comparable 5-star Delhi NCR farmhouses by up to 10%, ensuring peak royal luxury at honest, direct-from-estate pricing.",
  },
  {
    icon: "🚗",
    title: "500+ Internal Paved Valet Parking",
    description:
      "Wide private driveway and paved internal parking bays managed by professional uniformed valets to ensure zero congestion on your celebration night.",
  },
  {
    icon: "⚡",
    title: "Dual 100% Silent Generator Backup",
    description:
      "Heavy-duty industrial generator sets run uninterrupted from baraat entry until morning bidai. Zero music cuts or lighting dips guaranteed.",
  },
  {
    icon: "🍽️",
    title: "Separate Dedicated Masterchef Kitchens",
    description:
      "Strictly segregated state-of-the-art preparation kitchens for Pure Vegetarian, Jain, and Multi-Cuisine delicacies, led by veteran luxury banquet chefs.",
  },
  {
    icon: "🛡️",
    title: "24/7 Estate Security & Concierge",
    description:
      "Comprehensive CCTV monitoring, trained security staff, VIP access lanes, and a dedicated on-site estate director catering to your every request.",
  },
];

export default function PillarsOfAssurance() {
  return (
    <section className="py-20 lg:py-28 bg-[linear-gradient(180deg,#FFFEF8_0%,#FCF9D9_100%)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B38E4B]/20 text-[#9A2157] text-xs font-bold uppercase tracking-widest">
            <span>Peace of Mind</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl font-semibold text-[#1A1A1A]">
            Pillars of Assurance
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-light">
            Every celebration at Kala Farms is protected by our uncompromising commitments to royal elegance, safety, and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fffaf0] border border-[#B38E4B]/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#1A1A1A] group-hover:text-[#9A2157] transition-colors mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
