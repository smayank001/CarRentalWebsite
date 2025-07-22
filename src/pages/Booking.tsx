import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { cars } from '@/data/cars';
import { bikes } from '@/data/bikes';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { MessageSquare } from 'lucide-react';

const bookingSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  phoneNumber: z.string().min(10, { message: "A valid phone number is required" }),
  selectedVehicle: z.string().min(1, { message: "Please select a vehicle" }),
  duration: z.string().min(1, { message: "Please select a duration" }),
  pickupDate: z.string().min(1, { message: "Pickup date is required" }),
  pickupTime: z.string().min(1, { message: "Pickup time is required" }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const WHATSAPP_NUMBER_1 = "919953799936";
const WHATSAPP_NUMBER_2 = "919910198557";

const Booking = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [formData, setFormData] = useState<BookingFormValues | null>(null);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      selectedVehicle: "",
      duration: "",
      pickupDate: "",
      pickupTime: "",
    },
  });

  const onSubmit: SubmitHandler<BookingFormValues> = (data) => {
    setFormData(data);
    setDialogVisible(true);
  };

  const handleContact = (number: string) => {
    if (!formData) return;

    const message = `*New Vehicle Booking Request*

*Name:* ${formData.fullName}
*Phone:* ${formData.phoneNumber}
*Vehicle:* ${formData.selectedVehicle}
*Duration:* ${formData.duration}
*Pickup Date:* ${formData.pickupDate}
*Pickup Time:* ${formData.pickupTime}`;

    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Redirecting to WhatsApp to confirm your booking!");
    setDialogVisible(false);
  };

  return (
    <>
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Book Your <span className="text-primary">Ride</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete the form below to reserve your vehicle. We'll confirm your booking via WhatsApp shortly after.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
                <p className="text-muted-foreground">Fill in your details and we'll get your vehicle ready for pickup.</p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="fullName" render={({ field }) => (<FormItem><FormLabel>Full Name *</FormLabel><FormControl><Input placeholder="Enter your full name" {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="phoneNumber" render={({ field }) => (<FormItem><FormLabel>Phone Number *</FormLabel><FormControl><Input placeholder="Enter your phone number" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="selectedVehicle" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Vehicle *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Choose a car or bike" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Cars</SelectLabel>
                                {cars.filter(car => car.available).map(car => <SelectItem key={car.id} value={car.name}>{car.name}</SelectItem>)}
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>Bikes</SelectLabel>
                                {bikes.filter(bike => bike.available).map(bike => <SelectItem key={bike.id} value={bike.name}>{bike.name}</SelectItem>)}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="duration" render={({ field }) => (<FormItem><FormLabel>Duration *</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select duration" /></SelectTrigger></FormControl><SelectContent><SelectItem value="1 Day">1 Day</SelectItem><SelectItem value="2-3 Days">2-3 Days</SelectItem><SelectItem value="4-6 Days">4-6 Days</SelectItem><SelectItem value="1 Week+">1 Week+</SelectItem></SelectContent></Select><FormMessage /></FormItem>)} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="pickupDate" render={({ field }) => (<FormItem><FormLabel>Pickup Date *</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="pickupTime" render={({ field }) => (<FormItem><FormLabel>Pickup Time *</FormLabel><FormControl><Input type="time" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                    <Button type="submit" className="w-full" size="lg">Confirm Booking</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <AlertDialog open={isDialogVisible} onOpenChange={setDialogVisible}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Your Booking</AlertDialogTitle>
            <AlertDialogDescription>
              Please send your booking details to one of our contacts on WhatsApp to finalize your reservation.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 py-4">
            <Button
              onClick={() => handleContact(WHATSAPP_NUMBER_1)}
              className="w-full h-16 text-lg bg-green-500 text-white hover:bg-green-600 hover:text-white"
            >
              <MessageSquare className="mr-2 h-6 w-6" /> Contact Sonu
            </Button>
            <Button
              onClick={() => handleContact(WHATSAPP_NUMBER_2)}
              className="w-full h-16 text-lg bg-green-500 text-white hover:bg-green-600 hover:text-white"
            >
              <MessageSquare className="mr-2 h-6 w-6" /> Contact Arvind
            </Button>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Booking;