"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import KalaFarmsLogo from "@/components/KalaFarmsLogo";

export default function Navbar({ onOpenPlanner }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="z-[100] flex h-14 justify-between bg-[rgba(255,255,255,0.85)] backdrop-blur-md px-4 py-2 lg:px-14 sticky top-0 border-b border-gray-100/60 shadow-sm transition-all duration-200">
        {/* Brand Logo */}
        <Link href="/" aria-label="Kala Farms Home" className="flex items-center">
          <KalaFarmsLogo variant="horizontal" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 -mr-1 text-gray-700 hover:text-[#9A2157] focus:outline-none transition-colors"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="4" width="22" height="2" rx="1" fill="currentColor"></rect>
            <rect x="1" y="11" width="22" height="2" rx="1" fill="currentColor"></rect>
            <rect x="1" y="18" width="22" height="2" rx="1" fill="currentColor"></rect>
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden flex-1 items-center justify-end gap-16 text-[#1C2431] font-medium lg:flex">
          <li
            className="relative flex h-full cursor-pointer select-none items-center gap-1 hover:text-[#9A2157] transition-colors"
            id="link_wedding_venues_container"
          >
            <a
              id="link_wedding_venues"
              href="#book_venues_section"
              className="text-[15px] font-medium"
            >
              Wedding Venues
            </a>
          </li>

          <li
            className="relative flex h-full cursor-pointer select-none items-center gap-1 hover:text-[#9A2157] transition-colors"
            id="link_refund_policy_container"
          >
            <a
              id="link_refund_policy"
              href="#why_are_we_better_section"
              className="text-[15px] font-medium"
            >
              Price Beat Challenge
            </a>
          </li>

          {/* More Dropdown */}
          <li
            className="relative flex h-full cursor-pointer select-none items-center gap-1 hover:text-[#9A2157] transition-colors"
            id="other_services_dropdown_container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span id="other_services_dropdown" className="text-[15px] font-medium">
              More
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="20"
              fill="#333"
              className={`scale-[0.6] transition-transform duration-200 ease-linear ${
                dropdownOpen ? "rotate-90" : "-rotate-90"
              }`}
            >
              <path d="M9.125 19.1.7 10.7a.871.871 0 0 1-.212-.325A1.098 1.098 0 0 1 .425 10c0-.133.02-.258.063-.375A.872.872 0 0 1 .7 9.3L9.125.875c.233-.233.525-.35.875-.35s.65.125.9.375.375.542.375.875a1.2 1.2 0 0 1-.375.875L3.55 10l7.35 7.35c.233.233.35.52.35.862 0 .342-.125.638-.375.888a1.2 1.2 0 0 1-.875.375 1.2 1.2 0 0 1-.875-.375Z"></path>
            </svg>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-12 right-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 z-50 animate-fadeIn">
                <a
                  href="#end_to_end_services_section"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span>✨</span> End-to-End Planning
                </a>
                <a
                  href="#wedding_proposals_section"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span>📜</span> Sample Wedding Proposal
                </a>
                <a
                  href="#explore_wedding_ideas_section"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span>💡</span> Explore Wedding Ideas
                </a>
                <a
                  href="#why_are_we_better_section"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span>🏆</span> Why Are We Better
                </a>
                <a
                  href="#frequently_asked_questions_section"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span>❓</span> FAQs
                </a>
                <a
                  href="#more_about_kalafarms_section"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span>🏛️</span> About Kala Farms
                </a>
                <a
                  href="https://share.google/XyP8iyizh2NsRwUXc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span>📍</span> Google Maps Location
                </a>
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <button
                    onClick={onOpenPlanner}
                    className="btn-wine-gradient w-full text-center py-2.5 rounded-xl text-white font-semibold text-xs shadow-md cursor-pointer"
                  >
                    Start My Wedding Planning
                  </button>
                </div>
              </div>
            )}
          </li>

          {/* CTA Button */}
          <li>
            <button
              onClick={onOpenPlanner}
              className="btn-wine-gradient px-5 py-2 rounded-xl text-white text-sm font-semibold shadow-sm hover:shadow-md cursor-pointer"
            >
              Plan Wedding
            </button>
          </li>
        </ul>
      </header>

      {/* Mobile Slide-Out Drawer - Placed outside <header> so it escapes containing block limitations */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] lg:hidden flex">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Drawer Panel */}
          <div
            className="relative z-10 bg-white w-[85%] max-w-sm h-full flex flex-col justify-between shadow-2xl overflow-y-auto border-r border-amber-100/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#9A2157]/10 flex items-center justify-center text-[#9A2157] font-serif font-bold text-sm">
                    KF
                  </div>
                  <span className="font-playfair text-xl font-bold text-[#9A2157]">Navigation</span>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 font-bold text-lg transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1.5 text-base font-medium text-gray-800">
                <a
                  href="#book_venues_section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">🏰</span>
                    <span>Wedding Venues</span>
                  </span>
                  <span className="text-gray-300 text-sm">›</span>
                </a>
                <a
                  href="#why_are_we_better_section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">💎</span>
                    <span>Price Beat Challenge</span>
                  </span>
                  <span className="text-gray-300 text-sm">›</span>
                </a>
                <a
                  href="#end_to_end_services_section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">✨</span>
                    <span>End-to-End Services</span>
                  </span>
                  <span className="text-gray-300 text-sm">›</span>
                </a>
                <a
                  href="#wedding_proposals_section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">📜</span>
                    <span>Sample Proposal</span>
                  </span>
                  <span className="text-gray-300 text-sm">›</span>
                </a>
                <a
                  href="#explore_wedding_ideas_section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">💡</span>
                    <span>Wedding Ideas</span>
                  </span>
                  <span className="text-gray-300 text-sm">›</span>
                </a>
                <a
                  href="#frequently_asked_questions_section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">❓</span>
                    <span>FAQs</span>
                  </span>
                  <span className="text-gray-300 text-sm">›</span>
                </a>
                <a
                  href="#more_about_kalafarms_section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFEFF4] hover:text-[#9A2157] transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">🏛️</span>
                    <span>About Kala Farms</span>
                  </span>
                  <span className="text-gray-300 text-sm">›</span>
                </a>
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-4 pb-12 space-y-3 border-t border-gray-100 bg-stone-50/80">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                style={{
                  background: "linear-gradient(135deg, #9A2157 0%, #A1285E 50%, #BC2D6D 100%)",
                  color: "#ffffff"
                }}
                className="w-full py-3.5 rounded-xl text-white font-semibold text-center shadow-[0px_4px_15px_rgba(154,33,87,0.35)] cursor-pointer text-sm hover:opacity-95 transition-opacity"
              >
                Start My Wedding Planning
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=918668719180&text=Hey%2C%20I%20am%20looking%20for%20wedding%20venue%20and%20celebration%20services%20at%20Kala%20Farms%20Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(180deg, #01C03D 0%, #008B32 100%)",
                  color: "#ffffff"
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-semibold text-center text-sm shadow-[0px_4px_15px_rgba(1,192,61,0.25)] hover:opacity-95 transition-opacity"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
