import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = "918595499936";
const EMAIL_ADDRESS = "sonurajputsr5550@gmail.com";

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const whatsappMessage = encodeURIComponent(
    "I'm interested in booking a vehicle with SR Car Rental."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  const emailUrl = `mailto:${EMAIL_ADDRESS}?subject=Vehicle%20Booking%20Inquiry&body=${whatsappMessage}`;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Book Your Ride</AlertDialogTitle>
          <AlertDialogDescription>
            Choose your preferred method to contact SR Car Rental for bookings.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-6 py-4">
          <div>
            <h3 className="mb-2 font-semibold text-center text-muted-foreground text-sm uppercase tracking-wider">
              Contact via WhatsApp
            </h3>
            <Button
              asChild
              variant="outline"
              className="w-full h-16 text-lg bg-green-500 hover:bg-green-600 text-white hover:text-white border-none shadow-md transition-all duration-300"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-semibold"
              >
                <MessageSquare className="mr-2 h-6 w-6" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-center text-muted-foreground text-sm uppercase tracking-wider">
              Contact via Email
            </h3>
            <Button 
              asChild 
              variant="outline" 
              className="w-full h-16 text-lg hover:bg-primary hover:text-primary-foreground border shadow-sm transition-all duration-300"
            >
              <a
                href={emailUrl}
                className="flex items-center justify-center font-semibold"
              >
                <Mail className="mr-2 h-6 w-6" /> sonurajputsr5550@gmail.com
              </a>
            </Button>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BookingModal;
