"use client";

import Image from "next/image";
import Link from "next/link";
import KalaFarmsLogo from "@/components/KalaFarmsLogo";

export default function Footer({ onOpenPlanner }) {
  return (
    <footer
      className="px-8 pb-28 pt-8 md:px-20 md:pt-12 bg-white text-black mx-auto max-w-screen-2xl border-t border-gray-100"
      id="footer_section"
    >
      {/* Vertical Brand Logo */}
      <section className="mb-10 flex flex-col items-center justify-center lg:mb-12">
        <KalaFarmsLogo variant="vertical" />
      </section>

      {/* Plan Your Dream Wedding Heading */}
      <section className="mb-10 lg:mb-12 text-center max-w-3xl mx-auto">
        <h3 className="mb-3 font-playfair font-semibold text-2xl lg:text-[28px] text-[#1C2431]">
          Plan Your Dream Wedding With Us
        </h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed font-plus-jakarta-sans">
          Kala Farm &amp; Celebration (कला Farms) is your ultimate destination for royal wedding celebrations and luxury resort hospitality in Nagpur. From our sprawling open celebration lawns and AC banquet hall to our swimming pool, luxury stay rooms, and bespoke decor, our dedicated team handles everything to make your wedding day unforgettable.
        </p>
      </section>

      {/* 4-Column Links Grid */}
      <section className="grid grid-cols-4 gap-8 py-6 border-t border-b border-gray-100">
        {/* Column 1: Quick Links */}
        <div
          className="col-span-full flex flex-col gap-3 md:col-span-2 lg:col-span-1"
          id="company_links_container"
        >
          <p className="mb-2 text-xl font-bold text-gray-900 font-playfair">Quick Links</p>
          <a href="#more_about_kalafarms_section" className="hover:text-[#9A2157] text-gray-700 text-sm transition-colors">
            About Kala Farms
          </a>
          <a href="#book_venues_section" className="hover:text-[#9A2157] text-gray-700 text-sm transition-colors">
            Our Wedding Spaces
          </a>
          <a href="#how_it_works_outer_section" className="hover:text-[#9A2157] text-gray-700 text-sm transition-colors">
            How Booking Works
          </a>
          <a href="#client-reviews-section" className="hover:text-[#9A2157] text-gray-700 text-sm transition-colors">
            Client Experiences &amp; GMB
          </a>
          <a href="#frequently_asked_questions_section" className="hover:text-[#9A2157] text-gray-700 text-sm transition-colors">
            Frequently Asked Questions
          </a>
        </div>

        {/* Column 2: Venue Amenities */}
        <div
          className="col-span-full flex flex-col gap-3 md:col-span-2 lg:col-span-1"
          id="explore_links_container"
        >
          <p className="mb-2 text-xl font-bold text-gray-900 font-playfair">Venue Highlights</p>
          <span className="text-gray-700 text-sm flex items-center gap-2">
            <span>🎉</span> Sprawling Open-Air Lawn
          </span>
          <span className="text-gray-700 text-sm flex items-center gap-2">
            <span>🍽</span> Palatial AC Banquet Hall
          </span>
          <span className="text-gray-700 text-sm flex items-center gap-2">
            <span>🌊</span> Swimming Pool &amp; Deck
          </span>
          <span className="text-gray-700 text-sm flex items-center gap-2">
            <span>🌴</span> Luxury Resort Stay Rooms
          </span>
          <span className="text-gray-700 text-sm flex items-center gap-2">
            <span>🚗</span> Spacious Parking &amp; Valet
          </span>
        </div>

        {/* Column 3: Contact Us */}
        <div
          className="col-span-full flex flex-col gap-3 md:col-span-2 lg:col-span-1"
          id="contact_us_links_container"
        >
          <p className="mb-2 text-xl font-bold text-gray-900 font-playfair">Contact Us</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            For Wedding Bookings &amp; Visits
          </p>
          <a
            className="hover:text-[#9A2157] text-gray-800 text-sm font-semibold flex items-center gap-2 transition-colors"
            href="tel:+918668719180"
          >
            <svg
              className="inline-block shrink-0"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 86687 19180 / +91 90226 92968
          </a>

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-2">
            Estate Concierge
          </p>
          <a
            className="hover:text-[#9A2157] text-gray-800 text-sm font-semibold flex items-center gap-2 transition-colors"
            href="mailto:kalafarmsnagpur@gmail.com"
          >
            <svg
              className="inline-block shrink-0"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
            >
              <rect height="16" rx="2" width="20" x="2" y="4" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            kalafarmsnagpur@gmail.com
          </a>

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-2">
            Estate Location
          </p>
          <p className="text-xs text-gray-700 leading-relaxed font-medium">
            Kala Farm &amp; Celebration, Pawangaon Road, Ghorpade, Kamptee, Nagpur, Maharashtra 441401
          </p>
          <a
            href="https://share.google/XyP8iyizh2NsRwUXc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold hover:underline mt-1"
          >
            <span>📍 Open in Google Maps ↗</span>
          </a>
        </div>

        {/* Column 4: Follow Us On */}
        <div
          className="col-span-full flex flex-col gap-3 md:col-span-2 lg:col-span-1"
          id="social_media_and_download_links_container"
        >
          <p className="mb-2 text-xl font-bold text-gray-900 font-playfair">Connect With Us</p>

          <a
            className="flex items-center space-x-3 text-sm text-gray-700 hover:text-[#9A2157] transition-colors"
            href="https://www.instagram.com/kalafarms/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">IG</span>
            <div>
              <span className="font-semibold block text-gray-900">@kalafarms</span>
              <span className="text-[11px] text-gray-500">Instagram Official</span>
            </div>
          </a>

          <a
            className="flex items-center space-x-3 text-sm text-gray-700 hover:text-[#9A2157] transition-colors"
            href="https://share.google/XyP8iyizh2NsRwUXc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-200">G</span>
            <div>
              <span className="font-semibold block text-gray-900">4.6 ★ Google Reviews</span>
              <span className="text-[11px] text-gray-500">Kala Farm &amp; Celebration GMB</span>
            </div>
          </a>

          <a
            className="flex items-center space-x-3 text-sm text-gray-700 hover:text-[#9A2157] transition-colors"
            href="https://api.whatsapp.com/send?phone=918668719180&text=Hey%2C%20I%20am%20looking%20for%20wedding%20venue%20and%20celebration%20services%20at%20Kala%20Farms%20Nagpur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-8 h-8 rounded-full bg-[#01C03D] text-white flex items-center justify-center font-bold text-xs shadow-sm">WA</span>
            <div>
              <span className="font-semibold block text-gray-900">+91 86687 19180</span>
              <span className="text-[11px] text-gray-500">Instant WhatsApp Booking</span>
            </div>
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-8 text-center md:text-left">
        <p className="text-xs text-gray-400 leading-relaxed">
          Kala Farm &amp; Celebration (कला Farms) • Pawangaon Ghorpad Road, Kamptee, Nagpur, Maharashtra 441401. © 2026 Kala Farm &amp; Celebration. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
