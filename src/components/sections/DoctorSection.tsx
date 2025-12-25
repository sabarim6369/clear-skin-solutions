import { Award, BookOpen, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import doctorImage from "@/assets/image.png";

export function DoctorSection() {
  return (
    <section className="section-padding gradient-section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={doctorImage}
                alt="Dr. Rajesh Kumar - Dermatologist"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-card/95 backdrop-blur-sm border border-border shadow-lg">
                <div className="grid grid-cols-3 divide-x divide-border">
                  {[
                    { value: "3+", label: "Years Exp." },
  { value: "5+", label: "Conferences" },
                    { value: "5+", label: "Publications" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center px-2">
                      <p className="text-xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl gradient-hero opacity-20 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-secondary -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              Our Specialist
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Dr. TamilKumar.S
            </h2>
            <p className="text-xl text-primary font-medium mb-6">
              MBBS, MD DVL (AIIMS)
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Consultant Dermatologist, Venereologist & Trichologist. Dr. TamilKumar has completed his 
              MBBS from prestigious Madras Medical College, Chennai and MD Dermatology from AIIMS Raipur. 
              With a patient-centric approach, Dr. TamilKumar focuses on accurate diagnosis, rational treatment, 
              and long-term disease management.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, label: "MD DVL from AIIMS" },
                { icon: BookOpen, label: "Published Researcher" },
                { icon: Users, label: "Expert Trichologist" },
                { icon: Calendar, label: "Clinical Specialist" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2" asChild>
              <Link to="/book-appointment">
                <Calendar className="w-5 h-5" />
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
