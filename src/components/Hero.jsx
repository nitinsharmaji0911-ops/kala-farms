"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    video: "/videos/hero/hero-slide-1-desktop.mp4#t=0.01",
    videoMobile: "/videos/hero/hero-slide-1-mobile.mp4#t=0.01",
    poster: "/images/royal-palace-hero.jpg",
    couple: "Anjali & Apurav",
    location: "Kala Farms • Nagpur",
    date: "Nov ‘25",
  },
  {
    video: "/videos/hero/hero-slide-2.mp4#t=0.01",
    videoMobile: "/videos/hero/hero-slide-2.mp4#t=0.01",
    poster: "/images/estate-aerial-twilight.jpg",
    couple: "Rhea & Kabir",
    location: "Poolside Lawn • Pawangaon",
    date: "Dec ‘25",
  },
  {
    video: "/videos/hero/hero-slide-3-desktop.mp4#t=0.01",
    videoMobile: "/videos/hero/hero-slide-3-mobile.mp4#t=0.01",
    poster: "/images/hero-mandap.jpg",
    couple: "Simran & Armaan",
    location: "AC Banquet Hall • Kala Farms",
    date: "Feb ‘26",
  },
];

export default function Hero({ onOpenPlanner }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div id="hero_section">
      {/* ================= MOBILE VIEW (md:hidden) ================= */}
      <div className="flex h-[calc(100dvh-56px)] w-full flex-col space-y-2 bg-[#FFFDF9] px-4 pb-2 pt-4 transition-[height] duration-300 ease-linear md:hidden md:space-y-0">
        <div className="relative flex-1 overflow-hidden rounded-xl">
          <div className="mx-auto h-full w-full">
            <div className="keen-slider h-full overflow-hidden rounded-xl">
              <div className="keen-slider__slide flex !min-w-full h-full relative">
                <video
                  key={`mobile-${currentSlide}`}
                  className="h-full w-full object-cover"
                  playsInline
                  autoPlay
                  muted
                  loop
                  poster={slide.poster}
                >
                  <source src={slide.videoMobile} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Floating Couple Pill & Slide Dots */}
          <div className="absolute bottom-3 left-0 right-0 z-10 flex flex-col items-center justify-center gap-2 px-4">
            <div className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-sm px-3.5 py-1.5 font-plus-jakarta-sans text-[11px] sm:text-xs tracking-wide text-white shadow-lg border border-white/10">
              <p className="font-semibold">{slide.couple}</p>
              <span className="h-1 w-1 rounded-full bg-white/70"></span>
              <p>{slide.location}</p>
              <span className="h-1 w-1 rounded-full bg-white/70"></span>
              <p className="text-white/80">{slide.date}</p>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === i ? "w-5 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Content Card */}
        <div className="relative shrink-0 overflow-hidden pt-2">
          <img
            alt="Decorative background pattern"
            fetchPriority="high"
            width={500}
            height={500}
            decoding="async"
            className="absolute bottom-0 right-0 -z-0 object-contain opacity-20 pointer-events-none"
            src="/flowerbg.webp"
          />

          <div className="font-playfair text-center text-[2.2rem] font-medium leading-tight">
            <span className="inline whitespace-nowrap">Crafting Memorable</span>{" "}
            <span className="relative inline-block">
              Weddings
              <span className="absolute -top-1 -right-4 h-5 w-5">
                <img src="/sparkle.svg" alt="Sparkle" className="object-contain w-full h-full" />
              </span>
            </span>
          </div>

          <div className="flex mt-3 flex-col gap-3">
            {/* 3 Stats */}
            <div className="grid grid-cols-3 gap-0">
              <div className="text-center">
                <div className="font-semibold text-[#1A1A1A] text-xl">500+</div>
                <div className="text-xs text-[#1C2431] tracking-wide">events hosted</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-[#1A1A1A] text-xl">4.6/5</div>
                <div className="text-xs text-[#1C2431] tracking-wide">google rating</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-[#1A1A1A] text-xl">74+</div>
                <div className="text-xs text-[#1C2431] tracking-wide">google reviews</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex w-full items-stretch gap-[9px] pt-1">
              <button
                id="mobile-go-to-planning-section"
                onClick={onOpenPlanner}
                className="btn-wine-gradient z-10 w-full font-semibold text-white rounded-2xl py-4 text-base shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Start my wedding planning</span>
                </div>
              </button>

              <a
                href="https://api.whatsapp.com/send?phone=918668719180&text=Hey%2C%20I%20am%20looking%20for%20wedding%20venue%20and%20celebration%20services%20at%20Kala%20Farms%20Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                id="homepage-mobile-hero-whatsapp-cta"
                aria-label="Chat with us on WhatsApp"
                className="z-10 flex shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#01C03D_0%,#008B32_100%)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] w-[3.375rem]"
              >
                <svg width="29" height="29" viewBox="0 0 28.9865 29.1164" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0.618515 14.4335C0.617835 16.888 1.25916 19.2846 2.47863 21.397L0.50189 28.6144L7.88801 26.6777C9.93092 27.7898 12.2198 28.3726 14.5458 28.3727H14.552C22.2306 28.3727 28.4811 22.1245 28.4844 14.4445C28.4859 10.723 27.0379 7.22358 24.4071 4.5908C21.7768 1.95823 18.2787 0.507665 14.5514 0.505966C6.8719 0.505966 0.621799 6.75391 0.618628 14.4335" fill="url(#mobile-hero-green)"></path>
                  <path d="M0.121154 14.4271C0.120362 16.9699 0.784673 19.4522 2.04762 21.6402L0 29.1164L7.65096 27.1103C9.75905 28.2597 12.1325 28.8657 14.5477 28.8666H14.5539C22.508 28.8666 28.9831 22.3935 28.9865 14.4387C28.9878 10.5835 27.4878 6.95823 24.7631 4.23112C22.038 1.50435 18.4147 0.0015852 14.5539 0C6.5985 0 0.124325 6.47214 0.121154 14.4271ZM4.67758 21.2634L4.39191 20.8099C3.191 18.9004 2.55715 16.6938 2.55806 14.428C2.56055 7.81605 7.94162 2.43668 14.5585 2.43668C17.7628 2.43804 20.7743 3.68717 23.0393 5.95355C25.3042 8.22016 26.5505 11.2332 26.5497 14.4378C26.5468 21.0497 21.1656 26.4298 14.5539 26.4298H14.5492C12.3964 26.4287 10.285 25.8505 8.44367 24.758L8.00548 24.4981L3.46524 25.6885L4.67758 21.2634Z" fill="url(#mobile-hero-white)"></path>
                  <path d="M10.9464 8.40083C10.6763 7.80038 10.3919 7.78826 10.135 7.77773C9.92465 7.76867 9.68415 7.76935 9.44388 7.76935C9.20339 7.76935 8.81263 7.85982 8.48235 8.22045C8.15172 8.58143 7.22008 9.45374 7.22008 11.2279C7.22008 13.0021 8.51235 14.7168 8.6925 14.9577C8.87287 15.198 11.1873 18.9554 14.8527 20.4009C17.899 21.6021 18.5189 21.3632 19.1801 21.303C19.8413 21.243 21.3137 20.4309 21.6141 19.5888C21.9148 18.7469 21.9148 18.0251 21.8246 17.8743C21.7345 17.7241 21.494 17.6338 21.1334 17.4536C20.7727 17.2733 18.9997 16.4008 18.6692 16.2804C18.3385 16.1601 18.0982 16.1001 17.8577 16.4612C17.6172 16.8217 16.9266 17.6338 16.7161 17.8743C16.5058 18.1154 16.2953 18.1454 15.9348 17.965C15.574 17.7841 14.4126 17.4037 13.0347 16.1753C11.9627 15.2194 11.2389 14.039 11.0285 13.678C10.8181 13.3174 11.006 13.122 11.1868 12.9423C11.3488 12.7807 11.5476 12.5212 11.728 12.3107C11.9078 12.1001 11.9679 11.9499 12.0881 11.7094C12.2085 11.4686 12.1482 11.258 12.0582 11.0777C11.9679 10.8973 11.2671 9.11383 10.9464 8.40083Z" fill="white"></path>
                  <defs>
                    <linearGradient id="mobile-hero-green" x1="14.4931" y1="28.6144" x2="14.4931" y2="0.505966" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1FAF38"></stop>
                      <stop offset="1" stopColor="#60D669"></stop>
                    </linearGradient>
                    <linearGradient id="mobile-hero-white" x1="14.4932" y1="29.1164" x2="14.4932" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F9F9F9"></stop>
                      <stop offset="1" stopColor="white"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>

            {/* Scroll Down Indicator */}
            <div className="flex w-full justify-center pt-2">
              <a href="#how_it_works_outer_section" className="animate-bounce">
                <img
                  alt="Scroll for more content"
                  width={40}
                  height={40}
                  src="/arrows_more_down.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW (hidden md:block) ================= */}
      <div className="relative hidden h-[calc(100dvh-56px)] w-full bg-[#120909] md:block overflow-hidden">
        {/* Keen Slider Video Carousel */}
        <div className="mx-auto h-full w-full">
          <div className="keen-slider h-full overflow-hidden">
            <div className="keen-slider__slide flex !min-w-full h-full relative">
              <video
                key={`desktop-${currentSlide}`}
                className="h-full w-full object-cover transition-opacity duration-1000"
                playsInline
                autoPlay
                muted
                loop
                poster={slide.poster}
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Exact Dark Gradient Overlay */}
              <div className="absolute inset-0 h-full bg-[linear-gradient(180deg,rgba(18,9,9,0.00)_0%,rgba(18,9,9,0.00)_45.31%,rgba(18,9,9,0.40)_58.58%,rgba(18,9,9,0.50)_63.86%,rgba(18,9,9,0.60)_100%)]"></div>
            </div>
          </div>
        </div>

        {/* Floating Couple Tag Pill & Slide Dots (Unified Flex Column to Prevent Overlapping on PC) */}
        <div className="absolute left-0 right-0 z-10 flex flex-col items-center justify-center gap-2.5 px-4 md:bottom-[35%]">
          {/* Couple Tag Pill */}
          <div className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-4 py-2 font-plus-jakarta-sans text-xs sm:text-sm tracking-wide text-white shadow-xl border border-white/15">
            <p className="font-semibold">{slide.couple}</p>
            <span className="h-1.5 w-1.5 rounded-full bg-white/70"></span>
            <p>{slide.location}</p>
            <span className="h-1.5 w-1.5 rounded-full bg-white/70"></span>
            <p className="text-white/80">{slide.date}</p>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === i
                    ? "w-6 bg-white shadow-md"
                    : "w-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Foreground Content Card at top-[68%] */}
        <div className="absolute top-[68%] w-full pt-4 lg:px-48 z-20">
          {/* Top Divider Gradient Line */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>

          <div className="relative flex items-start justify-center gap-24 px-8">
            {/* Left Headline with Dual Sparkle SVGs */}
            <div className="font-playfair relative flex max-w-[600px] flex-col gap-3 text-5xl text-white lg:text-[5rem] drop-shadow-md">
              <span className="inline whitespace-nowrap md:text-4xl lg:text-5xl">
                Crafting Memorable
              </span>
              <span className="md:relative md:inline-block">
                Weddings
                <span className="absolute -top-1 right-[0.7em] h-6 w-6">
                  <img
                    alt="Sparkle"
                    decoding="async"
                    loading="lazy"
                    className="object-contain w-full h-full"
                    src="/sparkle.svg"
                  />
                </span>
                <span className="absolute right-[0.6em] top-5 h-4 w-4">
                  <img
                    alt="Sparkle"
                    decoding="async"
                    loading="lazy"
                    className="object-contain w-full h-full"
                    src="/sparkle.svg"
                  />
                </span>
              </span>
            </div>

            {/* Right Column: 3 Stats & Action CTAs */}
            <div className="flex min-w-[400px] flex-col items-center gap-6">
              {/* 3 Stats Grid */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center md:text-start">
                  <div className="font-semibold md:mb-2 text-white text-xl md:text-[28px]">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-white/90 tracking-wide">
                    events hosted
                  </div>
                </div>
                <div className="text-center md:text-start">
                  <div className="font-semibold md:mb-2 text-white text-xl md:text-[28px]">
                    4.6/5
                  </div>
                  <div className="text-xs md:text-sm text-white/90 tracking-wide">
                    google rating
                  </div>
                </div>
                <div className="text-center md:text-start">
                  <div className="font-semibold md:mb-2 text-white text-xl md:text-[28px]">
                    74+
                  </div>
                  <div className="text-xs md:text-sm text-white/90 tracking-wide">
                    google reviews
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex w-full items-stretch gap-3">
                <button
                  id="desktop-go-to-planning-section"
                  onClick={onOpenPlanner}
                  className="btn-wine-gradient z-10 w-full text-lg font-semibold text-white rounded-2xl py-4 cursor-pointer"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>Start my wedding planning</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right transition-transform group-hover:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </button>

                <a
                  href="https://api.whatsapp.com/send?phone=918668719180&text=Hey%2C%20I%20am%20looking%20for%20wedding%20venue%20and%20celebration%20services%20at%20Kala%20Farms%20Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="homepage-desktop-hero-whatsapp-cta"
                  aria-label="Chat with us on WhatsApp"
                  className="z-10 flex shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#01C03D_0%,#008B32_100%)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_6px_20px_rgba(1,192,61,0.4)] transition-all w-[3.875rem]"
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 28.9865 29.1164"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M0.618515 14.4335C0.617835 16.888 1.25916 19.2846 2.47863 21.397L0.50189 28.6144L7.88801 26.6777C9.93092 27.7898 12.2198 28.3726 14.5458 28.3727H14.552C22.2306 28.3727 28.4811 22.1245 28.4844 14.4445C28.4859 10.723 27.0379 7.22358 24.4071 4.5908C21.7768 1.95823 18.2787 0.507665 14.5514 0.505966C6.8719 0.505966 0.621799 6.75391 0.618628 14.4335"
                      fill="url(#desktop-hero-green)"
                    ></path>
                    <path
                      d="M0.121154 14.4271C0.120362 16.9699 0.784673 19.4522 2.04762 21.6402L0 29.1164L7.65096 27.1103C9.75905 28.2597 12.1325 28.8657 14.5477 28.8666H14.5539C22.508 28.8666 28.9831 22.3935 28.9865 14.4387C28.9878 10.5835 27.4878 6.95823 24.7631 4.23112C22.038 1.50435 18.4147 0.0015852 14.5539 0C6.5985 0 0.124325 6.47214 0.121154 14.4271ZM4.67758 21.2634L4.39191 20.8099C3.191 18.9004 2.55715 16.6938 2.55806 14.428C2.56055 7.81605 7.94162 2.43668 14.5585 2.43668C17.7628 2.43804 20.7743 3.68717 23.0393 5.95355C25.3042 8.22016 26.5505 11.2332 26.5497 14.4378C26.5468 21.0497 21.1656 26.4298 14.5539 26.4298H14.5492C12.3964 26.4287 10.285 25.8505 8.44367 24.758L8.00548 24.4981L3.46524 25.6885L4.67758 21.2634Z"
                      fill="url(#desktop-hero-white)"
                    ></path>
                    <path
                      d="M10.9464 8.40083C10.6763 7.80038 10.3919 7.78826 10.135 7.77773C9.92465 7.76867 9.68415 7.76935 9.44388 7.76935C9.20339 7.76935 8.81263 7.85982 8.48235 8.22045C8.15172 8.58143 7.22008 9.45374 7.22008 11.2279C7.22008 13.0021 8.51235 14.7168 8.6925 14.9577C8.87287 15.198 11.1873 18.9554 14.8527 20.4009C17.899 21.6021 18.5189 21.3632 19.1801 21.303C19.8413 21.243 21.3137 20.4309 21.6141 19.5888C21.9148 18.7469 21.9148 18.0251 21.8246 17.8743C21.7345 17.7241 21.494 17.6338 21.1334 17.4536C20.7727 17.2733 18.9997 16.4008 18.6692 16.2804C18.3385 16.1601 18.0982 16.1001 17.8577 16.4612C17.6172 16.8217 16.9266 17.6338 16.7161 17.8743C16.5058 18.1154 16.2953 18.1454 15.9348 17.965C15.574 17.7841 14.4126 17.4037 13.0347 16.1753C11.9627 15.2194 11.2389 14.039 11.0285 13.678C10.8181 13.3174 11.006 13.122 11.1868 12.9423C11.3488 12.7807 11.5476 12.5212 11.728 12.3107C11.9078 12.1001 11.9679 11.9499 12.0881 11.7094C12.2085 11.4686 12.1482 11.258 12.0582 11.0777C11.9679 10.8973 11.2671 9.11383 10.9464 8.40083Z"
                      fill="white"
                    ></path>
                    <defs>
                      <linearGradient
                        id="desktop-hero-green"
                        x1="14.4931"
                        y1="28.6144"
                        x2="14.4931"
                        y2="0.505966"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1FAF38"></stop>
                        <stop offset="1" stopColor="#60D669"></stop>
                      </linearGradient>
                      <linearGradient
                        id="desktop-hero-white"
                        x1="14.4932"
                        y1="29.1164"
                        x2="14.4932"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F9F9F9"></stop>
                        <stop offset="1" stopColor="white"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Centered Scroll Down Arrow Indicator */}
          <div className="flex w-full justify-center pt-8">
            <a href="#client-reviews-section" className="animate-bounce hover:opacity-80 transition-opacity">
              <img
                alt="Scroll for more content"
                loading="lazy"
                width={60}
                height={60}
                decoding="async"
                src="/arrows_more_down.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
