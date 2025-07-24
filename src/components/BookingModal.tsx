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

const WHATSAPP_NUMBER_1 = "919953799936";
const WHATSAPP_NUMBER_2 = "919910198557";
const EMAIL_ADDRESS_1 = "sonurajputsr5550@gmail.com";
const EMAIL_ADDRESS_2 = "aniketmotors.ghz@gmail.com";

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const whatsappMessage = encodeURIComponent("I'm interested in booking a vehicle.");
  
  const whatsappUrl1 = `https://wa.me/${WHATSAPP_NUMBER_1}?text=${whatsappMessage}`;
  const whatsappUrl2 = `https://wa.me/${WHATSAPP_NUMBER_2}?text=${whatsappMessage}`;
  
  const emailUrl1 = `mailto:${EMAIL_ADDRESS_1}?subject=Vehicle%20Booking%20Inquiry&body=${whatsappMessage}`;
  const emailUrl2 = `mailto:${EMAIL_ADDRESS_2}?subject=Vehicle%20Booking%20Inquiry&body=${whatsappMessage}`;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Book Your Ride</AlertDialogTitle>
          <AlertDialogDescription>
            Choose your preferred method to contact us for booking.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <h3 className="mb-2 font-semibold text-center">Contact via WhatsApp</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="h-16 text-lg bg-green-500 text-white hover:bg-green-600 hover:text-white">
                <a href={whatsappUrl1} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <MessageSquare className="mr-2 h-6 w-6" /> Sonu
                </a>
              </Button>
              <Button asChild variant="outline" className="h-16 text-lg bg-green-500 text-white hover:bg-green-600 hover:text-white">
                <a href={whatsappUrl2} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <MessageSquare className="mr-2 h-6 w-6" /> Aniket Motors
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-center">Contact via Email</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="h-16 text-lg">
                <a href={emailUrl1} className="flex items-center justify-center">
                  <Mail className="mr-2 h-6 w-6" /> Sonu
                </a>
              </Button>
              <Button asChild variant="outline" className="h-16 text-lg">
                <a href={emailUrl2} className="flex items-center justify-center">
                  <Mail className="mr-2 h-6 w-6" /> Aniket Motors
                </a>
              </Button>
            </div>
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