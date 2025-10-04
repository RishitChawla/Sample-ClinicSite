"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Activity, Stethoscope, Pill, Baby, Brain, Bone, Eye } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care including ECG, Echo, and cardiac consultations.",
      price: "₹1,500 - ₹3,000",
    },
    {
      icon: Activity,
      title: "General Medicine",
      description: "Treatment for fever, infections, diabetes, hypertension, and chronic diseases.",
      price: "₹800 - ₹1,500",
    },
    {
      icon: Stethoscope,
      title: "Health Check-ups",
      description: "Complete body check-ups with blood tests, X-rays, and detailed reports.",
      price: "₹2,500 - ₹5,000",
    },
    {
      icon: Pill,
      title: "Preventive Care",
      description: "Vaccination, health screening, and lifestyle counseling for disease prevention.",
      price: "₹500 - ₹2,000",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents with experienced pediatricians.",
      price: "₹800 - ₹1,500",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Treatment for headaches, migraines, epilepsy, and neurological disorders.",
      price: "₹1,500 - ₹3,000",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Joint pain, fractures, sports injuries, and musculoskeletal treatments.",
      price: "₹1,200 - ₹2,500",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Eye examinations, vision testing, and treatment for eye conditions.",
      price: "₹800 - ₹2,000",
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Comprehensive Healthcare Services</h2>
          <p className="text-lg text-muted-foreground">
            We offer a wide range of medical services with experienced doctors and modern equipment to ensure the best
            care for you and your family.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-primary font-semibold">{service.price}</span>
                <Button variant="ghost" size="sm" className="text-primary">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <p className="text-muted-foreground mb-4">{"Don't see what you're looking for?"}</p>
          <Button size="lg" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
