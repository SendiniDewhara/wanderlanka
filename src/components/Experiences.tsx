import { useState } from 'react';
import { Compass, Utensils, LandmarkIcon, Palmtree, Cat } from 'lucide-react';
import { Button } from '.././components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from ".././components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".././components/ui/tabs";
import { useToast } from ".././hooks/use-toast";

const experienceCategories = [
  {
    id: 1,
    name: 'Adventure',
    icon: Compass,
    description: 'From hiking to water sports',
    image: 'https://images.unsplash.com/photo-1627749433618-059b77df216f?q=80&w=1974',
    color: 'bg-lanka-blue',
    activities: [
      { name: 'White Water Rafting', duration: '3 hours', price: '$45', location: 'Kitulgala' },
      { name: 'Rock Climbing', duration: '4 hours', price: '$35', location: 'Ella' },
      { name: 'Trekking', duration: 'Full day', price: '$30', location: 'Knuckles Mountain Range' }
    ]
  },
  {
    id: 2,
    name: 'Cuisine',
    icon: Utensils,
    description: 'Taste authentic local flavors',
    image: 'https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?q=80&w=1974',
    color: 'bg-lanka-orange',
    activities: [
      { name: 'Cooking Class', duration: '2 hours', price: '$25', location: 'Colombo' },
      { name: 'Street Food Tour', duration: '3 hours', price: '$20', location: 'Kandy' },
      { name: 'Spice Garden Visit', duration: '1.5 hours', price: '$15', location: 'Matale' }
    ]
  },
  {
    id: 3,
    name: 'Heritage',
    icon: LandmarkIcon,
    description: 'Explore ancient ruins & temples',
    image: 'https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?q=80&w=1974',
    color: 'bg-lanka-yellow',
    activities: [
      { name: 'Sigiriya Rock Tour', duration: '4 hours', price: '$40', location: 'Sigiriya' },
      { name: 'Temple of the Tooth Visit', duration: '2 hours', price: '$20', location: 'Kandy' },
      { name: 'Ancient City Tour', duration: 'Full day', price: '$50', location: 'Anuradhapura' }
    ]
  },
  {
    id: 4,
    name: 'Beaches',
    icon: Palmtree,
    description: 'Relax on pristine shores',
    image: 'https://images.unsplash.com/photo-1552832790-c8f685319fb0?q=80&w=1974',
    color: 'bg-lanka-green',
    activities: [
      { name: 'Snorkeling Trip', duration: '3 hours', price: '$35', location: 'Hikkaduwa' },
      { name: 'Beach Yoga Session', duration: '1 hour', price: '$15', location: 'Unawatuna' },
      { name: 'Sunset Sailing', duration: '2 hours', price: '$40', location: 'Mirissa' }
    ]
  },
  {
    id: 5,
    name: 'Wildlife',
    icon: Cat,
    description: 'Encounter exotic animals',
    image: 'https://images.unsplash.com/photo-1584283092069-e14682eecce9?q=80&w=1974',
    color: 'bg-lanka-purple',
    activities: [
      { name: 'Safari Tour', duration: '4 hours', price: '$55', location: 'Yala National Park' },
      { name: 'Elephant Sanctuary Visit', duration: '3 hours', price: '$30', location: 'Pinnawala' },
      { name: 'Bird Watching Tour', duration: '2 hours', price: '$25', location: 'Bundala National Park' }
    ]
  }
];

const ExperienceCard = ({ experience }: { experience: typeof experienceCategories[0] }) => {
  const [selectedTab, setSelectedTab] = useState("info");
  const { toast } = useToast();
  const Icon = experience.icon;
  
  const handleBooking = (activityName: string) => {
    toast({
      title: "Booking Requested",
      description: `Your booking for ${activityName} has been received. We'll contact you soon!`,
    });
  };
  
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md h-80">
      {/* Background image */}
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
        <img 
          src={experience.image} 
          alt={experience.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className={`${experience.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">{experience.name}</h3>
        <p className="text-white/80 mb-4">{experience.description}</p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-white/20 border-white hover:bg-white/30 text-white w-full mt-auto">
              Discover
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <div className={`${experience.color} p-2 rounded-full flex items-center justify-center`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <span>{experience.name} Experiences</span>
              </DialogTitle>
              <DialogDescription>
                Explore and book amazing {experience.name.toLowerCase()} experiences in Sri Lanka.
              </DialogDescription>
            </DialogHeader>
            
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mt-4">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="info">Information</TabsTrigger>
                <TabsTrigger value="book">Book Activities</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="space-y-4 mt-4">
                <div className="text-sm">
                  <p className="mb-4">
                    Sri Lanka offers incredible {experience.name.toLowerCase()} experiences for all types of travelers.
                  </p>
                  <img 
                    src={experience.image} 
                    alt={experience.name} 
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p>Best times to visit: Year-round, but December to April offers the best conditions.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="book" className="mt-4">
                <div className="space-y-3">
                  {experience.activities.map((activity, index) => (
                    <div key={index} className="border rounded-md p-3 flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{activity.name}</h4>
                        <div className="text-sm text-gray-500">
                          {activity.duration} • {activity.location}
                        </div>
                        <div className="text-sm font-semibold mt-1">{activity.price}</div>
                      </div>
                      <Button 
                        size="sm" 
                        className={`${experience.color} hover:${experience.color}/90`}
                        onClick={() => handleBooking(activity.name)}
                      >
                        Book
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Unforgettable Experiences
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Immerse yourself in the rich experiences Sri Lanka has to offer, from thrilling adventures to peaceful cultural encounters
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceCategories.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;