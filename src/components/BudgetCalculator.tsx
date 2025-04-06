import { useState, useEffect, SetStateAction } from 'react';
import { Calculator, DollarSign, CalendarDays, Users } from 'lucide-react';
import { Label } from ".././components/ui/label";
import { Slider } from ".././components/ui/slider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from ".././components/ui/card";
import { ToggleGroup, ToggleGroupItem } from ".././components/ui/toggle-group";

const BudgetCalculator = () => {
  const [days, setDays] = useState(7);
  const [travelers, setTravelers] = useState(2);
  const [accommodationLevel, setAccommodationLevel] = useState("mid");
  const [includeActivities, setIncludeActivities] = useState(true);
  const [includeTransport, setIncludeTransport] = useState(true);
  const [includeMeals, setIncludeMeals] = useState(true);
  const [totalBudget, setTotalBudget] = useState(0);
  
  // Costs in USD
  const costs = {
    accommodation: {
      budget: 25, // per person per night
      mid: 60,
      luxury: 150
    },
    meals: {
      budget: 15, // per person per day
      mid: 30,
      luxury: 60
    },
    activities: {
      budget: 10, // per person per day
      mid: 30,
      luxury: 75
    },
    transport: {
      budget: 5, // per person per day
      mid: 15,
      luxury: 40
    }
  };
  
  useEffect(() => {
    calculateBudget();
  }, [days, travelers, accommodationLevel, includeActivities, includeTransport, includeMeals]);
  
  const calculateBudget = () => {
    let total = 0;
    
    // Accommodation costs
    total += days * travelers * costs.accommodation[accommodationLevel as keyof typeof costs.accommodation];
    
    // Meals
    if (includeMeals) {
      total += days * travelers * costs.meals[accommodationLevel as keyof typeof costs.meals];
    }
    
    // Activities
    if (includeActivities) {
      total += days * travelers * costs.activities[accommodationLevel as keyof typeof costs.activities];
    }
    
    // Transport
    if (includeTransport) {
      total += days * travelers * costs.transport[accommodationLevel as keyof typeof costs.transport];
    }
    
    setTotalBudget(total);
  };
  
  return (
    <section id="budget" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Budget Calculator
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Plan your Sri Lanka trip budget with our easy-to-use calculator
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>Trip Details</span>
                </CardTitle>
                <CardDescription>
                  Adjust the parameters below to calculate your estimated trip cost
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Days slider */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="days">Length of Stay</Label>
                    <span className="text-gray-500 text-sm">{days} days</span>
                  </div>
                  <Slider 
                    id="days"
                    min={1} 
                    max={30} 
                    step={1}
                    value={[days]}
                    onValueChange={(value: SetStateAction<number>[]) => setDays(value[0])}
                    className="cursor-pointer"
                  />
                </div>
                
                {/* Travelers slider */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <span className="text-gray-500 text-sm">{travelers} people</span>
                  </div>
                  <Slider 
                    id="travelers"
                    min={1} 
                    max={10} 
                    step={1}
                    value={[travelers]}
                    onValueChange={(value: SetStateAction<number>[]) => setTravelers(value[0])}
                    className="cursor-pointer"
                  />
                </div>
                
                {/* Accommodation level */}
                <div className="space-y-2">
                  <Label>Accommodation Level</Label>
                  <ToggleGroup 
                    type="single" 
                    variant="outline"
                    value={accommodationLevel}
                    onValueChange={(value: SetStateAction<string>) => {
                      if (value) setAccommodationLevel(value);
                    }}
                    className="grid grid-cols-3 w-full"
                  >
                    <ToggleGroupItem value="budget" className="text-sm">Budget</ToggleGroupItem>
                    <ToggleGroupItem value="mid" className="text-sm">Mid-range</ToggleGroupItem>
                    <ToggleGroupItem value="luxury" className="text-sm">Luxury</ToggleGroupItem>
                  </ToggleGroup>
                </div>
                
                {/* Inclusions */}
                <div className="space-y-3">
                  <Label>Include in Calculation</Label>
                  
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                    <Label htmlFor="includeMeals" className="flex items-center gap-2 cursor-pointer">
                      <input
                        id="includeMeals"
                        type="checkbox"
                        checked={includeMeals}
                        onChange={(e) => setIncludeMeals(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-lanka-blue focus:ring-lanka-blue"
                      />
                      <span>Meals & Dining</span>
                    </Label>
                    <span className="text-sm text-gray-500">
                      ${costs.meals[accommodationLevel as keyof typeof costs.meals]}/person/day
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                    <Label htmlFor="includeActivities" className="flex items-center gap-2 cursor-pointer">
                      <input
                        id="includeActivities"
                        type="checkbox"
                        checked={includeActivities}
                        onChange={(e) => setIncludeActivities(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-lanka-blue focus:ring-lanka-blue"
                      />
                      <span>Activities & Attractions</span>
                    </Label>
                    <span className="text-sm text-gray-500">
                      ${costs.activities[accommodationLevel as keyof typeof costs.activities]}/person/day
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                    <Label htmlFor="includeTransport" className="flex items-center gap-2 cursor-pointer">
                      <input
                        id="includeTransport"
                        type="checkbox"
                        checked={includeTransport}
                        onChange={(e) => setIncludeTransport(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-lanka-blue focus:ring-lanka-blue"
                      />
                      <span>Local Transportation</span>
                    </Label>
                    <span className="text-sm text-gray-500">
                      ${costs.transport[accommodationLevel as keyof typeof costs.transport]}/person/day
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-lanka-blue/5 border-lanka-blue/20">
              <CardHeader>
                <CardTitle className="text-lanka-blue">Budget Estimate</CardTitle>
                <CardDescription>
                  Total cost for your Sri Lanka adventure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gray-500" />
                    <span>Duration</span>
                  </div>
                  <span className="font-medium">{days} days</span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>Travelers</span>
                  </div>
                  <span className="font-medium">{travelers} people</span>
                </div>
                
                <div className="flex flex-col gap-2 pt-4">
                  <div className="text-center">
                    <h3 className="text-sm text-gray-500 mb-1">Estimated Total Cost</h3>
                    <div className="flex items-center justify-center gap-1">
                      <DollarSign className="h-6 w-6 text-lanka-blue" />
                      <span className="text-3xl font-bold text-lanka-blue">{totalBudget.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">USD for entire trip</p>
                  </div>
                  
                  <div className="text-center mt-2">
                    <h3 className="text-sm text-gray-500 mb-1">Per Person</h3>
                    <div className="flex items-center justify-center gap-1">
                      <DollarSign className="h-4 w-4 text-gray-700" />
                      <span className="text-xl font-medium text-gray-700">
                        {Math.round(totalBudget / travelers).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-gray-500 text-center w-full">
                  *This is an estimate only. Actual costs may vary based on season, currency fluctuations, and personal preferences.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetCalculator;