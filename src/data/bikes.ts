export interface Bike {
  id: number;
  name: string;
  brand: string;
  type: string;
  price: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  engine: string;
  fuelCapacity: string;
  available: boolean;
  description: string;
  features: string[];
  specifications: {
    engine: string;
    power: string;
    mileage: string;
    year: number;
  };
  location: string;
}

export const bikes: Bike[] = [
  {
    id: 1,
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    type: 'Cruiser',
    price: 1000,
    image: '/royalenfield.jpg',
    images: ['/royalenfield.jpg'],
    rating: 4.7,
    reviews: 180,
    engine: '349cc',
    fuelCapacity: '13L',
    available: true,
    description:
      'A timeless classic with modern engineering. The Classic 350 is perfect for long rides and city cruising, offering a comfortable and commanding riding posture.',
    features: ['Dual-channel ABS', 'Classic Teardrop Fuel Tank', 'Comfortable Seating', 'Spoke Wheels'],
    specifications: { engine: '349cc Single-Cylinder', power: '20.2 BHP', mileage: '35 km/l', year: 2023 },
    location: 'Ghaziabad, UP',
  },
  {
    id: 2,
    name: 'TVS Apache RTR 160',
    brand: 'TVS',
    type: 'Naked Sport',
    price: 600,
    image: '/apache.jpg',
    images: ['/apache.jpg'],
    rating: 4.4,
    reviews: 195,
    engine: '160cc',
    fuelCapacity: '12L',
    available: true,
    description:
      'The TVS Apache RTR 160 is a race-bred machine with sharp handling and a responsive engine, perfect for city commutes and spirited rides.',
    features: ['Glide Through Technology', 'Race-Tuned Fuel Injection', 'LED Headlamp', 'Digital Console'],
    specifications: { engine: '159.7cc SI, 4-stroke', power: '15.8 BHP', mileage: '45 km/l', year: 2022 },
    location: 'Ghaziabad, UP',
  },
  {
    id: 3,
    name: 'KTM 390 Duke',
    brand: 'KTM',
    type: 'Naked Sport',
    price: 800,
    image: '/ktm.jpg',
    images: ['/ktm.jpg'],
    rating: 4.8,
    reviews: 155,
    engine: '373cc',
    fuelCapacity: '13.5L',
    available: true,
    description:
      "The KTM 390 Duke is a corner rocket, boasting a powerful engine and lightweight chassis. It's packed with technology and delivers an exhilarating ride.",
    features: ['TFT Display', 'Quickshifter+', 'Supermoto ABS', 'LED Headlight'],
    specifications: { engine: '373cc Single-Cylinder', power: '43.5 BHP', mileage: '25 km/l', year: 2023 },
    location: 'Ghaziabad, UP',
  },
  {
    id: 4,
    name: 'TVS Jupiter',
    brand: 'TVS',
    type: 'Scooter',
    price: 450,
    image: '/scooter.jpg',
    images: ['/scooter.jpg'],
    rating: 4.6,
    reviews: 250,
    engine: '110cc',
    fuelCapacity: '6L',
    available: true,
    description:
      'The TVS Jupiter is a reliable and comfortable scooter, ideal for city commuting with its excellent mileage and practical features.',
    features: ['External Fuel Fill', 'Large Under-seat Storage', 'Mobile Charger', 'LED Headlamp'],
    specifications: { engine: '109.7cc Single-Cylinder', power: '7.8 BHP', mileage: '50 km/l', year: 2023 },
    location: 'Ghaziabad, UP',
  },
  {
    id: 5,
    name: 'Yamaha MT-15',
    brand: 'Yamaha',
    type: 'Naked Sport',
    price: 700,
    image: '/mt.jpg',
    images: ['/mt.jpg'],
    rating: 4.7,
    reviews: 140,
    engine: '155cc',
    fuelCapacity: '10L',
    available: true,
    description:
      'The Yamaha MT-15 brings aggressive styling and thrilling performance from the dark side of Japan. A lightweight streetfighter that is quick and agile.',
    features: ['Bi-Functional LED Headlight', 'VVA Engine', 'Assist & Slipper Clutch', 'Digital Console'],
    specifications: { engine: '155cc Liquid-cooled', power: '18.4 BHP', mileage: '48 km/l', year: 2023 },
    location: 'Ghaziabad, UP',
  },
  {
    id: 6,
    name: 'Yamaha R15 V4',
    brand: 'Yamaha',
    type: 'Sport',
    price: 750,
    image: '/yahama.jpg',
    images: ['/yahama.jpg'],
    rating: 4.8,
    reviews: 160,
    engine: '155cc',
    fuelCapacity: '11L',
    available: true,
    description:
      'The Yamaha R15 V4 is a track-focused machine with aerodynamic design and advanced features, delivering a supersport experience.',
    features: ['Traction Control System', 'Quick Shifter', 'Upside Down Front Forks', 'Dual Channel ABS'],
    specifications: { engine: '155cc Liquid-cooled', power: '18.4 BHP', mileage: '40 km/l', year: 2023 },
    location: 'Ghaziabad, UP',
  },
];