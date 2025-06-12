import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
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
      case "Plumbing": return "bg-emerald-100 group-hover:bg-emerald-200";
      case "Electrical": return "bg-yellow-100 group-hover:bg-yellow-200";
      case "Air Condition": return "bg-blue-100 group-hover:bg-blue-200";
      case "Cleaning": return "bg-purple-100 group-hover:bg-purple-200";
      case "Painter": return "bg-orange-100 group-hover:bg-orange-200";
      case "Carpenter": return "bg-red-100 group-hover:bg-red-200";
      case "Gardening": return "bg-green-100 group-hover:bg-green-200";
      case "Moving": return "bg-teal-100 group-hover:bg-teal-200";
      case "Pest Control": return "bg-pink-100 group-hover:bg-pink-200";
      case "Appliance Repair": return "bg-gray-100 group-hover:bg-gray-200";
      default: return "bg-gray-100 group-hover:bg-gray-200";
    }
  };

  const getHoverColorClass = () => {
    switch (category.name) {
      case "Plumbing": return "group-hover:text-emerald-700";
      case "Electrical": return "group-hover:text-yellow-700";
      case "Air Condition": return "group-hover:text-blue-700";
      case "Cleaning": return "group-hover:text-purple-700";
      case "Painter": return "group-hover:text-orange-700";
      case "Carpenter": return "group-hover:text-red-700";
      case "Gardening": return "group-hover:text-green-700";
      case "Moving": return "group-hover:text-teal-700";
      case "Pest Control": return "group-hover:text-pink-700";
      case "Appliance Repair": return "group-hover:text-gray-800";
      default: return "group-hover:text-gray-700";
    }
  };

  return (
    <Card 
      className="group service-card p-6 text-center cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden relative"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <div className={`w-20 h-20 mx-auto mb-4 ${getBgColorClass()} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
          <i className={`${category.icon} text-3xl ${getIconColorClass()} ${getHoverColorClass()} transition-colors duration-300`}></i>
        </div>
        
        <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-gray-800 transition-colors line-clamp-2">
          {category.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors text-xs">
            {category.providerCount}+ experts
          </Badge>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Card>
  );
}
