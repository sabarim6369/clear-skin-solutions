import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Shield, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern dermatology clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
Dermatology You Can Trust
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
            Best Skin & Hair Clinic{" "}
            <span className="text-primary">in Salem</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
            At Nalinam Skin & Hair Clinic, we are committed to providing affordable, comprehensive, ethical, 
            and evidence-based care for all skin and hair concerns.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { icon: Award, label: "MD Dermatologist", sublabel: "Board Certified" },
              { icon: Clock, label: "5-10 min", sublabel: "Wait Time" },
              // { icon: Shield, label: "100%", sublabel: "Confidential" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">{stat.label}</p>
                  <p className="text-sm text-primary-foreground/60">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="gap-2 text-base" asChild>
              <Link to="/book-appointment">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-base bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              asChild
            >
              <Link to="/services">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
