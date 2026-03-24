import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-8">
          Whether you need plumbing services, construction work, or quality building materials, 
          we&apos;re here to help. Get in touch with us today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
          >
            <Link href="#contact">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 text-lg px-8"
          >
            <a href="tel:+256745482359">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
