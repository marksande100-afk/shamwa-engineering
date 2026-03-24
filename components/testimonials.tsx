"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "John Mukasa",
    role: "Property Developer",
    image: "/placeholder-avatar.jpg",
    content:
      "Shamwa Engineering delivered exceptional work on our residential project. Their attention to detail and commitment to quality exceeded our expectations. The team was professional and completed the work on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Namuli",
    role: "Homeowner",
    image: "/placeholder-avatar.jpg",
    content:
      "I hired Shamwa for plumbing installation in my new home. Their team was knowledgeable, efficient, and used high-quality materials. Very satisfied with the results and would recommend them to anyone.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Ochieng",
    role: "Business Owner",
    image: "/placeholder-avatar.jpg",
    content:
      "The construction of our commercial building was handled professionally by Shamwa Engineering. They provided excellent project management and delivered a quality structure within budget.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const next = () => {
    setIsAutoPlay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients
            have to say about working with Shamwa Engineering.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-primary-foreground/10 rounded-2xl p-8 md:p-12">
            <Quote className="h-16 w-16 text-accent/30 absolute top-6 left-6" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl md:text-2xl text-center leading-relaxed mb-8">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent mb-3">
                  <Image
                    src={`https://i.pravatar.cc/150?u=${testimonials[current].id}`}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                <p className="text-primary-foreground/70">{testimonials[current].role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlay(false)
                      setCurrent(index)
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === current
                        ? "bg-accent w-8"
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
