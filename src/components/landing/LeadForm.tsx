import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Download, CheckCircle, FileText, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(10, "Please enter a valid phone number").max(15).regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").max(255),
  plotSize: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().max(1000).optional()
});
type FormValues = z.infer<typeof formSchema>;
const LeadForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      plotSize: "",
      budget: "",
      message: ""
    }
  });
  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you shortly."
    });
  };
  if (isSubmitted) {
    return <section id="lead-form" className="section-padding bg-primary/5">
        <div className="container-custom">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Thank You for Your Interest!
            </h3>
            <p className="text-muted-foreground mb-6">
              Our investment specialist will contact you within 2 hours during business hours.
              Meanwhile, download our brochure to explore more about Assotech Canopy.
            </p>
            <Button size="lg" className="font-semibold" asChild>
              <a href="/Assotech_Canopy_Brochure.pdf" download="Assotech_Canopy_Brochure.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </a>
            </Button>
          </motion.div>
        </div>
      </section>;
  }
  return <section id="lead-form" ref={ref} className="section-padding bg-primary/5">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get <span className="text-primary">Exclusive</span> Project Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download our brochure and receive a personalized quote from our investment specialists.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <div className="md:col-span-3 bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField control={form.control} name="fullName" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="plotSize" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Interested Plot Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select plot size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="100">100 Sq. Yard</SelectItem>
                              <SelectItem value="200">200 Sq. Yard</SelectItem>
                              <SelectItem value="undecided">Undecided</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="budget" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Budget</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-1.6cr">Up to 1 Cr - 1.6 Cr</SelectItem>
                              <SelectItem value="1.6-2cr">1.6 Cr - 2 Cr</SelectItem>
                              <SelectItem value="2-2.5cr">2 Cr - 2.5 Cr</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <FormField control={form.control} name="message" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any specific queries or requirements?" className="resize-none" rows={3} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <Button type="submit" size="lg" className="w-full font-semibold">
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure & Get Quote
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to receive project updates via SMS and email.
                  </p>
                </form>
              </Form>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h4 className="font-bold text-foreground">What You'll Get</h4>
                </div>
                <ul className="space-y-3">
                  {["Complete project brochure", "Plot layouts & floor plans", "Price list & payment plans", "Location advantages guide", "Personalized investment advice"].map((item, index) => <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>)}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <h4 className="font-bold text-foreground mb-4">Contact Directly</h4>
                <div className="space-y-3">
                  <a href="tel:+917668645668" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span>+91 7668645668</span>
                  </a>
                  <a href="mailto:Vikas.s1@assotechlimited.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>vikas.s1@assotechlimited.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default LeadForm;