import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display text-3xl tracking-tight mb-4">PACKRAFTERY</h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Premium lightweight packrafts for backcountry water adventures.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Packrafts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Paddles
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Gear Bundles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Trip Planning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <p>&copy; 2025 Packraftery. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-secondary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-secondary-foreground transition-colors">
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
