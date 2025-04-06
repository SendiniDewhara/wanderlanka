import { Calendar, Utensils } from 'lucide-react';
import { Button } from '.././components/ui/button';

const festivals = [
  {
    id: 1,
    name: 'Vesak Festival',
    date: 'May',
    description: 'Buddhist festival celebrating the birth, enlightenment, and death of Buddha with lanterns and decorations.',
    image: 'https://images.unsplash.com/photo-1559113202-f041786eb9a7?q=80&w=1974'
  },
  {
    id: 2,
    name: 'Esala Perahera',
    date: 'July/August',
    description: 'Grand procession in Kandy featuring dancers, drummers, and decorated elephants.',
    image: 'https://images.unsplash.com/photo-1624708733904-35c97d3faca4?q=80&w=1974'
  },
  {
    id: 3,
    name: 'Sinhala & Tamil New Year',
    date: 'April',
    description: 'Traditional new year celebrated with customs, games, and special meals.',
    image: 'https://images.unsplash.com/photo-1591245081938-b8444dbe33a8?q=80&w=1974'
  }
];

const foods = [
  {
    id: 1,
    name: 'Rice & Curry',
    description: 'Sri Lanka\'s staple dish with rice and multiple curries with unique spices.',
    image: 'https://images.unsplash.com/photo-1631292784640-218d02541d29?q=80&w=1974'
  },
  {
    id: 2,
    name: 'Hoppers',
    description: 'Bowl-shaped pancakes made from fermented rice flour, often served with an egg.',
    image: 'https://images.unsplash.com/photo-1627301118641-c8e4adcbd832?q=80&w=1974'
  },
  {
    id: 3,
    name: 'Kottu Roti',
    description: 'Chopped flatbread mixed with spices, meat, and vegetables on a hot griddle.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1974'
  }
];

const FestivalCard = ({ festival }: { festival: typeof festivals[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48">
        <img 
          src={festival.image} 
          alt={festival.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Calendar className="h-4 w-4 text-lanka-orange mr-1" />
          <span className="text-sm text-gray-500">{festival.date}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{festival.name}</h3>
        <p className="text-gray-600 text-sm">{festival.description}</p>
      </div>
    </div>
  );
};

const FoodCard = ({ food }: { food: typeof foods[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{food.name}</h3>
        <p className="text-gray-600 text-sm">{food.description}</p>
      </div>
    </div>
  );
};

const Culture = () => {
  return (
    <section id="culture" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Cultural Wonders
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience the vibrant traditions, festivals, and culinary delights that make Sri Lanka unique
          </p>
        </div>
        
        {/* Festivals Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-lanka-blue mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">Festivals & Events</h3>
            </div>
            <Button variant="outline" className="text-lanka-blue border-lanka-blue hover:bg-lanka-blue/10">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {festivals.map((festival) => (
              <FestivalCard key={festival.id} festival={festival} />
            ))}
          </div>
        </div>
        
        {/* Cuisine Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Utensils className="h-6 w-6 text-lanka-orange mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">Sri Lankan Cuisine</h3>
            </div>
            <Button variant="outline" className="text-lanka-orange border-lanka-orange hover:bg-lanka-orange/10">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
