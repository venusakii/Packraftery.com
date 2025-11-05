import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { AdventureGallery } from "@/components/adventure-gallery"
import { Features } from "@/components/features"
import { Newsletter } from "@/components/newsletter"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Features />
      <AdventureGallery />
      <Newsletter />
      <Footer />
    </main>
  )
}
