import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Button } from '.././components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <MapPin className="h-8 w-8 text-lanka-blue" />
              <span className="ml-2 text-xl font-bold text-lanka-blue">WanderLanka</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#destinations" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100">
              Destinations
            </a>
            <a href="#experiences" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100">
              Experiences
            </a>
            <a href="#culture" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100">
              Culture
            </a>
            <a href="#gallery" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100">
              Gallery
            </a>
            <a href="#map" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100">
              Map
            </a>
            <Button variant="outline" size="sm" className="ml-4">
              Sign In
            </Button>
            <Button size="sm" className="ml-2 bg-lanka-blue hover:bg-lanka-blue/90">
              Plan Your Trip
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-lanka-blue hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a
              href="#destinations"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </a>
            <a
              href="#experiences"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiences
            </a>
            <a
              href="#culture"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Culture
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#map"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lanka-blue hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Map
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-lanka-blue hover:bg-lanka-blue/90">
                Plan Your Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;