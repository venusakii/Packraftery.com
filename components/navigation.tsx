"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ShoppingCart, User, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-display text-3xl tracking-tight text-primary">
            PACKRAFTERY
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/gear-guide" className="text-sm font-medium hover:text-primary transition-colors">
              Gear Guide
            </Link>
            <Link href="/adventures" className="text-sm font-medium hover:text-primary transition-colors">
              Adventures
            </Link>
            <Link href="/rentals" className="text-sm font-medium hover:text-primary transition-colors">
              Rentals
            </Link>
            <Link href="/safety" className="text-sm font-medium hover:text-primary transition-colors">
              Safety
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/shop"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/gear-guide"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gear Guide
            </Link>
            <Link
              href="/adventures"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Adventures
            </Link>
            <Link
              href="/rentals"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rentals
            </Link>
            <Link
              href="/safety"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Safety
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
