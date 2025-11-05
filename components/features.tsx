import { Feather, Shield, Zap, Mountain } from "lucide-react"

const features = [
  {
    icon: Feather,
    title: "Ultralight Design",
    description:
      "Pack down to the size of a sleeping bag. Weighing as little as 3.2 lbs, our packrafts won't slow you down.",
  },
  {
    icon: Shield,
    title: "Military-Grade Durability",
    description: "Built with reinforced TPU fabric that withstands rocks, branches, and the toughest conditions.",
  },
  {
    icon: Zap,
    title: "Quick Inflation",
    description:
      "Set up in under 5 minutes with our high-flow valve system. More time on the water, less time waiting.",
  },
  {
    icon: Mountain,
    title: "Backcountry Ready",
    description: "Designed for multi-day expeditions. Carry everything you need for remote wilderness adventures.",
  },
]

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 topo-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-4">ENGINEERED FOR ADVENTURE</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every detail matters when you're miles from civilization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl tracking-tight mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
