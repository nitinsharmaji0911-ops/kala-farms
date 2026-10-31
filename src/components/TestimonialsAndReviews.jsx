"use client";

import { useState } from "react";

const REVIEWS = [
  {
    id: 1,
    couple: "Pooja & Rohan Verma",
    role: "Bride & Groom",
    event: "Grand Wedding & Reception • 1,100 Guests",
    lawn: "The Grand Mandap Lawn",
    date: "December 2025",
    rating: 5,
    title: "A Royal Fairy Tale Realized in Delhi NCR",
    comment:
      "From the moment our baraat entered the grand driveway to the final pheras at 4 AM under the floral mandap, Kala Farms was extraordinary. Our guests still talk about the live chaat street and royal Awadhi dum biryani. The bridal suite gave me the calmest prep experience imaginable!",
    verified: "Verified WedMeGood Review",
  },
  {
    id: 2,
    couple: "Dr. Alok & Sunita Singhania",
    role: "Parents of the Bride",
    event: "Full 3-Day Wedding Celebrations • 1,400 Guests",
    lawn: "Heritage Palace & Mandap Lawn",
    date: "November 2025",
    rating: 5,
    title: "Zero Stress for the Family. Exceptional Hospitality.",
    comment:
      "As parents, our biggest anxiety was parking and catering logistics for over 1,400 guests. The 500-car valet team handled the rush seamlessly without a single traffic bottleneck. The estate wedding manager was with us like family throughout every ritual.",
    verified: "Google 5.0 Star Review",
  },
  {
    id: 3,
    couple: "Ananya & Siddharth Oberoi",
    role: "Bride & Groom",
    event: "Sundowner Haldi & Cocktail Night • 650 Guests",
    lawn: "Sunset Poolside Courtyard",
    date: "January 2026",
    rating: 5,
    title: "The Poolside Haldi was Out of This World!",
    comment:
      "We wanted a destination wedding vibe without flying everyone to Udaipur or Goa. Kala Farms delivered exactly that! The yellow marigold decor against the turquoise pool was straight out of Architectural Digest. Their in-house team is top-tier.",
    verified: "Verified WedMeGood Review",
  },
  {
    id: 4,
    couple: "Tanvi & Kabir Mathur",
    role: "Bride & Groom",
    event: "Winter Royal Reception • 900 Guests",
    lawn: "The Grand Mandap Lawn",
    date: "February 2026",
    rating: 5,
    title: "Saved Us ₹4.5 Lakhs With Their Price Beat Challenge!",
    comment:
      "We had received an exorbitant proposal from a Gurugram 5-star hotel. We brought the quote to Kala Farms and they not only beat the pricing by over 12%, but gave us 3x more lawn space, 2 royal suites, and far superior live catering. Absolute gold standard!",
    verified: "Google 5.0 Star Review",
  },
];

export default function TestimonialsAndReviews() {
  const [filter, setFilter] = useState("all");

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#fffaf0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching reference */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-amber-500 text-sm font-semibold">
            <span>★★★★★</span>
            <span className="text-stone-800 font-bold">4.8 / 5.0 Rating</span>
            <span className="text-stone-400">• Over 850+ Verified Reviews</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
            Our Clients’ Reviews & Experiences
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-light">
            Hear directly from the couples, parents, and families whose milestone moments came alive at Kala Farms.
          </p>
        </div>

        {/* Rating summary badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-4 text-center border border-stone-200/60 shadow-sm">
            <div className="font-playfair text-2xl font-bold text-[#9A2157]">
              4.8 / 5
            </div>
            <div className="text-xs text-stone-500 font-medium mt-0.5">
              Google Business Rating
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center border border-stone-200/60 shadow-sm">
            <div className="font-playfair text-2xl font-bold text-[#9A2157]">
              4.9 / 5
            </div>
            <div className="text-xs text-stone-500 font-medium mt-0.5">
              WedMeGood Certificate
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center border border-stone-200/60 shadow-sm">
            <div className="font-playfair text-2xl font-bold text-[#9A2157]">
              1,043+
            </div>
            <div className="text-xs text-stone-500 font-medium mt-0.5">
              Weddings Celebrated
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center border border-stone-200/60 shadow-sm">
            <div className="font-playfair text-2xl font-bold text-[#9A2157]">
              98.7%
            </div>
            <div className="text-xs text-stone-500 font-medium mt-0.5">
              Family Recommendation
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/80 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                {/* Top Row: Stars and Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-base tracking-widest">
                    {"★".repeat(review.rating)}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {review.verified}
                  </span>
                </div>

                <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#1A1A1A] leading-snug">
                  "{review.title}"
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Event Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-[#1A1A1A]">
                    {review.couple}
                  </div>
                  <div className="text-xs text-[#9A2157] font-medium">
                    {review.role} • {review.lawn}
                  </div>
                </div>
                <div className="text-right text-xs text-stone-400">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
