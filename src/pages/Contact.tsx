import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Clock, User, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            For any questions or booking assistance, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader><CardTitle>Contact Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4"><MapPin className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Address</h3><p className="text-muted-foreground"> Crossings Republik, Ghaziabad, Uttar Pradesh</p></div></div>
                <div className="flex items-start space-x-4"><Phone className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Phone</h3><p className="text-muted-foreground">+91 9953799936<br/>+91 9910198557</p></div></div>
                <div className="flex items-start space-x-4"><Mail className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Email</h3><p className="text-muted-foreground">arvindkumar.ak89@gmail.com<br/>sonurajputsr5550@gmail.com</p></div></div>
                <div className="flex items-start space-x-4"><Clock className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Business Hours</h3><p className="text-muted-foreground">24/7 Service</p></div></div>
                <div className="flex items-start space-x-4"><User className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Contact Persons</h3><p className="text-muted-foreground">Aniket Motors / Sonu Rajput</p></div></div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Map */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader><CardTitle>Find Us On The Map</CardTitle></CardHeader>
              <CardContent>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11527.59454489612!2d77.42587035584839!3d28.628142460670748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee307ecc7e91%3A0x16613eec68653aa4!2sCrossings%20Republik%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1753350423187!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;