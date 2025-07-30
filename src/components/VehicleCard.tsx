import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Fuel, Users, Cog, Bike as BikeIcon, GaugeCircle } from 'lucide-react';
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
    <Card className="bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col text-left">
      <Link to={link} className="flex-grow flex flex-col">
        <div className="relative">
          <div className="overflow-hidden rounded-t-lg">
            <img src={vehicle.image} alt={vehicle.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="font-bold font-montserrat truncate group-hover:text-primary" title={vehicle.name.replace(' (Coming Soon)', '')}>
            {vehicle.name.replace(' (Coming Soon)', '')}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">Model {vehicle.specifications.year}</p>
          
          <div className="flex flex-wrap items-center text-muted-foreground gap-x-4 gap-y-2 text-xs">
            {isCar(vehicle) ? (
              <>
                <div className="flex items-center gap-1.5"><Fuel className="h-4 w-4" /><span>{vehicle.fuel}</span></div>
                <div className="flex items-center gap-1.5"><Cog className="h-4 w-4" /><span>{vehicle.transmission}</span></div>
                <div className="flex items-center gap-1.5"><Users className="h-4 w-4" /><span>{vehicle.seats} Seater</span></div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1.5"><BikeIcon className="h-4 w-4" /><span>{vehicle.type}</span></div>
                <div className="flex items-center gap-1.5"><Cog className="h-4 w-4" /><span>{vehicle.specifications.engine}</span></div>
                <div className="flex items-center gap-1.5"><GaugeCircle className="h-4 w-4" /><span>{vehicle.specifications.mileage}</span></div>
              </>
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 border-t mt-auto">
        <div className="w-full">
            <div className="flex justify-between items-baseline mb-3">
                <p className="text-sm text-muted-foreground">Price / day</p>
                <p className="text-xl font-bold text-foreground">₹{vehicle.price.toLocaleString()}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline" size="sm">
                    <Link to={link}>View Details</Link>
                </Button>
                <Button 
                    size="sm" 
                    disabled={!vehicle.available || isComingSoon} 
                    onClick={onBookNow}
                >
                    Book Now
                </Button>
            </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;