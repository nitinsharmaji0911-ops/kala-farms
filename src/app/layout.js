import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kala Farm & Celebration (कला Farms) - Luxury Destination Wedding Resort, Lawn & Banquet Hall, Nagpur",
  description:
    "Kala Farm & Celebration (कला Farms) is Nagpur's premier destination wedding venue & luxury resort on Pawangaon Ghorpad Road. Sprawling wedding lawns, swimming pool, palatial AC banquet hall, and luxury stay suites. Call +91 86687 19180 / +91 90226 92968.",
  keywords:
    "Kala Farms, Kala Farm & Celebration, कला Farms, destination wedding Nagpur, wedding lawn Nagpur, Pawangaon road wedding resort, pool wedding venue Nagpur, AC banquet hall Kamptee, wedding resort Maharashtra",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/e73a0c229305c56c.css" />
        <link rel="stylesheet" href="/61dbd837b13489b4.css" />
      </head>
      <body
        className="font-sans antialiased text-[#1C2431] bg-white selection:bg-[#9A2157] selection:text-white"
        suppressHydrationWarning
      >
        <div id="__next">
          <div className="font-lato" id="parent-container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
