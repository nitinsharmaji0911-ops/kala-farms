"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import HowItWorks from "@/components/HowItWorks";
import BookYourVenue from "@/components/BookYourVenue";
import EndToEndServices from "@/components/EndToEndServices";
import WeddingProposals from "@/components/WeddingProposals";
import ExploreWeddingIdeas from "@/components/ExploreWeddingIdeas";
import WhyAreWeBetter from "@/components/WhyAreWeBetter";
import FAQSection from "@/components/FAQSection";
import PrivateEstateTour from "@/components/PrivateEstateTour";
import AboutSEOSection from "@/components/AboutSEOSection";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import InteractivePlannerModal from "@/components/InteractivePlannerModal";

export default function Home() {
  const [plannerOpen, setPlannerOpen] = useState(false);

  const openPlanner = () => setPlannerOpen(true);
  const closePlanner = () => setPlannerOpen(false);

  return (
    <main className="min-h-screen bg-white text-[#1C2431] flex flex-col relative selection:bg-[#9A2157] selection:text-white pb-2 lg:pb-6">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenPlanner={openPlanner} />

      {/* 2. Hero Section (#home-page-revamp) */}
      <Hero onOpenPlanner={openPlanner} />

      {/* 3. Clients' Reviews & Experiences */}
      <ClientReviewsSection />

      {/* 4. How It Works Sticky Timeline (#how_it_works_outer_section) */}
      <HowItWorks onOpenPlanner={openPlanner} />

      {/* 5. Book Your Venue Section (#book_venues_section) */}
      <BookYourVenue onOpenPlanner={openPlanner} />

      {/* 6. End-to-End Services (#end_to_end_services_section) */}
      <EndToEndServices onOpenPlanner={openPlanner} />

      {/* 9. Sample Wedding Proposal (#wedding_proposals_section) */}
      <WeddingProposals onOpenPlanner={openPlanner} />

      {/* 10. Explore Wedding Ideas (#explore_wedding_ideas_section) */}
      <ExploreWeddingIdeas onOpenPlanner={openPlanner} />

      {/* 11. Why Are We Better (#why_are_we_better_section) */}
      <WhyAreWeBetter onOpenPlanner={openPlanner} />

      {/* 12. Frequently Asked Questions (#frequently_asked_questions_section) */}
      <FAQSection onOpenPlanner={openPlanner} />

      {/* 13. Private Estate VIP Tour & Recce Invitation */}
      <PrivateEstateTour onOpenPlanner={openPlanner} />

      {/* 14. More About Kala Farms Luxury Wedding Estate (#more_about_kalafarms_section) */}
      <AboutSEOSection />

      {/* 15. Comprehensive Footer (#footer_section) */}
      <Footer onOpenPlanner={openPlanner} />

      {/* 16. Sticky Bottom Action Bar (#wpt-sticky-cta-homepage-desktop) */}
      <StickyBottomCTA onOpenPlanner={openPlanner} />

      {/* 17. Bespoke Wedding Planner Multi-step Modal */}
      <InteractivePlannerModal isOpen={plannerOpen} onClose={closePlanner} />
    </main>
  );
}
