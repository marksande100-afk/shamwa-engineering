"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const phoneNumber = "256745482359"
  const message = "Hello! I'm interested in your engineering and construction services. Please provide more information."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 w-64 animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-card rounded-lg shadow-xl p-4 relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              aria-label="Close tooltip"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-sm text-foreground pr-4">
              Need help? Chat with us on WhatsApp for quick assistance!
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card rotate-45 shadow-lg" />
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        
        {/* Pulse animation */}
        <span className="absolute w-14 h-14 bg-[#25D366] rounded-full animate-ping opacity-20" />
      </a>
    </div>
  )
}
