import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import ServiceCategoryCard from "@/components/service-category-card";
import ProviderCard from "@/components/provider-card";
import ServiceRequestForm from "@/components/service-request-form";
import type { ServiceCategory, ServiceProvider, City } from "@shared/schema";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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

  const handleSearch = () => {
    // Navigate to services page with search parameters
    const searchParams = new URLSearchParams();
    if (searchQuery) searchParams.set("search", searchQuery);
    if (selectedCity) searchParams.set("city", selectedCity);
    
    window.location.href = `/services${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Find Trusted Home Service Professionals in Iraq
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Connect with verified service providers across Baghdad, Basra, Erbil, and all major Iraqi cities. Quality service, guaranteed trust.
              </p>
              
              {/* Search Bar */}
              <Card className="p-6 shadow-xl">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What service do you need?
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Plumbing, Electrical, Cleaning..."
                        className="pl-10 text-gray-900"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger className="text-gray-900">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.id} value={city.id.toString()}>
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button 
                      className="w-full bg-iraq-red hover:bg-red-700 text-white"
                      onClick={handleSearch}
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search Services
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional home repair service" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-iraq-green mb-2">
                {stats?.verifiedProviders || 2500}+
              </div>
              <div className="text-gray-600">Verified Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-iraq-green mb-2">
                {stats?.completedServices?.toLocaleString() || "15,000"}+
              </div>
              <div className="text-gray-600">Services Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-iraq-green mb-2">
                {stats?.averageRating || 4.8}★
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-iraq-green mb-2">
                {stats?.cities || 12}
              </div>
              <div className="text-gray-600">Iraqi Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Home Services</h2>
            <p className="text-lg text-gray-600">Choose from our wide range of professional home services</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <ServiceCategoryCard
                key={category.id}
                category={category}
                onClick={() => window.location.href = `/services?category=${category.id}`}
              />
            ))}
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Khadamati Works</h2>
            <p className="text-lg text-gray-600">Get quality home services in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-iraq-green bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-iraq-green">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Search & Compare</h3>
              <p className="text-gray-600">
                Browse verified service providers in your area. Compare ratings, reviews, and prices to find the perfect match.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-iraq-green bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-iraq-green">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Service</h3>
              <p className="text-gray-600">
                Contact your chosen provider directly or submit a service request. Schedule at your convenience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-iraq-green bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-iraq-green">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Quality Service</h3>
              <p className="text-gray-600">
                Enjoy professional service with our quality guarantee. Rate and review to help others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request CTA */}
      <ServiceRequestForm />
    </div>
  );
}
