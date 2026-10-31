"use client";

import Image from "next/image";

export default function EndToEndServices({ onOpenPlanner }) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center my-8">
      <section
        className="relative my-4 w-[92%] bg-white rounded-3xl shadow-[rgba(100,100,111,0.2)_1px_-20px_50px_-20px] before:absolute before:-z-10 before:h-full before:w-full before:scale-[1.002] before:bg-[linear-gradient(180deg,#D4AD67_3.07%,#FFFFFF_94.62%)] before:content-[''] before:rounded-3xl lg:w-[85%]"
        id="end_to_end_services_section"
      >
        <div className="flex px-4 py-7 lg:px-10 lg:py-16">
          <div className="flex flex-col space-y-7 lg:basis-1/2 lg:space-y-8 lg:px-8">
            <div className="space-y-4 px-4 text-center lg:text-left">
              <h2 className="font-playfair text-2xl font-semibold lg:text-5xl text-[#1C2431]">
                End-to-end services
              </h2>
              <p className="text-base text-gray-600 lg:whitespace-pre-wrap lg:text-xl font-plus-jakarta-sans">
                Your one-stop solution for weddings. <br className="hidden lg:block" />
                From planning to execution.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex w-full flex-col justify-center space-y-4">
                <div className="flex items-center gap-3 lg:gap-4">
                  <img
                    alt="pink-icon"
                    className="aspect-square w-6 lg:w-8 object-contain"
                    src="/images/pinkCheckIcon.webp"
                  />
                  <p className="text-base font-semibold text-[#1C2431] lg:text-2xl lg:font-medium">
                    Wedding planning
                  </p>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <img
                    alt="pink-icon"
                    className="aspect-square w-6 lg:w-8 object-contain"
                    src="/images/pinkCheckIcon.webp"
                  />
                  <p className="text-base font-semibold text-[#1C2431] lg:text-2xl lg:font-medium">
                    Budget optimisation
                  </p>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <img
                    alt="pink-icon"
                    className="aspect-square w-6 lg:w-8 object-contain"
                    src="/images/pinkCheckIcon.webp"
                  />
                  <p className="text-base font-semibold text-[#1C2431] lg:text-2xl lg:font-medium">
                    Event management
                  </p>
                </div>
              </div>

              {/* Mobile mandap image */}
              <img
                alt="mandap"
                className="w-32 object-contain lg:hidden"
                src="/images/mandap-decor.webp"
              />
            </div>

            <button
              id="e2e-services-cta"
              onClick={onOpenPlanner}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#9A2157] px-8 py-4 text-base text-white shadow-[0px_4px_15px_0px_rgba(154,33,87,0.35)] hover:bg-[#7D2049] transition-all lg:w-fit lg:text-lg lg:font-semibold"
            >
              <span>Talk to Wedding Planner</span>
              <svg
                className="scale-110 fill-white transition-transform duration-500 group-hover:translate-x-1.5"
                fill="none"
                height="14"
                width="8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.595 7.595a.842.842 0 0 0 0-1.19L2.24 1.049a.842.842 0 0 0-1.19 1.19L5.809 7l-4.76 4.761a.842.842 0 1 0 1.19 1.19l5.356-5.356ZM6 7.842h1V6.158H6v1.684Z"></path>
              </svg>
            </button>
          </div>

          {/* Desktop Right Side Mandap Artwork */}
          <div className="hidden basis-1/2 place-items-center lg:grid">
            <img
              alt="mandap"
              className="h-80 object-contain drop-shadow-xl"
              src="/images/mandap-decor.webp"
            />
          </div>
        </div>

        {/* Decorative corner medallions */}
        <div className="absolute left-1.5 top-1.5 h-6 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-[135deg] rounded-full border-b-0 border-l-[1px] border-r-0 border-t-0 border-[#D4AD67] bg-[#FEFCED] lg:left-4 lg:top-4 lg:block lg:h-12 lg:w-12">
          <div className="h-full w-full rounded-full shadow-[2px_0px_1px_0px_rgba(100,100,111,0.2)_inset]"></div>
        </div>
        <div className="absolute right-1.5 top-1.5 h-6 w-6 -translate-y-1/2 translate-x-1/2 -rotate-45 rounded-full border-b-0 border-l-[1px] border-r-0 border-t-0 border-[#D4AD67] bg-[#FEFCED] lg:right-4 lg:top-4 lg:block lg:h-12 lg:w-12">
          <div className="h-full w-full rounded-full shadow-[2px_0px_1px_0px_rgba(100,100,111,0.2)_inset]"></div>
        </div>
      </section>
    </div>
  );
}
