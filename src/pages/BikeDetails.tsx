import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Star, Calendar, CheckCircle, GaugeCircle, GitCommitHorizontal, Zap } from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { bikes } from '@/data/bikes';

const BikeDetails = () => {
  const { id } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const bike = bikes.find(b => b.id === parseInt(id || ''));

  if (!bike) {
    return <Navigate to="/404" />;
  }
  
  const [currentImage, setCurrentImage] = useState(bike.images[0]);

  return (
    <>
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link to="/bikes" className="flex items-center"><ArrowLeft className="h-4 w-4 mr-2" />Back to Bike Fleet</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative">
                <img src={currentImage} alt={bike.name} className="w-full h-96 object-cover rounded-lg shadow-md" />
              </div>
              <div className="flex space-x-2">
                {bike.images.map((image, index) => (
                  <button key={index} onClick={() => setCurrentImage(image)} className={`w-20 h-16 rounded-md overflow-hidden border-2 transition-colors duration-300 ${image === currentImage ? 'border-primary' : 'border-transparent'}`}>
                    <img src={image} alt={`${bike.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold font-montserrat">{bike.name}</h1>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">₹{bike.price.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">per day</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-lg text-muted-foreground">{bike.brand} • {bike.type}</span>
                  <div className="flex items-center space-x-1"><Star className="h-4 w-4 text-yellow-400" /><span className="font-medium">{bike.rating}</span><span className="text-muted-foreground">({bike.reviews} reviews)</span></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{bike.description}</p>
              </div>

              <Card className="bg-card shadow-sm">
                <CardHeader><CardTitle>Specifications</CardTitle></CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div className="flex items-center"><GitCommitHorizontal className="h-5 w-5 mr-2 text-primary" /><span>{bike.specifications.engine}</span></div>
                  <div className="flex items-center"><Zap className="h-5 w-5 mr-2 text-primary" /><span>{bike.specifications.power}</span></div>
                  <div className="flex items-center"><GaugeCircle className="h-5 w-5 mr-2 text-primary" /><span>{bike.specifications.mileage}</span></div>
                  <div className="flex items-center"><Calendar className="h-5 w-5 mr-2 text-primary" /><span>{bike.specifications.year} Model</span></div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-sm">
                <CardHeader><CardTitle>Features</CardTitle></CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                    {bike.features.map(feature => <li key={feature} className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />{feature}</li>)}
                  </ul>
                </CardContent>
              </Card>

              <Button size="lg" className="w-full" disabled={!bike.available} onClick={() => setIsBookingModalOpen(true)}>
                {bike.available ? 'Book Now' : 'Currently Unavailable'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen} />
    </>
  );
};

export default BikeDetails;