"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50 border-b border-primary-hover">
      <div className="xl:container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-light.png"
              alt="Qurbani Hat Logo"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
            />
            <Image
              src="/brand-name-light.png"
              alt="Qurbani Hat Brand"
              width={150}
              height={75}
              className="w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Link
              href="/"
              className="text-background hover:text-white font-medium px-4 py-2 rounded-lg
                         hover:bg-primary-hover/80 hover:-translate-y-0.5
                         transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/animals"
              className="text-background hover:text-white font-medium px-4 py-2 rounded-lg
                         hover:bg-primary-hover/80 hover:-translate-y-0.5
                         transition-all duration-200"
            >
              All Animals
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link
              href="/login"
              className="px-5 py-2 text-background border-2 border-background rounded-lg
                         hover:bg-background hover:text-primary
                         hover:-translate-y-0.5 hover:shadow-md
                         font-semibold transition-all duration-200"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-5 py-2.5 bg-gradient-accent text-white rounded-lg font-semibold
                         shadow-md hover:shadow-xl
                         hover:brightness-110 hover:saturate-125
                         hover:-translate-y-0.5 hover:scale-[1.02]
                         transition-all duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-background
                       hover:bg-primary-hover/80 hover:scale-105
                       transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary-hover bg-primary">
            <div className="px-4 py-4 space-y-3">
              {/* Mobile Navigation */}
              <Link
                href="/"
                onClick={toggleMenu}
                className="block px-4 py-2 text-background hover:text-white rounded-lg font-medium
                           hover:bg-primary-hover/80 hover:-translate-y-0.5
                           transition-all duration-200"
              >
                Home
              </Link>

              <Link
                href="/animals"
                onClick={toggleMenu}
                className="block px-4 py-2 text-background hover:text-white rounded-lg font-medium
                           hover:bg-primary-hover/80 hover:-translate-y-0.5
                           transition-all duration-200"
              >
                All Animals
              </Link>

              {/* Mobile Actions */}
              <div className="pt-3 border-t border-primary-hover space-y-2">
                <Link
                  href="/login"
                  onClick={toggleMenu}
                  className="block px-5 py-2.5 text-center text-background border-2 border-background rounded-lg
                             hover:bg-background hover:text-primary
                             hover:-translate-y-0.5 hover:shadow-md
                             font-semibold transition-all duration-200"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={toggleMenu}
                  className="block px-5 py-2.5 text-center bg-gradient-accent text-white rounded-lg
                             hover:brightness-110 hover:saturate-125
                             hover:-translate-y-0.5 hover:shadow-xl
                             font-semibold transition-all duration-200"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
