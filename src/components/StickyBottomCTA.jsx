"use client";

import { useState, useEffect } from "react";

export default function StickyBottomCTA({ onOpenPlanner }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero_section");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setVisible(rect.bottom <= 0);
      } else {
        setVisible(window.scrollY > 600);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex h-16 flex-row-reverse justify-center items-center gap-[9px] bg-white/95 backdrop-blur-md px-4 py-0 pb-2 md:gap-3 lg:h-20 lg:gap-4 lg:py-3 shadow-[0_-5px_25px_rgba(0,0,0,0.12)] border-t border-gray-100 transition-all duration-300 animate-slideUp"
    >
      {/* Start Wedding Planning Button */}
      <button
        id="wpt-sticky-cta-homepage-desktop"
        onClick={onOpenPlanner}
        className="btn-wine-gradient flex flex-1 cursor-pointer items-center justify-center rounded-2xl py-3 lg:py-4 text-center font-plus-jakarata-sans text-sm font-semibold text-white shadow-[0px_6px_15px_0px_rgba(154,33,87,0.35)] hover:bg-[#7D2049] transition-all lg:w-1/4 lg:flex-none lg:text-lg lg:font-bold"
      >
        <span>Start my wedding planning</span>
      </button>

      {/* WhatsApp Button */}
      <a
        id="sticky_whatsapp"
        href="https://api.whatsapp.com/send?phone=918668719180&text=Hey%2C%20I%20am%20looking%20for%20wedding%20venue%20and%20celebration%20services%20at%20Kala%20Farms%20Nagpur"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-11 lg:h-14 w-[3.375rem] shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#01C03D_0%,#008B32_100%)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] md:w-60 md:gap-3 md:rounded-2xl md:bg-[#1FAF38] md:bg-none md:text-lg md:font-bold md:text-white md:shadow-[0px_6px_15px_0px_rgba(0,0,0,0.20)] hover:opacity-90 transition-opacity"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 28.9865 29.1164"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0.618515 14.4335C0.617835 16.888 1.25916 19.2846 2.47863 21.397L0.50189 28.6144L7.88801 26.6777C9.93092 27.7898 12.2198 28.3726 14.5458 28.3727H14.552C22.2306 28.3727 28.4811 22.1245 28.4844 14.4445C28.4859 10.723 27.0379 7.22358 24.4071 4.5908C21.7768 1.95823 18.2787 0.507665 14.5514 0.505966C6.8719 0.505966 0.621799 6.75391 0.618628 14.4335"
            fill="white"
          ></path>
          <path
            d="M10.9464 8.40083C10.6763 7.80038 10.3919 7.78826 10.135 7.77773C9.92465 7.76867 9.68415 7.76935 9.44388 7.76935C9.20339 7.76935 8.81263 7.85982 8.48235 8.22045C8.15172 8.58143 7.22008 9.45374 7.22008 11.2279C7.22008 13.0021 8.51235 14.7168 8.6925 14.9577C8.87287 15.198 11.1873 18.9554 14.8527 20.4009C17.899 21.6021 18.5189 21.3632 19.1801 21.303C19.8413 21.243 21.3137 20.4309 21.6141 19.5888C21.9148 18.7469 21.9148 18.0251 21.8246 17.8743C21.7345 17.7241 21.494 17.6338 21.1334 17.4536C20.7727 17.2733 18.9997 16.4008 18.6692 16.2804C18.3385 16.1601 18.0982 16.1001 17.8577 16.4612C17.6172 16.8217 16.9266 17.6338 16.7161 17.8743C16.5058 18.1154 16.2953 18.1454 15.9348 17.965C15.574 17.7841 14.4126 17.4037 13.0347 16.1753C11.9627 15.2194 11.2389 14.039 11.0285 13.678C10.8181 13.3174 11.006 13.122 11.1868 12.9423C11.3488 12.7807 11.5476 12.5212 11.728 12.3107C11.9078 12.1001 11.9679 11.9499 12.0881 11.7094C12.2085 11.4686 12.1482 11.258 12.0582 11.0777C11.9679 10.8973 11.2671 9.11383 10.9464 8.40083Z"
            fill="#01C03D"
          ></path>
        </svg>
        <span className="hidden md:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
