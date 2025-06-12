import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Clock, Award, Star, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import ServiceCategoryCard from "@/components/service-category-card";
import ProviderCard from "@/components/provider-card";
import AnimatedSection from "@/components/animated-section";
import TypingText from "@/components/typing-text";
import { useLanguage } from "@/hooks/useLanguage";
import type { ServiceCategory, ServiceProvider, City } from "@shared/schema";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Background images for hero section
  const backgroundImages = [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  ];

  // Background image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (searchQuery) searchParams.set("search", searchQuery);
    if (selectedCity) searchParams.set("city", selectedCity);

    window.location.href = `/services${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* Hero Section */}
      <AnimatedSection animationType="fadeIn">
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Images Slider */}
          <div className="absolute inset-0 z-0">
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image}
                  alt={`Background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
              </div>
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <AnimatedSection animationType="slideLeft" delay={200}>
                    <h1 className="responsive-text-5xl font-bold text-white mb-6 leading-tight mobile-text-center">
                    {content.hero.title}
                  </h1>
                  <p className="responsive-text-xl text-green-100 mb-8 leading-relaxed max-w-4xl mobile-text-center">
                    {content.hero.subtitle}
                  </p>
                  </AnimatedSection>
                  <AnimatedSection animationType="slideLeft" delay={400}>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 font-medium max-w-2xl">
                      {content.hero.subtitle}
                    </p>
                  </AnimatedSection>
                  <AnimatedSection animationType="slideLeft" delay={600}>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Verified Professionals
                      </Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        Quick Response
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm">
                        <Award className="w-4 h-4 mr-2" />
                        Quality Assured
                      </Badge>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Search Card */}
                <AnimatedSection animationType="slideRight" delay={800}>
                  <Card className="p-8 shadow-2xl bg-white/95 backdrop-blur-lg border-0 hover:shadow-3xl transition-all duration-500">
                    <CardHeader className="text-center pb-6">
                      <CardTitle className="text-2xl font-bold text-gray-800">
                        Find Your Service
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        What do you need help with today?
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Service Type
                        </label>
                        <div className="relative">
                          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <Input
                            placeholder="What service do you need?"
                            className="pl-12 py-3 text-gray-900 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Location
                        </label>
                        <Select value={selectedCity} onValueChange={setSelectedCity}>
                          <SelectTrigger className="py-3 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors">
                            <SelectValue placeholder="Select your city" />
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
                      <Button 
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                        onClick={handleSearch}
                      >
                        <Search className="w-5 h-5 mr-2" />
                        Search Services
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      {stats && (
        <AnimatedSection animationType="slideUp">
          <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: `${stats.verifiedProviders}+`, label: "Verified Professionals", color: 'text-blue-600', bg: 'bg-blue-100', delay: 0 },
                  { value: `${stats.completedServices.toLocaleString()}+`, label: "Services Completed", color: 'text-green-600', bg: 'bg-green-100', delay: 100 },
                  { value: `${stats.averageRating}/5`, label: "Average Rating", color: 'text-yellow-600', bg: 'bg-yellow-100', delay: 200 },
                  { value: `${stats.cities}+`, label: "Cities Covered", color: 'text-purple-600', bg: 'bg-purple-100', delay: 300 }
                ].map((stat, index) => (
                  <AnimatedSection key={index} animationType="scale" delay={stat.delay}>
                    <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                      <div className={`w-16 h-16 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <div className={`text-2xl font-bold ${stat.color}`}>
                          {index === 0 ? <Users className="w-8 h-8" /> : 
                           index === 1 ? <CheckCircle className="w-8 h-8" /> :
                           index === 2 ? <Star className="w-8 h-8" /> :
                           <MapPin className="w-8 h-8" />}
                        </div>
                      </div>
                      <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Service Categories */}
      <AnimatedSection animationType="fadeIn">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animationType="slideUp">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Popular Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Professional services delivered right to your door
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.slice(0, 4).map((category, index) => (
                <AnimatedSection key={category.id} animationType="slideUp" delay={index * 50}>
                  <div className="group hover:scale-105 transition-all duration-300">
                    <ServiceCategoryCard
                      category={category}
                      onClick={() => window.location.href = `/services?category=${category.id}`}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animationType="slideUp" delay={500}>
              <div className="text-center mt-12">
                <Link href="/services">
                  <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50">
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Providers */}
      <AnimatedSection animationType="fadeIn">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animationType="slideUp">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Top-Rated Professionals
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet our most trusted and experienced service providers
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProviders.map((provider, index) => {
                const city = cities.find(c => c.id === provider.cityId);
                return (
                  <AnimatedSection key={provider.id} animationType="slideUp" delay={index * 150}>
                    <div className="group hover:scale-[1.02] transition-all duration-300">
                      <ProviderCard
                        provider={provider}
                        city={city}
                        onClick={() => window.location.href = `/providers/${provider.id}`}
                        onContact={() => {
                          alert(`Contact form for ${provider.name} would open in a real application`);
                        }}
                      />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            <AnimatedSection animationType="slideUp" delay={450}>
              <div className="text-center mt-12">
                <Link href="/providers">
                  <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-full border-2">
                    View All Professionals
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection animationType="fadeIn">
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animationType="slideUp">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose Our Platform?
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  We make finding reliable services simple, safe, and convenient
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Verified Professionals",
                  description: "All service providers are thoroughly vetted and verified for your peace of mind.",
                  delay: 0
                },
                {
                  icon: Clock,
                  title: "Quick Response",
                  description: "Get instant quotes and fast service delivery when you need it most.",
                  delay: 150
                },
                {
                  icon: Award,
                  title: "Quality Guarantee",
                  description: "We ensure high-quality service delivery with our satisfaction guarantee.",
                  delay: 300
                }
              ].map(({ icon: Icon, title, description, delay }, index) => (
                <AnimatedSection key={index} animationType="slideUp" delay={delay}>
                  <Card className="text-center p-8 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                    <CardHeader>
                      <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white mb-4">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-white/90 leading-relaxed">
                        {description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animationType="slideUp">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection animationType="scale" delay={200}>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of satisfied customers who trust our platform for their service needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/services">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Browse Services
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/providers">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                      Find Professionals
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}