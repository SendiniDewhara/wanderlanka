import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".././components/ui/tabs";
import { Badge } from ".././components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from ".././components/ui/card";
import { Button } from ".././components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    name: 'Kandy Esala Perahera',
    description: 'One of the oldest and grandest Buddhist festivals in Sri Lanka featuring dancers, fire performers, and decorated elephants.',
    date: 'July 30 - August 9, 2024',
    location: 'Kandy',
    time: 'Evening processions',
    category: 'religious',
    attendees: '500K+',
    image: 'https://images.unsplash.com/photo-1589315128654-966fa481b22c?q=80&w=1974'
  },
  {
    id: 2,
    name: 'Nallur Festival',
    description: 'A 25-day celebration at the famous Nallur Kandaswamy Temple with music, dance, and religious rituals.',
    date: 'August 1-25, 2024',
    location: 'Jaffna',
    time: 'Daily events',
    category: 'religious',
    attendees: '100K+',
    image: 'https://images.unsplash.com/photo-1600697360289-151ecbef2b5e?q=80&w=1974'
  },
  {
    id: 3,
    name: 'Colombo International Film Festival',
    description: 'Annual film festival showcasing international and local cinema with screenings, workshops, and talks with filmmakers.',
    date: 'September 10-17, 2024',
    location: 'Colombo',
    time: 'Various screenings',
    category: 'cultural',
    attendees: '25K+',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1974'
  },
  {
    id: 4,
    name: 'Galle Literary Festival',
    description: 'Prestigious international literary festival featuring renowned authors, poets, and thinkers from around the world.',
    date: 'January 25-29, 2025',
    location: 'Galle',
    time: 'Daily sessions',
    category: 'cultural',
    attendees: '15K+',
    image: 'https://images.unsplash.com/photo-1471970394675-613138e45da3?q=80&w=1974'
  }
];

const culturalEvents = [
  {
    id: 5,
    name: 'Thai Pongal',
    description: 'Tamil harvest festival dedicated to the Sun God, celebrated with special rice dishes and decorations.',
    date: 'January 14-15, 2025',
    location: 'Nationwide',
    time: 'All day',
    category: 'cultural',
    attendees: 'Millions',
    image: 'https://images.unsplash.com/photo-1565036558162-44c9118437d2?q=80&w=1974'
  },
  {
    id: 6,
    name: 'Sinhala and Tamil New Year',
    description: 'The traditional New Year celebrated with family gatherings, special meals, and cultural rituals.',
    date: 'April 13-14, 2025',
    location: 'Nationwide',
    time: 'All day',
    category: 'cultural',
    attendees: 'Millions',
    image: 'https://images.unsplash.com/photo-1600697360298-c5385b4a7930?q=80&w=1974'
  }
];

const foodFestivals = [
  {
    id: 7,
    name: 'Colombo Food Festival',
    description: 'Annual culinary event showcasing Sri Lanka\'s diverse cuisine with food stalls, cooking demonstrations, and tasting sessions.',
    date: 'October 15-17, 2024',
    location: 'Colombo',
    time: '10 AM - 10 PM',
    category: 'food',
    attendees: '50K+',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1974'
  },
  {
    id: 8,
    name: 'Jaffna Crab Festival',
    description: 'Celebration of the famous Jaffna crab cuisine with competitions and special dishes.',
    date: 'September 5-7, 2024',
    location: 'Jaffna',
    time: '11 AM - 9 PM',
    category: 'food',
    attendees: '10K+',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965'
  }
];

const EventCard = ({ event }: { event: typeof upcomingEvents[0] }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="pb-2">
        <Badge className={
          event.category === 'religious' ? 'bg-lanka-purple' : 
          event.category === 'cultural' ? 'bg-lanka-blue' : 'bg-lanka-orange'
        }>
          {event.category}
        </Badge>
        <CardTitle className="text-lg mt-2">{event.name}</CardTitle>
        <CardDescription className="line-clamp-2">{event.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span>Expected attendance: {event.attendees}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-lanka-blue hover:bg-lanka-blue/90">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

const LocalEvents = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Local Events & Festivals
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience the vibrant culture of Sri Lanka through traditional celebrations, festivals, and special events
          </p>
        </div>
        
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="cultural">Cultural Celebrations</TabsTrigger>
            <TabsTrigger value="food">Food Festivals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cultural" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {culturalEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="food" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {foodFestivals.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-lanka-blue text-lanka-blue hover:bg-lanka-blue/10">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocalEvents;