import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey to{" "}
            <span className="text-primary">Healthy Skin?</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Book your consultation today and experience personalized, evidence-based 
            dermatological care from an experienced MD dermatologist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2 text-base" asChild>
              <Link to="/book-appointment">
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+919790029573">
                <Phone className="w-5 h-5" />
                Call: +91 97900 29573
              </a>
            </Button>
          </div>

          {/* Clinic Timings */}
          <div className="mt-10 inline-flex items-center gap-4 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-primary font-medium">Clinic Hours:</span>
            <span className="text-primary-foreground/80">Mon - Sat: 5:00 PM - 8:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
