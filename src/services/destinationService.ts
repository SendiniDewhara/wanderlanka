import { toast } from ".././components/ui/use-toast";

export interface Accommodation {
  id: number;
  name: string;
  type: string;
  price: string;
  distance: string;
  rating: number;
}

export interface Destination {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  description: string;
  tags: string[];
  accommodations: Accommodation[];
}

// Function to fetch all destinations from the API
export const fetchDestinations = async (): Promise<Destination[]> => {
  try {
    console.log('Attempting to fetch destinations from API...');
    // Replace with your actual API endpoint
    const response = await fetch('https://api.example.com/destinations', {
      // Adding timeout and credentials to help with common API issues
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      cache: 'no-cache',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch destinations: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Successfully fetched destinations from API:', data.length);
    return data;
  } catch (error) {
    console.error('Error fetching destinations from API:', error);
    toast({
      title: "Using local destination data",
      description: "Could not connect to destinations API. Showing local data instead.",
    });
    
    // Always return mock data if the API fails
    console.log('Falling back to mock destinations data');
    return getMockDestinations();
  }
};

// Function to fetch destinations by category
export const fetchDestinationsByCategory = async (category: string): Promise<Destination[]> => {
  try {
    console.log(`Attempting to fetch ${category} destinations from API...`);
    // Replace with your actual API endpoint
    const url = category === 'All' 
      ? 'https://api.example.com/destinations' 
      : `https://api.example.com/destinations?category=${category}`;
    
    const response = await fetch(url, {
      // Adding timeout and credentials to help with common API issues
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      cache: 'no-cache',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch destinations by category: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`Successfully fetched ${category} destinations from API:`, data.length);
    return data;
  } catch (error) {
    console.error(`Error fetching ${category} destinations from API:`, error);
    toast({
      title: "Using local destination data",
      description: `Could not connect to destinations API. Showing local ${category !== 'All' ? category + ' ' : ''}data instead.`,
    });
    
    // Filter mock data by category if needed, otherwise return all mock data
    const mockData = getMockDestinations();
    if (category === 'All') {
      console.log('Falling back to all mock destinations');
      return mockData;
    } else {
      console.log(`Falling back to mock ${category} destinations`);
      return mockData.filter(dest => dest.category === category);
    }
  }
};

// Mock data for development until API is ready
export const getMockDestinations = (): Destination[] => {
  return [
    {
      id: 1,
      name: 'Sigiriya Rock Fortress',
      category: 'Heritage',
      image: 'https://images.unsplash.com/photo-1586266542558-54a424c299d6?q=80&w=1974',
      rating: 4.8,
      description: 'Ancient rock fortress with frescoes and spectacular views.',
      tags: ['UNESCO', 'Historical', 'Scenic'],
      accommodations: [
        { id: 1, name: 'Jetwing Vil Uyana', type: 'Luxury', price: '$$$$', distance: '1.2 km', rating: 4.9 },
        { id: 2, name: 'Sigiriya Village Hotel', type: 'Mid-range', price: '$$$', distance: '2.5 km', rating: 4.5 },
        { id: 3, name: 'Back of Beyond', type: 'Eco-lodge', price: '$$', distance: '3.1 km', rating: 4.7 }
      ]
    },
    {
      id: 2,
      name: 'Unawatuna Beach',
      category: 'Beach',
      image: 'https://images.unsplash.com/photo-1586266551095-bb2ef673bd8a?q=80&w=1974',
      rating: 4.6,
      description: 'Picturesque bay with golden sands and turquoise waters.',
      tags: ['Swimming', 'Snorkeling', 'Sunset'],
      accommodations: [
        { id: 1, name: 'Cantaloupe Aqua', type: 'Luxury', price: '$$$', distance: '0.3 km', rating: 4.8 },
        { id: 2, name: 'Thaproban Beach House', type: 'Boutique', price: '$$', distance: '0.1 km', rating: 4.6 },
        { id: 3, name: 'Rockside Beach Resort', type: 'Mid-range', price: '$$', distance: '0.5 km', rating: 4.4 }
      ]
    },
    {
      id: 3,
      name: 'Ella Nine Arch Bridge',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1586266185406-7bc3fbe6ac0a?q=80&w=1974',
      rating: 4.7,
      description: 'Iconic railway bridge surrounded by lush tea plantations.',
      tags: ['Scenic', 'Photography', 'Hiking'],
      accommodations: [
        { id: 1, name: '98 Acres Resort', type: 'Luxury', price: '$$$$', distance: '2.5 km', rating: 4.9 },
        { id: 2, name: 'Ella Flower Garden Resort', type: 'Mid-range', price: '$$$', distance: '1.8 km', rating: 4.6 },
        { id: 3, name: 'Ella Eco Lodge', type: 'Budget', price: '$', distance: '1.2 km', rating: 4.3 }
      ]
    },
    {
      id: 4,
      name: 'Temple of the Tooth',
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1562653095-bcc0b6457e9b?q=80&w=1974',
      rating: 4.9,
      description: 'Sacred Buddhist temple housing the relic of Buddha\'s tooth.',
      tags: ['Religious', 'Architecture', 'Historical'],
      accommodations: [
        { id: 1, name: 'The Kandy House', type: 'Heritage', price: '$$$$', distance: '3.5 km', rating: 4.8 },
        { id: 2, name: 'OZO Kandy', type: 'Modern', price: '$$$', distance: '1.2 km', rating: 4.5 },
        { id: 3, name: 'Theva Residency', type: 'Boutique', price: '$$$', distance: '2.8 km', rating: 4.7 }
      ]
    },
    {
      id: 5,
      name: 'Yala National Park',
      category: 'Wildlife',
      image: 'https://images.unsplash.com/photo-1625126576222-5f9bd666acce?q=80&w=2070',
      rating: 4.8,
      description: 'Sri Lanka\'s most famous wildlife park, home to leopards and elephants.',
      tags: ['Safari', 'Wildlife', 'Nature'],
      accommodations: [
        { id: 1, name: 'Wild Coast Tented Lodge', type: 'Luxury', price: '$$$$$', distance: '0.5 km', rating: 4.9 },
        { id: 2, name: 'Jetwing Yala', type: 'Resort', price: '$$$$', distance: '1.5 km', rating: 4.7 },
        { id: 3, name: 'Cinnamon Wild Yala', type: 'Safari Lodge', price: '$$$', distance: '2.0 km', rating: 4.6 }
      ]
    },
    {
      id: 6,
      name: 'Galle Fort',
      category: 'Heritage',
      image: 'https://images.unsplash.com/photo-1525953776754-8a3cb27dc8cc?q=80&w=2070',
      rating: 4.7,
      description: 'Historic Dutch colonial fortified city with charming streets and ocean views.',
      tags: ['Colonial', 'UNESCO', 'Architecture'],
      accommodations: [
        { id: 1, name: 'Amangalla', type: 'Heritage Luxury', price: '$$$$$', distance: 'Inside fort', rating: 4.9 },
        { id: 2, name: 'Fort Bazaar', type: 'Boutique', price: '$$$$', distance: 'Inside fort', rating: 4.8 },
        { id: 3, name: 'The Fort Printers', type: 'Heritage', price: '$$$', distance: 'Inside fort', rating: 4.7 }
      ]
    },
    {
      id: 7,
      name: 'Polonnaruwa Ancient City',
      category: 'Heritage',
      image: 'https://images.unsplash.com/photo-1625126577297-1ef24eb6c70f?q=80&w=2070',
      rating: 4.6,
      description: 'Medieval capital with impressive stone temples and statues.',
      tags: ['UNESCO', 'Historical', 'Ruins'],
      accommodations: [
        { id: 1, name: 'Ekho Lake House', type: 'Heritage', price: '$$$', distance: '3.2 km', rating: 4.6 },
        { id: 2, name: 'Deer Park Hotel', type: 'Resort', price: '$$$', distance: '5.1 km', rating: 4.5 },
        { id: 3, name: 'The Lake', type: 'Mid-range', price: '$$', distance: '2.8 km', rating: 4.3 }
      ]
    },
    {
      id: 8,
      name: 'Adam\'s Peak',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1593261707012-a875df686272?q=80&w=2070',
      rating: 4.9,
      description: 'Sacred mountain pilgrimage site with breathtaking sunrise views.',
      tags: ['Hiking', 'Religious', 'Pilgrimage'],
      accommodations: [
        { id: 1, name: 'Slightly Chilled Hotel', type: 'Mid-range', price: '$$', distance: '5.2 km', rating: 4.4 },
        { id: 2, name: 'Green View Guest House', type: 'Budget', price: '$', distance: '4.8 km', rating: 4.2 },
        { id: 3, name: 'Dalhousie Heritage Bungalow', type: 'Heritage', price: '$$$', distance: '3.9 km', rating: 4.5 }
      ]
    }
  ];
};
