import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Users, Cog, Fuel, Calendar, Shield, CheckCircle, GaugeCircle, GitCommitHorizontal } from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { cars } from '@/data/cars';

const CarDetails = () => {
  const { id } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const car = cars.find(c => c.id === parseInt(id || ''));

  if (!car) {
    return <Navigate to="/404" />;
  }
  
  const [currentImage, setCurrentImage] = useState(car.images[0]);

  return (
    <>
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link to="/cars" className="flex items-center"><ArrowLeft className="h-4 w-4 mr-2" />Back to Fleet</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative">
                <img src={currentImage} alt={car.name} className="w-full h-96 object-cover rounded-lg shadow-md" />
              </div>
              <div className="flex space-x-2">
                {car.images.map((image, index) => (
                  <button key={index} onClick={() => setCurrentImage(image)} className={`w-20 h-16 rounded-md overflow-hidden border-2 transition-colors duration-300 ${image === currentImage ? 'border-primary' : 'border-transparent'}`}>
                    <img src={image} alt={`${car.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold font-montserrat">{car.name}</h1>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">₹{car.price.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">per day</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-lg text-muted-foreground">{car.brand} • {car.type}</span>
                  <div className="flex items-center space-x-1"><Star className="h-4 w-4 text-yellow-400" /><span className="font-medium">{car.rating}</span><span className="text-muted-foreground">({car.reviews} reviews)</span></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{car.description}</p>
              </div>

              <Card className="bg-card shadow-sm">
                <CardHeader><CardTitle>Specifications</CardTitle></CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div className="flex items-center"><Users className="h-5 w-5 mr-2 text-primary" /><span>{car.specifications.seats} Seats</span></div>
                  <div className="flex items-center"><Cog className="h-5 w-5 mr-2 text-primary" /><span>{car.specifications.transmission}</span></div>
                  <div className="flex items-center"><Fuel className="h-5 w-5 mr-2 text-primary" /><span>{car.specifications.fuel}</span></div>
                  <div className="flex items-center"><GaugeCircle className="h-5 w-5 mr-2 text-primary" /><span>{car.specifications.mileage}</span></div>
                  <div className="flex items-center"><GitCommitHorizontal className="h-5 w-5 mr-2 text-primary" /><span>{car.specifications.engine}</span></div>
                  <div className="flex items-center"><Calendar className="h-5 w-5 mr-2 text-primary" /><span>{car.specifications.year} Model</span></div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-sm">
                <CardHeader><CardTitle>Features</CardTitle></CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                    {car.features.map(feature => <li key={feature} className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />{feature}</li>)}
                  </ul>
                </CardContent>
              </Card>

              <Button size="lg" className="w-full" disabled={!car.available} onClick={() => setIsBookingModalOpen(true)}>
                {car.available ? 'Book Now' : 'Currently Unavailable'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen} />
    </>
  );
};

export default CarDetails;