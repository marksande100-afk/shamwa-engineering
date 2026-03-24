import Image from "next/image"
import { CheckCircle2, Award, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Quality Assured",
    description: "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled professionals bring years of experience to every job.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on schedule.",
  },
]

const values = [
  "Professional engineering services",
  "Quality building materials",
  "Expert plumbing solutions",
  "Competitive pricing",
  "Customer satisfaction guaranteed",
  "Licensed and certified team",
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Your Trusted Partner in Engineering & Construction
          </h2>
          <p className="text-muted-foreground text-lg">
            Shamwa Engineering and Investments Ltd is a leading provider of engineering,
            construction, and plumbing services, committed to delivering excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.22-yjt2v18H0N9y8AMqMhnicjb9fIIU1p.jpeg"
                    alt="Construction work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.25-0YRpy6PT0MLNAVbTb0YzecfqNeUw0R.jpeg"
                    alt="Plumbing work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.23-TfKOPZd06bC86ALPYmfVbAJ6YcxpUk.jpeg"
                    alt="Completed building"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2022.23.03-CeyUbhM6XlGRlRaB2xz14MzHqmpJFV.jpeg"
                    alt="Site inspection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Best Quality for Best Results
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Located along Temple Road, near the URA offices, Shamwa Engineering and Investments Ltd 
              has been serving clients with dedication and professionalism. We specialize in engineering 
              services, construction, and plumbing, providing comprehensive solutions for all your 
              building needs.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to quality and customer satisfaction has made us a trusted name in the 
              industry. We deal in general construction, sale of building materials, and execute 
              all types of plumbing services with precision and expertise.
            </p>

            {/* Value Points */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-4 bg-secondary rounded-lg"
                >
                  <feature.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
