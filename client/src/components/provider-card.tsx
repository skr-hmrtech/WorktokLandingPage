import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
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
      className="provider-card p-6 cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={provider.avatar}
          alt={provider.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 truncate w-[150px]">{provider.name}</h3>
          <p className="text-worktok-primary font-medium truncate w-[150px]">{provider.profession}</p>
          <div className="flex items-center mt-1">
            <div className="flex">
              {renderStars(parseFloat(provider.rating))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {provider.rating} ({provider.reviewCount})
            </span>
          </div>
        </div>
        <div className="text-right">
          {provider.verified && (
            <Badge className="text-white">
              VERIFIED
            </Badge>
          )}
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-sm line-clamp-2">
        {provider.bio}
      </p>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {city?.name || "Baghdad"}, Iraq
        </div>
        <Button
          className="bg-green-500 hover:bg-green-700 text-white"
          onClick={(e) => {
            e.stopPropagation();
            onContact?.();
          }}
        >
          Contact Now
        </Button>
      </div>
    </Card>
  );
}
