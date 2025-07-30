import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Car, Bike } from "lucide-react";

const LocalSeoContent = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold font-montserrat text-center">
              Your Premier Car Rental Service in Ghaziabad
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-4">
                Welcome to AToZ Car Rentals, the leading choice for <strong className="text-foreground">self-drive car rental in Ghaziabad</strong>. Whether you need a comfortable sedan for a family trip, a rugged SUV for an adventure, or a stylish car for a special occasion, we have the perfect vehicle for you. Our commitment is to provide an affordable, reliable, and convenient car hire experience.
              </p>
              <p>
                We proudly serve the entire Ghaziabad region, with easy pickup and drop-off services available for customers in <strong className="text-foreground">Indirapuram, Vaishali, Raj Nagar Extension, and Noida Extension</strong>. Our fleet is meticulously maintained to ensure your safety and comfort on every journey. With transparent pricing and no hidden fees, we are the most trusted <strong className="text-foreground">car on rent service in Ghaziabad</strong>.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Wide Service Area</h3>
                  <p>Conveniently located in Vijay Nagar, we serve all major areas of Ghaziabad and Noida.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Car className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Diverse Car Fleet</h3>
                  <p>From hatchbacks like the Swift to SUVs like the Thar, find the perfect car for your needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Bike className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Bike Rentals Available</h3>
                  <p>Need something zippier? We also offer a range of bikes for rent for city cruising.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LocalSeoContent;