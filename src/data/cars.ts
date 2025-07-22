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
  fuel: 'Diesel' | 'Petrol';
  seats: number;
  available: boolean;
  description: string;
  features: string[];
  specifications: {
    transmission: 'Manual' | 'Automatic';
    fuel: 'Diesel' | 'Petrol';
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
    images: [
      '/Jeep.jpg',
    ],
    rating: 4.8,
    reviews: 142,
    transmission: 'Manual',
    fuel: 'Diesel',
    seats: 4,
    available: true,
    description: 'Experience the perfect blend of rugged capability and modern comfort with the Mahindra Thar. This iconic off-road vehicle combines classic styling with contemporary features, making it ideal for both city drives and adventure trips.',
    features: ['Air Conditioning', '4WD Capability', 'Manual Transmission', 'Diesel Engine', 'Power Steering', 'ABS Brakes', 'Airbags', 'Music System', 'GPS Navigation', 'Bluetooth Connectivity'],
    specifications: { transmission: 'Manual', fuel: 'Diesel', seats: 4, mileage: '15.2 km/l', engine: '2.2L Turbo Diesel', year: 2023 },
    location: 'Ghaziabad, UP'
  },
  {
    id: 2,
    name: 'Mahindra Scorpio-N',
    brand: 'Mahindra',
    type: 'SUV',
    price: 5500,
    image: '/scorpio.jpg',
    images: ['/scorpio.jpg'],
    rating: 4.7,
    reviews: 110,
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 7,
    available: true,
    description: 'The Mahindra Scorpio-N is a powerful and spacious SUV, perfect for family trips and long journeys. It offers a commanding road presence and a comfortable ride.',
    features: ['Air Conditioning', 'Automatic Transmission', 'Diesel Engine', 'Power Steering', 'ABS Brakes', 'Airbags', 'Music System'],
    specifications: { transmission: 'Automatic', fuel: 'Diesel', seats: 7, mileage: '14.5 km/l', engine: '2.2L mHawk', year: 2022 },
    location: 'Ghaziabad, UP'
  },
  {
    id: 3,
    name: 'Maruti Swift',
    brand: 'Maruti',
    type: 'Hatchback',
    price: 2500,
    image: '/swift.jpg',
    images: ['/swift.jpg'],
    rating: 4.6,
    reviews: 250,
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    available: true,
    description: 'A popular choice for city driving, the Maruti Swift is known for its fuel efficiency, compact size, and zippy performance. Easy to park and fun to drive.',
    features: ['Air Conditioning', 'Manual Transmission', 'Petrol Engine', 'Power Steering', 'Music System'],
    specifications: { transmission: 'Manual', fuel: 'Petrol', seats: 5, mileage: '22.38 km/l', engine: '1.2L K-Series', year: 2023 },
    location: 'Ghaziabad, UP'
  },
  {
    id: 4,
    name: 'Honda City',
    brand: 'Honda',
    type: 'Sedan',
    price: 2800,
    image: '/hondacity.jpg',
    images: ['/hondacity.jpg'],
    rating: 4.8,
    reviews: 130,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    available: true,
    description: 'The Honda City is a benchmark for sedans, offering a perfect mix of style, space, and performance. Its refined engine and premium interior make every drive a pleasure.',
    features: ['Sunroof', 'Leather Seats', 'Automatic Transmission', 'Petrol Engine', 'Rear AC Vents', 'Touchscreen Infotainment'],
    specifications: { transmission: 'Automatic', fuel: 'Petrol', seats: 5, mileage: '18.4 km/l', engine: '1.5L i-VTEC', year: 2023 },
    location: 'Ghaziabad, UP'
  },
  {
    id: 5,
    name: 'Maruti Baleno',
    brand: 'Maruti',
    type: 'Hatchback',
    price: 2600,
    image: '/baleno.jpg',
    images: ['/baleno.jpg'],
    rating: 4.7,
    reviews: 190,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    available: true,
    description: 'The Maruti Baleno is a premium hatchback that combines bold styling with advanced technology and a comfortable cabin. It\'s an excellent choice for city commutes and weekend getaways.',
    features: ['Heads-Up Display', '360 View Camera', 'Automatic Transmission', 'Petrol Engine', 'SmartPlay Pro+ Infotainment'],
    specifications: { transmission: 'Automatic', fuel: 'Petrol', seats: 5, mileage: '22.94 km/l', engine: '1.2L DualJet', year: 2023 },
    location: 'Ghaziabad, UP'
  },
  {
    id: 6,
    name: 'Maruti Ertiga',
    brand: 'Maruti',
    type: 'MUV',
    price: 2600,
    image: '/ertiga.jpg',
    images: ['/ertiga.jpg'],
    rating: 4.6,
    reviews: 165,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 7,
    available: true,
    description: 'The Maruti Ertiga is a stylish and versatile MUV that offers ample space for the whole family. With its flexible seating and efficient engine, it\'s the perfect companion for any journey.',
    features: ['Roof Mounted AC', 'Paddle Shifters', 'Automatic Transmission', 'Petrol Engine', 'Smart Hybrid Technology'],
    specifications: { transmission: 'Automatic', fuel: 'Petrol', seats: 7, mileage: '20.3 km/l', engine: '1.5L K-series', year: 2023 },
    location: 'Ghaziabad, UP'
  },
  {
    id: 7,
    name: 'Maruti Swift Dzire',
    brand: 'Maruti',
    type: 'Sedan',
    price: 2700,
    image: '/swiftdezire.jpg',
    images: ['/swiftdezire.jpg'],
    rating: 4.5,
    reviews: 180,
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    available: true,
    description: 'The Maruti Swift Dzire is a compact sedan that offers a comfortable ride, great mileage, and a host of features, making it a perfect family car.',
    features: ['Automatic Climate Control', 'Rear AC Vents', 'Push Start-Stop Button', 'SmartPlay Infotainment System'],
    specifications: { transmission: 'Manual', fuel: 'Petrol', seats: 5, mileage: '22.61 km/l', engine: '1.2L DualJet', year: 2023 },
    location: 'Ghaziabad, UP'
  }
];