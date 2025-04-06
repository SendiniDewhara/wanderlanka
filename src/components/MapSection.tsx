import { MapPin, Info } from 'lucide-react';
import { Button } from '.././components/ui/button';

const MapSection = () => {
  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Interactive Map
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore Sri Lanka's top destinations, attractions, and hidden gems on our interactive map
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
          <div className="relative bg-lanka-blue/10 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-lg max-w-md">
              <MapPin className="h-12 w-12 text-lanka-blue mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Interactive Map Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                Our detailed interactive map is being developed to help you explore Sri Lanka's wonders more easily.
              </p>
              <div className="flex justify-center">
                <Button className="bg-lanka-blue hover:bg-lanka-blue/90 flex items-center">
                  <Info className="mr-2 h-4 w-4" />
                  Get Notified
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button variant="outline" size="sm" className="text-sm">Beaches</Button>
            <Button variant="outline" size="sm" className="text-sm">Heritage Sites</Button>
            <Button variant="outline" size="sm" className="text-sm">Wildlife Parks</Button>
            <Button variant="outline" size="sm" className="text-sm">Cities</Button>
            <Button variant="outline" size="sm" className="text-sm">Hotels</Button>
            <Button variant="outline" size="sm" className="text-sm">Restaurants</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;