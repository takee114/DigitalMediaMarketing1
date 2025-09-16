import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#B98E2E] rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-spectral font-bold text-xl text-[#1C603B]">
                DigitalMarketing Pro
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="font-spectral font-medium text-gray-900 hover:text-[#1362A1] px-3 py-2 text-sm transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="/services"
                className="font-spectral font-medium text-gray-900 hover:text-[#1362A1] px-3 py-2 text-sm transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="/about"
                className="font-spectral font-medium text-gray-900 hover:text-[#1362A1] px-3 py-2 text-sm transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="font-spectral font-medium text-gray-900 hover:text-[#1362A1] px-3 py-2 text-sm transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-6 py-2 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-[#1362A1] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1362A1]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="/"
              onClick={closeMenu}
              className="font-spectral font-medium text-gray-900 hover:text-[#1362A1] block px-3 py-2 text-base transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/services"
              onClick={closeMenu}
              className="font-spectral font-medium text-gray-900 hover:text-[#1362A1] block px-3 py-2 text-base transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="/about"
              onClick={closeMenu}
              className="font-spectral font-medium text-gray-900 hover:text-[#1362A1] block px-3 py-2 text-base transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="/contact"
              onClick={closeMenu}
              className="font-spectral font-medium text-gray-900 hover:text-[#1362A1] block px-3 py-2 text-base transition-colors duration-300"
            >
              Contact
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <a
                href="/contact"
                onClick={closeMenu}
                className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-6 py-2 rounded-lg transition-colors duration-300 block text-center mx-3"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Google Fonts import for Spectral */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600;700;800&display=swap');
        .font-spectral {
          font-family: 'Spectral', serif;
        }
      `}</style>
    </nav>
  );
}
