import { 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  Heart, 
  Shield, 
  Stethoscope 
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Evidence-Based Medicine",
    description: "All treatments follow standard medical guidelines and are backed by scientific research.",
  },
  {
    icon: Clock,
    title: "Minimal Wait Time",
    description: "Appointment-based system ensures you wait only 5-10 minutes. Your time is valuable.",
  },
  {
    icon: FileCheck,
    title: "Essential Prescriptions",
    description: "We prescribe only what you need. No unnecessary products or sales-driven recommendations.",
  },
  {
    icon: Heart,
    title: "Long-Term Focus",
    description: "We treat the root cause of conditions, not just symptoms, for lasting results.",
  },
  {
    icon: Shield,
    title: "Complete Confidentiality",
    description: "Your privacy is paramount. All consultations and records are strictly confidential.",
  },
  {
    icon: CheckCircle2,
    title: "Patient Education",
    description: "We take time to explain your condition and treatment plan in detail.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Why Choose Nalinam?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Delivering ethical, evidence-based medical practice with focus on clinical dermatology and 
              disease cure with affordability. Curated by expert dermatologist from AIIMS.
            </p>

            {/* <div className="space-y-4">
              {[
                "Appointment-based system - minimal 5-10 min wait time",
                "Ethical prescriptions with essential products only",
                "Affordable quality care focused on cure",
                "Complete confidentiality and one-to-one consultation",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
