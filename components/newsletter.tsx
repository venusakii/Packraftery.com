import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 topo-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-4 text-primary-foreground">
            JOIN THE EXPEDITION
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get adventure tips, gear guides, and exclusive access to new products
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
