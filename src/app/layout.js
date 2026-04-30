import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat - Modern Livestock Marketplace for Eid-ul-Adha",
  description:
    "QurbaniHat is a modern livestock marketplace built specifically for Eid-ul-Adha (Qurbani) season. It allows users to browse cows, goats, and other sacrificial animals, view detailed information, and place bookings — all through a clean, authenticated web experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
    >
      <body>
        <Navbar />
        <main className="container mx-auto bg-background">{children}</main>
      </body>
    </html>
  );
}
