"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by calling us at +91 98765 43210, sending a WhatsApp message, or using our online booking system. We typically respond within 30 minutes during working hours.",
    },
    {
      question: "What are your consultation charges?",
      answer:
        "General consultation starts at ₹800. Specialist consultations range from ₹1,500 to ₹3,000 depending on the service. All charges are transparent and discussed before treatment.",
    },
    {
      question: "Do you accept health insurance?",
      answer:
        "Yes, we accept most major health insurance providers including Star Health, ICICI Lombard, HDFC Ergo, and more. Please bring your insurance card and policy details during your visit.",
    },
    {
      question: "What are your clinic timings?",
      answer:
        "We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 2:00 PM. Emergency services are available 24/7. Please call ahead for emergency visits.",
    },
    {
      question: "Do you provide home visit services?",
      answer:
        "Yes, we offer home visit services for elderly patients and those who cannot visit the clinic. Additional charges apply based on location. Please call us to schedule a home visit.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, all major credit/debit cards, UPI payments (Google Pay, PhonePe, Paytm), and online bank transfers. Insurance claims can also be processed directly.",
    },
    {
      question: "How long does a typical consultation take?",
      answer:
        "A standard consultation takes 20-30 minutes. However, we never rush our patients. Complex cases may require more time, and we ensure every patient receives adequate attention.",
    },
    {
      question: "Do I need to bring any documents for my first visit?",
      answer:
        "Please bring a valid ID proof, any previous medical records, current medications list, and your insurance card if applicable. This helps us provide better and faster care.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services, appointments, and policies
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up delay-200">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary text-card-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-muted/50 rounded-2xl animate-fade-in-up delay-400">
            <h3 className="text-2xl font-semibold mb-2 text-foreground">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              {"We're here to help! Contact us and we'll get back to you shortly."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="text-primary font-semibold hover:underline">
                Call: +91 98765 43210
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a href="mailto:info@healthcareclinic.com" className="text-primary font-semibold hover:underline">
                Email: info@healthcareclinic.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
