import { useState } from "react";
import {
  ChevronRight,
  Star,
  ArrowRight,
  Check,
  Users,
  TrendingUp,
  Target,
  Quote,
  MessageSquare,
} from "lucide-react";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    // Track with Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
    // Track with LinkedIn Pixel
    if (typeof window !== "undefined" && window.lintrk) {
      window.lintrk("track", { conversion_id: "lead_generation" });
    }
  };

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
    // Track with LinkedIn Pixel
    if (typeof window !== "undefined" && window.lintrk) {
      window.lintrk("track", { conversion_id: "whatsapp_contact" });
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      text: "DigitalMarketing Pro transformed our online presence completely. Our leads increased by 300% in just 3 months!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      text: "The ROI we've seen from their social media campaigns is incredible. Professional, results-driven, and always available.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      company: "Local Restaurant Chain",
      text: "Their content strategy helped us connect with our audience like never before. Sales are up 150% since we started working together.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#B98E2E]" />,
      title: "Data-Driven Results",
      description:
        "Every campaign is backed by comprehensive analytics and optimization for maximum ROI.",
    },
    {
      icon: <Target className="w-8 h-8 text-[#B98E2E]" />,
      title: "Targeted Strategies",
      description:
        "Custom marketing strategies tailored to your specific audience and business goals.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#B98E2E]" />,
      title: "Expert Team",
      description:
        "Dedicated marketing professionals with years of experience across all digital channels.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1362A1] to-[#1C603B] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-spectral font-bold text-4xl lg:text-6xl leading-tight mb-6">
                Transform Your
                <span className="text-[#B98E2E]"> Digital Presence</span>
              </h1>
              <p className="font-spectral text-xl text-gray-200 mb-8 leading-relaxed">
                Drive growth with our comprehensive digital marketing platform.
                From social media to SEO, we deliver results that matter.
              </p>

              {/* Email Signup Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-spectral focus:outline-none focus:ring-2 focus:ring-[#B98E2E]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-[#B98E2E]" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-[#B98E2E]" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-[#B98E2E]" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="font-spectral font-semibold text-2xl mb-2">
                    Proven Results
                  </h3>
                  <p className="text-gray-300">
                    Our clients see average improvements of:
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B98E2E] mb-1">
                      300%
                    </div>
                    <div className="text-sm text-gray-300">Lead Generation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B98E2E] mb-1">
                      250%
                    </div>
                    <div className="text-sm text-gray-300">
                      Social Engagement
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B98E2E] mb-1">
                      180%
                    </div>
                    <div className="text-sm text-gray-300">Website Traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B98E2E] mb-1">
                      150%
                    </div>
                    <div className="text-sm text-gray-300">ROI Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="font-spectral text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven marketing
              strategies to deliver exceptional results for businesses of all
              sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="font-spectral text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="font-spectral text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#B98E2E] opacity-50" />

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#B98E2E] fill-current"
                    />
                  ))}
                </div>

                <p className="font-spectral text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-spectral font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="font-spectral text-gray-600 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#22C55E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        </button>
      </div>
    </div>
  );
}
