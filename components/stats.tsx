"use client"

import { useEffect, useState, useRef } from "react"
import { Building2, Users, Award, ThumbsUp } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: ThumbsUp,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)

          const animate = () => {
            start += increment
            if (start >= value) {
              setDisplayValue(value)
            } else {
              setDisplayValue(Math.floor(start))
              requestAnimationFrame(animate)
            }
          }
          animate()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
      {displayValue}
      {suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-accent" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/80 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
