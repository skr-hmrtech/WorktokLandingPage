import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, Users, Briefcase, Info, Menu, X, Phone, Folder, MapPin } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AuthModal from "./auth-modal";

export default function Header() {
  const [location] = useLocation();
  const { language, setLanguage, content } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-worktok-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-worktok-dark">{content.header.logoText}</span>
                <span className="text-xs text-gray-500 -mt-1">{content.header.logoSubtext}</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                location === "/" ? "text-worktok-primary" : "text-gray-700 hover:text-worktok-primary"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`font-medium transition-colors ${
                location === "/services" ? "text-worktok-primary" : "text-gray-700 hover:text-worktok-primary"
              }`}
            >
              Services
            </Link>
            <Link 
              href="/providers" 
              className={`font-medium transition-colors ${
                location === "/providers" ? "text-worktok-primary" : "text-gray-700 hover:text-worktok-primary"
              }`}
            >
              Providers
            </Link>
            <a href="#about" className="text-gray-700 hover:text-worktok-primary font-medium">
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <i className="fas fa-globe text-gray-400"></i>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="border-none bg-transparent text-gray-700 font-medium h-auto p-0 focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="border-worktok-primary text-worktok-primary hover:bg-worktok-primary hover:text-white">
              Log In
            </Button>
            <Button className="bg-worktok-primary hover:bg-blue-600 text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`font-medium transition-colors ${
                  location === "/" ? "text-worktok-primary" : "text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`font-medium transition-colors ${
                  location === "/services" ? "text-worktok-primary" : "text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/providers" 
                className={`font-medium transition-colors ${
                  location === "/providers" ? "text-worktok-primary" : "text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Providers
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" className="border-worktok-primary text-worktok-primary">
                    Log In
                  </Button>
                  <Button className="bg-worktok-primary hover:bg-blue-600 text-white">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
