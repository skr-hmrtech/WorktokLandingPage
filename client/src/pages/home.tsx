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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Find Top-Rated Iraqi Property & Professional Services with Just One Click
              </h1>
              <p className="text-xl mb-8 text-blue-100 font-medium">
                Say goodbye to unfulfilled promises, hidden fees, and unprofessional services. Experience transparency, reliability, and excellence in every interaction.
              </p>
              <div className="mb-8">
                <p className="text-2xl font-semibold text-white mb-2">With WorkTok, Life Becomes Easier</p>
              </div>
              
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
                      className="w-full bg-worktok-primary hover:bg-blue-600 text-white font-semibold py-3"
                      onClick={handleSearch}
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Get Started
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

      {/* Who We Are Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-worktok-dark mb-6">Who We Are</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Your One-Stop App for Home & Property Repairs, Maintenance, and Professional Services
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
              WorkTok revolutionizes home and professional service bookings, offering a streamlined solution to connect you with top-rated local providers through two user-friendly apps. Supported by excellent customer service, WorkTok ensures a seamless experience, removing the hassle from finding reliable services.
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Join WorkTok for stress-free access to all your service needs with just a tap, and enjoy high-quality, quick solutions while supporting local talent in Iraq. Welcome to effortless living with WorkTok, where convenience and quality meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-worktok-dark mb-4">A leading home repairs and professional services application in Iraq</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-worktok-primary mb-2">
                {stats?.completedServices?.toLocaleString() || "15,000"}+
              </div>
              <div className="text-gray-600 font-medium">Customer count</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-worktok-primary mb-2">
                {stats?.verifiedProviders || 2500}+
              </div>
              <div className="text-gray-600 font-medium">Service Providers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-worktok-primary mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">Team members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-worktok-primary mb-2">
                40+
              </div>
              <div className="text-gray-600 font-medium">Various Job Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-worktok-dark mb-4">Most Popular Home, Repair, and Professional Services Nearby</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Explore our most popular services that our customers love, and bid farewell to spend money and time on unreliable services. Step into a world of seamless, high-quality home & property solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.slice(0, 5).map((category) => (
              <ServiceCategoryCard
                key={category.id}
                category={category}
                onClick={() => window.location.href = `/services?category=${category.id}`}
              />
            ))}
          </div>
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

      {/* Service Request CTA */}
      <ServiceRequestForm />
    </div>
  );
}
