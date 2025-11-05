import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Waves, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 bg-muted/30 topo-pattern">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl md:text-7xl text-balance mb-4">ABOUT US</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Born from a passion for backcountry exploration and lightweight adventure.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-display text-4xl mb-6">OUR STORY</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Packraftery was founded in 2015 by a group of adventurers who believed that remote rivers and alpine
                lakes shouldn't be out of reach. We saw the potential of packrafting to unlock wilderness areas that
                were previously inaccessible to paddlers.
              </p>
              <p>
                What started as a small operation in a garage has grown into a leading provider of ultralight
                packrafting gear. Our team consists of engineers, designers, and professional guides who live and
                breathe backcountry adventure.
              </p>
              <p>
                Every product we create is tested in real-world conditions—from Class IV whitewater to remote alpine
                crossings. We don't just sell gear; we use it ourselves on expeditions around the world.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <img src="/team-packrafting-mountain-river-adventure.jpg" alt="Packraftery team" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <Card>
            <CardContent className="pt-6 text-center">
              <Mountain className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="font-display text-3xl mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Expeditions Supported</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Waves className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="font-display text-3xl mb-2">15K+</div>
              <div className="text-sm text-muted-foreground">Rivers Explored</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="font-display text-3xl mb-2">8K+</div>
              <div className="text-sm text-muted-foreground">Happy Adventurers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="font-display text-3xl mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Industry Awards</div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 md:p-12">
          <h2 className="font-display text-4xl mb-6 text-center">OUR VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-2xl mb-3 text-primary">INNOVATION</h3>
              <p className="text-muted-foreground leading-relaxed">
                We constantly push the boundaries of what's possible in lightweight gear design, using cutting-edge
                materials and construction techniques.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-3 text-primary">SUSTAINABILITY</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to minimizing our environmental impact through responsible sourcing, durable products,
                and repair programs.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-3 text-primary">COMMUNITY</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in fostering a supportive community of adventurers who share knowledge, experiences, and a
                love for wild places.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
