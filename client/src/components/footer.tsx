
import { Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-worktok-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Platform Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Browse Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Customer Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Book a Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعه</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>

          {/* Provider Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Provider</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Join as Provider</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Provider Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Provider Support</a></li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Social Links</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-worktok-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">WorkTok</span>
                  <span className="text-sm text-gray-400 -mt-1">Iraqi House Services</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-sm">
                Iraq's leading platform for connecting homeowners with trusted service professionals.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-tiktok text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400">
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <p className="mb-1">
                <i className="fas fa-envelope mr-2"></i>
                admin@worktok.org
              </p>
              <p>
                <i className="fas fa-phone mr-2"></i>
                (+964) 7519-904-575
              </p>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>&copy; 2025 WorkTok. All Rights Reserved</p>
              <div className="mt-2 space-x-4 text-sm">
                <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">تواصل معنا</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
