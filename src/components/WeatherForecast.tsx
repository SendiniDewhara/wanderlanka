import { CloudSun, Umbrella, Wind, Droplets } from 'lucide-react';
import { Card, CardContent } from '.././components/ui/card';

const weatherData = [
  {
    city: 'Colombo',
    icon: CloudSun,
    temperature: 31,
    humidity: 78,
    wind: 12,
    rain: 20
  },
  {
    city: 'Kandy',
    icon: CloudSun,
    temperature: 27,
    humidity: 65,
    wind: 8,
    rain: 10
  },
  {
    city: 'Galle',
    icon: CloudSun,
    temperature: 30,
    humidity: 80,
    wind: 15,
    rain: 30
  },
  {
    city: 'Nuwara Eliya',
    icon: CloudSun,
    temperature: 22,
    humidity: 60,
    wind: 10,
    rain: 15
  }
];

const WeatherCard = ({ weather }: { weather: typeof weatherData[0] }) => {
  const Icon = weather.icon;
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{weather.city}</h3>
          <Icon className="h-8 w-8 text-lanka-blue" />
        </div>
        <div className="flex items-center mb-4">
          <p className="text-3xl font-bold">{weather.temperature}°C</p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
          <div className="flex flex-col items-center">
            <Droplets className="h-4 w-4 mb-1" />
            <span>{weather.humidity}%</span>
            <span className="text-xs">Humidity</span>
          </div>
          <div className="flex flex-col items-center">
            <Wind className="h-4 w-4 mb-1" />
            <span>{weather.wind} km/h</span>
            <span className="text-xs">Wind</span>
          </div>
          <div className="flex flex-col items-center">
            <Umbrella className="h-4 w-4 mb-1" />
            <span>{weather.rain}%</span>
            <span className="text-xs">Rain</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const WeatherForecast = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Weather Forecast
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Plan your trip with current weather conditions across key destinations in Sri Lanka
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weatherData.map((weather, index) => (
            <WeatherCard key={index} weather={weather} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeatherForecast;