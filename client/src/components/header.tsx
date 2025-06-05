import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, Users, Briefcase, Info } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [language, setLanguage] = useState("en");

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-iraq-green rounded-lg flex items-center justify-center">
                <Home className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-gray-900">خدماتي</span>
              <span className="text-sm text-gray-500">Khadamati</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                location === "/" ? "text-iraq-green" : "text-gray-700 hover:text-iraq-green"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`font-medium transition-colors ${
                location === "/services" ? "text-iraq-green" : "text-gray-700 hover:text-iraq-green"
              }`}
            >
              Services
            </Link>
            <Link 
              href="/providers" 
              className={`font-medium transition-colors ${
                location === "/providers" ? "text-iraq-green" : "text-gray-700 hover:text-iraq-green"
              }`}
            >
              Providers
            </Link>
            <a href="#about" className="text-gray-700 hover:text-iraq-green font-medium">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <i className="fas fa-globe text-gray-400"></i>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="border-none bg-transparent text-gray-700 font-medium h-auto p-0 focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-iraq-green hover:bg-green-700 text-white">
              Join as Provider
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
