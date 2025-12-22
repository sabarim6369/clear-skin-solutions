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
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Have questions or ready to book an appointment? Reach out to us through 
              any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Address</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      39, Kamaraj Colony, Peramanur, Near 4 Roads, Omalur Main Road, Salem - 636007
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Phone</h3>
                    <a href="tel:+919790029573" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +91 97900 29573
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Email</h3>
                    <a href="mailto:contact.nalinam@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                      contact.nalinam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Clock className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Clinic Timings</h3>
                    <p className="text-sm text-muted-foreground">
                      Mon - Sat: 5:00 PM - 8:00 PM
                    </p>
                    <p className="text-xs text-primary mt-1 font-medium">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-md">
                <h2 className="text-xl font-display font-bold text-foreground mb-2">
                  Send us a Message
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form and we'll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Name *</label>
                      <Input placeholder="Your name" required className="h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Phone *</label>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" required className="h-11" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="your@email.com" className="h-11" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="appointment">Appointment Query</SelectItem>
                        <SelectItem value="services">Services Information</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea 
                      placeholder="How can we help you?" 
                      rows={4}
                      required 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2 h-11" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Find <span className="text-primary">Our Clinic</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              39, Kamaraj Colony, Peramanur, Near 4 Roads, Omalur Main Road, Salem - 636007
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3!2d78.15!3d11.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQwJzEyLjAiTiA3OMKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nalinam Skin & Hair Clinic Location"
              className="w-full"
            ></iframe>
          </div>
          
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=39+Kamaraj+Colony+Peramanur+Near+4+Roads+Omalur+Main+Road+Salem+636007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
