import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

const adventures = [
  {
    id: 1,
    title: "Conquering the Tatshenshini River",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    category: "Expedition",
    image: "/packrafting-wild-river-canyon.jpg",
    excerpt:
      "A 10-day journey through one of North America's most spectacular wilderness rivers, from glacier to ocean.",
  },
  {
    id: 2,
    title: "Alpine Lake Circuit: Swiss Alps",
    author: "Marcus Weber",
    date: "March 8, 2024",
    category: "Trip Report",
    image: "/alpine-lake-mountains-packraft.jpg",
    excerpt: "Connecting pristine alpine lakes in the Bernese Oberland with packraft and hiking.",
  },
  {
    id: 3,
    title: "Whitewater Basics for Packrafters",
    author: "Jake Thompson",
    date: "February 28, 2024",
    category: "Guide",
    image: "/packraft-whitewater-rapids-action.jpg",
    excerpt: "Essential techniques and safety considerations for running whitewater in your packraft.",
  },
  {
    id: 4,
    title: "Iceland's Hidden Canyons",
    author: "Emma Larsson",
    date: "February 20, 2024",
    category: "Expedition",
    image: "/iceland-canyon-river-packraft.jpg",
    excerpt: "Exploring remote volcanic canyons and geothermal rivers in Iceland's interior.",
  },
  {
    id: 5,
    title: "Gear Review: Alpine Explorer Pro",
    author: "David Chen",
    date: "February 12, 2024",
    category: "Review",
    image: "/packraft-gear-review-testing.jpg",
    excerpt: "After 500 miles of testing, here's our comprehensive review of the Alpine Explorer Pro.",
  },
  {
    id: 6,
    title: "Packrafting Patagonia's Baker River",
    author: "Sofia Rodriguez",
    date: "February 5, 2024",
    category: "Trip Report",
    image: "/patagonia-river-mountains-packraft.jpg",
    excerpt: "Turquoise waters and towering peaks on Chile's legendary Baker River.",
  },
]

export default function AdventuresPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 bg-muted/30 topo-pattern">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl md:text-7xl text-balance mb-4">ADVENTURES</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Stories, guides, and inspiration from the packrafting community around the world.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 mb-8 flex-wrap">
          <Button variant="default">All Posts</Button>
          <Button variant="outline">Expeditions</Button>
          <Button variant="outline">Trip Reports</Button>
          <Button variant="outline">Guides</Button>
          <Button variant="outline">Reviews</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure) => (
            <Card key={adventure.id} className="overflow-hidden group">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={adventure.image || "/placeholder.svg"}
                  alt={adventure.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{adventure.category}</Badge>
                </div>
                <CardTitle className="text-xl leading-tight text-balance">{adventure.title}</CardTitle>
                <CardDescription className="text-pretty">{adventure.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {adventure.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {adventure.date}
                  </div>
                </div>
                <Button variant="link" className="px-0 mt-4">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
