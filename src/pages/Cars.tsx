import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Fuel, Users, Cog, Star } from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { cars } from '@/data/cars';

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
              Our <span className="text-primary"> Car Fleet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This is just a glimpse of our extensive collection. We have many more models available to suit your needs. Contact us for specific requests!
            </p>
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
              Showing {filteredCars.length} of {cars.length} vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <Card key={car.id} className="bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative">
                  <img src={car.image} alt={car.name} className="w-full h-[250px] object-cover" />
                  <Badge className="absolute top-3 right-3">⭐ {car.rating}</Badge>
                  {!car.available && <div className="absolute inset-0 bg-black/50 flex items-center justify-center"><Badge variant="destructive" className="text-lg">Unavailable</Badge></div>}
                </div>
                <CardContent className="p-6 pb-4">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <div className="flex items-center text-muted-foreground space-x-4 mb-4 text-sm">
                    <div className="flex items-center"><Users className="h-4 w-4 mr-1 text-primary" /><span>{car.seats} Seats</span></div>
                    <div className="flex items-center"><Fuel className="h-4 w-4 mr-1 text-primary" /><span>{car.fuel}</span></div>
                    <div className="flex items-center"><Cog className="h-4 w-4 mr-1 text-primary" /><span>{car.transmission}</span></div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Price per day</span>
                        <span className="text-xl font-bold text-primary">₹{car.price.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-3 w-full">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={`/car/${car.id}`}>View Details</Link>
                    </Button>
                    <Button className="flex-1" disabled={!car.available} onClick={() => setIsBookingModalOpen(true)}>
                      Book Now
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

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