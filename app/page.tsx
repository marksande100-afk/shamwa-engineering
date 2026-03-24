import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
