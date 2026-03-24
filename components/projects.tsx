"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2, Droplets, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Residential Complex Construction",
    category: "Construction",
    location: "Kampala",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.24-m2u9ER8LDYHh26uOydvNoFRfCf9SOO.jpeg",
    description: "Multi-story residential building with modern amenities and quality finishes.",
  },
  {
    id: 2,
    title: "Foundation & Structural Work",
    category: "Construction",
    location: "Uganda",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.17-ZWhjaMZy4EUbaYJSv3ekH4K6noWCLz.jpeg",
    description: "Professional foundation laying and structural construction with expert team.",
  },
  {
    id: 3,
    title: "Residential Units Completion",
    category: "Construction",
    location: "Kampala",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.23-TfKOPZd06bC86ALPYmfVbAJ6YcxpUk.jpeg",
    description: "Completed residential units with quality finishing and modern design.",
  },
  {
    id: 4,
    title: "Road Construction Project",
    category: "Road Works",
    location: "Uganda",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.12-nkyim8NMu0lNxcBVHmH8RS2PnUDXx6.jpeg",
    description: "Road grading and leveling using modern equipment for durable infrastructure.",
  },
  {
    id: 5,
    title: "Plumbing Installation",
    category: "Plumbing",
    location: "Kampala",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.25-0YRpy6PT0MLNAVbTb0YzecfqNeUw0R.jpeg",
    description: "Comprehensive plumbing system installation with quality materials.",
  },
  {
    id: 6,
    title: "Concrete Works",
    category: "Construction",
    location: "Uganda",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.22-yjt2v18H0N9y8AMqMhnicjb9fIIU1p.jpeg",
    description: "Professional concrete pouring and reinforcement work.",
  },
  {
    id: 7,
    title: "Building Framework",
    category: "Construction",
    location: "Uganda",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.30-0l2fK59T709BU60jdy7bDdpuRVjxzJ.jpeg",
    description: "Structural framework and scaffolding for multi-story buildings.",
  },
  {
    id: 8,
    title: "Heavy Equipment Operations",
    category: "Road Works",
    location: "Uganda",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.11%281%29-O80VTLogpmuaJ1O2C3GBPk3CVA3JSE.jpeg",
    description: "Road compaction using modern JCB machinery for quality results.",
  },
]

const categories = ["All", "Construction", "Plumbing", "Road Works"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const displayedProjects = filteredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Our Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of completed projects showcasing our expertise in 
            construction, plumbing, and engineering services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setCurrentPage(0)
              }}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.category === "Plumbing" ? (
                      <Droplets className="h-3 w-3" />
                    ) : (
                      <Building2 className="h-3 w-3" />
                    )}
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
