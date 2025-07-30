import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Tag, Clock, Users, Fuel, Cog, Bike as BikeIcon, ArrowRight, Search, Calendar, Key, Quote } from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { cars } from '@/data/cars';
import { bikes } from '@/data/bikes';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Car } from '@/data/cars';
import { Bike } from '@/data/bikes';
import LocalSeoContent from '@/components/LocalSeoContent';

const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const whyChooseUsItems = [
    { icon: Tag, title: "Best Price Guarantee", description: "Competitive prices and special deals to ensure you get the best value." },
    { icon: Shield, title: "Trusted & Safe", description: "Regularly serviced, sanitized, and fully insured vehicles for your safety." },
    { icon: Clock, title: "24/7 Support", description: "Our team is available around the clock to assist you with any queries or support." },
  ];

  const howItWorksItems = [
    { icon: Search, title: "1. Find Your Ride", description: "Browse our diverse fleet of cars and bikes and choose the one that fits your needs." },
    { icon: Calendar, title: "2. Book Your Dates", description: "Select your rental dates and confirm your booking through our simple form." },
    { icon: Key, title: "3. Pick Up & Go", description: "Visit our location at your scheduled time, pick up the keys, and start your journey." },
  ];

  const testimonials = [
    { name: "Rohan Sharma", text: "Amazing experience! The car was clean and well-maintained. The booking process was seamless. Highly recommended!" },
    { name: "Priya Singh", text: "Rented a bike for a weekend trip. The Royal Enfield was in perfect condition. Great service from the team." },
    { name: "Ankit Patel", text: "Best car rental service in Ghaziabad. The prices are affordable and the staff is very helpful. Will definitely rent again." },
  ];

  const featuredVehicles: (Car | Bike)[] = [...cars.slice(0, 3), ...bikes.slice(0, 1)];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-4 leading-tight">
                Self-Drive Car Rental <br /><span className="text-primary">in Ghaziabad</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
                Explore Ghaziabad with our premium fleet of cars and bikes. Quality vehicles, competitive prices, and exceptional service guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" asChild>
                  <Link to="/cars" className="flex items-center">Explore Fleet <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" onClick={() => setIsBookingModalOpen(true)}>
                  Book Now
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-down">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-primary to-blue-400 rounded-3xl transform -rotate-3 shadow-lg"></div>
              <div className="relative bg-background p-2 rounded-2xl shadow-lg">
                <img src="/Jeep.jpg" alt="Mahindra Thar SUV for rent in Ghaziabad" className="w-full h-80 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Content Section */}
      <LocalSeoContent />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">How It Works</h2>
            <p className="text-lg text-muted-foreground mt-2">Get on the road in three simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksItems.map((item, index) => (
              <Card key={index} className="text-center p-8 bg-card border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">Our Featured <span className="text-primary">Vehicles</span></h2>
            <p className="text-lg text-muted-foreground mt-2">A glimpse of our popular cars and bikes for rent in Ghaziabad.</p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {featuredVehicles.map((vehicle) => {
                const isCar = 'seats' in vehicle;
                const link = isCar ? `/car/${vehicle.id}` : `/bike/${vehicle.id}`;
                return (
                  <CarouselItem key={`${isCar ? 'car' : 'bike'}-${vehicle.id}`} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
                        <div className="relative">
                          <img src={vehicle.image} alt={`${vehicle.name} for rent in Ghaziabad`} className="w-full h-48 object-cover" />
                          <Badge className="absolute top-3 right-3">⭐ {vehicle.rating}</Badge>
                        </div>
                        <CardContent className="p-6 flex-grow">
                          <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                          <div className="flex items-center text-muted-foreground space-x-4 mb-4 text-sm">
                            {isCar ? (
                              <>
                                <div className="flex items-center"><Users className="h-4 w-4 mr-1 text-primary" /><span>{vehicle.seats} Seats</span></div>
                                <div className="flex items-center"><Fuel className="h-4 w-4 mr-1 text-primary" /><span>{vehicle.fuel}</span></div>
                                <div className="flex items-center"><Cog className="h-4 w-4 mr-1 text-primary" /><span>{vehicle.transmission}</span></div>
                              </>
                            ) : (
                              <>
                                <div className="flex items-center"><BikeIcon className="h-4 w-4 mr-1 text-primary" /><span>{vehicle.type}</span></div>
                                <div className="flex items-center"><Cog className="h-4 w-4 mr-1 text-primary" /><span>{vehicle.engine}</span></div>
                              </>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 border-t">
                          <div className="flex justify-between items-center w-full">
                            <p className="text-lg font-semibold">₹{vehicle.price.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/day</span></p>
                            <Button asChild variant="outline">
                              <Link to={link}>View Details</Link>
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-[-20px] bg-white hover:bg-gray-100 text-primary rounded-full shadow-lg border-none h-10 w-10" />
            <CarouselNext className="hidden sm:flex right-[-20px] bg-white hover:bg-gray-100 text-primary rounded-full shadow-lg border-none h-10 w-10" />
          </Carousel>
          <div className="text-center mt-12 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/cars">View All Cars</Link>
            </Button>
            <Button size="lg" asChild>
              <Link to="/bikes">View All Bikes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">Why Choose AToZ Car Rentals?</h2>
            <p className="text-lg text-muted-foreground mt-2">Your satisfaction is our priority.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <Card key={index} className="text-center p-8 bg-card">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground mt-2">Real stories from our happy renters in Ghaziabad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card p-6 flex flex-col">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                <p className="text-muted-foreground flex-grow mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BookingModal open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen} />
    </>
  );
};

export default Home;