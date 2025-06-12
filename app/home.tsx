
"use client"

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";
import ServiceCategoryCard from "@/components/service-category-card";
import ProviderCard from "@/components/provider-card";
import TypingText from "@/components/typing-text";
import AuthModal from "@/components/auth-modal";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Search, 
  Star, 
  Users, 
  Award, 
  Shield, 
  Clock, 
  MapPin,
  Phone,
  ChevronRight,
  Download,
  MessageCircle
} from "lucide-react";

export default function HomePage() {
  const { content, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Fetch categories
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch('/api/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json();
    }
  });

  const locations = [
    "Baghdad", "Basra", "Erbil", "Sulaymaniyah", "Najaf", 
    "Karbala", "Mosul", "Dohuk", "Kirkuk", "Ramadi"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <TypingText 
                  text={content.hero.title}
                  speed={50}
                  className="bg-gradient-to-r from-[#4caf50] to-green-600 bg-clip-text text-transparent"
                />
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {content.hero.subtitle}
              </p>
            </AnimatedSection>

            {/* Search Bar */}
            <AnimatedSection delay={0.5}>
              <div className="bg-white p-6 rounded-2xl shadow-xl border max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder={content.hero.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 text-lg border-gray-200 focus:border-[#4caf50]"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full pl-10 h-12 text-lg border border-gray-200 rounded-lg focus:border-[#4caf50] focus:outline-none bg-white"
                    >
                      <option value="">{content.hero.cityPlaceholder}</option>
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  <Button 
                    size="lg" 
                    className="h-12 text-lg bg-[#4caf50] hover:bg-green-600 transition-colors duration-300"
                  >
                    {content.hero.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {content.stats.metrics.map((metric: any, index: number) => (
                <div key={index} className="p-6">
                  <div className="text-4xl font-bold text-[#4caf50] mb-2">{metric.value}</div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.services.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {content.services.subtitle}
              </p>
            </div>
          </AnimatedSection>

          {categoriesLoading ? (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-xl animate-pulse">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories?.map((category: any, index: number) => (
                <AnimatedSection key={category.id} delay={index * 0.1}>
                  <ServiceCategoryCard category={category} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4caf50] to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.appDownload.title}
            </h2>
            <p className="text-xl mb-8 text-green-100">
              {content.appDownload.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-[#4caf50] hover:bg-white/90"
                onClick={() => setShowAuthModal(true)}
              >
                {content.hero.cta}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#4caf50]"
              >
                <Download className="mr-2 h-5 w-5" />
                {content.appDownload.downloadText}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
}
