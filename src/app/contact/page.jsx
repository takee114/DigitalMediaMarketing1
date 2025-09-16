import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Track form submission with Facebook Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Contact')
      }
      // Track with LinkedIn Pixel
      if (typeof window !== 'undefined' && window.lintrk) {
        window.lintrk('track', { conversion_id: 'contact_form' })
      }
      
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning more about your digital marketing services."
    const phoneNumber = "1234567890" // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Track WhatsApp click
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1362A1] to-[#1C603B] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-spectral font-bold text-4xl lg:text-6xl leading-tight mb-6">
              Get In
              <span className="text-[#B98E2E]"> Touch</span>
            </h1>
            <p className="font-spectral text-xl text-gray-200 mb-8 leading-relaxed">
              Ready to transform your digital presence? Let's discuss your marketing goals 
              and create a strategy that drives real results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-spectral font-bold text-3xl text-gray-900 mb-8">
                Let's Start a Conversation
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B98E2E] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <p className="font-spectral text-gray-600 mb-2">
                      Send us an email and we'll respond within 24 hours.
                    </p>
                    <a 
                      href="mailto:info@digitalmarketingpro.com"
                      className="font-spectral text-[#1362A1] hover:text-[#B98E2E] transition-colors duration-300"
                    >
                      info@digitalmarketingpro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B98E2E] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <p className="font-spectral text-gray-600 mb-2">
                      Speak directly with our marketing experts.
                    </p>
                    <a 
                      href="tel:+15551234567"
                      className="font-spectral text-[#1362A1] hover:text-[#B98E2E] transition-colors duration-300"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B98E2E] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-2">
                      Visit Our Office
                    </h3>
                    <p className="font-spectral text-gray-600">
                      123 Digital Street<br />
                      Marketing City, MC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B98E2E] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-2">
                      Business Hours
                    </h3>
                    <p className="font-spectral text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-[#25D366] hover:bg-[#22C55E] transition-colors duration-300 rounded-2xl p-6 cursor-pointer" onClick={handleWhatsAppClick}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-spectral font-semibold text-xl text-white mb-1">
                      Chat on WhatsApp
                    </h3>
                    <p className="font-spectral text-green-100">
                      Get instant answers to your questions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[#B98E2E] mx-auto mb-6" />
                  <h3 className="font-spectral font-bold text-2xl text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="font-spectral text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#B98E2E] hover:bg-[#A37D26] text-white font-spectral font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-spectral font-bold text-2xl text-gray-900 mb-6">
                    Send Us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-spectral font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-spectral focus:outline-none focus:ring-2 focus:ring-[#B98E2E] focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block font-spectral font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-spectral focus:outline-none focus:ring-2 focus:ring-[#B98E2E] focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block font-spectral font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-spectral focus:outline-none focus:ring-2 focus:ring-[#B98E2E] focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block font-spectral font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-spectral focus:outline-none focus:ring-2 focus:ring-[#B98E2E] focus:border-transparent"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block font-spectral font-medium text-gray-700 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-spectral focus:outline-none focus:ring-2 focus:ring-[#B98E2E] focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="seo">SEO Optimization</option>
                          <option value="content">Content Marketing</option>
                          <option value="paid-ads">Paid Advertising</option>
                          <option value="analytics">Analytics & Reporting</option>
                          <option value="brand">Brand Strategy</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block font-spectral font-medium text-gray-700 mb-2">
                          Monthly Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-spectral focus:outline-none focus:ring-2 focus:ring-[#B98E2E] focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-1k">Under $1,000</option>
                          <option value="1k-3k">$1,000 - $3,000</option>
                          <option value="3k-5k">$3,000 - $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="over-10k">Over $10,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-spectral font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-spectral focus:outline-none focus:ring-2 focus:ring-[#B98E2E] focus:border-transparent resize-none"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#B98E2E] hover:bg-[#A37D26] disabled:bg-gray-400 text-white font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spectral font-bold text-4xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-spectral text-xl text-gray-600">
              Find quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-4">
                How quickly can I expect to see results?
              </h3>
              <p className="font-spectral text-gray-600 leading-relaxed">
                While some improvements can be seen within the first month, significant results typically 
                appear within 3-6 months. This varies depending on your industry, competition, and chosen services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-4">
                Do you require long-term contracts?
              </h3>
              <p className="font-spectral text-gray-600 leading-relaxed">
                No, we don't require long-term contracts. We believe in earning your business through results, 
                not locking you into commitments. Most clients work with us month-to-month.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-4">
                What makes your agency different from others?
              </h3>
              <p className="font-spectral text-gray-600 leading-relaxed">
                Our data-driven approach, transparent reporting, and dedicated account management set us apart. 
                We focus on ROI and provide detailed insights into every campaign we run.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-spectral font-semibold text-xl text-gray-900 mb-4">
                Can you work with businesses in any industry?
              </h3>
              <p className="font-spectral text-gray-600 leading-relaxed">
                Yes, we have experience across various industries including e-commerce, SaaS, healthcare, 
                real estate, and professional services. We adapt our strategies to fit your specific market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C603B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spectral font-bold text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-spectral text-xl text-gray-200 mb-8">
            Take the first step towards transforming your digital presence. 
            Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#22C55E] text-white font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1C603B] font-spectral font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}