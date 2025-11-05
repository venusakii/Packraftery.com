import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SlidersHorizontal } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Alpine Explorer Pro",
    category: "Packrafts",
    price: 1299,
    image: "/lightweight-packraft-on-mountain-lake.jpg",
    badge: "Bestseller",
    weight: "3.2 kg",
  },
  {
    id: 2,
    name: "River Runner Elite",
    category: "Packrafts",
    price: 1499,
    image: "/whitewater-packraft-in-rapids.jpg",
    badge: "New",
    weight: "3.8 kg",
  },
  {
    id: 3,
    name: "Ultralight Solo",
    category: "Packrafts",
    price: 999,
    image: "/ultralight-packraft-folded-compact.jpg",
    badge: null,
    weight: "2.1 kg",
  },
  {
    id: 4,
    name: "Carbon Fiber Paddle",
    category: "Paddles",
    price: 249,
    image: "/carbon-fiber-kayak-paddle.jpg",
    badge: null,
    weight: "0.7 kg",
  },
  {
    id: 5,
    name: "Adventure Dry Bag 40L",
    category: "Accessories",
    price: 89,
    image: "/waterproof-dry-bag-outdoor.jpg",
    badge: null,
    weight: "0.4 kg",
  },
  {
    id: 6,
    name: "Expedition Life Vest",
    category: "Safety",
    price: 159,
    image: "/packrafting-life-vest-pfd.jpg",
    badge: null,
    weight: "0.6 kg",
  },
  {
    id: 7,
    name: "Rapid Repair Kit",
    category: "Accessories",
    price: 45,
    image: "/packraft-repair-kit-tools.jpg",
    badge: null,
    weight: "0.2 kg",
  },
  {
    id: 8,
    name: "Backcountry Pump",
    category: "Accessories",
    price: 79,
    image: "/portable-packraft-pump.jpg",
    badge: null,
    weight: "0.3 kg",
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 bg-muted/30 topo-pattern">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl md:text-7xl text-balance mb-4">GEAR SHOP</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Premium lightweight packrafting equipment for your next adventure. Built to perform in the backcountry.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Category</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Packrafts</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Paddles</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Safety Gear</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Accessories</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Under $100</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$100 - $500</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$500 - $1000</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Over $1000</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden group">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && <Badge className="absolute top-4 right-4">{product.badge}</Badge>}
                  </div>
                  <CardHeader>
                    <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>Weight: {product.weight}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between">
                    <div className="font-display text-2xl text-primary">${product.price}</div>
                    <Button>Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
