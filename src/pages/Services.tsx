import { Layout } from "@/components/Layout";
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Scissors, 
  HeartPulse,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const serviceCategories = [
  {
    id: "clinical",
    icon: Stethoscope,
    title: "Clinical Dermatology",
    description: "Comprehensive diagnosis and treatment of all skin conditions using evidence-based medicine.",
    services: [
      "Acne & Acne Scars",
      "Eczema & Dermatitis",
      "Psoriasis",
      "Vitiligo",
      "Fungal, Bacterial & Viral Infections",
      "Pigmentary Disorders",
      "Chronic Itching & Rashes",
      "Skin Allergies",
      "Urticaria (Hives)",
      "Contact Dermatitis",
    ],
  },
  {
    id: "hair",
    icon: Sparkles,
    title: "Hair Disorders & Treatment",
    description: "Expert evaluation and medical management of all types of hair loss and scalp conditions.",
    services: [
      "Hair Fall Evaluation",
      "Androgenetic Alopecia (Male & Female)",
      "Alopecia Areata",
      "Telogen Effluvium",
      "Dandruff & Scalp Infections",
      "Medical Hair Loss Management",
      "Scalp Psoriasis",
      "Seborrheic Dermatitis",
    ],
  },
  {
    id: "std",
    icon: ShieldCheck,
    title: "STD Consultation & Treatment",
    description: "Confidential, judgment-free consultation and treatment for sexually transmitted conditions.",
    services: [
      "Confidential Consultation",
      "Genital Ulcers & Discharge",
      "Genital & Non-Genital Warts",
      "Herpes Infections",
      "Syphilis & Other STDs",
      "Sexual Health Counseling",
      "Partner Counseling",
      "Follow-up Care",
    ],
    note: "All STD consultations are strictly confidential. We maintain complete privacy and discretion.",
  },
  {
    id: "procedures",
    icon: Scissors,
    title: "Dermatologic Procedures",
    description: "Safe, sterile procedures performed by qualified dermatologist using approved equipment.",
    services: [
      "Electrocautery Procedures",
      "Wart Removal",
      "Skin Tag Removal",
      "Seborrheic Keratosis Removal",
      "Medical Mole Removal",
      "Cosmetic Mole Removal",
      "Corn & Callus Treatment",
      "Minor Surgical Procedures",
    ],
  },
  {
    id: "aesthetic",
    icon: HeartPulse,
    title: "Cosmetic & Procedural Dermatology",
    description: "Selected aesthetic procedures performed by qualified dermatologist with utmost safety and precision.",
    services: [
      "PRP & GFC for Hair Loss",
      "Advanced Hair Regeneration Therapy",
      "Chemical Peels for Acne & Marks",
      "Chemical Peels for Pigmentation",
      "Chemical Peels for Dull Skin",
      "Electrocautery for Wart Removal",
      "Skin Tag Removal",
      "Mole Removal (Medical & Cosmetic)",
    ],
  },
];

const safetyFeatures = [
  "All procedures performed by qualified MD Dermatologist",
  "Conducted under strict sterile conditions",
  "Using approved medical equipment only",
  "Customized based on individual skin type & condition",
  "Proper pre and post-procedure care guidance",
  "Emergency protocols in place",
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="text-primary">Dermatological Care</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From clinical dermatology to aesthetic treatments, we provide complete 
              skin and hair care solutions backed by science and delivered with care.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>
                {category.note && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{category.note}</p>
                  </div>
                )}
              </div>
              <div className={`p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-display font-semibold text-foreground mb-6">
                  Treatments Offered:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Procedure Safety Section */}
      <section className="section-padding gradient-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
                Safety First
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Procedure Safety Standards
              </h2>
              <p className="text-lg text-muted-foreground">
                Your safety is our top priority. All procedures follow strict medical protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
