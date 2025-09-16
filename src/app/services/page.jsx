import {
  Check,
  ArrowRight,
  TrendingUp,
  Search,
  Share2,
  PenTool,
  Target,
  BarChart3,
  Users,
  Megaphone,
  MessageSquare,
} from "lucide-react";

export default function ServicesPage() {
  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'm interested in learning more about your digital marketing services.";
    const phoneNumber = "1234567890";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Track WhatsApp click
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact");
    }
  };

  const handleContactClick = (service) => {
    // Track service interest
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", { content_name: service });
    }
    if (typeof window !== "undefined" && window.lintrk) {
      window.lintrk("track", { conversion_id: "service_inquiry" });
    }
  };

  const services = [
    {
      icon: <Share2 className="w-10 h-10 text-[#B98E2E]" />,
      title: "Social Media Marketing",
      description:
        "Build a strong social presence across all major platforms with engaging content and strategic campaigns.",
      features: [
        "Content strategy and creation",
        "Community management",
        "Paid social advertising",
        "Influencer partnerships",
        "Social media analytics",
      ],
      pricing: "Starting at $1,500/month",
    },
    {
      icon: <Search className="w-10 h-10 text-[#B98E2E]" />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
      features: [
        "Keyword research and analysis",
        "On-page optimization",
        "Technical SEO audits",
        "Link building campaigns",
        "Local SEO optimization",
      ],
      pricing: "Starting at $2,000/month",
    },
    {
      icon: <PenTool className="w-10 h-10 text-[#B98E2E]" />,
      title: "Content Marketing",
      description:
        "Create compelling content that resonates with your audience and drives conversions.",
      features: [
        "Blog writing and optimization",
        "Video content production",
        "Email marketing campaigns",
        "Graphic design services",
        "Content calendar management",
      ],
      pricing: "Starting at $1,200/month",
    },
    {
      icon: <Target className="w-10 h-10 text-[#B98E2E]" />,
      title: "Paid Advertising",
      description:
        "Maximize your ROI with targeted advertising campaigns across Google, Facebook, and other platforms.",
      features: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "LinkedIn advertising",
        "Retargeting campaigns",
        "Conversion optimization",
      ],
      pricing: "Starting at $1,800/month",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#B98E2E]" />,
      title: "Analytics & Reporting",
      description:
        "Track performance and optimize campaigns with comprehensive analytics and detailed reporting.",
      features: [
        "Custom dashboard setup",
        "Monthly performance reports",
        "ROI tracking and analysis",
        "Conversion tracking",
        "Competitive analysis",
      ],
      pricing: "Starting at $800/month",
    },
    {
      icon: <Megaphone className="w-10 h-10 text-[#B98E2E]" />,
      title: "Brand Strategy",
      description:
        "Develop a cohesive brand strategy that resonates with your target audience and drives growth.",
      features: [
        "Brand positioning and messaging",
        "Visual identity development",
        "Market research and analysis",
        "Competitive positioning",
        "Brand guidelines creation",
      ],
      pricing: "Starting at $2,500/month",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We start by understanding your business goals, target audience, and current challenges to develop a customized strategy.",
    },
    {
      step: "02",
      title: "Implementation",
      description:
        "Our expert team implements your marketing strategy across all chosen channels with meticulous attention to detail.",
    },
    {
      step: "03",
      title: "Monitor & Optimize",
      description:
        "We continuously monitor performance and optimize campaigns to ensure maximum ROI and sustained growth.",
    },
    {
      step: "04",
      title: "Report & Scale",
      description:
        "Regular reporting keeps you informed of progress, and we scale successful strategies for continued growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1362A1] to-[#1C603B] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-spectral font-bold text-4xl lg:text-6xl leading-tight mb-6">
              Digital Marketing
              <span className="text-[#B98E2E]"> Services</span>
            </h1>
            <p className="font-spectral text-xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive digital marketing solutions designed to grow your
              business, increase brand awareness, and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="border-2 border-white text-white hover:bg-white hover:text-[#1362A1] font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="font-spectral text-xl text-gray-600 max-w-3xl mx-auto">
              From social media management to SEO optimization, we offer a full
              suite of digital marketing services to help your business thrive
              online.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">{service.icon}</div>

                <h3 className="font-spectral font-bold text-2xl text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="font-spectral text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-[#B98E2E] flex-shrink-0" />
                      <span className="font-spectral text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <span className="font-spectral font-semibold text-[#1362A1] text-lg">
                    {service.pricing}
                  </span>
                  <a
                    href="/contact"
                    onClick={() => handleContactClick(service.title)}
                    className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="font-spectral text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your marketing campaigns
              deliver exceptional results and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#B98E2E] rounded-full flex items-center justify-center text-white font-spectral font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="font-spectral text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-8 h-8 text-[#B98E2E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-2">
                      Proven Results
                    </h3>
                    <p className="font-spectral text-gray-600">
                      Our clients see an average 300% increase in leads and 250%
                      boost in social engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-[#B98E2E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-2">
                      Expert Team
                    </h3>
                    <p className="font-spectral text-gray-600">
                      Our certified digital marketing specialists have years of
                      experience across all major platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <BarChart3 className="w-8 h-8 text-[#B98E2E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-2">
                      Data-Driven Approach
                    </h3>
                    <p className="font-spectral text-gray-600">
                      Every decision is backed by comprehensive analytics and
                      performance data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-spectral font-bold text-2xl text-gray-900 mb-6">
                Ready to Get Started?
              </h3>
              <p className="font-spectral text-gray-600 mb-8">
                Schedule a free consultation to discuss your marketing goals and
                learn how we can help your business grow.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#B98E2E]" />
                  <span className="font-spectral text-gray-700">
                    Free initial consultation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#B98E2E]" />
                  <span className="font-spectral text-gray-700">
                    Custom strategy development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#B98E2E]" />
                  <span className="font-spectral text-gray-700">
                    No long-term contracts required
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="/contact"
                  className="block w-full bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 text-center"
                >
                  Schedule Free Consultation
                </a>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#22C55E] text-white font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Quick Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C603B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spectral font-bold text-4xl mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="font-spectral text-xl text-gray-200 mb-8">
            Let's discuss how our digital marketing services can help your
            business reach new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Get Your Custom Quote Today</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white hover:bg-white hover:text-[#1C603B] font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
