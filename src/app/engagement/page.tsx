import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EthicalEngagementPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f2]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-serif tracking-tighter sm:text-4xl md:text-5xl text-[#3a3a3a]">
                Ethical Engagement
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                How to engage with beauty & wellness respectfully
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9c8b7d] text-white mb-4">
                  <span className="text-xl">🌏</span>
                </div>
                <CardTitle className="text-xl font-serif">
                  Be Critical of Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ask: Is this practice being presented in its full cultural
                  context, or is it being simplified for profit?
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Research the origins of beauty and wellness practices</li>
                  <li>
                    Question marketing that exoticizes or oversimplifies
                    cultural traditions
                  </li>
                  <li>
                    Look for educational content that provides historical and
                    cultural context
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9c8b7d] text-white mb-4">
                  <span className="text-xl">🛍️</span>
                </div>
                <CardTitle className="text-xl font-serif">
                  Support Ethical Brands
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seek out Asian-owned wellness brands that are transparent
                  about history, sourcing, and sustainability.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Research company ownership and leadership</li>
                  <li>
                    Look for transparency in ingredient sourcing and production
                    methods
                  </li>
                  <li>
                    Support brands that give back to the communities they draw
                    inspiration from
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9c8b7d] text-white mb-4">
                  <span className="text-xl">🤝</span>
                </div>
                <CardTitle className="text-xl font-serif">
                  Recognize Privilege & Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Consider how power, race, and economic privilege shape who
                  gets to &quot;consume&quot; wellness.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    Acknowledge that wellness access is not equally distributed
                  </li>
                  <li>
                    Support initiatives that make wellness practices more
                    accessible
                  </li>
                  <li>
                    Be mindful of how you discuss and share your wellness
                    experiences
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-serif tracking-tighter sm:text-3xl text-[#3a3a3a] text-center mb-8">
              Recommended Brands & Practitioners
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-2 text-center"
                >
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=160&width=160&text=Brand ${i}`}
                      alt={`Ethical brand ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Ethical Brand {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    A brief description of this ethical brand and their
                    practices.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f2]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-serif tracking-tighter sm:text-4xl text-[#3a3a3a]">
              Continue Your Journey
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Join us at Luminara to deepen your understanding of ethical beauty
              and wellness practices.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#9c8b7d] hover:bg-[#7d6e62]"
            >
              <Link href="/contact">Book Your Experience</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
