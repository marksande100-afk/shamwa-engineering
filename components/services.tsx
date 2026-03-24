"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Droplets, 
  Building, 
  Package, 
  Wrench,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "plumbing",
    icon: Droplets,
    title: "Plumbing Services",
    shortDesc: "Complete plumbing solutions for residential and commercial properties.",
    description: "We provide comprehensive plumbing services including installation, maintenance, and repairs. Our expert plumbers handle everything from pipe fitting to complete plumbing system design and implementation.",
    features: [
      "Pipe installation and repairs",
      "Water heater installation",
      "Drainage system design",
      "Plumbing materials supply",
      "Emergency plumbing services",
      "Bathroom and kitchen plumbing",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.25-0YRpy6PT0MLNAVbTb0YzecfqNeUw0R.jpeg",
  },
  {
    id: "construction",
    icon: Building,
    title: "Engineering & Construction",
    shortDesc: "Professional construction services from foundation to finishing.",
    description: "Our construction team delivers quality building projects of all sizes. From residential homes to commercial buildings, we ensure every structure is built to last with attention to detail and adherence to safety standards.",
    features: [
      "Residential construction",
      "Commercial building projects",
      "Structural engineering",
      "Foundation work",
      "Building renovations",
      "Project management",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.30-0l2fK59T709BU60jdy7bDdpuRVjxzJ.jpeg",
  },
  {
    id: "materials",
    icon: Package,
    title: "Building Materials",
    shortDesc: "Quality building and plumbing materials at competitive prices.",
    description: "We supply a wide range of high-quality building and plumbing materials. Our inventory includes everything you need for construction projects, sourced from trusted manufacturers.",
    features: [
      "Plumbing fittings and pipes",
      "Cement and aggregates",
      "Steel and iron materials",
      "Roofing materials",
      "Finishing materials",
      "Hardware supplies",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.17-ZWhjaMZy4EUbaYJSv3ekH4K6noWCLz.jpeg",
  },
  {
    id: "road",
    icon: Wrench,
    title: "Road Works",
    shortDesc: "Professional road construction and maintenance services.",
    description: "We undertake road construction and maintenance projects with modern equipment and experienced operators. Our team ensures durable and well-constructed roads.",
    features: [
      "Road grading and leveling",
      "Compaction services",
      "Drainage installation",
      "Road maintenance",
      "Equipment rental",
      "Site preparation",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.12-nkyim8NMu0lNxcBVHmH8RS2PnUDXx6.jpeg",
  },
]

export function Services() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From plumbing to construction, we offer a full range of services to meet all your 
            engineering and building needs.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={cn(
                "p-6 rounded-lg text-left transition-all duration-300",
                activeService.id === service.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card hover:bg-card/80 text-foreground hover:shadow-md"
              )}
            >
              <service.icon
                className={cn(
                  "h-10 w-10 mb-4",
                  activeService.id === service.id ? "text-accent" : "text-primary"
                )}
              />
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p
                className={cn(
                  "text-sm",
                  activeService.id === service.id
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                )}
              >
                {service.shortDesc}
              </p>
            </button>
          ))}
        </div>

        {/* Service Detail */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent lg:bg-gradient-to-r" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <activeService.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {activeService.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {activeService.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {activeService.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#contact">
                  Request Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
