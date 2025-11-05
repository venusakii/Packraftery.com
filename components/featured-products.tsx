import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Alpine Explorer",
    category: "Packraft",
    price: "$1,299",
    weight: "3.2 lbs",
    image: "/lightweight-blue-packraft-on-rocky-shore.jpg",
  },
  {
    name: "Rapid Runner Pro",
    category: "Packraft",
    price: "$1,599",
    weight: "3.8 lbs",
    image: "/green-packraft-in-whitewater-rapids.jpg",
  },
  {
    name: "Expedition Series",
    category: "Packraft",
    price: "$1,899",
    weight: "4.1 lbs",
    image: "/packraft-on-calm-mountain-lake.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-4">FEATURED PACKRAFTS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ultralight. Durable. Adventure-ready. Our packrafts are designed for serious explorers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {product.weight}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-display text-2xl tracking-tight mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
