"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[url('/medical-pattern-subtle.jpg')] opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
              <MapPin className="w-4 h-4" />
              Serving Delhi with Excellence Since 2010
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-fade-in-up delay-100">
              Your Health, <span className="text-primary">Our Priority</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
              Experience world-class healthcare with compassionate doctors and state-of-the-art facilities. We provide
              comprehensive medical services for you and your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Button size="lg" className="gap-2 text-lg h-14 px-8">
                <Calendar className="w-5 h-5" />
                Book Appointment Now
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg h-14 px-8 bg-transparent">
                <Phone className="w-5 h-5" />
                Call Us: +91 98765 43210
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in delay-500">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/professional-indian-doctor-in-clinic.jpg" alt="Professional Doctor" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border animate-scale-in delay-600">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">24/7 Emergency</div>
                  <div className="text-sm text-muted-foreground">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
