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
      {/* Download Apps Section */}
      <AnimatedSection animationType="slideUp" delay={200}>
        <section className="py-16 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {content.appDownload.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {content.appDownload.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm text-center p-8">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{content.appDownload.customerApp.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{content.appDownload.customerApp.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                    </Button>
                    <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm text-center p-8">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{content.appDownload.providerApp.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{content.appDownload.providerApp.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                    </Button>
                    <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
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