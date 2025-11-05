import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/whitewater-rapids-kayaker-action-shot-from-above.jpg" alt="Packrafting adventure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Topographic Pattern Overlay */}
      <div className="absolute inset-0 topo-pattern opacity-30 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight text-balance mb-6 text-foreground">
          ADVENTURE
          <br />
          AWAITS
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
          Lightweight packrafts engineered for backcountry explorers. Go where rivers meet mountains.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base font-semibold">
            Shop Packrafts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold bg-transparent">
            Explore Gear
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
