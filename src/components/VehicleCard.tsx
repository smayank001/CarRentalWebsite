import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fuel, Users, Cog, Bike as BikeIcon, Star } from 'lucide-react';
import type { Car } from '@/data/cars';
import type { Bike } from '@/data/bikes';

interface VehicleCardProps {
  vehicle: Car | Bike;
  onBookNow: () => void;
}

const isCar = (vehicle: Car | Bike): vehicle is Car => {
  return 'seats' in vehicle;
};

const VehicleCard = ({ vehicle, onBookNow }: VehicleCardProps) => {
  const link = isCar(vehicle) ? `/car/${vehicle.id}` : `/bike/${vehicle.id}`;
  const isComingSoon = vehicle.name.includes('(Coming Soon)');

  return (
    <div className="p-1 h-full">
      <Card className="bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
        <div className="relative">
          <div className="overflow-hidden rounded-t-lg">
            <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <Badge className="absolute top-3 right-3 bg-black/60 text-white flex items-center gap-1 border-transparent">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /> {vehicle.rating}
          </Badge>
          {isComingSoon ? (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="default" className="text-base bg-primary text-primary-foreground">Coming Soon</Badge>
            </div>
          ) : !vehicle.available && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="destructive" className="text-base">Unavailable</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="text-lg font-bold font-montserrat mb-2 truncate" title={vehicle.name.replace(' (Coming Soon)', '')}>
            {vehicle.name.replace(' (Coming Soon)', '')}
          </h3>
          <div className="flex flex-wrap items-center text-muted-foreground gap-x-4 gap-y-2 mb-4 text-sm">
            {isCar(vehicle) ? (
              <>
                <div className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /><span>{vehicle.seats} Seats</span></div>
                <div className="flex items-center gap-1.5"><Fuel className="h-4 w-4 text-primary" /><span>{vehicle.fuel}</span></div>
                <div className="flex items-center gap-1.5"><Cog className="h-4 w-4 text-primary" /><span>{vehicle.transmission}</span></div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1.5"><BikeIcon className="h-4 w-4 text-primary" /><span>{vehicle.type}</span></div>
                <div className="flex items-center gap-1.5"><Cog className="h-4 w-4 text-primary" /><span>{vehicle.engine}</span></div>
              </>
            )}
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Price per day</span>
                <span className="text-2xl font-bold text-foreground">₹{vehicle.price.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 mt-auto">
          <div className="flex gap-3 w-full">
            <Button variant="outline" className="flex-1" asChild>
              <Link to={link}>View Details</Link>
            </Button>
            <Button className="flex-1" disabled={!vehicle.available || isComingSoon} onClick={onBookNow}>
              Book Now
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VehicleCard;