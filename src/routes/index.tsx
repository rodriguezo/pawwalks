import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Dog, Trees, Home, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-0 px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute -top-24 -right-36 w-[500px] h-[500px] rounded-full bg-orange-200/20 blur-3xl" />
        <div className="absolute -bottom-12 -left-24 w-[350px] h-[350px] rounded-full bg-green-200/20 blur-3xl" />

        <div className="relative z-10 text-center max-w-2xl mb-10">
          <Badge variant="secondary" className="mb-6 text-green-700 bg-green-100 border-green-200">
            Trusted by 500+ dog owners
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Your dog deserves the{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              best walks
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Professional, reliable dog walking services tailored to your pup's
            needs. Rain or shine, we've got their tail wagging.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 transition-all">
              <a href="#contact">Book a Walk</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:-translate-y-0.5 transition-all">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-5xl rounded-t-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80"
            alt="Happy dog running in a park"
            className="block w-full h-[300px] md:h-[420px] object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Tailored care for every pup, every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card className="hover:shadow-md hover:-translate-y-0.5 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center mb-1">
                  <Dog className="size-6 text-orange-500" />
                </div>
                <CardTitle>Solo Walks</CardTitle>
                <CardDescription>
                  One-on-one 30 or 60 minute walks giving your dog
                  undivided attention, exercise, and enrichment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md hover:-translate-y-0.5 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center mb-1">
                  <Trees className="size-6 text-green-600" />
                </div>
                <CardTitle>Group Adventures</CardTitle>
                <CardDescription>
                  Small group walks (max 4 dogs) at local parks for
                  socialization and off-leash fun.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md hover:-translate-y-0.5 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center mb-1">
                  <Home className="size-6 text-amber-600" />
                </div>
                <CardTitle>Drop-In Visits</CardTitle>
                <CardDescription>
                  30-minute check-ins at your home for feeding, potty breaks,
                  and belly rubs while you're away.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white" id="about">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
              alt="Two dogs walking together on a trail"
              className="block w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Why PawWalks?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We started PawWalks because we believe every dog deserves daily
              adventure. Our team of certified, insured walkers treat your pup
              like family — because to us, they are.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-extrabold text-orange-500 tracking-tight">500+</span>
                <span className="text-sm text-muted-foreground font-medium">Happy Dogs</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-extrabold text-orange-500 tracking-tight">5,000+</span>
                <span className="text-sm text-muted-foreground font-medium">Walks Completed</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-extrabold text-orange-500 tracking-tight">4.9</span>
                <span className="text-sm text-muted-foreground font-medium">Avg Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-muted/50" id="contact">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Get in touch</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ready to give your pup the walks they deserve? Fill out the form
              and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center">
                  <Phone className="size-4 text-muted-foreground" />
                </div>
                (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center">
                  <Mail className="size-4 text-muted-foreground" />
                </div>
                hello@pawwalks.com
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center">
                  <MapPin className="size-4 text-muted-foreground" />
                </div>
                Serving all neighborhoods
              </div>
            </div>
          </div>

          {submitted ? (
            <Card className="py-12">
              <CardContent className="text-center flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-1">
                  <CheckCircle className="size-7 text-white" />
                </div>
                <h3 className="text-xl font-bold">Thanks, {formData.name}!</h3>
                <p className="text-muted-foreground">
                  We'll be in touch soon about walking {formData.dogName || 'your pup'}.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="dogName">Dog's Name</Label>
                      <Input
                        id="dogName"
                        name="dogName"
                        type="text"
                        required
                        placeholder="Buddy"
                        value={formData.dogName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your dog and what services you're interested in..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-muted-foreground border-t">
        PawWalks &mdash; Happy dogs, happy walks.
      </footer>
    </>
  )
}
