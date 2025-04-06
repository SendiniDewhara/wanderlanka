import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-lanka-blue" />
              <span className="ml-2 text-xl font-bold">WanderLanka</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Your ultimate guide to discovering and experiencing the beauty of Sri Lanka's diverse landscapes, rich culture, and unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-lanka-blue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lanka-blue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lanka-blue">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lanka-blue">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#destinations" className="text-gray-400 hover:text-lanka-blue text-sm">Destinations</a></li>
              <li><a href="#experiences" className="text-gray-400 hover:text-lanka-blue text-sm">Experiences</a></li>
              <li><a href="#culture" className="text-gray-400 hover:text-lanka-blue text-sm">Culture</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-lanka-blue text-sm">Gallery</a></li>
              <li><a href="#map" className="text-gray-400 hover:text-lanka-blue text-sm">Map</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-lanka-blue text-sm">Travel Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lanka-blue text-sm">Budget Calculator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lanka-blue text-sm">Safety Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lanka-blue text-sm">Local Transport</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lanka-blue text-sm">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 text-lanka-blue mr-2" />
                <span className="text-gray-400 text-sm">Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-lanka-blue mr-2" />
                <span className="text-gray-400 text-sm">+94 77 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-lanka-blue mr-2" />
                <span className="text-gray-400 text-sm">info@wanderlanka.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} WanderLanka Explorer. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-lanka-blue text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-lanka-blue text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-lanka-blue text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;