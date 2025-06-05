import { Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-worktok-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-worktok-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">WorkTok</span>
                <span className="text-sm text-gray-400 -mt-1">Iraqi House Services</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Iraq's leading platform for connecting homeowners with trusted service professionals. Quality service, guaranteed trust.
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
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Air Condition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plumbing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Painter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carpenter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعه</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
