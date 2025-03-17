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
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_PATH || ""
                  }/bamboo-forest.jpg`}
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

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif tracking-tighter sm:text-4xl md:text-5xl text-[#3a3a3a]">
                  Transformative Experiences
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Hear from past participants about their journey with Luminara
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-center space-y-4 rounded-xl bg-[#f8f5f2] p-6 text-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="https://t4.ftcdn.net/jpg/04/25/65/97/360_F_425659755_5BaLdNbbCtQbbiz1JNFBikshfiCWI5NE.jpg"
                    alt="Testimonial author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "Luminara transformed my understanding of beauty practices.
                    I now approach my skincare routine with cultural awareness
                    and intentionality that I never had before."
                  </p>
                  <div>
                    <h3 className="font-semibold">Emily</h3>
                    <p className="text-sm text-muted-foreground">
                      Marketing Executive, Chicago
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col items-center space-y-4 rounded-xl bg-[#f8f5f2] p-6 text-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=6vUtfKvHhNsK9kdNWb7EJlksBDhBBok1bNjNRULsAYs="
                    alt="Testimonial author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The critical discussions around wellness commercialization
                    were eye-opening. I've completely changed how I engage with
                    and consume wellness products and services."
                  </p>
                  <div>
                    <h3 className="font-semibold">Michael</h3>
                    <p className="text-sm text-muted-foreground">
                      Professor of Media Studies, Northwestern
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col items-center space-y-4 rounded-xl bg-[#f8f5f2] p-6 text-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="https://previews.123rf.com/images/anadesousa/anadesousa0705/anadesousa070500092/909874-young-man-generic-portrait-shot-in-studio-over-white-background.jpg"
                    alt="Testimonial author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The perfect balance of academic depth and hands-on
                    experience. I left with both knowledge and practical tools
                    to approach beauty and wellness more ethically."
                  </p>
                  <div>
                    <h3 className="font-semibold">Nicholas</h3>
                    <p className="text-sm text-muted-foreground">
                      Wellness Entrepreneur, New York
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 (visible on larger screens) */}
              <div className="flex flex-col items-center space-y-4 rounded-xl bg-[#f8f5f2] p-6 text-center md:hidden lg:flex">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="https://previews.123rf.com/images/vlue/vlue1008/vlue100800202/7618514-a-generic-white-cauasian-young-adult-male-smiling-down-at-the-camera-with-a-pleasant-look-on-his.jpg"
                    alt="Testimonial author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The discussions on colorism and beauty hierarchies were
                    profound and challenging. This retreat gave me language and
                    context for experiences I've had my whole life."
                  </p>
                  <div>
                    <h3 className="font-semibold">David</h3>
                    <p className="text-sm text-muted-foreground">
                      Healthcare Professional, Boston
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 (visible on larger screens) */}
              <div className="flex flex-col items-center space-y-4 rounded-xl bg-[#f8f5f2] p-6 text-center md:hidden lg:flex">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="https://as2.ftcdn.net/jpg/01/25/73/71/1000_F_125737171_quNW4uTbH3JRvJVeh3soA1fWwNTGDPOt.jpg"
                    alt="Testimonial author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "I came for the skincare tips but left with a completely new
                    perspective on how beauty practices connect to identity,
                    culture, and power. Truly eye-opening."
                  </p>
                  <div>
                    <h3 className="font-semibold">Tim</h3>
                    <p className="text-sm text-muted-foreground">
                      Beauty Blogger, Los Angeles
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 6 (visible on larger screens) */}
              <div className="flex flex-col items-center space-y-4 rounded-xl bg-[#f8f5f2] p-6 text-center md:hidden lg:flex">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="https://thumbs.dreamstime.com/b/young-woman-laughing-28835570.jpg"
                    alt="Testimonial author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The tea ceremony and sound bath experiences were deeply
                    moving, especially when paired with thoughtful discussions
                    about their cultural origins and transformations."
                  </p>
                  <div>
                    <h3 className="font-semibold">Sarah</h3>
                    <p className="text-sm text-muted-foreground">
                      Yoga Instructor, Seattle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild className="bg-[#9c8b7d] hover:bg-[#7d6e62]">
                <Link href="/contact">Join Our Next Retreat</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
