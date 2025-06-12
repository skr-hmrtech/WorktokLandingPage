
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/animated-section";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  MessageCircle, 
  ChevronDown,
  ChevronUp,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const { content, language } = useLanguage();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', inquiryForm);
    // Reset form
    setInquiryForm({ name: '', email: '', mobile: '', subject: '', message: '' });
    alert(language === 'ar' ? 'تم إرسال استفسارك بنجاح!' : 'Your inquiry has been sent successfully!');
  };

  const displayedFAQs = showAllFAQs ? content.faq.questions : content.faq.questions.slice(0, 5);

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Have a Question Section */}
      <AnimatedSection animationType="slideUp">
        <section className="py-16 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4caf50] to-green-600 rounded-full mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#4caf50] to-green-400 bg-clip-text text-transparent">
                {content.inquiry.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {content.inquiry.subtitle}
              </p>
            </div>

            <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleInquirySubmit} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      {content.inquiry.form.name}
                    </label>
                    <Input
                      placeholder={content.inquiry.form.namePlaceholder}
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      {content.inquiry.form.email}
                    </label>
                    <Input
                      type="email"
                      placeholder={content.inquiry.form.emailPlaceholder}
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      {content.inquiry.form.mobile}
                    </label>
                    <Input
                      placeholder={content.inquiry.form.mobilePlaceholder}
                      value={inquiryForm.mobile}
                      onChange={(e) => setInquiryForm({...inquiryForm, mobile: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      {content.inquiry.form.subject}
                    </label>
                    <Input
                      placeholder={content.inquiry.form.subjectPlaceholder}
                      value={inquiryForm.subject}
                      onChange={(e) => setInquiryForm({...inquiryForm, subject: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      {content.inquiry.form.message}
                    </label>
                    <Textarea
                      placeholder={content.inquiry.form.messagePlaceholder}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="md:col-span-2 text-center">
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-[#4caf50] to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      {content.inquiry.form.submit}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Download Our Apps Section */}
      <AnimatedSection animationType="slideUp" delay={200}>
        <section className="py-16 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4caf50] to-green-600 rounded-full mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#4caf50] to-green-400 bg-clip-text text-transparent">
                {content.appDownload.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                {content.appDownload.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#4caf50] to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">C</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{content.appDownload.customerApp.title}</h3>
                  <p className="text-gray-300 mb-6">{content.appDownload.customerApp.description}</p>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white border border-gray-600">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzggNS4yMkM3LjQgNS42IDcuMjUgNi4xIDcuMjUgNi42OVYxNy4zMUM3LjI1IDE3LjkgNy40IDE4LjQgNy43OCAxOC43OEM4LjE2IDE5LjE2IDguNjYgMTkuMzEgOS4yNSAxOS4zMUgxNC43NUMxNS4zNCAxOS4zMSAxNS44NCAxOS4xNiAxNi4yMiAxOC43OEMxNi42IDE4LjQgMTYuNzUgMTcuOSAxNi43NSAxNy4zMVY2LjY5QzE2Ljc1IDYuMSAxNi42IDUuNiAxNi4yMiA1LjIyQzE1Ljg0IDQuODQgMTUuMzQgNC42OSAxNC43NSA0LjY5SDkuMjVDOC42NiA0LjY5IDguMTYgNC44NCA3Ljc4IDUuMjJaTTkuMjUgMy4xOUgxNC43NUMxNS43NSAzLjE5IDE2LjY5IDMuNTkgMTcuMzQgNC4yNEMxNy45OSA0Ljg5IDE4LjM5IDUuODMgMTguMzkgNi44M1YxNy4xN0MxOC4zOSAxOC4xNyAxNy45OSAxOS4xMSAxNy4zNCAxOS43NkMxNi42OSAyMC40MSAxNS43NSAyMC44MSAxNC43NSAyMC44MUg5LjI1QzguMjUgMjAuODEgNy4zMSAyMC40MSA2LjY2IDE5Ljc2QzYuMDEgMTkuMTEgNS42MSAxOC4xNyA1LjYxIDE3LjE3VjYuODNDNS42MSA1LjgzIDYuMDEgNC44OSA2LjY2IDQuMjRDNy4zMSAzLjU5IDguMjUgMy4xOSA5LjI1IDMuMTlaTTEyIDUuODFDMTEuNTkgNS44MSAxMS4yNSA2LjE1IDExLjI1IDYuNTZDMTEuMjUgNi45NyAxMS41OSA3LjMxIDEyIDcuMzFDMTIuNDEgNy4zMSAxMi43NSA2Ljk3IDEyLjc1IDYuNTZDMTIuNzUgNi4xNSAxMi40MSA1LjgxIDEyIDUuODFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="App Store" className="w-6 h-6 mr-3" />
                      Download on App Store
                    </Button>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white border border-gray-600">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNjA5IDEuODE0TDEzLjc5MiAxMS45OTlMMy42MDkgMjIuMTg0Qy0wLjM3MiAyMC44NzIgLTAuMzcyIDMuMTI4IDMuNjA5IDEuODE0WiIgZmlsbD0iIzMzQzNGMyIvPgo8cGF0aCBkPSJNMjAuNDU2IDguMzQ2TDE2LjY2NyA2LjIyNUwxMy43OTIgMTJMMTYuNjY3IDE3Ljc3NUwyMC40NTYgMTUuNjU0QzIxLjY2MiAxNC45NTEgMjEuNjYyIDkuMDQ5IDIwLjQ1NiA4LjM0NloiIGZpbGw9IiNGRkM4MDciLz4KPHN2Zz4K" alt="Google Play" className="w-6 h-6 mr-3" />
                      Get it on Google Play
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#4caf50] to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">P</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{content.appDownload.providerApp.title}</h3>
                  <p className="text-gray-300 mb-6">{content.appDownload.providerApp.description}</p>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white border border-gray-600">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzggNS4yMkM3LjQgNS42IDcuMjUgNi4xIDcuMjUgNi42OVYxNy4zMUM3LjI1IDE3LjkgNy40IDE4LjQgNy43OCAxOC43OEM4LjE2IDE5LjE2IDguNjYgMTkuMzEgOS4yNSAxOS4zMUgxNC43NUMxNS4zNCAxOS4zMSAxNS44NCAxOS4xNiAxNi4yMiAxOC43OEMxNi42IDE4LjQgMTYuNzUgMTcuOSAxNi43NSAxNy4zMVY2LjY5QzE2Ljc1IDYuMSAxNi42IDUuNiAxNi4yMiA1LjIyQzE1Ljg0IDQuODQgMTUuMzQgNC42OSAxNC43NSA0LjY5SDkuMjVDOC42NiA0LjY5IDguMTYgNC44NCA3Ljc4IDUuMjJaTTkuMjUgMy4xOUgxNC43NUMxNS43NSAzLjE5IDE2LjY5IDMuNTkgMTcuMzQgNC4yNEMxNy45OSA0Ljg5IDE4LjM5IDUuODMgMTguMzkgNi44M1YxNy4xN0MxOC4zOSAxOC4xNyAxNy45OSAxOS4xMSAxNy4zNCAxOS43NkMxNi42OSAyMC40MSAxNS43NSAyMC44MSAxNC43NSAyMC44MUg5LjI1QzguMjUgMjAuODEgNy4zMSAyMC40MSA2LjY2IDE5Ljc2QzYuMDEgMTkuMTEgNS42MSAxOC4xNyA1LjYxIDE3LjE3VjYuODNDNS42MSA1LjgzIDYuMDEgNC44OSA2LjY2IDQuMjRDNy4zMSAzLjU5IDguMjUgMy4xOSA5LjI1IDMuMTlaTTEyIDUuODFDMTEuNTkgNS44MSAxMS4yNSA2LjE1IDExLjI1IDYuNTZDMTEuMjUgNi45NyAxMS41OSA3LjMxIDEyIDcuMzFDMTIuNDEgNy4zMSAxMi43NSA2Ljk3IDEyLjc1IDYuNTZDMTIuNzUgNi4xNSAxMi40MSA1LjgxIDEyIDUuODFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="App Store" className="w-6 h-6 mr-3" />
                      Download on App Store
                    </Button>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white border border-gray-600">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNjA5IDEuODE0TDEzLjc5MiAxMS45OTlMMy42MDkgMjIuMTg0Qy0wLjM3MiAyMC44NzIgLTAuMzcyIDMuMTI4IDMuNjA5IDEuODE0WiIgZmlsbD0iIzMzQzNGMyIvPgo8cGF0aCBkPSJNMjAuNDU2IDguMzQ2TDE2LjY2NyA2LjIyNUwxMy43OTIgMTJMMTYuNjY3IDE3Ljc3NUwyMC40NTYgMTUuNjU0QzIxLjY2MiAxNC45NTEgMjEuNjYyIDkuMDQ5IDIwLjQ1NiA4LjM0NloiIGZpbGw9IiNGRkM4MDciLz4KPHN2Zz4K" alt="Google Play" className="w-6 h-6 mr-3" />
                      Get it on Google Play
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection animationType="slideUp" delay={400}>
        <section className="py-16 border-b border-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#4caf50] to-green-400 bg-clip-text text-transparent">
                {content.faq.title}
              </h2>
              <p className="text-xl text-gray-300">{content.faq.subtitle}</p>
            </div>

            <div className="space-y-4">
              {displayedFAQs.map((faq, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-600 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-700/30 transition-colors"
                    >
                      <span className="font-semibold text-lg">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-[#4caf50]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {content.faq.questions.length > 5 && (
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowAllFAQs(!showAllFAQs)}
                  className="border-[#4caf50] text-[#4caf50] hover:bg-[#4caf50] hover:text-white"
                >
                  {showAllFAQs ? content.faq.lessButton : content.faq.moreButton}
                </Button>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Platform Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#4caf50]">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services" className="hover:text-[#4caf50] transition-colors">How it Works</a></li>
                <li><a href="/services" className="hover:text-[#4caf50] transition-colors">Browse Services</a></li>
                <li><a href="/about" className="hover:text-[#4caf50] transition-colors">Service Areas</a></li>
                <li><a href="/services" className="hover:text-[#4caf50] transition-colors">Pricing</a></li>
                <li><a href="#download" className="hover:text-[#4caf50] transition-colors">Mobile App</a></li>
              </ul>
            </div>

            {/* Customer Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#4caf50]">Customer</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services" className="hover:text-[#4caf50] transition-colors">Book a Service</a></li>
                <li><a href="/contact" className="hover:text-[#4caf50] transition-colors">Help Center</a></li>
                <li><a href="#faq" className="hover:text-[#4caf50] transition-colors">الأسئلة الشائعه</a></li>
                <li><a href="/contact" className="hover:text-[#4caf50] transition-colors">Customer Support</a></li>
                <li><a href="/privacy" className="hover:text-[#4caf50] transition-colors">Safety Guidelines</a></li>
              </ul>
            </div>

            {/* Provider Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#4caf50]">Provider</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/providers" className="hover:text-[#4caf50] transition-colors">Join as Provider</a></li>
                <li><a href="/providers" className="hover:text-[#4caf50] transition-colors">Provider Dashboard</a></li>
                <li><a href="/about" className="hover:text-[#4caf50] transition-colors">Resources</a></li>
                <li><a href="/about" className="hover:text-[#4caf50] transition-colors">Training</a></li>
                <li><a href="/contact" className="hover:text-[#4caf50] transition-colors">Provider Support</a></li>
              </ul>
            </div>

            {/* Social Links Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#4caf50]">Social Links</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#4caf50] to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold">WorkTok</span>
                    <span className="text-sm text-gray-400 -mt-1">Iraqi House Services</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 text-sm">
                  {content.footer.description}
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fab fa-tiktok text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Us - Moved Up */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4caf50]" />
                <div>
                  <p className="font-medium text-white">{content.footer.contact.title}</p>
                  <p className="text-gray-400">{content.footer.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#4caf50]" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-400">{content.footer.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#4caf50]" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-400">Baghdad, Iraq</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - Single Row at Bottom */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">{content.footer.copyright}</p>
            <div className="flex space-x-4 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-[#4caf50] transition-colors">سياسة الخصوصية</a>
              <a href="/privacy" className="text-gray-400 hover:text-[#4caf50] transition-colors">Privacy Policy</a>
              <a href="/contact" className="text-gray-400 hover:text-[#4caf50] transition-colors">تواصل معنا</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
