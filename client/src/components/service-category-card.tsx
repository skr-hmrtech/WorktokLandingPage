import { Card } from "@/components/ui/card";
import type { ServiceCategory } from "@shared/schema";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  onClick?: () => void;
}

export default function ServiceCategoryCard({ category, onClick }: ServiceCategoryCardProps) {
  const getIconColorClass = () => {
    switch (category.name) {
      case "Plumbing": return "text-iraq-green";
      case "Electrical": return "text-yellow-600";
      case "AC Repair": return "text-blue-600";
      case "Cleaning": return "text-purple-600";
      case "Painting": return "text-orange-600";
      case "Carpentry": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getBgColorClass = () => {
    switch (category.name) {
      case "Plumbing": return "bg-emerald-100";
      case "Electrical": return "bg-yellow-100";
      case "AC Repair": return "bg-blue-100";
      case "Cleaning": return "bg-purple-100";
      case "Painting": return "bg-orange-100";
      case "Carpentry": return "bg-red-100";
      default: return "bg-gray-100";
    }
  };

  return (
    <Card 
      className="service-card p-6 text-center cursor-pointer border border-gray-100 hover:shadow-lg"
      onClick={onClick}
    >
      <div className={`w-16 h-16 mx-auto mb-4 ${getBgColorClass()} rounded-full flex items-center justify-center`}>
        <i className={`${category.icon} text-2xl ${getIconColorClass()}`}></i>
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
      <p className="text-sm text-gray-600">{category.providerCount}+ providers</p>
    </Card>
  );
}
