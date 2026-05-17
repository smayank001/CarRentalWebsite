import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Tag, Clock, ArrowRight, Search, Calendar, Key, Quote } from 'lucide-react';
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
import VehicleCard from '@/components/VehicleCard';

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

  const featuredVehicles: (Car | Bike)[] = [...cars.slice(0, 4), ...bikes.slice(0, 2)];

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

      {/* SR Car Rental Gallery & Offers Slider */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Decorative golden luxury glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat tracking-wide">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 font-extrabold">Exclusive Services</span> & Pricing
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-3 max-w-2xl mx-auto">
              Scan through our premium drive rules, transparent price lists, and experience flyers to start your perfect journey.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-3">
                {[
                  { src: "/logo.jpg", alt: "SR Car Rental Premium Logo Banner" },
                  { src: "/pricelist.jpg", alt: "SR Car Rental Transparent Price List" },
                  { src: "/srcar.jpeg", alt: "SR Car Rental Self Drive Experience Guidelines" },
                  { src: "/srcarrental.jpeg", alt: "SR Car Rental Self Drive Premium Packages" },
                ].map((item, idx) => (
                  <CarouselItem key={idx} className="pl-3 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="relative group overflow-hidden rounded-2xl border border-yellow-500/10 bg-zinc-950 p-2 shadow-2xl transition-all duration-500 hover:border-yellow-500/30">
                      {/* Image container */}
                      <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-black flex items-center justify-center">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <div className="mt-3 text-center">
                        <h4 className="text-xs font-semibold tracking-wide text-gray-300 font-montserrat truncate px-1">
                          {item.alt}
                        </h4>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Carousel Navigation Buttons */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <CarouselPrevious className="static translate-y-0 bg-zinc-900 border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500 hover:text-black rounded-full shadow-lg h-10 w-10 transition-all duration-300" />
                <span className="text-xs text-yellow-500/60 font-mono tracking-widest uppercase">SR EXPERIENCE</span>
                <CarouselNext className="static translate-y-0 bg-zinc-900 border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500 hover:text-black rounded-full shadow-lg h-10 w-10 transition-all duration-300" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

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
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredVehicles.map((vehicle) => (
                <CarouselItem key={`${'seats' in vehicle ? 'car' : 'bike'}-${vehicle.id}`} className="pl-4 basis-11/12 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1 h-full">
                    <VehicleCard vehicle={vehicle} onBookNow={() => setIsBookingModalOpen(true)} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-primary rounded-full shadow-lg border-none h-8 w-8" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-primary rounded-full shadow-lg border-none h-8 w-8" />
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
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">Why Choose SR Car Rental?</h2>
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

