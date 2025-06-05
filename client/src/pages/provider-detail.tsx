import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, MapPin, Phone, Mail, Calendar, Award, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import type { ServiceProvider, City, Review } from "@shared/schema";

export default function ProviderDetail() {
  const [, params] = useRoute("/providers/:id");
  const providerId = parseInt(params?.id || "0");

  const { data: provider, isLoading: providerLoading } = useQuery<ServiceProvider>({
    queryKey: [`/api/providers/${providerId}`],
    enabled: !!providerId,
  });

  const { data: cities = [] } = useQuery<City[]>({
    queryKey: ["/api/cities"],
  });

  const { data: reviews = [], isLoading: reviewsLoading } = useQuery<Review[]>({
    queryKey: [`/api/providers/${providerId}/reviews`],
    enabled: !!providerId,
  });

  const city = cities.find(c => c.id === provider?.cityId);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (providerLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-32 mb-6" />
          <Card className="p-8">
            <div className="flex items-start space-x-6 mb-8">
              <Skeleton className="w-32 h-32 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-6 w-1/2 mb-4" />
                <Skeleton className="h-5 w-2/3 mb-4" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Provider Not Found</h1>
          <p className="text-gray-600 mb-6">The service provider you're looking for doesn't exist.</p>
          <Link href="/providers">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Providers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/providers">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Providers
          </Button>
        </Link>

        {/* Provider Profile */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <img 
                src={provider.avatar} 
                alt={provider.name}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{provider.name}</h1>
                  <p className="text-xl text-iraq-green font-semibold mb-2">{provider.profession}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {renderStars(parseFloat(provider.rating))}
                    </div>
                    <span className="ml-2 text-lg font-medium text-gray-900">
                      {provider.rating}
                    </span>
                    <span className="ml-2 text-gray-600">
                      ({provider.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                
                {provider.verified && (
                  <Badge className="bg-iraq-green text-white text-sm">
                    <Award className="w-4 h-4 mr-1" />
                    VERIFIED
                  </Badge>
                )}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {provider.bio}
              </p>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-iraq-green" />
                  {city?.name || "Baghdad"}, Iraq
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-iraq-green" />
                  {provider.yearsExperience}+ years experience
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-iraq-green" />
                  {provider.phone}
                </div>
                {provider.email && (
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-2 text-iraq-green" />
                    {provider.email}
                  </div>
                )}
              </div>

              {/* Specialties */}
              {provider.specialties && provider.specialties.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {provider.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Button */}
              <Button 
                className="bg-iraq-green hover:bg-green-700 text-white"
                onClick={() => {
                  alert(`Contact form for ${provider.name} would open in a real application`);
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Now
              </Button>
            </div>
          </div>
        </Card>

        {/* Reviews Section */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          
          {reviewsLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="border-b pb-4">
                  <Skeleton className="h-5 w-1/4 mb-2" />
                  <Skeleton className="h-4 w-1/3 mb-2" />
                  <Skeleton className="h-16 w-full" />
                </div>
              ))}
            </div>
          ) : reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No reviews yet. Be the first to review this provider!</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
