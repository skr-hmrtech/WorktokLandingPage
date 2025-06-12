import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import type { ServiceProvider, City } from "@shared/schema";

interface ProviderCardProps {
  provider: ServiceProvider;
  city?: City;
  onContact?: () => void;
  onClick?: () => void;
}

export default function ProviderCard({ provider, city, onContact, onClick }: ProviderCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <Card
      className="group provider-card cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden relative"
      onClick={onClick}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <img
              src={provider.avatar}
              alt={provider.name}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300"
            />
            {provider.verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate">
                  {provider.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2 truncate">{provider.profession}</p>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                    <div className="flex mr-1">
                      {renderStars(parseFloat(provider.rating))}
                    </div>
                    <span className="text-sm font-bold text-gray-900 ml-1">{provider.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({provider.reviewCount})</span>
                </div>
              </div>
              
              {provider.verified && (
                <Badge className="bg-green-100 text-green-700 border-green-200 font-semibold px-3 py-1">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 text-sm line-clamp-2 leading-relaxed">
          {provider.bio}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" />
            <span className="font-medium">{city?.name || "Baghdad"}, Iraq</span>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-2 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group/btn"
              onClick={(e) => {
                e.stopPropagation();
                onContact?.();
              }}
            >
              <Phone className="w-4 h-4 mr-1 group-hover/btn:animate-pulse" />
              Contact
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
            >
              View
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Hover shine effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
}
