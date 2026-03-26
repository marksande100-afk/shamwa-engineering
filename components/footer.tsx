import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Plumbing Services",
  "Construction",
  "Building Materials",
  "Road Works",
  "Engineering Consultation",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-kE58FTDF2Sp91A44QUOV9Edk5rx7J2.jpeg"
                alt="Shamwa Engineering Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-serif font-bold text-lg">Shamwa Engineering</h3>
                <p className="text-sm text-background/70">& Investments Ltd</p>
              </div>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Your trusted partner for comprehensive engineering, construction, and plumbing
              services. Best Quality for Best Results.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+256702226199"
                className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>0702 226 199 | 0785 482 389 | 0706 226 199</span>
              </a>
              <a
                href="mailto:info@shamwaengineering.com"
                className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@shamwaengineering.com</span>
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4" />
                <span>Temple Road, near URA offices</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Working Hours</h4>
            <div className="space-y-3 text-background/70">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-background/10 rounded-lg">
              <p className="text-sm text-accent italic">
                &ldquo;Best Quality for Best Results&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Shamwa Engineering and Investments Ltd. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Developed by{" "}
              <a
                href="https://haclab.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Haclab Company Limited
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
