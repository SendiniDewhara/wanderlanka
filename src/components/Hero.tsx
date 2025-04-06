import { Button } from '.././components/ui/button';
import { ArrowRight, MapPin, CloudSun, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2062')] bg-cover bg-center">
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Discover the Wonder of <span className="text-yellow-300">Sri Lanka</span>
        </h1>
        <p className="max-w-lg mx-auto text-xl text-white mb-10">
          Explore pristine beaches, ancient temples, lush tea plantations, and vibrant culture in one unforgettable journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="bg-lanka-blue hover:bg-lanka-blue/90 text-white">
            Explore Destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white">
            Plan Your Trip
          </Button>
        </div>
        
        {/* Feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg hover:bg-white/30 transition duration-300">
            <MapPin className="h-10 w-10 text-white mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white">Interactive Map</h3>
            <p className="text-white/90 text-sm">Discover all the amazing places to visit</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg hover:bg-white/30 transition duration-300">
            <CloudSun className="h-10 w-10 text-white mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white">Weather Forecast</h3>
            <p className="text-white/90 text-sm">Plan your trip with real-time updates</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg hover:bg-white/30 transition duration-300">
            <Calendar className="h-10 w-10 text-white mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white">Events & Festivals</h3>
            <p className="text-white/90 text-sm">Experience local culture and traditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
