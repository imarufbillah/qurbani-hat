import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-background border-t border-primary-hover/50">
      {/* Main Footer Content */}
      <div className="xl:container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1 — Brand Section */}
          <div className="space-y-4 lg:space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <Image
                src="/logo-light.png"
                alt="Qurbani Hat Logo"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 transition-transform duration-200 group-hover:scale-105"
              />
              <Image
                src="/brand-name-light.png"
                alt="QurbaniHat"
                width={180}
                height={90}
                className="w-36 h-18 sm:w-44 sm:h-22 lg:w-48 lg:h-24 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Brand Description */}
            <p className="text-background/80 text-sm sm:text-base leading-relaxed max-w-sm font-body">
              QurbaniHat is Bangladesh&apos;s trusted platform for browsing and
              booking quality Qurbani animals online.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-gradient-accent hover:scale-110 hover:shadow-lg group"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 text-background group-hover:text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-gradient-accent hover:scale-110 hover:shadow-lg group"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-background group-hover:text-primary" />
              </a>
              <a
                href="https://wa.me/8801700QURBANI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-gradient-accent hover:scale-110 hover:shadow-lg group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-background group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-background">
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 font-body">
              <li>
                <Link
                  href="/"
                  className="text-background/80 text-sm sm:text-base hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/animals"
                  className="text-background/80 text-sm sm:text-base hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  All Animals
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-background/80 text-sm sm:text-base hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-background/80 text-sm sm:text-base hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-background/80 text-sm sm:text-base hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact Information */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-background">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/80 text-sm sm:text-base">
                  Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href="mailto:support@qurbanihat.com"
                  className="text-background/80 text-sm sm:text-base hover:text-background transition-colors duration-300"
                >
                  support@qurbanihat.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href="tel:+8801700QURBANI"
                  className="text-background/80 text-sm sm:text-base hover:text-background transition-colors duration-300"
                >
                  +880 1700-QURBANI
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/80 text-sm sm:text-base">
                  Sat–Thu, 9am–9pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-background/10">
        <div className="xl:container mx-auto px-4 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-body">
            {/* Copyright */}
            <p className="text-background/70 text-center sm:text-left">
              © 2025 QurbaniHat. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-background/70 hover:text-background transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-background/70 hover:text-background transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
