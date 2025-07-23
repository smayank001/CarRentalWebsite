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
                <div className="flex items-start space-x-4"><MapPin className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Address</h3><p className="text-muted-foreground"> House No.293, Rathi Mill, Ambedkar Nagar, Vijay Nagar, Ghaziabad, Uttar Pradesh(201009)</p></div></div>
                <div className="flex items-start space-x-4"><Phone className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Phone</h3><p className="text-muted-foreground">+91 9953799936<br/>+91 9910198557</p></div></div>
                <div className="flex items-start space-x-4"><Mail className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Email</h3><p className="text-muted-foreground">sonurajputsr5550@gmail.com<br/>arvindkumar.ak89@gmail.com</p></div></div>
                <div className="flex items-start space-x-4"><Clock className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Business Hours</h3><p className="text-muted-foreground">24/7 Service</p></div></div>
                <div className="flex items-start space-x-4"><User className="h-6 w-6 text-primary mt-1" /><div><h3 className="font-semibold">Contact Persons</h3><p className="text-muted-foreground">Arvind Kumar / Sonu Rajput</p></div></div>
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
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d688.840659006447!2d77.43269124939079!3d28.63981258085508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee291c901b89%3A0x8f1086386f228912!2s293%2C%20Ambedkar%20Nagar%2C%20Vijay%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e1!3m2!1sen!2sin!4v1753260880544!5m2!1sen!2sin"
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