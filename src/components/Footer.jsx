import {
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'm interested in learning more about your digital marketing services.";
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Track WhatsApp click
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact");
    }
  };

  return (
    <footer className="bg-[#1C603B] text-white">
      {/* Newsletter Signup Section */}
      <div className="bg-[#1362A1] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-spectral font-bold text-2xl mb-4">
            Stay Updated with Marketing Insights
          </h3>
          <p className="font-spectral text-gray-200 mb-6">
            Get the latest digital marketing tips, trends, and strategies
            delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 font-spectral text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B98E2E]"
              required
            />
            <button
              type="submit"
              className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-6 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#B98E2E] rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-spectral font-bold text-xl text-white">
                Digital<span className="text-[#B98E2E]">Pro</span>
              </span>
            </div>
            <p className="font-spectral text-gray-300 mb-4">
              Transform your digital presence with our comprehensive marketing
              platform. Expert services in social media marketing, SEO, content
              creation, and digital advertising.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#B98E2E] hover:bg-[#A37D26] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#B98E2E] hover:bg-[#A37D26] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#B98E2E] hover:bg-[#A37D26] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#B98E2E] hover:bg-[#A37D26] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-spectral font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-spectral font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Search Engine Optimization
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Content Marketing
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Paid Advertising
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Analytics & Reporting
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-spectral text-gray-300 hover:text-[#B98E2E] transition-colors duration-300"
                >
                  Brand Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-spectral font-semibold text-lg mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#B98E2E]" />
                <span className="font-spectral text-gray-300">
                  info@digitalmarketingpro.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#B98E2E]" />
                <span className="font-spectral text-gray-300">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#B98E2E] mt-1" />
                <span className="font-spectral text-gray-300">
                  123 Digital Street
                  <br />
                  Marketing City, MC 12345
                </span>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <button
              onClick={handleWhatsAppClick}
              className="mt-4 bg-[#25D366] hover:bg-[#22C55E] text-white font-spectral font-semibold px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-spectral text-gray-300 text-sm">
              © {currentYear} DigitalPro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="font-spectral text-gray-300 hover:text-[#B98E2E] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="font-spectral text-gray-300 hover:text-[#B98E2E] text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="font-spectral text-gray-300 hover:text-[#B98E2E] text-sm transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
