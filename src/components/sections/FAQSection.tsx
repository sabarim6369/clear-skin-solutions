import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why should I choose this clinic over others?",
    answer: "We focus on ethical, evidence-based medicine rather than sales-driven cosmetic treatments. Our approach is centered on accurate diagnosis, essential medications only, and long-term disease management. We treat the root cause, not just symptoms.",
  },
  {
    question: "What is the average waiting time?",
    answer: "Thanks to our appointment-based, software-driven system, the average waiting time is only 5-10 minutes. We respect your time and ensure efficient consultations without compromising on quality.",
  },
  {
    question: "Is STD consultation confidential?",
    answer: "Absolutely. We maintain strict confidentiality for all patients, especially for sensitive conditions. Your privacy and dignity are our top priorities. All consultations are one-on-one with the doctor.",
  },
  {
    question: "Do you prescribe only necessary medications?",
    answer: "Yes. We follow an ethical practice where we prescribe only essential, clinically-indicated medications. We do not push unnecessary products or treatments for commercial gain.",
  },
  {
    question: "Are the procedures safe?",
    answer: "All procedures are performed by a qualified dermatologist under sterile conditions using approved medical equipment. Each treatment is customized based on your skin type and condition for maximum safety and efficacy.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website's booking form, call us directly, or send a WhatsApp message. We operate on an appointment-only basis to ensure personalized care.",
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
