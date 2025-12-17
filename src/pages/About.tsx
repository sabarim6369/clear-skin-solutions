import { Layout } from "@/components/Layout";
import { 
  Shield, 
  Heart, 
  BookOpen, 
  Lock, 
  Users, 
  Stethoscope,
  Target,
  CheckCircle2
} from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";
import { CTASection } from "@/components/sections/CTASection";

const philosophy = [
  {
    icon: Target,
    title: "Treat the Root Cause",
    description: "We focus on identifying and addressing the underlying cause of conditions, not just managing symptoms.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Practice",
    description: "All treatments follow standard medical guidelines and are backed by scientific research.",
  },
  {
    icon: Shield,
    title: "No Unnecessary Procedures",
    description: "We recommend only what is clinically necessary, avoiding commercial-driven treatments.",
  },
  {
    icon: Lock,
    title: "Strict Confidentiality",
    description: "Your medical information and privacy are protected with utmost care and discretion.",
  },
  {
    icon: Users,
    title: "Patient Education",
    description: "We take time to explain your condition and empower you with knowledge about your health.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Every patient is treated with dignity, respect, and genuine concern for their wellbeing.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Ethical Dermatology for{" "}
              <span className="text-primary">Lasting Health</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              At DermaCare, we believe in providing honest, patient-centered dermatological 
              care that focuses on accurate diagnosis and long-term disease management.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Vision & Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                DermaCare was founded with a simple yet powerful vision: to provide 
                affordable, ethical, and evidence-based dermatological care to everyone 
                who needs it. We believe that quality healthcare should be accessible, 
                not just a privilege for the few.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike clinics that prioritize cosmetic procedures and product sales, 
                we focus on clinical dermatology and treating the root cause of skin 
                and hair conditions. Our approach is guided by science, ethics, and a 
                genuine commitment to your long-term health.
              </p>
              <div className="space-y-4">
                {[
                  "Accurate diagnosis using advanced diagnostic tools",
                  "Science-based treatments with proven efficacy",
                  "Patient comfort, privacy, and dignity at every step",
                  "Affordable care without compromising quality",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={doctorImage}
                alt="DermaCare Clinic"
                className="rounded-3xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl gradient-hero opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding gradient-section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              The Principles We Practice
            </h2>
            <p className="text-lg text-muted-foreground">
              These core values guide every consultation, treatment, and interaction at our clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Care Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Stethoscope, title: "One-to-One Consultation", desc: "Private consultations with the doctor" },
                  { icon: Lock, title: "Data Privacy", desc: "Strict medical record confidentiality" },
                  { icon: Shield, title: "STD Discretion", desc: "Complete privacy for sensitive cases" },
                  { icon: Heart, title: "Adequate Time", desc: "Thorough explanation and care" },
                ].map((item, index) => (
                  <div key={index} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
                Patient Care
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Your Comfort & Privacy Matter
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We understand that visiting a dermatologist can sometimes feel sensitive, 
                especially for certain conditions. That's why we've created an environment 
                that prioritizes your comfort, dignity, and privacy at every step.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're here for a routine consultation or a confidential matter, 
                you can trust that your information stays with us, and you'll always be 
                treated with respect and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
