"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"

export function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-scale-in">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">Call Now</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 animate-bounce"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </Button>
    </div>
  )
}
