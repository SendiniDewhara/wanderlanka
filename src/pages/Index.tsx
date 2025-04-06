import Navbar from '.././components/Navbar';
import Hero from '.././components/Hero';
import Destinations from '.././components/Destinations';
import Experiences from '.././components/Experiences';
import Culture from '.././components/Culture';
import Gallery from '.././components/Gallery';
import MapSection from '.././components/MapSection';
import WeatherForecast from '.././components/WeatherForecast';
import LocalEvents from '..//components/LocalEvents';
import BudgetCalculator from '.././components/BudgetCalculator';
import SafetyGuidelines from '.././components/SafetyGuidelines';
import UserReviews from '.././components/UserReviews';
import FoodGuide from '../components/FoodGuide';
import Footer from '.././components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Experiences />
      <LocalEvents />
      <Culture />
      <FoodGuide />
      <WeatherForecast />
      <BudgetCalculator />
      <UserReviews />
      <SafetyGuidelines />
      <Gallery />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
