import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Consultation by appointment only - minimal wait time",
  "One-to-one consultation with the doctor",
  "Adequate time for thorough examination",
  "Complete confidentiality guaranteed",
];

const BookAppointment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Appointment Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              Book Appointment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Schedule Your{" "}
              <span className="text-primary">Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Fill out the form below and we'll contact you to confirm your appointment 
              at a convenient time.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Why Book With Us?
              </h2>
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">Call to Book</h3>
                      <a href="tel:+919876543210" className="text-primary hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">Clinic Hours</h3>
                      <p className="text-muted-foreground text-sm">Mon - Sat: 5:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      Appointment Form
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      All fields marked with * are required
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Age *</label>
                      <Input type="number" placeholder="Your age" min="1" max="120" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Sex *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number *</label>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Preferred Date</label>
                    <Input type="date" min={new Date().toISOString().split('T')[0]} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Concern / Reason for Visit *</label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your concern" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="acne">Acne / Pimples</SelectItem>
                        <SelectItem value="hair-loss">Hair Loss / Hair Fall</SelectItem>
                        <SelectItem value="skin-rash">Skin Rash / Allergy</SelectItem>
                        <SelectItem value="pigmentation">Pigmentation / Dark Spots</SelectItem>
                        <SelectItem value="eczema">Eczema / Dermatitis</SelectItem>
                        <SelectItem value="psoriasis">Psoriasis</SelectItem>
                        <SelectItem value="fungal">Fungal Infection</SelectItem>
                        <SelectItem value="std">STD Consultation</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic Procedure</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Additional Details</label>
                    <Textarea 
                      placeholder="Please describe your concern briefly (optional)"
                      rows={4}
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-secondary border border-primary/20">
                    <p className="text-sm text-foreground">
                      <strong>Note:</strong> This is an appointment request. We will contact you to confirm the date and time. 
                      For urgent matters, please call us directly.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    <Calendar className="w-5 h-5" />
                    {isSubmitting ? "Submitting..." : "Request Appointment"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookAppointment;
