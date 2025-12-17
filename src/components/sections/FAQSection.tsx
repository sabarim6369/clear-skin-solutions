import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why choose us over other dermatologists?",
    answer: "Expert evidence-based dermatology consultation from AIIMS-trained Dr. TamilKumar with a seamless experience at an affordable cost. We strictly do not endorse/prescribe a medicine/product for mere sales purpose, rather we deliver minimal prescription with essential products focusing on the cure.",
  },
  {
    question: "What is the average waiting time in the clinic?",
    answer: "We operate on appointment-based, software-driven digital system. So the average waiting time is way less compared to other clinics, although it may vary from 5-10 mins.",
  },
  {
    question: "Is STD consultation confidential?",
    answer: "Yes. Complete confidentiality is maintained. All STD consultations are strictly confidential with one-to-one consultation. Your privacy and dignity are our top priorities.",
  },
  {
    question: "Do you offer honest treatment advice?",
    answer: "We strictly do not endorse/prescribe a medicine/product for mere sales purpose, rather we deliver minimal prescription with essential products focusing on the cure. We follow standard treatment guidelines and avoid unnecessary procedures.",
  },
  {
    question: "Are procedures safe?",
    answer: "All procedures are performed by qualified MD Dermatologist under sterile conditions using approved medical equipment. Each treatment is customized based on your skin type and condition following standard medical safety protocols.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can call us at +91 97900 29573 to book an appointment. Consultation is by appointment only from Monday to Saturday, 5:00 PM – 8:00 PM. Sunday is closed.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our practice and treatments.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 data-[state=open]:shadow-card data-[state=open]:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
