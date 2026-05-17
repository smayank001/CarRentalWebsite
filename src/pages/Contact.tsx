import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, User, MapPin, MessageSquare } from "lucide-react";

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
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">
                      Ghaziabad, Vijay Nagar, Sector 9, Rathi Road
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground flex flex-col">
                      <a
                        href="tel:+918595499936"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        +91 8595499936
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground flex flex-col">
                      <a
                        href="mailto:sonurajputsr5550@gmail.com"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        sonurajputsr5550@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">24/7 Service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <User className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Contact Persons</h3>
                    <p className="text-muted-foreground">SR Car Rental / Sonu Rajput</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Premium WhatsApp QR Section */}
            <Card className="bg-black text-white border-yellow-500/20 overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-green-500/10 opacity-30 pointer-events-none" />
              
              <CardHeader className="text-center relative z-10 pb-2">
                <div className="mx-auto w-16 h-16 mb-3 rounded-full overflow-hidden border-2 border-yellow-500/50 bg-black flex items-center justify-center shadow-lg">
                  <img src="/logo.jpg" alt="SR Car Rental Logo" className="w-14 h-14 object-cover" />
                </div>
                <CardTitle className="text-xl font-bold font-montserrat tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500">
                  SR Car Rental
                </CardTitle>
                <p className="text-xs text-green-400 font-medium tracking-widest uppercase">
                  WhatsApp Business
                </p>
              </CardHeader>
              
              <CardContent className="flex flex-col items-center text-center relative z-10 space-y-4">
                <div className="bg-white p-4 rounded-2xl shadow-inner border border-white/10 flex flex-col items-center transition-transform hover:scale-105 duration-300">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://wa.me/918595499936" 
                    alt="WhatsApp QR Code" 
                    className="w-40 h-40 object-contain" 
                  />
                  <div className="flex items-center space-x-1.5 mt-2 text-[#075e54]">
                    <MessageSquare className="h-4 w-4 fill-current" />
                    <span className="text-xs font-semibold">Open Chat</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-base font-semibold text-gray-100">
                    “Scan to book your ride”
                  </p>
                  <p className="text-xs text-gray-400 max-w-[250px] leading-relaxed">
                    Scan this code to start a premium WhatsApp chat with SR Car Rental service.
                  </p>
                </div>
                
                <a 
                  href="https://wa.me/918595499936" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/20"
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Message Us
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Map */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Find Us On The Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.411684346855!2d77.42271815541991!3d28.626702600000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d6dfb88ad%3A0x2db4e3e3bdf8a1f8!2sVijay%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715878453470!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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
