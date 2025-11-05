import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "I've never packrafted before. Where should I start?",
        a: "Start with calm water like lakes or slow-moving rivers (Class I). Take a beginner course or go with experienced friends. Rent gear first to see if you enjoy it before investing in your own equipment. Read our Gear Guide and Safety pages thoroughly.",
      },
      {
        q: "How much does it cost to get started?",
        a: "A complete beginner setup (packraft, paddle, PFD, pump, repair kit) ranges from $1,500-$2,500. You can start with rentals for $150-300 per trip to test the waters. Budget options exist, but prioritize quality for safety-critical items like your PFD.",
      },
      {
        q: "Do I need to know how to kayak first?",
        a: "No, but kayaking experience helps. Packrafts are more stable and forgiving than kayaks, making them easier for beginners. However, understanding water dynamics, paddle technique, and safety principles from any paddling discipline is valuable.",
      },
    ],
  },
  {
    category: "Equipment",
    questions: [
      {
        q: "What's the difference between packraft models?",
        a: "Models vary by weight, durability, and features. Ultralight models (2-3kg) are for calm water and prioritize packability. All-around models (3-4kg) handle light whitewater. Whitewater models (4-5kg) have reinforced construction for Class IV+ rapids. See our Gear Guide for detailed comparisons.",
      },
      {
        q: "How long do packrafts last?",
        a: "With proper care, a quality packraft lasts 5-10 years or 200+ trips. Lifespan depends on usage intensity, storage conditions, and maintenance. UV exposure and abrasion are the main wear factors. Regular inspection and prompt repairs extend life significantly.",
      },
      {
        q: "Can I repair my packraft in the field?",
        a: "Yes! Most punctures and tears can be field-repaired with the included repair kit. Clean and dry the area, apply adhesive, and patch. Repairs take 15-30 minutes to cure. For major damage, temporary duct tape patches can get you to safety.",
      },
      {
        q: "What size paddle do I need?",
        a: "Paddle length depends on your height and paddling style. Generally, 210-220cm for most adults. Taller paddlers (over 6') may prefer 220-230cm. Whitewater paddling uses shorter paddles (200-210cm) for quicker strokes. Most packraft paddles are adjustable.",
      },
    ],
  },
  {
    category: "Safety",
    questions: [
      {
        q: "Is packrafting dangerous?",
        a: "Like any adventure sport, packrafting has inherent risks. Proper training, appropriate gear, good judgment, and respect for water conditions make it reasonably safe. Most accidents result from poor decisions, not equipment failure. Never paddle alone and always wear your PFD.",
      },
      {
        q: "What water temperature requires a wetsuit?",
        a: "Water below 15°C (60°F) requires thermal protection. Use a wetsuit for 10-15°C (50-60°F) water, and a drysuit below 10°C (50°F). The '120 rule' is helpful: if water temp + air temp < 120°F (49°C), wear thermal protection. Cold water shock can be fatal.",
      },
      {
        q: "Should I paddle alone?",
        a: "No. Always paddle with at least one other person, preferably in a group of 3-4. Solo paddling eliminates rescue options and multiplies risks. If you must paddle alone, stay on calm water, tell someone your plans, and carry communication devices.",
      },
      {
        q: "What certifications do I need?",
        a: "No certifications are legally required for recreational packrafting. However, we strongly recommend Swiftwater Rescue and Wilderness First Aid courses. For whitewater, take paddling instruction courses. Some guided trips and remote areas may require proof of training.",
      },
    ],
  },
  {
    category: "Trips & Planning",
    questions: [
      {
        q: "How do I plan a packrafting trip?",
        a: "Research your route thoroughly: water levels, difficulty rating, access points, camping, and permits. Check weather forecasts. Create a float plan and share it. Pack appropriate gear for conditions. Build in extra time for portages and unexpected challenges. Start with shorter trips.",
      },
      {
        q: "Can I bring my dog?",
        a: "Yes, many packrafters bring dogs! Ensure your dog is comfortable with water and boats. Use a dog-specific PFD. Practice in calm water first. Consider a larger packraft or one with a cargo fly. Be aware that dogs add weight and can puncture the raft with claws.",
      },
      {
        q: "What about permits and regulations?",
        a: "Many rivers and wilderness areas require permits, especially popular destinations. Check with land management agencies (National Park Service, Forest Service, BLM) well in advance. Some permits are lottery-based and fill months ahead. Respect private property and access rights.",
      },
      {
        q: "How much gear can I carry?",
        a: "Most packrafts have a 100-150kg (220-330lb) capacity including paddler and gear. For multi-day trips, use compression and waterproof bags to maximize space. Distribute weight evenly. Some models offer cargo flies for additional gear. Practice packing before your trip.",
      },
    ],
  },
  {
    category: "Maintenance",
    questions: [
      {
        q: "How do I clean my packraft?",
        a: "After each use, rinse with fresh water to remove dirt, salt, and debris. Use mild soap for stubborn grime. Dry completely before storage to prevent mold. Avoid harsh chemicals that can degrade materials. Clean valves carefully to maintain proper seal.",
      },
      {
        q: "How should I store my packraft?",
        a: "Store in a cool, dry place away from direct sunlight and heat sources. Loosely rolled or hung is ideal—avoid tight compression for long-term storage. Keep away from rodents and sharp objects. Periodically check for damage even during storage. UV protection spray helps.",
      },
      {
        q: "When should I replace my packraft?",
        a: "Replace when you notice: extensive fabric wear, multiple repairs in the same area, valve failures, seam separation, or significant UV damage (fading, brittleness). If repairs become frequent or you lose confidence in the raft's integrity, it's time for a new one.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 bg-muted/30 topo-pattern">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl md:text-7xl text-balance mb-4">FAQ</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Answers to common questions about packrafting, gear, and adventures.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, idx) => (
            <section key={idx}>
              <h2 className="font-display text-3xl mb-6 text-primary">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                    <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <Card className="mt-16 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Still Have Questions?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is here to help with any questions about gear, trips, or
              packrafting in general.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
              >
                Contact Us
              </a>
              <a
                href="/adventures"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
              >
                Read Our Blog
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </main>
  )
}
