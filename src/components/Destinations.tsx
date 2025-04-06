import { useState } from 'react';
import { ArrowRight, Star, Hotel, X } from 'lucide-react';
import { Button } from '.././components/ui/button';
import { Badge } from '.././components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '.././components/ui/card';
import { toast } from '.././components/ui/use-toast';
import { useQuery } from '@tanstack/react-query';
import { fetchDestinations, fetchDestinationsByCategory, getMockDestinations, type Destination, type Accommodation } from '.././services/destinationService';
import { Skeleton } from '.././components/ui/skeleton';

const DestinationCard = ({ destination }: { destination: Destination }) => {
  const [showAccommodations, setShowAccommodations] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const openAccommodations = () => {
    setShowAccommodations(true);
  };

  const closeAccommodations = () => {
    setShowAccommodations(false);
  };

  const openDetails = () => {
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  const bookAccommodation = (accom: Accommodation) => {
    toast({
      title: "Booking request sent",
      description: `Your booking request for ${accom.name} near ${destination.name} has been sent. We'll contact you shortly.`,
    });
    closeAccommodations();
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-white/80 text-lanka-blue hover:bg-white">
          {destination.category}
        </Badge>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{destination.name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm ml-1">{destination.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{destination.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 flex items-center justify-center"
            onClick={openDetails}
          >
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            className="flex items-center justify-center"
            onClick={openAccommodations}
          >
            <Hotel className="mr-1 h-4 w-4" />
            Stay
          </Button>
        </div>
      </div>

      {showAccommodations && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">{destination.name}</CardTitle>
                <CardDescription>Nearby Accommodations</CardDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={closeAccommodations}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {destination.accommodations.map((accom) => (
                  <div key={accom.id} className="border p-3 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">{accom.name}</h4>
                      <div className="flex items-center text-yellow-500 text-sm">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="ml-1">{accom.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="inline-block mr-3">{accom.type}</span>•
                      <span className="inline-block mx-3">{accom.price}</span>•
                      <span className="inline-block ml-3">{accom.distance}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full mt-1 bg-lanka-blue hover:bg-lanka-blue/90"
                      onClick={() => bookAccommodation(accom)}
                    >
                      Book Now
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">{destination.name}</CardTitle>
                <CardDescription>Explore this destination</CardDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={closeDetails}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Badge className="bg-lanka-blue/10 text-lanka-blue hover:bg-lanka-blue/20">
                      {destination.category}
                    </Badge>
                    <div className="flex items-center text-yellow-500 ml-auto">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm ml-1">{destination.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {destination.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">About this destination</h4>
                <p className="text-gray-600 text-sm">
                  {destination.description} This beautiful location offers travelers an unforgettable 
                  experience with its unique charm and cultural significance. Visitors come from 
                  all over the world to explore this remarkable destination in Sri Lanka.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-medium mb-2">Local Activities</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>Guided tours of the main attractions</li>
                  <li>Photography opportunities at scenic viewpoints</li>
                  <li>Local cuisine tasting experiences</li>
                  <li>Cultural performances and demonstrations</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={closeDetails}>
                Close
              </Button>
              <Button 
                className="bg-lanka-blue hover:bg-lanka-blue/90"
                onClick={openAccommodations}
              >
                View Accommodations
                <Hotel className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Beach', 'Heritage', 'Nature', 'Wildlife', 'Culture'];
  
  // Use React Query to fetch destinations with improved error handling
  const { data: destinations = [], isLoading, isError } = useQuery({
    queryKey: ['destinations', activeCategory],
    queryFn: () => activeCategory === 'All' 
      ? fetchDestinations() 
      : fetchDestinationsByCategory(activeCategory),
    // Always fall back to mock data if the API fails
    placeholderData: () => {
      console.log('Using placeholder mock destinations data');
      return activeCategory === 'All' 
        ? getMockDestinations() 
        : getMockDestinations().filter(dest => dest.category === activeCategory);
    },
    // Retry a few times before giving up
    retry: 2,
    retryDelay: 1000,
    // Ensure stale data is shown while refetching
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  // Always use mock data if there's an error
  const displayedDestinations = destinations.length > 0 
    ? destinations 
    : (activeCategory === 'All' 
        ? getMockDestinations() 
        : getMockDestinations().filter(dest => dest.category === activeCategory));

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Popular Destinations
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore the most breathtaking locations across Sri Lanka, from ancient ruins to pristine beaches
          </p>
        </div>
        
        {/* Categories */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map(category => (
            <Button 
              key={category}
              variant="outline" 
              className={activeCategory === category 
                ? "bg-lanka-blue text-white hover:bg-lanka-blue/90 border-lanka-blue" 
                : "text-gray-700 hover:text-lanka-blue"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Loading state with skeleton placeholders */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Skeleton className="h-48 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3].map(j => (
                      <Skeleton key={j} className="h-6 w-16 rounded-full" />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Error state - will show but also display mock data */}
        {isError && (
          <div className="text-center mb-8">
            <p className="text-amber-600 mb-2">
              Displaying local destination data. Live updates unavailable.
            </p>
            <Button 
              onClick={() => window.location.reload()}
              variant="outline"
              size="sm"
              className="mb-8"
            >
              Try Again
            </Button>
          </div>
        )}
        
        {/* Always show destination cards, even if there was an API error */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        
        {displayedDestinations.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-600">No destinations found in this category.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button className="bg-lanka-blue hover:bg-lanka-blue/90">
            View All Destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;