"use client"

import { Card } from "@/components/ui/card"
import { Award, GraduationCap, Heart, Users } from "lucide-react"

export function About() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "MBBS, MD (Medicine)",
      description: "AIIMS Delhi",
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "In Clinical Practice",
    },
    {
      icon: Users,
      title: "50,000+ Patients",
      description: "Successfully Treated",
    },
    {
      icon: Heart,
      title: "Certified Specialist",
      description: "Multiple Specializations",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/experienced-indian-doctor-portrait-professional.jpg" alt="Dr. Rajesh Kumar" className="w-full h-auto" />
            </div>

            {/* Certification Badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl animate-scale-in delay-300">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-2" />
                <div className="font-bold text-lg">Board Certified</div>
                <div className="text-sm opacity-90">Medical Council</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              About Our Clinic
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">Meet Dr. Rajesh Kumar</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of dedicated service in healthcare, Dr. Rajesh Kumar is a renowned physician
              specializing in Internal Medicine, Cardiology, and Preventive Healthcare. Graduated from AIIMS Delhi, he
              has been serving the Delhi community with compassion and excellence.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our clinic is equipped with state-of-the-art diagnostic facilities and a team of experienced healthcare
              professionals committed to providing personalized care for every patient.
            </p>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {achievements.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-1 text-card-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
