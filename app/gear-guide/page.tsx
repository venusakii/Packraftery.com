import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2 } from "lucide-react"

export default function GearGuidePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 bg-muted/30 topo-pattern">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl md:text-7xl text-balance mb-4">GEAR GUIDE</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Everything you need to know about choosing and using packrafting equipment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="font-display text-4xl mb-8">CHOOSING YOUR PACKRAFT</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ultralight</CardTitle>
                  <CardDescription>2-3 kg</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Perfect for long-distance hiking with occasional water crossings. Minimal features for maximum
                    weight savings.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Calm water only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Packs smallest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Budget-friendly</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>All-Around</CardTitle>
                  <CardDescription>3-4 kg</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Versatile option for mixed terrain. Handles light whitewater and extended trips with gear.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Class II-III rapids</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Good stability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Most popular</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Whitewater</CardTitle>
                  <CardDescription>4-5 kg</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built for serious rapids. Reinforced construction and advanced features for technical water.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Class IV+ capable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Maximum durability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Pro features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-4xl mb-8">ESSENTIAL GEAR CHECKLIST</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Core Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Packraft</div>
                        <div className="text-sm text-muted-foreground">Choose based on your adventure type</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Paddle</div>
                        <div className="text-sm text-muted-foreground">4-piece breakdown for packability</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">PFD (Life Vest)</div>
                        <div className="text-sm text-muted-foreground">Always required on water</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Pump</div>
                        <div className="text-sm text-muted-foreground">Inflation bag or manual pump</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Repair Kit</div>
                        <div className="text-sm text-muted-foreground">Patches, glue, and tools</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Safety & Accessories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Helmet</div>
                        <div className="text-sm text-muted-foreground">Required for whitewater</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Dry Bags</div>
                        <div className="text-sm text-muted-foreground">Keep gear dry and organized</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Throw Rope</div>
                        <div className="text-sm text-muted-foreground">For rescue situations</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Whistle</div>
                        <div className="text-sm text-muted-foreground">Emergency signaling</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">First Aid Kit</div>
                        <div className="text-sm text-muted-foreground">Waterproof and accessible</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="font-display text-4xl mb-8">FREQUENTLY ASKED QUESTIONS</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How durable are packrafts?</AccordionTrigger>
                <AccordionContent>
                  Modern packrafts are surprisingly durable. Made from tough TPU-coated nylon, they can handle rocks,
                  branches, and abrasion. With proper care, a quality packraft can last for hundreds of trips. Always
                  carry a repair kit for field fixes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What's the weight limit?</AccordionTrigger>
                <AccordionContent>
                  Most packrafts have a capacity of 100-150 kg (220-330 lbs), including paddler and gear. This is
                  sufficient for most adventures. For extended expeditions with heavy loads, consider a larger model or
                  cargo fly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How long does inflation take?</AccordionTrigger>
                <AccordionContent>
                  With an inflation bag, you can inflate a packraft in 3-5 minutes. Manual pumps take 5-10 minutes. The
                  process becomes faster with practice. Some models have dual inflation chambers for added safety.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I use a packraft in cold water?</AccordionTrigger>
                <AccordionContent>
                  Yes, but you need appropriate clothing. In cold water, wear a wetsuit or drysuit. Hypothermia is a
                  serious risk. Always dress for immersion, not air temperature. Consider taking a cold water safety
                  course.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What maintenance is required?</AccordionTrigger>
                <AccordionContent>
                  After each trip, rinse with fresh water and dry completely before storage. Store in a cool, dry place
                  away from direct sunlight. Periodically check valves and seams. UV protection spray can extend the
                  life of your packraft.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
