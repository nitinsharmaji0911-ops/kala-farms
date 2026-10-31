"use client";

import { useState } from "react";

export default function InteractivePlannerModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState("Full 3-Day Wedding");
  const [guests, setGuests] = useState(650);
  const [season, setSeason] = useState("Winter 2025 (Nov – Feb)");
  const [cateringTier, setCateringTier] = useState("Royal Multi-Cuisine");
  const [servicePackage, setServicePackage] = useState("Turnkey Royal Wedding");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculate live dynamic estimate
  const baseRatePerGuest =
    servicePackage === "Turnkey Royal Wedding"
      ? 3400
      : servicePackage === "Estate + Royal Dining"
      ? 2400
      : 1200;

  const estimatedTotal = guests * baseRatePerGuest;
  const estimatedDiscounted = Math.round(estimatedTotal * 0.9); // 10% Price Beat advantage

  const getRecommendedVenue = () => {
    if (guests > 600) return "The Grand Celebration Lawn (Up to 1500+ guests)";
    if (guests > 300) return "The Royal AC Banquet Hall (Palatial Indoor Setup)";
    return "The Luxury Poolside Deck & Resort Lawn (Sundowner & Haldi)";
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Formatted WhatsApp message for instant booking
    const message = encodeURIComponent(
      `*New Wedding Inquiry for Kala Farms (Nagpur)*\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `💍 Event: ${eventType}\n` +
      `👥 Expected Guests: ${guests}\n` +
      `📅 Season/Dates: ${season}\n` +
      `🏰 Recommended Venue: ${getRecommendedVenue()}\n` +
      `🍽️ Package: ${servicePackage} (${cateringTier})\n` +
      `💰 Est. Budget: ₹${(estimatedDiscounted / 100000).toFixed(2)} Lakhs (with Price Beat 10%)\n` +
      `📍 Location: Pawangaon Ghorpad Road, Nagpur\n` +
      `📝 Notes: ${formData.notes || "None"}`
    );

    // After 1.2 seconds, open WhatsApp directly
    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=918668719180&text=${message}`, "_blank");
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#B38E4B]/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-[#9A2157] via-[#BC2D6D] to-[#9A2157] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-200 font-bold">
              Kala Farms Concierge
            </span>
            <h3 className="font-playfair text-xl sm:text-2xl font-bold">
              Bespoke Wedding Planner
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-lg transition-colors"
            aria-label="Close Modal"
          >
            ✕
          </button>
        </div>

        {/* Progress Step Bar */}
        <div className="bg-[#fffaf0] px-6 py-3 border-b border-stone-200/60 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? "bg-[#9A2157] text-white" : "bg-stone-200 text-stone-600"}`}>
              1
            </span>
            <span className={step >= 1 ? "text-[#9A2157]" : "text-stone-400"}>Event & Guests</span>
          </div>
          <div className="w-8 h-[2px] bg-stone-200"></div>
          <div className="flex items-center gap-1.5">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? "bg-[#9A2157] text-white" : "bg-stone-200 text-stone-600"}`}>
              2
            </span>
            <span className={step >= 2 ? "text-[#9A2157]" : "text-stone-400"}>Package</span>
          </div>
          <div className="w-8 h-[2px] bg-stone-200"></div>
          <div className="flex items-center gap-1.5">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? "bg-[#9A2157] text-white" : "bg-stone-200 text-stone-600"}`}>
              3
            </span>
            <span className={step >= 3 ? "text-[#9A2157]" : "text-stone-400"}>Quote & Confirm</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl">
                ✓
              </div>
              <h4 className="font-playfair text-2xl font-bold text-[#1A1A1A]">
                Inquiry Successfully Prepared!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Thank you, <strong className="text-[#9A2157]">{formData.name}</strong>. Opening WhatsApp to connect directly with your dedicated Kala Farms Wedding Concierge.
              </p>
              <div className="p-4 bg-[#fffaf0] border border-[#B38E4B]/30 rounded-2xl max-w-sm mx-auto text-left text-xs space-y-1">
                <div><strong>Venue Allocated:</strong> {getRecommendedVenue()}</div>
                <div><strong>Estimated Guests:</strong> {guests} Guests</div>
                <div><strong>Price Beat Estimate:</strong> ₹{(estimatedDiscounted / 100000).toFixed(2)} Lakhs</div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="btn-wine-gradient text-white text-xs font-semibold px-6 py-2.5 rounded-xl shadow mt-2"
              >
                Close & Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Event & Guests */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  {/* Event Type */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600">
                      1. Select Event Type
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        "Full 3-Day Wedding",
                        "Wedding & Reception",
                        "Sangeet & Cocktails",
                        "Intimate Pheras / Haldi",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setEventType(item)}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-medium text-left transition-all ${
                            eventType === item
                              ? "border-[#9A2157] bg-[#fffaf0] text-[#9A2157] font-semibold ring-1 ring-[#9A2157]"
                              : "border-stone-200 hover:bg-stone-50 text-stone-700"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guest Count Slider */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-600">
                        2. Expected Guest Count
                      </label>
                      <span className="font-playfair text-xl font-bold text-[#9A2157]">
                        {guests} Guests
                      </span>
                    </div>

                    <input
                      type="range"
                      min="150"
                      max="2200"
                      step="50"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#9A2157]"
                    />

                    <div className="flex justify-between text-[11px] text-stone-400">
                      <span>150 Guests (Intimate)</span>
                      <span>1,000 (Grand)</span>
                      <span>2,200+ (Royal Mega)</span>
                    </div>

                    {/* Auto Recommended Space Badge */}
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center gap-2 text-xs">
                      <span className="text-[#B38E4B] text-base">🏰</span>
                      <div>
                        <span className="text-stone-500">Recommended Venue: </span>
                        <strong className="text-stone-800">{getRecommendedVenue()}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Season */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600">
                      3. Preferred Wedding Season
                    </label>
                    <select
                      value={season}
                      onChange={(e) => setSeason(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#9A2157]"
                    >
                      <option>Winter 2025 (Nov – Feb • Peak Season)</option>
                      <option>Spring 2026 (Mar – Apr • Sunset Weather)</option>
                      <option>Summer 2026 (May – Jul • Indoor Banquet & AC)</option>
                      <option>Autumn 2026 (Oct – Dec • Festive Royal Season)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: Package & Inclusions */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600">
                      Select Wedding Scope & Inclusions
                    </label>
                    <div className="space-y-3">
                      {[
                        {
                          name: "Turnkey Royal Wedding",
                          desc: "Complete 360° wedding: Venue, Masterchef Catering, Mandap & Stage Floral Decor, Sound & 2 Royal Suites",
                          badge: "Most Popular",
                        },
                        {
                          name: "Estate + Royal Dining",
                          desc: "Lawn & Palace hall rental with bespoke 7-course multi-cuisine catering and valet staff",
                          badge: "High Value",
                        },
                        {
                          name: "Exclusive Estate Rental",
                          desc: "Pure venue rental with private lawn, power backup, valet and bridal villa access",
                          badge: "Bring Outside Vendors",
                        },
                      ].map((pkg) => (
                        <div
                          key={pkg.name}
                          onClick={() => setServicePackage(pkg.name)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            servicePackage === pkg.name
                              ? "border-[#9A2157] bg-[#fffaf0] ring-1 ring-[#9A2157]"
                              : "border-stone-200 hover:bg-stone-50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-sm text-[#1A1A1A]">
                              {pkg.name}
                            </span>
                            <span className="text-[10px] bg-[#9A2157]/10 text-[#9A2157] font-bold px-2.5 py-0.5 rounded-full">
                              {pkg.badge}
                            </span>
                          </div>
                          <p className="text-xs text-stone-600">{pkg.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Catering Style */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600">
                      Catering Dietary Philosophy
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Royal Multi-Cuisine (Veg + Non-Veg)",
                        "Strict 100% Pure Vegetarian",
                        "Pure Jain Kitchen (No Onion/Garlic)",
                        "Custom Gourmet International Menus",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setCateringTier(item)}
                          className={`p-2.5 rounded-xl border text-xs text-left transition-all ${
                            cateringTier === item
                              ? "border-[#9A2157] bg-[#9A2157]/5 text-[#9A2157] font-semibold"
                              : "border-stone-200 hover:bg-stone-50 text-stone-700"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Live Quote */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  {/* Dynamic Pricing Summary Card */}
                  <div className="bg-gradient-to-br from-[#9A2157]/10 via-[#B38E4B]/15 to-[#fffaf0] p-5 rounded-2xl border border-[#B38E4B]/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                        Indicative Package Estimate
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        Price Beat 10% Applied
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="font-playfair text-3xl sm:text-4xl font-bold text-[#9A2157]">
                        ₹{(estimatedDiscounted / 100000).toFixed(2)} Lakhs*
                      </span>
                      <span className="text-xs text-stone-400 line-through">
                        ₹{(estimatedTotal / 100000).toFixed(2)} Lakhs
                      </span>
                    </div>

                    <p className="text-[11px] text-stone-600">
                      *Estimated for {guests} guests with {servicePackage}. Final pricing subject to menu curation, custom decor scale, and dates.
                    </p>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className="w-full p-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A2157]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full p-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A2157]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="rahul@example.com"
                          className="w-full p-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A2157]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Any specific decor ideas or questions?
                      </label>
                      <textarea
                        rows="2"
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        placeholder="e.g. Need 20 family rooms, specific dates in November..."
                        className="w-full p-3 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9A2157]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    ← Back
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-wine-gradient text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-xl shadow cursor-pointer"
                  >
                    Continue to Next Step →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-wine-gradient text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <span>Connect On WhatsApp & Lock Price</span>
                    <span>→</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
