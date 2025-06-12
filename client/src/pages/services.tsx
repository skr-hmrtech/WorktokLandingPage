import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter, ArrowRight, Grid, List } from "lucide-react";
import ProviderCard from "@/components/provider-card";
import ServiceCategoryCard from "@/components/service-category-card";
import AnimatedSection from "@/components/animated-section";
import { useLanguage } from "@/hooks/useLanguage";
import type { ServiceProvider, ServiceCategory, City } from "@shared/schema";

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showCategories, setShowCategories] = useState(true);

  const { content, language } = useLanguage();

  // Get URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");
    const category = urlParams.get("category");
    const city = urlParams.get("city");
    
    if (search) setSearchQuery(search);
    if (category) {
      setSelectedCategory(category);
      setShowCategories(false);
    }
    if (city) setSelectedCity(city);
  }, []);

  const { data: categories = [] } = useQuery<ServiceCategory[]>({
    queryKey: ["/api/categories"],
  });

  const { data: cities = [] } = useQuery<City[]>({
    queryKey: ["/api/cities"],
  });

  const { data: providers = [], isLoading } = useQuery<ServiceProvider[]>({
    queryKey: ["/api/providers", { 
      categoryId: selectedCategory ? parseInt(selectedCategory) : undefined,
      cityId: selectedCity ? parseInt(selectedCity) : undefined,
      search: searchQuery || undefined
    }],
  });

  const handleSearch = () => {
    setShowCategories(false);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowCategories(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mobile-padding">
        
        {/* Header */}
        <AnimatedSection animationType="slideUp">
          <div className="text-center mb-12">
            <h1 className="responsive-text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-worktok-primary to-worktok-primary-light bg-clip-text text-transparent mobile-text-center">
              {showCategories ? content.services.title : "Service Providers"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {showCategories 
                ? "Choose from our wide range of professional services" 
                : "Find the perfect professional for your needs"
              }
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filters */}
        <AnimatedSection animationType="slideUp" delay={200}>
          <Card className="mb-8 border-0 shadow-xl bg-white/90 backdrop-blur-lg">
            <CardHeader className="bg-gradient-to-r from-worktok-primary to-worktok-primary-light text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Filter className="w-5 h-5" />
                </div>
                Search & Filter
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search services or providers..."
                    className="pl-10 py-3 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={handleCategorySelect}>
                  <SelectTrigger className="py-3 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {language === 'ar' ? category.nameAr : category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="py-3 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors">
                    <SelectValue placeholder="All Cities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cities</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city.id} value={city.id.toString()}>
                        {language === 'ar' ? city.nameAr : city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button 
                  onClick={handleSearch}
                  className="py-3 btn-gradient shadow-lg hover:shadow-xl transition-all duration-300 mobile-full-width"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>

              {!showCategories && (
                <div className="mt-4 flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowCategories(true);
                      setSelectedCategory("");
                      setSearchQuery("");
                    }}
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    Browse All Categories
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">View:</span>
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Service Categories */}
        {showCategories && (
          <AnimatedSection animationType="fadeIn" delay={400}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Choose a Service Category</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <AnimatedSection key={category.id} animationType="slideUp" delay={index * 50}>
                  <div className="group hover:scale-105 transition-all duration-300">
                    <ServiceCategoryCard
                      category={category}
                      onClick={() => handleCategorySelect(category.id.toString())}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Service Providers */}
        {!showCategories && (
          <AnimatedSection animationType="fadeIn" delay={600}>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {providers.length} Provider{providers.length !== 1 ? 's' : ''} Found
                </h2>
                {selectedCategory && (
                  <p className="text-gray-600 mt-1">
                    in {categories.find(c => c.id.toString() === selectedCategory)?.name}
                  </p>
                )}
              </div>
            </div>

            {isLoading ? (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full rounded-lg" />
                  </div>
                ))}
              </div>
            ) : providers.length > 0 ? (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {providers.map((provider, index) => {
                  const city = cities.find(c => c.id === provider.cityId);
                  return (
                    <AnimatedSection key={provider.id} animationType="slideUp" delay={index * 100}>
                      <div className="group hover:scale-105 transition-all duration-300">
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
            ) : (
              <AnimatedSection animationType="fadeIn">
                <div className="text-center py-20">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">No Providers Found</h3>
                    <p className="text-gray-600 text-lg mb-8">
                      We couldn't find any providers matching your criteria. Try adjusting your filters.
                    </p>
                    <Button 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCity("");
                        setSelectedCategory("");
                        setShowCategories(true);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Browse All Categories
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </AnimatedSection>
        )}

        {/* Call to Action */}
        {!showCategories && providers.length > 0 && (
          <AnimatedSection animationType="slideUp" delay={800}>
            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Our team can help you find the perfect service provider for your specific needs.
                  </p>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Personalized Recommendations
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}