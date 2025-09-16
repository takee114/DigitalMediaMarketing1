import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Globe,
  CheckCircle,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'd like to learn more about your team and digital marketing approach.";
    const phoneNumber = "1234567890";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Track WhatsApp click
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact");
    }
  };

  const handleContactClick = () => {
    // Track contact clicks
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
    if (typeof window !== "undefined" && window.lintrk) {
      window.lintrk("track", { conversion_id: "about_contact" });
    }
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in digital marketing with expertise in strategy and brand development.",
    },
    {
      name: "Michael Chen",
      role: "Head of Digital Strategy",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former Google Ads specialist with deep expertise in paid advertising and analytics.",
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer specializing in brand identity and content creation.",
    },
    {
      name: "David Park",
      role: "SEO Specialist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Technical SEO expert with a track record of improving organic rankings.",
    },
  ];

  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-[#B98E2E]" />,
      title: "Transparency",
      description:
        "We believe in open communication and honest reporting. You'll always know exactly how your campaigns are performing and where your investment is going.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#B98E2E]" />,
      title: "Results-Driven",
      description:
        "Every strategy we implement is focused on delivering measurable results that directly impact your business growth and bottom line.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#B98E2E]" />,
      title: "Partnership",
      description:
        "We don't just work for you - we work with you. Your success is our success, and we're committed to being your long-term growth partner.",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#B98E2E]" />,
      title: "Innovation",
      description:
        "The digital landscape is constantly evolving, and we stay ahead of the curve by embracing new technologies and marketing techniques.",
    },
  ];

  const achievements = [
    {
      number: "500+",
      label: "Clients Served",
    },
    {
      number: "300%",
      label: "Average Lead Increase",
    },
    {
      number: "50M+",
      label: "Impressions Generated",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1362A1] to-[#1C603B] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-spectral font-bold text-4xl lg:text-6xl leading-tight mb-6">
              About
              <span className="text-[#B98E2E]"> Our Story</span>
            </h1>
            <p className="font-spectral text-xl text-gray-200 mb-8 leading-relaxed">
              We're a passionate team of digital marketing experts dedicated to
              helping businesses thrive in the digital age through innovative
              strategies and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                onClick={handleContactClick}
                className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="border-2 border-white text-white hover:bg-white hover:text-[#1362A1] font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat With Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B98E2E] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-spectral font-bold text-3xl text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="font-spectral text-gray-600 leading-relaxed text-lg">
                To empower businesses of all sizes with cutting-edge digital
                marketing strategies that drive real growth, increase brand
                visibility, and create lasting customer relationships in an
                ever-evolving digital landscape.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1362A1] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-spectral font-bold text-3xl text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="font-spectral text-gray-600 leading-relaxed text-lg">
                To be the leading digital marketing platform that transforms how
                businesses connect with their audiences, setting new standards
                for innovation, transparency, and measurable results in the
                industry.
              </p>
            </div>

            {/* Goals */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1C603B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-spectral font-bold text-3xl text-gray-900 mb-6">
                Our Goals
              </h2>
              <p className="font-spectral text-gray-600 leading-relaxed text-lg">
                To help 1,000+ businesses achieve their digital marketing
                objectives by 2025, maintaining our 98% client satisfaction rate
                while continuously innovating our service offerings and
                expanding our global reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 font-spectral text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, DigitalMarketing Pro began as a small agency
                  with a big vision: to democratize access to professional
                  digital marketing services for businesses of all sizes.
                </p>
                <p>
                  Our founder, Sarah Johnson, recognized that many small and
                  medium-sized businesses were struggling to navigate the
                  complex world of digital marketing. With her 15+ years of
                  experience at leading marketing agencies, she set out to
                  create a platform that would provide enterprise-level
                  strategies at accessible prices.
                </p>
                <p>
                  Today, we've grown to a team of 50+ specialists and have
                  helped over 500 businesses transform their digital presence.
                  Our data-driven approach and commitment to transparency have
                  made us a trusted partner for companies across various
                  industries.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="font-spectral font-bold text-3xl text-[#B98E2E] mb-2">
                    {achievement.number}
                  </div>
                  <div className="font-spectral text-gray-600 text-sm">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="font-spectral text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with
              our clients and each other every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6">
                <div className="flex-shrink-0">{value.icon}</div>
                <div>
                  <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-spectral text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="font-spectral text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience
              in digital marketing, strategy, and creative services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="font-spectral text-[#B98E2E] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-spectral text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="font-spectral text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a marketing agency - we're your growth
              partners committed to your long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B98E2E] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-4">
                Proven Track Record
              </h3>
              <p className="font-spectral text-gray-600 leading-relaxed">
                Over 500 successful campaigns with an average 300% increase in
                lead generation for our clients.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1362A1] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-4">
                Dedicated Support
              </h3>
              <p className="font-spectral text-gray-600 leading-relaxed">
                Each client gets a dedicated account manager and direct access
                to our team of specialists.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1C603B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-4">
                Cutting-Edge Technology
              </h3>
              <p className="font-spectral text-gray-600 leading-relaxed">
                We use the latest marketing tools and platforms to ensure your
                campaigns are always ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C603B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spectral font-bold text-4xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="font-spectral text-xl text-gray-200 mb-8">
            Let's discuss how we can help your business achieve its digital
            marketing goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              onClick={handleContactClick}
              className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white hover:bg-white hover:text-[#1C603B] font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat With Our Team</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
