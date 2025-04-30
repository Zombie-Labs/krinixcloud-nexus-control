
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-krinix-600 to-krinix-800 bg-clip-text text-transparent">
                  KrinixCloud
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-800 hover:text-krinix-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#minecraft" className="text-gray-800 hover:text-krinix-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Minecraft Hosting
              </a>
              <a href="#vps" className="text-gray-800 hover:text-krinix-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                VPS Hosting
              </a>
              <a href="#about" className="text-gray-800 hover:text-krinix-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-800 hover:text-krinix-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <Button variant="default" className="ml-4">
                Client Area
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-krinix-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-800 hover:text-krinix-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#minecraft" className="text-gray-800 hover:text-krinix-600 block px-3 py-2 rounded-md text-base font-medium">
              Minecraft Hosting
            </a>
            <a href="#vps" className="text-gray-800 hover:text-krinix-600 block px-3 py-2 rounded-md text-base font-medium">
              VPS Hosting
            </a>
            <a href="#about" className="text-gray-800 hover:text-krinix-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-800 hover:text-krinix-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <Button variant="default" className="w-full mt-2">
              Client Area
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
