import { Shield, AlertTriangle, Thermometer, Umbrella, BadgeAlert, Heart, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from ".././components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from ".././components/ui/accordion";

const SafetyGuidelines = () => {
  return (
    <section id="safety" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Safety Guidelines & Travel Tips
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Important information to ensure a safe and enjoyable trip to Sri Lanka
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-lanka-blue/20">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-lanka-blue/10 flex items-center justify-center mb-4">
                <Thermometer className="h-6 w-6 text-lanka-blue" />
              </div>
              <CardTitle className="text-lg">Weather Awareness</CardTitle>
              <CardDescription>Stay informed about seasonal conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-lanka-blue">•</span>
                  <span>Monsoon season varies by region (May-Sep in southwest, Oct-Jan in northeast)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lanka-blue">•</span>
                  <span>Protect against high UV exposure, even on cloudy days</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lanka-blue">•</span>
                  <span>Carry a light rain jacket or umbrella year-round</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-lanka-orange/20">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-lanka-orange/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-lanka-orange" />
              </div>
              <CardTitle className="text-lg">Health Precautions</CardTitle>
              <CardDescription>Essential health and medical advice</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-lanka-orange">•</span>
                  <span>Drink bottled or filtered water only</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lanka-orange">•</span>
                  <span>Use mosquito repellent, especially at dawn and dusk</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lanka-orange">•</span>
                  <span>Carry a basic first aid kit and any prescription medications</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-lanka-green/20">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-lanka-green/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-lanka-green" />
              </div>
              <CardTitle className="text-lg">Personal Safety</CardTitle>
              <CardDescription>Staying safe during your travels</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-lanka-green">•</span>
                  <span>Keep copies of important documents (passport, visa, insurance)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lanka-green">•</span>
                  <span>Stay aware of your surroundings, especially in crowded areas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lanka-green">•</span>
                  <span>Use registered taxis or reputable transportation services</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Info className="h-5 w-5 text-lanka-blue" />
              <span>Frequently Asked Safety Questions</span>
            </h3>
            <p className="text-gray-600">Answers to common safety concerns from travelers</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-lanka-orange" />
                  <span>Is Sri Lanka safe for solo travelers?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pb-2">
                  Sri Lanka is generally safe for solo travelers, including women. However, it's always wise to:
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Inform someone of your itinerary</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Avoid isolated areas after dark</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Dress modestly, especially at religious sites</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Use reputable accommodation with good reviews</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Umbrella className="h-4 w-4 text-lanka-blue" />
                  <span>When is the best time to visit Sri Lanka?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pb-2">
                  Sri Lanka has two monsoon seasons affecting different parts of the island:
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>December to March is ideal for the west and south coasts and hill country</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>May to September is best for the east coast</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>The cultural triangle in the center can be visited year-round</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <BadgeAlert className="h-4 w-4 text-lanka-orange" />
                  <span>What vaccinations do I need for Sri Lanka?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pb-2">
                  While no vaccinations are mandatory for entry, the following are recommended:
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Hepatitis A and B</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Typhoid</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Tetanus</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Japanese Encephalitis (for long stays in rural areas)</span>
                  </li>
                </ul>
                <p className="pt-2 text-sm">
                  Always consult your healthcare provider or a travel clinic 4-8 weeks before your trip for personalized advice.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-lanka-green" />
                  <span>Is tap water safe to drink in Sri Lanka?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pb-2">
                  It's recommended to avoid tap water and instead:
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Drink bottled water with sealed caps</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Use water purification tablets or filters if needed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Be cautious with ice in drinks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lanka-blue">•</span>
                    <span>Peel fruits and avoid raw vegetables if unsure about how they were washed</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mt-12 p-6 border border-lanka-orange/20 rounded-lg bg-lanka-orange/5 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-lanka-orange/20 flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-lanka-orange" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Emergency Contacts</h3>
            <p className="text-gray-600 mb-4">Keep these numbers handy during your stay in Sri Lanka</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium">Police Emergency</p>
                <p className="text-lg">119</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium">Ambulance</p>
                <p className="text-lg">1990</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium">Tourist Police</p>
                <p className="text-lg">+94 11 2421052</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyGuidelines;