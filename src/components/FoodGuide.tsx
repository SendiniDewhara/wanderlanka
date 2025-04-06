import { useState } from 'react';
import { Utensils, Info, Clock, Tag, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from ".././components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".././components/ui/tabs";
import { Badge } from ".././components/ui/badge";
import { Input } from ".././components/ui/input";
import { Button } from ".././components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from ".././components/ui/tooltip";

const foodItems = [
  {
    id: 1,
    name: "Rice and Curry",
    description: "The national dish featuring rice served with various curries, pickles, and sambols.",
    image: "https://images.unsplash.com/photo-1624861691429-be5f7a5ade53?q=80&w=1974",
    region: "Nationwide",
    spiceLevel: "Medium to Hot",
    category: "main",
    dietaryInfo: ["can be vegetarian", "can be vegan"],
    ingredients: ["Rice", "Curry (meat or vegetable)", "Papadums", "Sambols"]
  },
  {
    id: 2,
    name: "Hoppers (Appa)",
    description: "Bowl-shaped pancakes made from fermented rice flour, often served with an egg in the center.",
    image: "https://images.unsplash.com/photo-1614326051018-dd4573623166?q=80&w=1974",
    region: "Nationwide",
    spiceLevel: "Mild",
    category: "breakfast",
    dietaryInfo: ["vegetarian"],
    ingredients: ["Rice flour", "Coconut milk", "Eggs (optional)"]
  },
  {
    id: 3,
    name: "Kottu Roti",
    description: "A popular street food made by stir-frying chopped flatbread (godamba roti) with spices, vegetables, and meat.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1974",
    region: "Urban areas",
    spiceLevel: "Medium to Hot",
    category: "street food",
    dietaryInfo: ["can be vegetarian"],
    ingredients: ["Godamba roti", "Vegetables", "Meat (optional)", "Eggs", "Spices"]
  },
  {
    id: 4,
    name: "Fish Ambul Thiyal",
    description: "Sour fish curry, a specialty from southern Sri Lanka made with goraka (a tamarind-like fruit).",
    image: "https://images.unsplash.com/photo-1518671645931-e1d946a3d1f7?q=80&w=1974",
    region: "Southern Province",
    spiceLevel: "Hot",
    category: "main",
    dietaryInfo: ["pescatarian"],
    ingredients: ["Tuna", "Goraka", "Curry leaves", "Spices"]
  },
  {
    id: 5,
    name: "Lamprais",
    description: "Dutch-influenced dish of rice, meat curries, and sambols wrapped in banana leaf and baked.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1974",
    region: "Central Province",
    spiceLevel: "Medium",
    category: "main",
    dietaryInfo: [],
    ingredients: ["Rice", "Mixed meat curry", "Eggplant", "Seeni sambol", "Frikkadels"]
  },
  {
    id: 6,
    name: "String Hoppers (Idiyappam)",
    description: "Steamed rice noodles pressed into flat, round cakes, usually served for breakfast with curry.",
    image: "https://images.unsplash.com/photo-1633872810027-dfc66cc90817?q=80&w=1974",
    region: "Nationwide",
    spiceLevel: "Mild",
    category: "breakfast",
    dietaryInfo: ["vegetarian", "vegan"],
    ingredients: ["Rice flour", "Water", "Salt"]
  },
  {
    id: 7,
    name: "Pol Sambol",
    description: "A spicy condiment made with grated coconut, red chili powder, lime juice, and onions.",
    image: "https://images.unsplash.com/photo-1599749000019-a1ba3337edf5?q=80&w=1974",
    region: "Nationwide",
    spiceLevel: "Hot",
    category: "condiment",
    dietaryInfo: ["vegetarian", "vegan"],
    ingredients: ["Grated coconut", "Chili powder", "Lime juice", "Onions"]
  },
  {
    id: 8,
    name: "Watalappan",
    description: "A rich custard dessert made with coconut milk, jaggery, and spices, influenced by Malay cuisine.",
    image: "https://images.unsplash.com/photo-1624391568479-c5e9d0b55e7a?q=80&w=1974",
    region: "Western Province",
    spiceLevel: "Mild",
    category: "dessert",
    dietaryInfo: ["vegetarian"],
    ingredients: ["Coconut milk", "Jaggery", "Eggs", "Cardamom", "Cashews"]
  }
];

const foodCategories = [
  { id: "all", name: "All Dishes" },
  { id: "main", name: "Main Dishes" },
  { id: "breakfast", name: "Breakfast" },
  { id: "street food", name: "Street Food" },
  { id: "condiment", name: "Condiments" },
  { id: "dessert", name: "Desserts" }
];

const FoodCard = ({ food }: { food: typeof foodItems[0] }) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8 p-0 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View ingredients</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      <CardHeader className="pb-2 flex-grow">
        <div className="flex justify-between">
          <CardTitle>{food.name}</CardTitle>
          <Badge className={
            food.spiceLevel === 'Hot' ? 'bg-red-500' : 
            food.spiceLevel === 'Medium' || food.spiceLevel === 'Medium to Hot' ? 'bg-orange-500' : 
            'bg-green-500'
          }>
            {food.spiceLevel}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{food.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1 mb-2">
          {food.dietaryInfo.map((info, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
              {info}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Tag className="h-3 w-3" />
          <span>{food.category}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Clock className="h-3 w-3" />
          <span>{food.region}</span>
        </div>
      </CardContent>
      
      {showInfo && (
        <CardFooter className="block pt-2 border-t">
          <p className="text-sm font-medium mb-1">Key Ingredients:</p>
          <ul className="text-xs text-gray-600">
            {food.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-1">
                <span>•</span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </CardFooter>
      )}
    </Card>
  );
};

const FoodGuide = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState<string[]>([]);
  
  const toggleDietaryFilter = (type: string) => {
    setDietaryFilter(prev => 
      prev.includes(type) 
        ? prev.filter(item => item !== type)
        : [...prev, type]
    );
  };
  
  const filteredFoodItems = foodItems.filter(food => {
    // Search filter
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      food.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
    
    // Dietary filter
    const matchesDietary = dietaryFilter.length === 0 || 
                        dietaryFilter.some(filter => food.dietaryInfo.includes(filter));
    
    return matchesSearch && matchesCategory && matchesDietary;
  });
  
  return (
    <section id="food" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Food & Cuisine Guide
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore the rich flavors and culinary traditions of Sri Lankan cuisine
          </p>
        </div>
        
        <div className="mb-8">
          <Tabs defaultValue="dishes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="dishes">Popular Dishes</TabsTrigger>
              <TabsTrigger value="info">Culinary Info</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dishes" className="mt-0">
              <div className="flex flex-col md:flex-row gap-4 items-start mb-6">
                <div className="w-full md:w-64 space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search dishes..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {foodCategories.map(category => (
                        <div key={category.id} className="flex items-center">
                          <input
                            id={`category-${category.id}`}
                            type="radio"
                            name="category"
                            checked={selectedCategory === category.id}
                            onChange={() => setSelectedCategory(category.id)}
                            className="h-4 w-4 text-lanka-blue focus:ring-lanka-blue border-gray-300"
                          />
                          <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-700">
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="font-medium mb-3 mt-6">Dietary Preferences</h3>
                    <div className="space-y-2">
                      {["vegetarian", "vegan", "pescatarian"].map(type => (
                        <div key={type} className="flex items-center">
                          <input
                            id={`dietary-${type}`}
                            type="checkbox"
                            checked={dietaryFilter.includes(type)}
                            onChange={() => toggleDietaryFilter(type)}
                            className="h-4 w-4 rounded text-lanka-blue focus:ring-lanka-blue border-gray-300"
                          />
                          <label htmlFor={`dietary-${type}`} className="ml-2 text-sm text-gray-700 capitalize">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="font-medium mb-3 mt-6">Spice Level</h3>
                    <div className="flex items-center justify-between px-2">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 mb-1"></div>
                        <span className="text-xs">Mild</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-orange-500 mb-1"></div>
                        <span className="text-xs">Medium</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-red-500 mb-1"></div>
                        <span className="text-xs">Hot</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  {filteredFoodItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredFoodItems.map(food => (
                        <FoodCard key={food.id} food={food} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <Utensils className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No dishes found matching your criteria.</p>
                      <Button 
                        variant="link" 
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                          setDietaryFilter([]);
                        }}
                        className="mt-2"
                      >
                        Reset filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="info" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sri Lankan Culinary Traditions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Sri Lankan cuisine is known for its complex flavors and abundant use of spices, coconut, and herbs. 
                      The food is heavily influenced by colonial history, foreign traders, and neighboring countries, especially South India.
                    </p>
                    <p className="text-sm text-gray-600">
                      Rice and curry is the staple, typically served with a variety of side dishes. Meals are traditionally eaten with the fingers of the right hand.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Key Spices & Ingredients</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li><strong>Coconut:</strong> Used in many forms - milk, oil, grated, etc.</li>
                      <li><strong>Curry Leaves:</strong> Adds unique flavor to curries and sambols</li>
                      <li><strong>Pandan Leaves:</strong> Used for fragrance in rice and desserts</li>
                      <li><strong>Cinnamon:</strong> Sri Lanka produces some of the world's finest</li>
                      <li><strong>Chili:</strong> Added to most dishes, varying in intensity</li>
                      <li><strong>Goraka:</strong> Dried fruit used for souring fish curries</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Variations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div>
                        <h4 className="font-medium">Northern Province</h4>
                        <p>Influenced by South Indian cuisine with more vegetarian options and use of palmyra products.</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Coastal Areas</h4>
                        <p>Feature more seafood and coconut-based curries.</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Central Highlands</h4>
                        <p>Cooler climates produce unique vegetables and preparation methods.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dining Etiquette</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>Traditionally, food is eaten with fingers of the right hand</li>
                      <li>It's customary to wash hands before and after meals</li>
                      <li>Hosts may insist on serving seconds (or thirds) - polite refusal is acceptable</li>
                      <li>When invited to a home, bringing a small gift is appreciated</li>
                      <li>Most restaurants in tourist areas offer cutlery upon request</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FoodGuide;