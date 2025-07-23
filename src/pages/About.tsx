import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Target, Users, HeartHandshake, ArrowRight } from 'lucide-react';

const About = () => {
  const coreValues = [
    { icon: HeartHandshake, title: "Customer Commitment", description: "We are dedicated to providing an exceptional experience, ensuring every customer leaves satisfied and safe." },
    { icon: Award, title: "Quality & Excellence", description: "We maintain our fleet to the highest standards of safety, cleanliness, and performance." },
    { icon: Users, title: "Integrity & Trust", description: "We believe in transparent pricing and honest communication, building lasting relationships with our clients." },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-secondary">
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-4">
            About <span className="text-primary">AToZ Car Rentals</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner on the road, providing the best rental experience in Ghaziabad.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary to-blue-400 rounded-3xl transform rotate-3 shadow-lg"></div>
              <img src="/aboutus.jpg" alt="Our Fleet" className="relative w-full h-auto object-cover rounded-2xl shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by a team of passionate automobile enthusiasts, AToZ Car Rentals was born from a simple idea: to make premium vehicle rentals accessible, affordable, and hassle-free for everyone in Ghaziabad. We saw a need for a reliable service that didn't just provide cars, but delivered peace of mind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From our humble beginnings with just a few vehicles, we have grown into Ghaziabad's most trusted rental provider. Our success is driven by our unwavering commitment to quality and our deep understanding of what our customers need—whether it's a rugged SUV for an adventurous weekend, a comfortable sedan for a family trip, or a zippy bike for city cruising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To deliver an unparalleled rental experience by offering a diverse, impeccably maintained fleet, transparent pricing, and customer service that consistently exceeds expectations. We aim to be more than a service; we want to be your trusted partner for every journey.
              </p>
            </Card>
            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be the undisputed leader in vehicle rentals across the region, recognized for our reliability, innovation, and dedication to customer satisfaction. We envision a future where everyone can access the perfect vehicle for their needs with ease and confidence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">The AToZ Advantage</h2>
            <p className="text-lg text-muted-foreground mt-2">What makes us the best in Ghaziabad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center p-8 bg-card border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our fleet of top-quality cars and bikes and find the perfect ride for your next adventure.
          </p>
          <Button size="lg" asChild>
            <Link to="/cars" className="flex items-center justify-center">
              Explore Our Fleet <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;