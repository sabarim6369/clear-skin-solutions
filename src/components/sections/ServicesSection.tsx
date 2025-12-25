import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Scissors, 
  HeartPulse 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Clinical Dermatology",
    description: "Comprehensive diagnosis and treatment of skin conditions including acne, eczema, psoriasis, vitiligo, and more.",
    link: "/services#clinical",
  },
  {
    icon: Sparkles,
    title: "Hair Disorders",
    description: "Expert evaluation and treatment of hair loss, alopecia, scalp conditions, and medical hair restoration.",
    link: "/services#hair",
  },
 
  {
    icon: Scissors,
    title: "Dermatologic Procedures",
    description: "Safe, sterile procedures including electrocautery, mole removal, and wart treatment.",
    link: "/services#procedures",
  },
  {
    icon: HeartPulse,
    title: "Aesthetic Dermatology",
    description: "Evidence-based cosmetic treatments including PRP therapy, chemical peels, and pigmentation correction.",
    link: "/services#aesthetic",
  },
   {
    icon: ShieldCheck,
    title: "STD Consultation",
    description: "Confidential, judgment-free consultation and treatment for all sexually transmitted conditions.",
    link: "/services#std",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding gradient-section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Comprehensive Dermatological Care
          </h2>
          <p className="text-lg text-muted-foreground">
            From clinical diagnosis to advanced treatments, we provide complete skin and hair care solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link to="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
