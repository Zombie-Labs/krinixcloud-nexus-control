
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">KrinixCloud</h3>
            <p className="mb-4">
              Premium hosting solutions for Minecraft servers and VPS, designed for performance and reliability.
            </p>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:info@krinixcloud.com" className="hover:text-white">
                info@krinixcloud.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#minecraft" className="hover:text-white">Minecraft Hosting</a></li>
              <li><a href="#vps" className="hover:text-white">VPS Hosting</a></li>
              <li><a href="#" className="hover:text-white">Game Servers</a></li>
              <li><a href="#" className="hover:text-white">Web Hosting</a></li>
              <li><a href="#" className="hover:text-white">Dedicated Servers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-white">Server Status</a></li>
              <li><a href="#" className="hover:text-white">Submit Ticket</a></li>
              <li><a href="#" className="hover:text-white">Client Area</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 KrinixCloud. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
