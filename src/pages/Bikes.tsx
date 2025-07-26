import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, GaugeCircle, Bike as BikeIcon } from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { bikes } from '@/data/bikes';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Bikes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const brands = ['all', ...Array.from(new Set(bikes.map(bike => bike.brand)))];
  const types = ['all', ...Array.from(new Set(bikes.map(bike => bike.type)))];

  const filteredBikes = bikes.filter(bike => {
    const matchesSearch = bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bike.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || bike.brand === selectedBrand;
    const matchesType = selectedType === 'all' || bike.type === selectedType;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under500' && bike.price < 500) ||
                        (priceRange === '500to700' && bike.price >= 500 && bike.price < 700) ||
                        (priceRange === 'over700' && bike.price >= 700);

    return matchesSearch && matchesBrand && matchesType && matchesPrice;
  });

  return (
    <>
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Our Premier <span className="text-primary">Bike Fleet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our featured collection below. Our full inventory includes a wide variety of models to suit any need. Contact us for specific requests!
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative lg:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search bikes..."
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
                  <SelectItem value="under500">Under ₹500</SelectItem>
                  <SelectItem value="500to700">₹500 - ₹700</SelectItem>
                  <SelectItem value="over700">Over ₹700</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredBikes.length} of our featured vehicles
            </p>
          </div>

          <Carousel
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filteredBikes.map((bike) => (
                <CarouselItem key={bike.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
                      <div className="relative">
                        <img src={bike.image} alt={bike.name} className="w-full h-[250px] object-cover" />
                        <Badge className="absolute top-3 right-3">⭐ {bike.rating}</Badge>
                        {!bike.available && <div className="absolute inset-0 bg-black/50 flex items-center justify-center"><Badge variant="destructive" className="text-lg">Unavailable</Badge></div>}
                      </div>
                      <CardContent className="p-6 pb-4 flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{bike.name}</h3>
                        <div className="flex items-center text-muted-foreground space-x-4 mb-4 text-sm">
                          <div className="flex items-center"><BikeIcon className="h-4 w-4 mr-1 text-primary" /><span>{bike.type}</span></div>
                          <div className="flex items-center"><GaugeCircle className="h-4 w-4 mr-1 text-primary" /><span>{bike.engine}</span></div>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Price per day</span>
                              <span className="text-xl font-bold text-primary">₹{bike.price.toLocaleString()}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <div className="flex gap-3 w-full">
                          <Button variant="outline" className="flex-1" asChild>
                            <Link to={`/bike/${bike.id}`}>View Details</Link>
                          </Button>
                          <Button className="flex-1" disabled={!bike.available} onClick={() => setIsBookingModalOpen(true)}>
                            Book Now
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {filteredBikes.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No bikes found</h3>
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

export default Bikes;