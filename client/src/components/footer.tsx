
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Smartphone,
  Monitor
} from "lucide-react";
import AnimatedSection from "./animated-section";

export default function Footer() {
  const { content, language } = useLanguage();
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
    // Handle form submission
    console.log('Inquiry submitted:', inquiryForm);
    // Reset form
    setInquiryForm({ name: '', email: '', mobile: '', subject: '', message: '' });
  };

  const faqsToShow = showAllFAQs ? content.faq.questions : content.faq.questions.slice(0, 5);

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-worktok-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-worktok-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Have a Question Section */}
        <AnimatedSection animationType="fadeIn">
          <section className="py-20 bg-gradient-to-r from-worktok-primary to-worktok-primary-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection animationType="slideUp">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {content.inquiry.title}
                  </h2>
                  <p className="text-xl text-green-100">
                    {content.inquiry.subtitle}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animationType="slideUp" delay={200}>
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleInquirySubmit} className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          {content.inquiry.form.name}
                        </label>
                        <Input
                          placeholder={content.inquiry.form.namePlaceholder}
                          value={inquiryForm.name}
                          onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">
                          {content.inquiry.form.email}
                        </label>
                        <Input
                          type="email"
                          placeholder={content.inquiry.form.emailPlaceholder}
                          value={inquiryForm.email}
                          onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">
                          {content.inquiry.form.mobile}
                        </label>
                        <Input
                          placeholder={content.inquiry.form.mobilePlaceholder}
                          value={inquiryForm.mobile}
                          onChange={(e) => setInquiryForm({...inquiryForm, mobile: e.target.value})}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">
                          {content.inquiry.form.subject}
                        </label>
                        <Input
                          placeholder={content.inquiry.form.subjectPlaceholder}
                          value={inquiryForm.subject}
                          onChange={(e) => setInquiryForm({...inquiryForm, subject: e.target.value})}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-white font-medium mb-2">
                          {content.inquiry.form.message}
                        </label>
                        <Textarea
                          placeholder={content.inquiry.form.messagePlaceholder}
                          value={inquiryForm.message}
                          onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-32"
                          required
                        />
                      </div>
                      <div className="md:col-span-2 text-center">
                        <Button 
                          type="submit"
                          size="lg" 
                          className="bg-white text-worktok-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                        >
                          {content.inquiry.form.submit}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        {/* Download Our Apps Section */}
        <AnimatedSection animationType="fadeIn">
          <section className="py-20 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection animationType="slideUp">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {content.appDownload.title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {content.appDownload.subtitle}
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <AnimatedSection animationType="slideLeft" delay={200}>
                  <Card className="bg-gradient-to-br from-worktok-primary to-worktok-primary-light text-white border-0 shadow-2xl card-hover">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                        <Smartphone className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{content.appDownload.customerApp.title}</h3>
                      <p className="text-lg mb-8 opacity-90">{content.appDownload.customerApp.description}</p>
                      <div className="space-y-4">
                        <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-3">
                          <Download className="w-5 h-5" />
                          Download on App Store
                        </Button>
                        <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-3">
                          <Download className="w-5 h-5" />
                          Get it on Google Play
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animationType="slideRight" delay={400}>
                  <Card className="bg-gradient-to-br from-gray-700 to-gray-800 text-white border-0 shadow-2xl card-hover">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 mx-auto mb-6 bg-worktok-primary/20 rounded-full flex items-center justify-center">
                        <Monitor className="w-10 h-10 text-worktok-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{content.appDownload.providerApp.title}</h3>
                      <p className="text-lg mb-8 opacity-90">{content.appDownload.providerApp.description}</p>
                      <div className="space-y-4">
                        <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-3">
                          <Download className="w-5 h-5" />
                          Download on App Store
                        </Button>
                        <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-3">
                          <Download className="w-5 h-5" />
                          Get it on Google Play
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              <AnimatedSection animationType="fadeIn" delay={600}>
                <div className="text-center">
                  <p className="text-gray-400 text-lg">{content.appDownload.downloadText}</p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection animationType="fadeIn">
          <section className="py-20 bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection animationType="slideUp">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {content.faq.title}
                  </h2>
                  <p className="text-xl text-gray-300">
                    {content.faq.subtitle}
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                {faqsToShow.map((faq, index) => (
                  <AnimatedSection key={index} animationType="slideUp" delay={index * 100}>
                    <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-700/70 transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>

              {content.faq.questions.length > 5 && (
                <AnimatedSection animationType="fadeIn" delay={800}>
                  <div className="text-center mt-12">
                    <Button
                      onClick={() => setShowAllFAQs(!showAllFAQs)}
                      variant="outline"
                      className="border-worktok-primary text-worktok-primary hover:bg-worktok-primary hover:text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto"
                    >
                      {showAllFAQs ? content.faq.lessButton : content.faq.moreButton}
                      {showAllFAQs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </section>
        </AnimatedSection>

        {/* Main Footer */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Platform Section */}
              <AnimatedSection animationType="slideUp" delay={100}>
                <div>
                  <h3 className="font-bold text-xl mb-6 text-worktok-primary">Platform</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">How it Works</a></li>
                    <li><a href="/services" className="hover:text-worktok-primary transition-colors">Browse Services</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Service Areas</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Mobile App</a></li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* Customer Section */}
              <AnimatedSection animationType="slideUp" delay={200}>
                <div>
                  <h3 className="font-bold text-xl mb-6 text-worktok-primary">Customer</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li><a href="/services" className="hover:text-worktok-primary transition-colors">Book a Service</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">{language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}</a></li>
                    <li><a href="/contact" className="hover:text-worktok-primary transition-colors">Customer Support</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Safety Guidelines</a></li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* Provider Section */}
              <AnimatedSection animationType="slideUp" delay={300}>
                <div>
                  <h3 className="font-bold text-xl mb-6 text-worktok-primary">Provider</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Join as Provider</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Provider Dashboard</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Resources</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Training</a></li>
                    <li><a href="#" className="hover:text-worktok-primary transition-colors">Provider Support</a></li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* Social Links Section */}
              <AnimatedSection animationType="slideUp" delay={400}>
                <div>
                  <h3 className="font-bold text-xl mb-6 text-worktok-primary">Social Links</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-worktok-primary rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">W</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-white">{content.header.logoText}</span>
                        <span className="text-sm text-gray-400">{content.header.logoSubtext}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                      {content.footer.description}
                    </p>
                    <div className="flex space-x-4 mb-6">
                      <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-worktok-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <Facebook className="w-5 h-5 text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-worktok-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <Instagram className="w-5 h-5 text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-worktok-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-worktok-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Us Section */}
            <AnimatedSection animationType="slideUp" delay={500}>
              <div className="border-t border-gray-700 pt-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-10 h-10 bg-worktok-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">{content.footer.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-10 h-10 bg-worktok-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">{content.footer.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-10 h-10 bg-worktok-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">Iraq</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-black py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                {content.footer.copyright}
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-worktok-primary transition-colors">
                  {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
                <a href="#" className="text-gray-400 hover:text-worktok-primary transition-colors">
                  Terms of Service
                </a>
                <a href="/contact" className="text-gray-400 hover:text-worktok-primary transition-colors">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
