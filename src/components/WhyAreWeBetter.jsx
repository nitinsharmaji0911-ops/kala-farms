"use client";

import Image from "next/image";

export default function WhyAreWeBetter({ onOpenPlanner }) {
  return (
    <section className="mb-8 w-full" id="why_are_we_better_section">
      {/* Top Green Curve Divider */}
      <div>
        <img
          alt="Green curve"
          className="max-h-24 w-full rotate-180 object-cover object-bottom"
          src="/images/HomePage/new/green-curve.svg"
        />
      </div>

      <div className="flex flex-col items-center bg-[#F0F7F4] px-5 pb-8 md:px-0 md:pb-12">
        <div className="text-center px-4">
          <h2 className="pb-2 text-center font-playfair text-3xl font-semibold text-[#121212] md:pb-4 lg:text-5xl">
            Why are we better?
          </h2>
          <p className="mb-4 mt-2 whitespace-pre-wrap text-center text-base text-gray-600 md:text-xl font-plus-jakarta-sans">
            Because we bring our years of experience in planning your wedding.
          </p>
        </div>

        {/* 3 Benefit Cards Grid */}
        <div className="grid grid-cols-1 gap-y-6 py-4 md:grid-cols-2 md:gap-x-6 md:py-7 lg:grid-cols-3 lg:gap-x-10 2xl:gap-x-12 max-w-6xl w-full px-4">
          {/* Card 1 */}
          <div className="flex items-center rounded-2xl py-6 shadow-[0_15px_30px_0_#A1C8B733] md:flex-col md:px-6 bg-[linear-gradient(180deg,#F0F7F4_0%,#FFF_100%)] border border-[#D9ECE3] hover:-translate-y-1 transition-all">
            <div className="shrink-0">
              <img
                alt="Exclusive Deals"
                className="md:h-[145px] md:w-[145px] h-20 w-20 object-contain drop-shadow"
                src="/images/HomePageRevamp/benefits/gift.webp"
              />
            </div>
            <div className="flex flex-col px-4 md:items-center md:px-2 md:text-center mt-2">
              <h3 className="text-lg font-bold md:pb-1 md:text-2xl text-gray-900">
                Exclusive Deals
              </h3>
              <p className="pb-2 text-base text-gray-600 md:text-lg">
                Best deals made only for you tailored to your preferences, backed by our Price Beat Guarantee.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center rounded-2xl py-6 shadow-[0_15px_30px_0_#A1C8B733] md:flex-col md:px-6 bg-[linear-gradient(180deg,#F0F7F4_0%,#FFF_100%)] border border-[#D9ECE3] hover:-translate-y-1 transition-all">
            <div className="shrink-0">
              <img
                alt="Expert Insights"
                className="md:h-[145px] md:w-[145px] h-20 w-20 object-contain drop-shadow"
                src="/images/HomePageRevamp/benefits/bulb.webp"
              />
            </div>
            <div className="flex flex-col px-4 md:items-center md:px-2 md:text-center mt-2">
              <h3 className="text-lg font-bold md:pb-1 md:text-2xl text-gray-900">
                Expert Insights
              </h3>
              <p className="pb-2 text-base text-gray-600 md:text-lg">
                Our seasoned wedding planners and architects know how to craft the most majestic celebration.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center rounded-2xl py-6 shadow-[0_15px_30px_0_#A1C8B733] md:flex-col md:px-6 bg-[linear-gradient(180deg,#F0F7F4_0%,#FFF_100%)] border border-[#D9ECE3] hover:-translate-y-1 transition-all">
            <div className="shrink-0">
              <img
                alt="Stress-free Experience"
                className="md:h-[145px] md:w-[145px] h-20 w-20 object-contain drop-shadow"
                src="/images/HomePageRevamp/benefits/lady.webp"
              />
            </div>
            <div className="flex flex-col px-4 md:items-center md:px-2 md:text-center mt-2">
              <h3 className="text-lg font-bold md:pb-1 md:text-2xl text-gray-900">
                Stress-free Experience
              </h3>
              <p className="pb-2 text-base text-gray-600 md:text-lg">
                From venue recce to the last second of your wedding, we’ll be with you with 100% dedicated care.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-6">
          <button
            onClick={onOpenPlanner}
            className="btn-wine-gradient px-8 py-3.5 rounded-2xl text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Claim Price Beat Guarantee
          </button>
        </div>
      </div>
    </section>
  );
}
