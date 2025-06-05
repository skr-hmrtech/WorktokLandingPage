import { Card } from "@/components/ui/card";
import type { ServiceCategory } from "@shared/schema";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  onClick?: () => void;
}

export default function ServiceCategoryCard({ category, onClick }: ServiceCategoryCardProps) {
  const getIconColorClass = () => {
    switch (category.name) {
      case "Plumbing": return "text-emerald-600";
      case "Electrical": return "text-yellow-600";
      case "Air Condition": return "text-blue-600";
      case "Cleaning": return "text-purple-600";
      case "Painter": return "text-orange-600";
      case "Carpenter": return "text-red-600";
      case "Gardening": return "text-green-600";
      case "Moving": return "text-teal-600";
      case "Pest Control": return "text-pink-600";
      case "Appliance Repair": return "text-gray-700";
      default: return "text-gray-600";
    }
  };

  const getBgColorClass = () => {
    switch (category.name) {
      case "Plumbing": return "bg-emerald-100";
      case "Electrical": return "bg-yellow-100";
      case "Air Condition": return "bg-blue-100";
      case "Cleaning": return "bg-purple-100";
      case "Painter": return "bg-orange-100";
      case "Carpenter": return "bg-red-100";
      case "Gardening": return "bg-green-100";
      case "Moving": return "bg-teal-100";
      case "Pest Control": return "bg-pink-100";
      case "Appliance Repair": return "bg-gray-100";
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
