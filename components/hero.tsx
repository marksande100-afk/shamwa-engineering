"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Wrench, HardHat } from "lucide-react"

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.17-ZWhjaMZy4EUbaYJSv3ekH4K6noWCLz.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.24-m2u9ER8LDYHh26uOydvNoFRfCf9SOO.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.30-0l2fK59T709BU60jdy7bDdpuRVjxzJ.jpeg",
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={image}
            alt="Construction project"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <HardHat className="h-4 w-4 text-accent" />
            <span className="text-sm text-white/90">Engineering Excellence Since Establishment</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Building Dreams,{" "}
            <span className="text-accent">Engineering</span>{" "}
            Excellence
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Your trusted partner for comprehensive engineering, construction, and plumbing services.
            We deliver quality craftsmanship that stands the test of time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
            >
              <Link href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8"
            >
              <Link href="#projects">View Our Work</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-2">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-xs text-white/70">Projects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-2">
                <Wrench className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/70">Quality</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-2">
                <HardHat className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">Expert</div>
              <div className="text-xs text-white/70">Team</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentImage
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
