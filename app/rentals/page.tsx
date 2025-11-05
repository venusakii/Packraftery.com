import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Package, Shield, Truck } from "lucide-react"

const rentalPackages = [
  {
    id: 1,
    name: "Weekend Warrior",
    duration: "3 Days",
    price: 149,
    image: "/placeholder.svg?height=300&width=400",
    includes: ["Packraft (your choice)", "4-piece paddle", "PFD (life vest)", "Inflation bag", "Basic repair kit"],
  },
  {
    id: 2,
    name: "Week Explorer",
    duration: "7 Days",
    price: 299,
    image: "/placeholder.svg?height=300&width=400",
    popular: true,
    includes: [
      "Packraft (your choice)",
      "4-piece paddle",
      "PFD (life vest)",
      "Helmet",
      "Inflation bag",
      "Comprehensive repair kit",
      "40L dry bag",
    ],
  },
  {
    id: 3,
    name: "Expedition Pro",
    duration: "14 Days",
    price: 499,
    image: "/placeholder.svg?height=300&width=400",
    includes: [
      "Premium packraft",
      "Carbon fiber paddle",
      "PFD (life vest)",
      "Helmet",
      "Inflation bag",
      "Pro repair kit",
      "2x 40L dry bags",
      "Throw rope",
      "Waterproof map case",
    ],
  },
]

export default function RentalsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 bg-muted/30 topo-pattern">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl md:text-7xl text-balance mb-4">GEAR RENTALS</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Try before you buy, or rent premium gear for your next adventure without the commitment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rentalPackages.map((pkg) => (
            <Card key={pkg.id} className={`relative ${pkg.popular ? "border-primary shadow-lg" : ""}`}>
              {pkg.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
              <div className="aspect-video overflow-hidden bg-muted rounded-t-lg">
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-display text-4xl text-primary mb-6">${pkg.price}</div>
                <ul className="space-y-2">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  Reserve Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="pt-6 text-center">
              <Package className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Easy Pickup</h3>
              <p className="text-sm text-muted-foreground">Collect gear from our location or have it shipped</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Shield className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Damage Protection</h3>
              <p className="text-sm text-muted-foreground">Optional coverage for peace of mind</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Truck className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On rentals over $200 within the US</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">All gear inspected and maintained</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">How Rentals Work</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="font-display text-3xl text-primary mb-2">01</div>
                <h4 className="font-semibold mb-2">Choose Package</h4>
                <p className="text-sm text-muted-foreground">
                  Select the rental package that fits your adventure duration and needs.
                </p>
              </div>
              <div>
                <div className="font-display text-3xl text-primary mb-2">02</div>
                <h4 className="font-semibold mb-2">Reserve Dates</h4>
                <p className="text-sm text-muted-foreground">
                  Pick your rental dates and we'll confirm availability immediately.
                </p>
              </div>
              <div>
                <div className="font-display text-3xl text-primary mb-2">03</div>
                <h4 className="font-semibold mb-2">Get Your Gear</h4>
                <p className="text-sm text-muted-foreground">
                  Pick up locally or have gear shipped 2-3 days before your trip.
                </p>
              </div>
              <div>
                <div className="font-display text-3xl text-primary mb-2">04</div>
                <h4 className="font-semibold mb-2">Return & Review</h4>
                <p className="text-sm text-muted-foreground">
                  Return gear and share your adventure story with our community.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl mb-6 text-center">RENTAL POLICIES</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Reservation:</strong> Rentals must be reserved at least 7 days in
              advance. Peak season (June-August) requires 14 days advance notice.
            </p>
            <p>
              <strong className="text-foreground">Security Deposit:</strong> A refundable deposit of $200 is required
              and will be returned within 5 business days after gear inspection.
            </p>
            <p>
              <strong className="text-foreground">Damage Policy:</strong> Normal wear and tear is expected. Significant
              damage or loss will be charged at replacement cost minus the security deposit.
            </p>
            <p>
              <strong className="text-foreground">Cancellation:</strong> Free cancellation up to 7 days before rental
              start date. 50% refund for 3-7 days notice. No refund within 3 days.
            </p>
            <p>
              <strong className="text-foreground">Extensions:</strong> Contact us to extend your rental. Subject to
              availability and additional fees.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
