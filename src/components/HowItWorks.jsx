"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HowItWorks({ onOpenPlanner }) {
  const [activeStep, setActiveStep] = useState(1);
  const outerRef = useRef(null);

  const steps = [
    {
      num: 1,
      title: "Share your requirements",
      desc: "Tell us your event date, budget, guest count, and preferred venues at Kala Farms.",
      img: "/images/steps/weddingStep1.webp",
    },
    {
      num: 2,
      title: "Get a personalised proposal",
      desc: "Get transparent package pricing on lawn, banquet hall, decor, and catering within 24 hours.",
      img: "/images/steps/weddingStep2.webp",
    },
    {
      num: 3,
      title: "Confirm and book",
      desc: "Reserve your wedding dates with price-beat guarantee & flexible payment milestones.",
      img: "/images/steps/weddingStep3.webp",
    },
  ];

  // Scroll listener that switches active step dynamically as the user scrolls
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = outerRef.current;
          if (!el) {
            ticking = false;
            return;
          }

          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalScrollable = rect.height - windowHeight;

          if (totalScrollable > 0) {
            // How far into the sticky pinning has the user scrolled
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

            if (progress < 0.35) {
              setActiveStep(1);
            } else if (progress < 0.70) {
              setActiveStep(2);
            } else {
              setActiveStep(3);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to step when user clicks on a step number/title
  const handleStepClick = (stepNum) => {
    setActiveStep(stepNum);
    const el = outerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = rect.height - windowHeight;

    if (totalScrollable > 0) {
      const targetProgress = stepNum === 1 ? 0.15 : stepNum === 2 ? 0.52 : 0.88;
      const targetScrollY = window.scrollY + rect.top + (totalScrollable * targetProgress);

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={outerRef} className="relative h-[250vh] sm:h-[280vh]" id="how_it_works_outer_section">
      <section className="sticky top-0 flex h-screen min-h-[100dvh] flex-col items-center justify-center bg-[linear-gradient(180deg,#FFFEF8_0%,#FCF9D9_100%)] px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-14 pb-20 sm:pb-24 lg:pb-12 overflow-hidden">
        {/* Title Block with Exact Ornamental Gold Sticks */}
        <div className="space-y-1 sm:space-y-2 lg:space-y-3 text-center shrink-0">
          <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-8">
            {/* Left Gold Stick */}
            <svg
              className="scale-[0.5] sm:scale-75 lg:scale-110 xl:scale-125 shrink-0"
              fill="none"
              height="10"
              width="86"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="85" height="4" y="3" fill="#B38E4B" rx="2" />
              <circle cx="43" cy="5" r="4" fill="#8C6A2E" />
            </svg>

            <h2 className="whitespace-nowrap text-center font-playfair text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-semibold text-[#1C2431]">
              How it works
            </h2>

            {/* Right Gold Stick */}
            <svg
              className="scale-[0.5] sm:scale-75 lg:scale-110 xl:scale-125 shrink-0"
              fill="none"
              height="10"
              width="86"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="85" height="4" y="3" fill="#B38E4B" rx="2" />
              <circle cx="43" cy="5" r="4" fill="#8C6A2E" />
            </svg>
          </div>
          <p className="whitespace-pre-wrap text-center text-xs sm:text-sm lg:text-xl xl:text-2xl text-[#555] font-plus-jakarta-sans">
            Book your wedding service in 3 easy steps
          </p>
        </div>

        {/* Interactive 2-Column Content */}
        <div className="mx-auto mt-2 sm:mt-4 lg:mt-6 xl:mt-8 flex w-full max-w-7xl xl:max-w-[1440px] flex-1 flex-col items-center justify-center lg:flex-row lg:justify-between gap-4 sm:gap-6 lg:gap-14 xl:gap-20 2xl:gap-28 px-4 sm:px-8 lg:px-12">
          {/* Left Column: Circular Frame showing Step Illustration (Expanded for PC view) */}
          <div className="relative aspect-square h-[140px] xs:h-[160px] sm:h-[220px] lg:h-[480px] xl:h-[560px] 2xl:h-[620px] lg:w-[480px] xl:w-[560px] 2xl:w-[620px] flex-shrink-0 lg:p-4 xl:p-6 flex items-center justify-center">
            <img
              alt="Floral pattern"
              className="absolute -inset-4 sm:-inset-6 lg:-inset-8 z-[-1] hidden h-[calc(100%+2rem)] sm:h-[calc(100%+3rem)] lg:h-[calc(100%+4rem)] w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] opacity-70 lg:block pointer-events-none scale-105"
              src="/images/flower-pattern.webp"
            />
            <div className="h-full w-full rounded-full bg-gradient-to-t from-[#FDF6EA] to-[#E5CCA0] p-[2.5px] sm:p-[3px] lg:p-[4px] shadow-[0px_15px_60px_rgba(179,142,75,0.28)]">
              <div className="h-full w-full overflow-hidden rounded-full bg-[#FCF7C8] flex items-center justify-center p-2 lg:p-4 relative">
                {steps.map((st) => (
                  <div
                    key={st.num}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      activeStep === st.num
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-95 pointer-events-none z-0"
                    }`}
                  >
                    <img
                      alt={st.title}
                      src={st.img}
                      className="h-full w-full object-cover rounded-full scale-105 lg:scale-115 transition-transform duration-500"
                    />

                    {/* Clean Overlay for Step 1: Replaces Goa text with Kala Farms Nagpur */}
                    {st.num === 1 && (
                      <div className="absolute top-[18%] right-[7%] w-[68%] lg:w-[66%] min-h-[38%] bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-[0_12px_35px_rgba(0,0,0,0.12)] p-2.5 sm:p-4 lg:p-6 border border-gray-100 flex items-center justify-center text-center pointer-events-none z-20">
                        <p className="text-[8.5px] xs:text-[9.5px] sm:text-xs lg:text-base xl:text-lg font-semibold text-gray-800 leading-snug">
                          I want my wedding at Kala Farms, Nagpur. Budget ₹25 Lakhs
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3 Vertical Steps with Dotted Line (Expanded for PC view) */}
          <div className="flex basis-1/2 flex-col items-start justify-center lg:-order-1 pl-4 sm:pl-6 lg:pl-0 w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            {steps.map((step, idx) => {
              const isActive = activeStep === step.num;
              const isLast = idx === steps.length - 1;

              return (
                <div
                  key={step.num}
                  onClick={() => handleStepClick(step.num)}
                  className={`relative cursor-pointer transition-all duration-300 pl-7 sm:pl-10 lg:pl-16 xl:pl-20 ${
                    !isLast
                      ? "bg-[linear-gradient(to_bottom,#121212_50%,transparent_0%)] bg-[length:1px_10px] lg:bg-[length:2px_18px] bg-left-bottom bg-repeat-y pb-3 sm:pb-5 lg:pb-10 xl:pb-14"
                      : "pb-1 sm:pb-2"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div
                    className={`absolute left-0 top-0 z-10 flex h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 xl:h-14 xl:w-14 flex-shrink-0 items-center justify-center rounded-full text-xs sm:text-sm lg:text-xl xl:text-2xl font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#9A2157] text-white shadow-lg scale-110"
                        : "bg-[#E6E6E6] text-gray-500 hover:bg-gray-300"
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                  >
                    {step.num}
                  </div>

                  {/* Pulsing ring if active */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-0 -z-10 h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full bg-[#9A2157]/30 animate-ping"
                      style={{ transform: "translateX(-50%)" }}
                    ></div>
                  )}

                  {/* Title */}
                  <h3
                    className={`transition-all duration-300 mb-1 sm:mb-1.5 lg:mb-3 font-playfair text-base sm:text-xl lg:text-[36px] xl:text-[44px] font-semibold ${
                      isActive
                        ? "text-[#121212] lg:leading-tight"
                        : "text-gray-400 lg:text-2xl xl:text-3xl hover:text-gray-600"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm lg:text-lg xl:text-xl text-[#3A3A3A] transition-all duration-300 lg:w-11/12 xl:w-5/6 leading-relaxed ${
                      isActive ? "opacity-100 max-h-24 sm:max-h-28 lg:max-h-36" : "opacity-40 max-h-8 sm:max-h-10 lg:max-h-12 overflow-hidden"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}

            {/* CTA in step 3 (shown on tablet and desktop to avoid duplication with mobile sticky CTA) */}
            <div className="pt-3 sm:pt-5 lg:pt-8 pl-7 sm:pl-10 lg:pl-16 xl:pl-20 hidden sm:block">
              <button
                onClick={onOpenPlanner}
                className="btn-wine-gradient inline-flex items-center justify-center px-8 py-3.5 lg:px-10 lg:py-4.5 rounded-2xl text-white font-semibold text-sm lg:text-lg xl:text-xl shadow-xl hover:shadow-2xl transition-all active:scale-95 cursor-pointer"
              >
                Start My Wedding Planning
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
