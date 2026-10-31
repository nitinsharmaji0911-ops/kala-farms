"use client";

export default function BookYourVenue({ onOpenPlanner }) {
  return (
    <div
      id="book_venues_section"
      className="relative h-screen before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/45 before:content-[''] overflow-hidden"
    >
      {/* Background Video (Desktop 16:9 ambient presentation) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block relative h-full w-full object-cover"
        poster="/images/kala-farms-venue-poster.jpg"
      >
        <source
          src="/videos/venue-preview-desktop.mp4"
          type="video/mp4"
        />
      </video>

      {/* Background Video (Mobile 9:16 full-screen presentation) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden block relative h-full w-full object-cover"
        poster="/images/kala-farms-venue-poster.jpg"
      >
        <source
          src="/videos/venue-preview.mp4"
          type="video/mp4"
        />
      </video>

      {/* Centered Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 md:px-8 text-center max-w-7xl mx-auto space-y-6 lg:space-y-10">
        <div className="space-y-2 lg:space-y-6 max-w-4xl mx-auto">
          <h2
            className="font-playfair text-4xl font-bold lg:text-7xl text-white drop-shadow-lg"
          >
            Book your dream venue
          </h2>
          <p
            className="text-base lg:text-2xl text-white/90 font-plus-jakarta-sans tracking-wide drop-shadow"
          >
            🌴 Resort &bull; 🌊 Pool &bull; 🎉 Sprawling Lawn &bull; 🍽 Grand AC Hall &bull; Nagpur
          </p>
        </div>

        <button
          id="venues-check-availability"
          onClick={onOpenPlanner}
          className="btn-wine-gradient group mx-auto flex w-auto items-center justify-center gap-3 whitespace-nowrap rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-[0px_4px_25px_rgba(154,33,87,0.5)] transition-all duration-300 lg:gap-5 lg:px-16 lg:py-5 lg:text-xl cursor-pointer"
        >
          <span>Check availability</span>
          <svg
            className="fill-white transition-transform duration-500 group-hover:translate-x-2 lg:scale-125"
            fill="none"
            height="14"
            width="8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.595 7.595a.842.842 0 0 0 0-1.19L2.24 1.049a.842.842 0 0 0-1.19 1.19L5.809 7l-4.76 4.761a.842.842 0 1 0 1.19 1.19l5.356-5.356ZM6 7.842h1V6.158H6v1.684Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
