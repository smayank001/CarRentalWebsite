import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Cars', path: '/cars' },
    { name: 'Bikes', path: '/bikes' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/1GxmFFzcwX/',
      name: 'Facebook',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/Sonu76895534?t=J2HZ6q8i8Ohq3Vmjid6LNQIJhpYfg5oiO5REql5Cm70&s=09',
      name: 'Twitter',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/sonurajput931official?igsh=MXgxdjNrbnVoMTF3Ng==',
      name: 'Instagram',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <Car className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold font-montserrat text-white">
                AToZ Car Rentals
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Affordable, reliable, and convenient car rentals in Ghaziabad. Your journey starts here.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-700 hover:bg-primary transition-colors duration-300 text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Self-Drive Cars</li>
              <li>Bike Rentals</li>
              <li>Outstation Trips</li>
              <li>Airport Transfers</li>
              <li>Wedding Cars</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span>The Manthan School,Sector 16C, Gaur City 2,Ghaziabad, Uttar Pradesh</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+919953799936" className="hover:text-primary transition-colors duration-300">+91 9953799936</a>
                  <a href="tel:+919910198557" className="hover:text-primary transition-colors duration-300">+91 9910198557</a>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:sonurajputsr5550@gmail.com" className="hover:text-primary transition-colors duration-300">sonurajputsr5550@gmail.com</a>
                  <a href="mailto:arvindkumar.ak89@gmail.com" className="hover:text-primary transition-colors duration-300">arvindkumar.ak89@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 AToZ Car Rentals. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;