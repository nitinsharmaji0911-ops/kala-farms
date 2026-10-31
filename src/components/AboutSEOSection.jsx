"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSEOSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mb-8" id="more_about_kalafarms_section">
      {/* Top Pink Wave Divider */}
      <div className="w-full">
        <img
          alt=""
          className="max-h-20 w-full object-cover object-top"
          src="/images/HomePage/new/pink-curve.svg"
        />
      </div>

      <div className="bg-[#FFEFF4] pb-12 pt-6 text-[#1C2431]">
        <div className="mx-auto flex max-w-screen-lg flex-col justify-center px-4 md:items-center md:px-0">
          <h2 className="mb-5 font-playfair text-3xl font-semibold md:mb-10 md:text-[44px] text-center">
            About Kala Farms Luxury Wedding Estate
          </h2>

          <div className="flex flex-col items-center gap-y-8 text-left w-full">
            {/* Primary Section */}
            <div className="flex w-full flex-col justify-center gap-3">
              <h3 className="text-2xl font-extrabold md:text-3xl text-gray-900">
                Best Destination Wedding Resort &amp; Venue in Nagpur, Maharashtra
              </h3>
              <div className="flex flex-col gap-y-3 text-base text-gray-700 leading-relaxed">
                <p>
                  Kala Farms (कला Farm &amp; Celebration) is here to help you host your perfect royal wedding and ensure that your grand celebration vision becomes an unforgettable reality.
                </p>
                <p>
                  Located on Pawangaon Ghorpad Road (Kamptee, Nagpur), Kala Farm &amp; Celebration is Nagpur&apos;s premier destination wedding resort. With an all-in-one setup featuring luxury resort rooms, a sprawling open-air wedding lawn, an exotic swimming pool for poolside haldi &amp; sangeet celebrations, and a palatial AC banquet hall, we provide complete peace of mind. Rated 4.6★ on Google Business, our dedicated hospitality team ensures every single moment of your special day is executed to perfection.
                </p>
              </div>
            </div>

            {/* Expandable Deep SEO Content */}
            <div className={`w-full space-y-7 transition-all duration-500 ${expanded ? "block" : "hidden"}`}>
              <div className="flex w-full flex-col justify-center gap-3">
                <h4 className="text-xl font-extrabold md:text-2xl text-gray-900">
                  Comprehensive Turnkey Wedding &amp; Event Services
                </h4>
                <div className="flex flex-col gap-y-2 text-base text-gray-700">
                  <p>
                    Whether you are planning a destination wedding, reception, ring ceremony, sangeet night, or pre-wedding celebration, our on-ground management team brings flawless execution. We help you book all wedding services including custom mandap production, stage lighting, sound setups, and gourmet multi-cuisine catering.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col justify-center gap-3">
                <h4 className="text-lg font-extrabold text-gray-900">
                  Venue Features: 🌴 Resort | 🌊 Pool | 🎉 Lawn | 🍽 Grand AC Hall
                </h4>
                <div className="flex flex-col gap-y-2 text-base text-gray-700">
                  <p>
                    Choosing the right wedding venue is the foundation of an unforgettable celebration. Kala Farms offers a sprawling open lawn accommodating large wedding gatherings, an inviting swimming pool for sundowner cocktails and haldi carnivals, comfortable air-conditioned suites for family stays, and a majestic indoor AC banquet hall.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col justify-center gap-3">
                <h4 className="text-lg font-extrabold text-gray-900">
                  Royal Wedding Decoration &amp; Production Services
                </h4>
                <div className="flex flex-col gap-y-2 text-base text-gray-700">
                  <p>
                    From suspended floral crystal chandeliers and floating mandaps to Moroccan sangeet lounges and vintage royal entrances, our in-house master floral designers and lighting engineers transform the venue into an opulent wonderland.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col justify-center gap-3">
                <h4 className="text-lg font-extrabold text-gray-900">
                  Why Choose Us? Guaranteed Price Beat &amp; Dedicated Concierge
                </h4>
                <div className="flex flex-col gap-y-2 text-base text-gray-700">
                  <p>
                    With our signature Price Beat Challenge, if you have a comparable written quote for decor or catering from any verified vendor, we guarantee to beat it by 10% to 15% while upgrading your specifications. Plus, our dedicated Relationship Managers accompany you from your first walk-through until the final guest farewell.
                  </p>
                </div>
              </div>
            </div>

            {/* Read More / Read Less Toggle Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="self-start border-b-[1.5px] border-[#9A2157] pt-1 text-[#9A2157] font-semibold hover:text-[#7D2049] transition-colors"
            >
              {expanded ? "Read less ▲" : "Read more ▼"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
