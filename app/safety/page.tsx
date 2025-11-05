import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Shield, Waves, Wind, Thermometer } from "lucide-react"

export default function SafetyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 bg-muted/30 topo-pattern">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl md:text-7xl text-balance mb-4">SAFETY & EDUCATION</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Essential knowledge for safe packrafting adventures in the backcountry.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Alert className="mb-12 border-destructive">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-destructive">Safety First</AlertTitle>
          <AlertDescription>
            Packrafting involves inherent risks. Always assess conditions, know your limits, and never paddle alone.
            Take proper training courses before attempting whitewater or remote expeditions.
          </AlertDescription>
        </Alert>

        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="font-display text-4xl mb-8">ESSENTIAL SAFETY PRINCIPLES</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Personal Safety Equipment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">PFD (Life Jacket):</strong> Always wear a properly fitted Type
                    III or V PFD. It should be snug and not ride up.
                  </p>
                  <p>
                    <strong className="text-foreground">Helmet:</strong> Required for any whitewater (Class II+). Choose
                    a water sports specific helmet.
                  </p>
                  <p>
                    <strong className="text-foreground">Whistle:</strong> Attach to your PFD for emergency signaling.
                  </p>
                  <p>
                    <strong className="text-foreground">Knife:</strong> Accessible river knife for entanglement
                    emergencies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Waves className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Water Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Scout Rapids:</strong> Always scout from shore before running
                    unknown rapids.
                  </p>
                  <p>
                    <strong className="text-foreground">Know Classifications:</strong> Understand the International
                    Scale of River Difficulty (Class I-VI).
                  </p>
                  <p>
                    <strong className="text-foreground">Water Levels:</strong> Check flow rates and gauge readings
                    before your trip.
                  </p>
                  <p>
                    <strong className="text-foreground">Portage Option:</strong> Never feel pressured to run something
                    beyond your skill level.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Thermometer className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Cold Water Safety</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Dress for Immersion:</strong> Water below 15°C (60°F) requires
                    wetsuit or drysuit.
                  </p>
                  <p>
                    <strong className="text-foreground">Hypothermia Risk:</strong> Cold water shock can be deadly. Know
                    the signs and treatment.
                  </p>
                  <p>
                    <strong className="text-foreground">Layering System:</strong> Use proper base layers, insulation,
                    and waterproof outer layers.
                  </p>
                  <p>
                    <strong className="text-foreground">Emergency Plan:</strong> Know how to self-rescue and warm up
                    quickly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Wind className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Weather & Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Check Forecast:</strong> Monitor weather 48 hours before and
                    during your trip.
                  </p>
                  <p>
                    <strong className="text-foreground">Wind Awareness:</strong> Strong winds can make paddling
                    dangerous, especially on lakes.
                  </p>
                  <p>
                    <strong className="text-foreground">Lightning:</strong> Get off water immediately if thunderstorms
                    approach.
                  </p>
                  <p>
                    <strong className="text-foreground">Flash Floods:</strong> Be aware of upstream weather in canyon
                    environments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-4xl mb-8">RIVER CLASSIFICATION GUIDE</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Class I - Easy</span>
                    <span className="text-sm font-normal text-muted-foreground">Beginner Friendly</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fast moving water with small waves. Few obstructions, all obvious and easily avoided. Low risk to
                    swimmers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Class II - Novice</span>
                    <span className="text-sm font-normal text-muted-foreground">Some Experience Required</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Straightforward rapids with wide, clear channels. Occasional maneuvering required. Swimmers rarely
                    injured.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Class III - Intermediate</span>
                    <span className="text-sm font-normal text-muted-foreground">Training Recommended</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Rapids with moderate, irregular waves. Complex maneuvers in fast current. Scouting advisable.
                    Injuries possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Class IV - Advanced</span>
                    <span className="text-sm font-normal text-muted-foreground">Expert Skills Required</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Intense, powerful rapids requiring precise boat handling. Scouting mandatory. Risk of injury to
                    swimmers. Rescue difficult.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-destructive">
                    <span>Class V-VI - Expert/Extreme</span>
                    <span className="text-sm font-normal">Professional Level Only</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Extremely difficult, long, and violent rapids. Significant hazard to life. Rescue nearly impossible.
                    For expert teams only.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-4xl mb-8">EMERGENCY PROCEDURES</h2>
            <Card>
              <CardHeader>
                <CardTitle>Self-Rescue Techniques</CardTitle>
                <CardDescription>What to do if you capsize</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Stay Calm</h4>
                  <p className="text-sm text-muted-foreground">
                    Take a breath and assess the situation. Panic uses energy and impairs judgment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Assume Defensive Swimming Position</h4>
                  <p className="text-sm text-muted-foreground">
                    Float on your back, feet downstream and elevated, arms out for balance. Never stand in moving water.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Hold Your Paddle</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep your paddle if possible, but prioritize your safety over equipment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Swim to Safety</h4>
                  <p className="text-sm text-muted-foreground">
                    When clear of hazards, swim aggressively to shore at a 45-degree angle downstream.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5. Re-enter Your Packraft</h4>
                  <p className="text-sm text-muted-foreground">
                    In calm water, practice re-entry techniques. Approach from the side, not the end.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="font-display text-4xl mb-8">RECOMMENDED TRAINING</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Swiftwater Rescue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn professional rescue techniques for river environments. Covers throw bags, swimming, and
                    technical rope work.
                  </p>
                  <p className="text-sm font-semibold">Duration: 2-3 days</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Wilderness First Aid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Essential medical training for remote environments where help is hours or days away.
                  </p>
                  <p className="text-sm font-semibold">Duration: 2-3 days</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Whitewater Kayaking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Build fundamental paddling skills, river reading, and boat control in a kayak before transitioning
                    to packraft.
                  </p>
                  <p className="text-sm font-semibold">Duration: Multiple sessions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Navigation & Route Finding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master map reading, GPS use, and backcountry navigation for remote packrafting expeditions.
                  </p>
                  <p className="text-sm font-semibold">Duration: 1-2 days</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
