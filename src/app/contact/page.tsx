import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f2]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-serif tracking-tighter sm:text-4xl md:text-5xl text-[#3a3a3a]">
                Contact & Booking
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Join us for a transformative weekend of beauty, wellness, and
                cultural exploration
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif tracking-tighter sm:text-3xl text-[#3a3a3a]">
                  Book Your Experience
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below to reserve your spot at the Luminara
                  Wellness Retreat.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Retreat Details</CardTitle>
                  <CardDescription>
                    Important information about the upcoming retreat
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#9c8b7d]" />
                    <div>
                      <p className="font-medium">Dates</p>
                      <p className="text-sm text-muted-foreground">
                        June 15-17, 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#9c8b7d]" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Evanston Wellness Center, Evanston, IL
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#9c8b7d]" />
                    <div>
                      <p className="font-medium">Schedule</p>
                      <p className="text-sm text-muted-foreground">
                        Friday 5pm - Sunday 2pm
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Space is limited to ensure an intimate and personalized
                    experience.
                  </p>
                </CardFooter>
              </Card>

              <div>
                <h3 className="text-xl font-semibold">Pricing</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <p>Full Weekend Experience</p>
                    <p className="font-medium">$1,200</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Early Bird Discount (until April 15)</p>
                    <p className="font-medium">$950</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Price includes all workshops, materials, meals, and
                  refreshments. Accommodation is not included.
                </p>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Special requests or questions</Label>
                  <Textarea
                    id="message"
                    placeholder="Let us know if you have any dietary restrictions, accessibility needs, or questions"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#9c8b7d] hover:bg-[#7d6e62]"
                >
                  Book Now
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Terms & Conditions
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f2]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-serif tracking-tighter sm:text-3xl text-[#3a3a3a]">
                Contact Us
              </h2>
              <p className="mt-2 text-muted-foreground">
                Have questions about the retreat? Get in touch with our team.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      1234 Wellness Way, Evanston, IL 60201
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      info@luminara-retreat.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">
                    What should I bring to the retreat?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Comfortable clothing for yoga and meditation, a journal, and
                    an open mind. A detailed packing list will be sent upon
                    registration.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Is accommodation included?</h4>
                  <p className="text-sm text-muted-foreground">
                    No, accommodation is not included in the retreat price. We
                    can recommend nearby hotels and lodging options.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">
                    What is the cancellation policy?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Full refunds are available up to 30 days before the retreat.
                    50% refunds are available up to 14 days before.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">
                    Do I need prior experience with yoga or meditation?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    No prior experience is necessary. All activities are
                    designed to be accessible to beginners while still engaging
                    for experienced practitioners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
