"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["HealthCare Clinic, 2nd Floor", "Connaught Place, New Delhi - 110001", "Near Metro Station"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 11 4567 8900", "Emergency: 24/7"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@healthcareclinic.com", "appointments@healthcareclinic.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 2:00 PM", "Emergency: 24/7"],
    },
  ]

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Get In Touch With Us</h2>
          <p className="text-lg text-muted-foreground">
            Visit our clinic or reach out to us for appointments and inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            {/* WhatsApp CTA */}
            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="flex items-center gap-4">
                <MessageCircle className="w-12 h-12" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Quick WhatsApp Booking</h3>
                  <p className="text-sm opacity-90">Get instant confirmation via WhatsApp</p>
                </div>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Chat Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="animate-slide-in-right">
            <Card className="p-2 h-full">
              <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9746847630456!2d77.21787931508047!3d28.631447982422894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d97c0b1%3A0x5b5f1c3d3c3d3c3d!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
