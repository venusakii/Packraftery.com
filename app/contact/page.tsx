import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 bg-muted/30 topo-pattern">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl md:text-7xl text-balance mb-4">CONTACT US</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Get in touch with our team. We're here to help with gear questions, trip planning, and more.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What can we help you with?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your question or inquiry..." rows={6} />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@packraftery.com" className="text-sm text-muted-foreground hover:text-primary">
                      info@packraftery.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div className="text-sm text-muted-foreground">
                      123 River Road
                      <br />
                      Boulder, CO 80302
                      <br />
                      United States
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Business Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Monday - Friday: 9am - 6pm MT
                      <br />
                      Saturday: 10am - 4pm MT
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visit Our Store</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Store location"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Stop by our Boulder location to see gear in person, get expert advice, and connect with the local
                  packrafting community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="/shop" className="block text-sm hover:text-primary transition-colors">
                  Browse Gear Shop →
                </a>
                <a href="/rentals" className="block text-sm hover:text-primary transition-colors">
                  Rental Information →
                </a>
                <a href="/gear-guide" className="block text-sm hover:text-primary transition-colors">
                  Gear Selection Guide →
                </a>
                <a href="/faq" className="block text-sm hover:text-primary transition-colors">
                  Frequently Asked Questions →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
