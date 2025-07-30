import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { cars } from '@/data/cars';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VehicleCard from '@/components/VehicleCard';

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const brands = ['all', ...Array.from(new Set(cars.map(car => car.brand)))];
  const types = ['all', ...Array.from(new Set(cars.map(car => car.type)))];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
    const matchesType = selectedType === 'all' || car.type === selectedType;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under2k' && car.price < 2000) ||
                        (priceRange === '2kto5k' && car.price >= 2000 && car.price < 5000) ||
                        (priceRange === 'over5k' && car.price >= 5000);

    return matchesSearch && matchesBrand && matchesType && matchesPrice;
  });

  return (
    <>
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Our Premier <span className="text-primary"> Car Fleet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our featured collection below. Our full inventory includes a wide variety of models to suit any need. Contact us for specific requests!
            </p>
            <Badge variant="secondary" className="mt-4 text-lg p-2">12-Hour Rentals Available</Badge>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative lg:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search cars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger><SelectValue placeholder="Brand" /></SelectTrigger>
                <SelectContent>
                  {brands.map(brand => <SelectItem key={brand} value={brand}>{brand === 'all' ? 'All Brands' : brand}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
                <SelectContent>
                  {types.map(type => <SelectItem key={type} value={type}>{type === 'all' ? 'All Types' : type}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger><SelectValue placeholder="Price Range" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under2k">Under ₹2000</SelectItem>
                  <SelectItem value="2kto5k">₹2000 - ₹5000</SelectItem>
                  <SelectItem value="over5k">Over ₹5000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredCars.length} of our featured vehicles
            </p>
          </div>

          <Carousel
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filteredCars.map((car) => (
                <CarouselItem key={car.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <VehicleCard vehicle={car} onBookNow={() => setIsBookingModalOpen(true)} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results.</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedBrand('all'); setSelectedType('all'); setPriceRange('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <BookingModal open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen} />
    </>
  );
};

export default Cars;