import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#f8f5f2]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-serif tracking-tighter sm:text-5xl xl:text-6xl/none text-[#3a3a3a]">
                    Welcome to Luminara
                  </h1>
                  <p className="text-lg font-medium text-[#9c8b7d]">
                    Reclaim. Reconnect. Reimagine.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Evanston, IL</span>
                    <Calendar className="ml-2 h-4 w-4" />
                    <span>June 15-17, 2025</span>
                  </div>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Luminara is more than a retreat—it is an immersive experience
                  in Asian and Asian American beauty and wellness traditions.
                  Designed to both educate and nourish, this weekend retreat
                  explores the intersection of ancient rituals, modern beauty
                  trends, and the commercialization of wellness.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-[#9c8b7d] hover:bg-[#7d6e62] text-white"
                  >
                    Join Our Transformative Retreat
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl lg:order-last">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Serene tea ceremony setting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Themes Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif tracking-tighter sm:text-4xl md:text-5xl text-[#3a3a3a]">
                  Key Themes We Explore
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Through hands-on workshops, guided discussions, and expert-led
                  treatments, we invite you to explore beauty and well-being
                  with intentionality and respect.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                      ✓
                    </div>
                    <h3 className="text-xl font-semibold">
                      The Globalization of Wellness
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    How yoga, Ayurveda, and Asian self-care rituals became
                    billion-dollar industries.
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                      ✓
                    </div>
                    <h3 className="text-xl font-semibold">Beauty & Identity</h3>
                  </div>
                  <p className="text-muted-foreground">
                    How beauty standards in Asian communities are shaped by
                    race, media, and social pressures.
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                      ✓
                    </div>
                    <h3 className="text-xl font-semibold">
                      The Politics of Skin & Colorism
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Why fairness creams remain a best-seller in Asia and beyond.
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                      ✓
                    </div>
                    <h3 className="text-xl font-semibold">
                      Ethical Beauty & Wellness
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    How to engage with these traditions in ways that honor their
                    cultural significance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Rigor Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f2]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-3xl font-serif tracking-tighter sm:text-4xl md:text-5xl text-[#3a3a3a]">
                  Guided by Experts & Grounded in Research
                </h2>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Luminara is designed with both experience and academic rigor
                  in mind. This retreat is informed by research in anthropology,
                  media studies, and cultural analysis—ensuring that our
                  exploration of beauty and wellness is both authentic and
                  critical.
                </p>
                <Button
                  variant="link"
                  asChild
                  className="text-[#9c8b7d] hover:text-[#7d6e62] p-0 h-auto"
                >
                  <Link href="/about" className="flex items-center gap-1">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
