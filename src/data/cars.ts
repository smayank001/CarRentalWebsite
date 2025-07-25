// Car.ts

export interface Car {
  id: number;
  name: string;
  brand: string;
  type: string;
  price: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  transmission: 'Manual' | 'Automatic';
  fuel: 'Diesel' | 'Petrol' | 'CNG';
  seats: number;
  available: boolean;
  description: string;
  features: string[];
  specifications: {
    transmission: 'Manual' | 'Automatic';
    fuel: 'Diesel' | 'Petrol' | 'CNG';
    seats: number;
    mileage: string;
    engine: string;
    year: number;
  };
  location: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Mahindra Thar',
    brand: 'Mahindra',
    type: 'SUV',
    price: 5500,
    image: '/Jeep.jpg',
    images: ['/Jeep.jpg'],
    rating: 4.8,
    reviews: 142,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 4,
    available: true,
    description: 'Experience the perfect blend of rugged capability and modern comfort with the Mahindra Thar...',
    features: ['Air Conditioning', '4WD Capability', 'Automatic Transmission', 'Petrol Engine', 'Power Steering', 'ABS Brakes', 'Airbags', 'Music System', 'GPS Navigation', 'Bluetooth Connectivity'],
    specifications: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      seats: 4,
      mileage: '12.2 km/l',
      engine: '2.2L Turbo Petrol',
      year: 2023,
    },
    location: 'Ghaziabad, UP',
  },
  {
    id: 2,
    name: 'Mahindra Scorpio-N (Coming Soon)',
    brand: 'Mahindra',
    type: 'SUV',
    price: 5000,
    image: '/scorpion.jpg',
    images: ['/scorpion.jpg'],
    rating: 4.7,
    reviews: 110,
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 7,
    available: false,
    description: 'The much-awaited Mahindra Scorpio-N is a powerful and spacious SUV, coming soon to our fleet...',
    features: ['Air Conditioning', 'Manual Transmission', 'Petrol Engine', 'Power Steering', 'ABS Brakes', 'Airbags', 'Music System'],
    specifications: {
      transmission: 'Manual',
      fuel: 'Petrol',
      seats: 7,
      mileage: '14.5 km/l',
      engine: '2.2L mHawk',
      year: 2022,
    },
    location: 'Ghaziabad, UP',
  },
  {
    id: 3,
    name: 'Maruti Swift',
    brand: 'Maruti',
    type: 'Hatchback',
    price: 2000,
    image: '/swiftsilver.jpg',
    images: ['/swiftsilver.jpg'],
    rating: 4.6,
    reviews: 250,
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    available: true,
    description: 'A popular choice for city driving...',
    features: ['Air Conditioning', 'Manual Transmission', 'Petrol Engine', 'Power Steering', 'Music System'],
    specifications: {
      transmission: 'Manual',
      fuel: 'Petrol',
      seats: 5,
      mileage: '22.38 km/l',
      engine: '1.2L K-Series',
      year: 2023,
    },
    location: 'Ghaziabad, UP',
  },
  {
    id: 4,
    name: 'Honda City',
    brand: 'Honda',
    type: 'Sedan',
    price: 2500,
    image: '/cityhonda.jpg',
    images: ['/cityhonda.jpg'],
    rating: 4.8,
    reviews: 130,
    transmission: 'Manual',
    fuel: 'CNG',
    seats: 5,
    available: true,
    description: 'The Honda City is a benchmark for sedans...',
    features: ['Sunroof', 'Leather Seats', 'Manual Transmission', 'Petrol Engine', 'Rear AC Vents', 'Touchscreen Infotainment'],
    specifications: {
      transmission: 'Manual',
      fuel: 'CNG',
      seats: 5,
      mileage: '18.4 km/l',
      engine: '1.5L i-VTEC',
      year: 2023,
    },
    location: 'Ghaziabad, UP',
  },
  {
    id: 5,
    name: 'Maruti Baleno',
    brand: 'Maruti',
    type: 'Hatchback',
    price: 2500,
    image: '/marutibaleno.jpg',
    images: ['/marutibaleno.jpg'],
    rating: 4.7,
    reviews: 190,
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    available: true,
    description: 'The Maruti Baleno is a premium hatchback...',
    features: ['Heads-Up Display', '360 View Camera', 'Manual Transmission', 'Petrol Engine', 'SmartPlay Pro+ Infotainment'],
    specifications: {
      transmission: 'Manual',
      fuel: 'Petrol',
      seats: 5,
      mileage: '22.94 km/l',
      engine: '1.2L DualJet',
      year: 2023,
    },
    location: 'Ghaziabad, UP',
  },
  {
    id: 6,
    name: 'Maruti Ertiga',
    brand: 'Maruti',
    type: 'MUV',
    price: 3800,
    image: '/ertiga.jpg',
    images: ['/ertiga.jpg'],
    rating: 4.6,
    reviews: 165,
    transmission: 'Manual',
    fuel: 'CNG',
    seats: 7,
    available: true,
    description: 'The Maruti Ertiga is a stylish and versatile MUV...',
    features: ['Roof Mounted AC', 'Paddle Shifters', 'Manual Transmission', 'Petrol Engine', 'Smart Hybrid Technology'],
    specifications: {
      transmission: 'Manual',
      fuel: 'CNG',
      seats: 7,
      mileage: '20.3 km/l',
      engine: '1.5L K-series',
      year: 2023,
    },
    location: 'Ghaziabad, UP',
  },
  {
    id: 7,
    name: 'Maruti Swift Dzire',
    brand: 'Maruti',
    type: 'Sedan',
    price: 2500,
    image: '/whiteswift.jpg',
    images: ['/whiteswift.jpg'],
    rating: 4.5,
    reviews: 180,
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    available: true,
    description: 'The Maruti Swift Dzire is a compact sedan...',
    features: ['Manual Climate Control', 'Rear AC Vents', 'Push Start-Stop Button', 'SmartPlay Infotainment System'],
    specifications: {
      transmission: 'Manual',
      fuel: 'Petrol',
      seats: 5,
      mileage: '22.61 km/l',
      engine: '1.2L DualJet',
      year: 2023,
    },
    location: 'Ghaziabad, UP',
  },
  {
    id: 8,
    name: 'Maruti Grand Vitara',
    brand: 'Maruti',
    type: 'SUV',
    price: 4000,
    image: '/grandvitara.jpg', // Placeholder image
    images: ['/grandvitara.jpg'],
    rating: 4.7,
    reviews: 95,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    available: true,
    description: 'The Grand Vitara offers a commanding presence and a premium experience with its hybrid technology.',
    features: ['Panoramic Sunroof', 'Ventilated Seats', 'Wireless Charger', 'SmartPlay Pro+ Infotainment'],
    specifications: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      seats: 5,
      mileage: '21.11 km/l',
      engine: '1.5L Intelligent Electric Hybrid',
      year: 2023,
    },
    location: 'Ghaziabad, UP',
  },
  {
    id: 9,
    name: 'Maruti Fronx (Coming Soon)',
    brand: 'Maruti',
    type: 'SUV',
    price: 2800,
    image: '/marutibaleno.jpg', // Placeholder image
    images: ['/marutibaleno.jpg'],
    rating: 4.6,
    reviews: 88,
    transmission: 'Manual',
    fuel: 'CNG',
    seats: 5, // ✅ FIXED: added missing seats property
    available: false,
    description: 'A stylish crossover with a sporty design and efficient performance. Available in both Petrol and CNG.',
    features: ['Dual-tone interior', 'Floating Infotainment System', 'LED DRLs', 'Alloy Wheels'],
    specifications: {
      transmission: 'Manual',
      fuel: 'CNG',
      seats: 5,
      mileage: '28.51 km/kg (CNG)',
      engine: '1.2L DualJet',
      year: 2024,
    },
    location: 'Ghaziabad, UP',
  },
  {
    id: 10,
    name: 'Maruti Baleno (Old)',
    brand: 'Maruti',
    type: 'Hatchback',
    price: 2200,
    image: '/oldbaleno.jpg',
    images: ['/oldbaleno.jpg'],
    rating: 4.5,
    reviews: 150,
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    available: true,
    description: 'A reliable and fuel-efficient hatchback, the 2016 Baleno model is a great choice for city driving.',
    features: ['Air Conditioning', 'Manual Transmission', 'Petrol Engine', 'Power Steering', 'Music System'],
    specifications: {
      transmission: 'Manual',
      fuel: 'Petrol',
      seats: 5,
      mileage: '21.4 km/l',
      engine: '1.2L VVT',
      year: 2016,
    },
    location: 'Ghaziabad, UP',
  },
];
