"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "South Delhi",
      rating: 5,
      text: "Dr. Kumar is an exceptional doctor. He took the time to listen to all my concerns and provided a thorough diagnosis. The clinic is clean, modern, and the staff is very professional. Highly recommended!",
      image: "/indian-woman-patient.jpg",
    },
    {
      name: "Amit Verma",
      location: "East Delhi",
      rating: 5,
      text: "I have been visiting this clinic for the past 3 years for my diabetes management. The care and attention I receive is outstanding. Dr. Kumar explains everything clearly and the treatment has been very effective.",
      image: "/indian-man-patient.jpg",
    },
    {
      name: "Sunita Patel",
      location: "West Delhi",
      rating: 5,
      text: "Excellent experience! The clinic is well-equipped and the doctor is very knowledgeable. I brought my elderly mother for a check-up and the staff was so caring and patient with her. Thank you!",
      image: "/indian-elderly-woman.jpg",
    },
    {
      name: "Rahul Singh",
      location: "North Delhi",
      rating: 5,
      text: "Best clinic in Delhi! The online appointment system is convenient, and I never have to wait long. Dr. Kumar diagnosed my heart condition early and the treatment has been life-changing. Forever grateful!",
      image: "/indian-young-man.jpg",
    },
    {
      name: "Meera Kapoor",
      location: "Central Delhi",
      rating: 5,
      text: "I was nervous about my first visit, but the warm and welcoming environment put me at ease immediately. The doctor is very professional and genuinely cares about his patients. Highly recommend!",
      image: "/indian-woman-smiling.png",
    },
    {
      name: "Vikram Malhotra",
      location: "Gurgaon",
      rating: 5,
      text: "Outstanding medical care! Dr. Kumar successfully treated my chronic back pain. The clinic has excellent facilities and the staff is always helpful. Worth traveling from Gurgaon for this quality of care.",
      image: "/indian-businessman.png",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Patient Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from real patients who trust us with their health
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.text}</p>

              {/* Patient Info */}
              <div className="flex items-center gap-3 pt-4 border-t">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 animate-fade-in-up delay-600">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-primary" />
            <span className="font-semibold">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
