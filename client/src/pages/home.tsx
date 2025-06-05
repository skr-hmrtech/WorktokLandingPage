import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Search, Smartphone, Download, ChevronDown, ChevronUp } from "lucide-react";
import ServiceCategoryCard from "@/components/service-category-card";
import ProviderCard from "@/components/provider-card";
import { useLanguage } from "@/hooks/useLanguage";
import type { ServiceCategory, ServiceProvider, City } from "@shared/schema";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTypingText, setCurrentTypingText] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreFAQ, setShowMoreFAQ] = useState(false);

  const { content, language } = useLanguage();

  const { data: categories = [] } = useQuery<ServiceCategory[]>({
    queryKey: ["/api/categories"],
  });

  const { data: cities = [] } = useQuery<City[]>({
    queryKey: ["/api/cities"],
  });

  const { data: featuredProviders = [] } = useQuery<ServiceProvider[]>({
    queryKey: ["/api/providers/featured"],
  });

  const { data: stats } = useQuery<{
    verifiedProviders: number;
    completedServices: number;
    averageRating: number;
    cities: number;
  }>({
    queryKey: ["/api/stats"],
  });

  // Background images for slider
  const backgroundImages = [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  ];

  // Typing animation effect
  useEffect(() => {
    const typingTexts = content.hero.typingTexts;
    const currentText = typingTexts[currentTypingText];
    
    if (isTyping) {
      if (typedText.length < currentText.length) {
        const timer = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (typedText.length > 0) {
        const timer = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentTypingText((prev) => (prev + 1) % typingTexts.length);
        setIsTyping(true);
      }
    }
  }, [typedText, isTyping, currentTypingText, content.hero.typingTexts]);

  // Background image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const handleSearch = () => {
    // Navigate to services page with search parameters
    const searchParams = new URLSearchParams();
    if (searchQuery) searchParams.set("search", searchQuery);
    if (selectedCity) searchParams.set("city", selectedCity);
    
    window.location.href = `/services${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Slider */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 font-medium max-w-4xl mx-auto">
                {content.hero.subtitle}
              </p>
              
              {/* Typing Animation */}
              <div className="mb-8">
                <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  {content.hero.tagline}
                </p>
                <div className="text-xl md:text-2xl text-yellow-300 h-8">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              {/* Static Search Bar */}
              <div className="max-w-4xl mx-auto">
                <Card className="p-6 shadow-2xl bg-white/95 backdrop-blur-sm">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                        {content.hero.serviceLabel}
                      </label>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          placeholder={content.hero.searchPlaceholder}
                          className="pl-10 text-gray-900"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                        {content.hero.cityLabel}
                      </label>
                      <Select value={selectedCity} onValueChange={setSelectedCity}>
                        <SelectTrigger className="text-gray-900">
                          <SelectValue placeholder={content.hero.cityPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city.id} value={city.id.toString()}>
                              {language === 'ar' ? city.nameAr : city.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      <Button 
                        className="w-full bg-worktok-primary hover:bg-green-600 text-white font-semibold py-3"
                        onClick={handleSearch}
                      >
                        <Search className="w-4 h-4 mr-2" />
                        {content.hero.cta}
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-worktok-dark mb-6">{content.whoWeAre.title}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              {content.whoWeAre.subtitle}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
              {content.whoWeAre.description}
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                {content.whoWeAre.additionalText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Card Layout */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-worktok-dark mb-4">
              {content.stats.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.stats.metrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-worktok-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-worktok-dark mb-4">{content.services.title}</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {content.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.slice(0, showMoreCategories ? 10 : 5).map((category) => (
              <ServiceCategoryCard
                key={category.id}
                category={category}
                onClick={() => window.location.href = `/services?category=${category.id}`}
              />
            ))}
          </div>

          {categories.length > 5 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowMoreCategories(!showMoreCategories)}
                className="px-8 py-3 border-worktok-primary text-worktok-primary hover:bg-worktok-primary hover:text-white"
              >
                {showMoreCategories ? "Show Less" : "Show More"}
                {showMoreCategories ? (
                  <ChevronUp className="ml-2 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-2 w-4 h-4" />
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose WorkTok */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-worktok-dark mb-4">Why Choose WORKTOK?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-worktok-primary bg-opacity-10 rounded-full flex items-center justify-center">
                <i className="fas fa-bolt text-2xl text-worktok-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-worktok-dark mb-4">Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                Our platform streamlines the process of finding and hiring service providers, saving you time and effort.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-green-50 border border-green-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-worktok-secondary bg-opacity-10 rounded-full flex items-center justify-center">
                <i className="fas fa-shield-alt text-2xl text-worktok-secondary"></i>
              </div>
              <h3 className="text-xl font-bold text-worktok-dark mb-4">Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                We carefully vet all service providers in our network to ensure they meet our high standards of professionalism.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-purple-50 border border-purple-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-600 bg-opacity-10 rounded-full flex items-center justify-center">
                <i className="fas fa-mobile-alt text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-worktok-dark mb-4">Convenience</h3>
              <p className="text-gray-600 leading-relaxed">
                Say goodbye to endless phone calls and inquiries. Our user-friendly interface and intuitive features make it easy to describe the service you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top-Rated Service Providers</h2>
            <p className="text-lg text-gray-600">Meet our most trusted and experienced professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProviders.map((provider) => {
              const city = cities.find(c => c.id === provider.cityId);
              return (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  city={city}
                  onClick={() => window.location.href = `/providers/${provider.id}`}
                  onContact={() => {
                    alert(`Contact form for ${provider.name} would open in a real application`);
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-worktok-dark mb-6">Your Innovative Platform That Connects You With Skilled Professionals In Your Area</h2>
            <p className="text-xl text-gray-600 mb-8">WorkTalk is the comprehensive solution to find the best experts for your Iraqi home needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-worktok-dark mb-6">How does the customer application work?</h3>
              <p className="text-gray-700 leading-relaxed">
                This application is intended for people who need a service. They log in and write down the problems or service they need. If the requested service matches the service provided by a nearby service provider, the provider is notified.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-worktok-dark mb-6">How does the expert (craftsman) application work?</h3>
              <p className="text-gray-700 leading-relaxed">
                This program is intended for people or companies wishing to provide services. They register, choose their location, and list the services they offer. They also give a little description about themselves and upload photos of their work. This helps customers understand what they do and the quality of their work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Message */}
      <section className="py-16 bg-worktok-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Top Home Services and Repairs Platform In Iraq</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We ultimately aim to simplify your life by providing exceptional services, giving you the opportunity to receive multiple quotes to compare, read reviews, and contact professionals directly, thereby making the process of hiring service providers transparent, efficient, and seamless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <h4 className="text-lg font-semibold mb-4">Redefine Home & Professional Services</h4>
              <p className="text-blue-100 leading-relaxed">
                Our mission is to redefine the home & property services, repairs, and maintenance industry in Iraq by providing unparalleled convenience, reliability, and trust. We strive to enhance the lives of our customers by offering top-quality services and creating a positive impact on the local economy through job creation and empowerment.
              </p>
            </div>

            <div className="text-center p-8 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <h4 className="text-lg font-semibold mb-4">Setting the Industry Standard for Excellence</h4>
              <p className="text-blue-100 leading-relaxed">
                Our vision is to become an incomparable platform for all home repairs & professional services in Iraq, setting the industry standard for excellence, innovation, and customer satisfaction. We aim to build long-lasting relationships with our customers and service providers, fostering a trusted community that thrives on quality, efficiency, and mutual success.
              </p>
            </div>

            <div className="text-center p-8 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Message</h3>
              <h4 className="text-lg font-semibold mb-4">Life Becomes Easier.</h4>
              <p className="text-blue-100 leading-relaxed">
                Life Becomes Easier. That's our promise to you. We're dedicated to simplifying life for Iraqis, whether to get jobs done perfectly or to find jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 bg-worktok-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.appDownload.title}</h2>
            <p className="text-xl text-blue-100 mb-8">{content.appDownload.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Customer App */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{content.appDownload.customerApp.title}</h3>
              <p className="text-blue-100 mb-6">{content.appDownload.customerApp.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                    <i className="fab fa-google-play text-white text-xl"></i>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                    <i className="fab fa-apple text-white text-xl"></i>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Provider App */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{content.appDownload.providerApp.title}</h3>
              <p className="text-blue-100 mb-6">{content.appDownload.providerApp.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                    <i className="fab fa-google-play text-white text-xl"></i>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                    <i className="fab fa-apple text-white text-xl"></i>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-blue-100">{content.appDownload.downloadText}</p>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-worktok-dark mb-4">{content.inquiry.title}</h2>
            <p className="text-xl text-gray-600">{content.inquiry.subtitle}</p>
          </div>

          <Card className="p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content.inquiry.form.name}
                  </label>
                  <Input 
                    placeholder={content.inquiry.form.namePlaceholder}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content.inquiry.form.email}
                  </label>
                  <Input 
                    type="email"
                    placeholder={content.inquiry.form.emailPlaceholder}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content.inquiry.form.mobile}
                  </label>
                  <Input 
                    placeholder={content.inquiry.form.mobilePlaceholder}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content.inquiry.form.subject}
                  </label>
                  <Input 
                    placeholder={content.inquiry.form.subjectPlaceholder}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content.inquiry.form.message}
                </label>
                <textarea 
                  placeholder={content.inquiry.form.messagePlaceholder}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-worktok-primary focus:border-transparent resize-none"
                />
              </div>

              <div className="text-center">
                <Button className="bg-worktok-primary hover:bg-green-600 text-white px-8 py-3">
                  {content.inquiry.form.submit}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-worktok-dark mb-4">{content.faq.title}</h2>
            <p className="text-xl text-gray-600">{content.faq.subtitle}</p>
          </div>

          <div className="space-y-4">
            {content.faq.questions.slice(0, showMoreFAQ ? 10 : 5).map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-worktok-dark">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 bg-white border-l-4 border-worktok-primary">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          {content.faq.questions.length > 5 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowMoreFAQ(!showMoreFAQ)}
                className="px-8 py-3 border-worktok-primary text-worktok-primary hover:bg-worktok-primary hover:text-white"
              >
                {showMoreFAQ ? content.faq.lessButton : content.faq.moreButton}
                {showMoreFAQ ? (
                  <ChevronUp className="ml-2 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-2 w-4 h-4" />
                )}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
