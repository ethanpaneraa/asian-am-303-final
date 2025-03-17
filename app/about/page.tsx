import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f2]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-serif tracking-tighter sm:text-4xl md:text-5xl text-[#3a3a3a]">
                Why Luminara?
              </h1>
              <p className="text-muted-foreground md:text-xl">
                In an era where self-care is marketed as an industry, what does
                it mean to truly engage in wellness? Luminara exists to
                challenge the superficial consumption of Asian beauty and
                wellness trends, instead offering a space to deeply engage with
                their histories, transformations, and cultural significance.
              </p>
              <p className="text-muted-foreground md:text-xl">
                This is not a spa weekend—it is a journey through traditions,
                commerce, and identity.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="/yoga.jpeg"
                alt="Meditation space with natural elements"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-serif tracking-tighter sm:text-4xl text-[#3a3a3a]">
                Our Vision
              </h2>
            </div>
            <div className="space-y-4 text-center">
              <p className="text-muted-foreground md:text-xl">
                Luminara exists to challenge the superficial consumption of
                Asian beauty and wellness trends, instead offering a space to
                deeply engage with their histories, transformations, and
                cultural significance.
              </p>
              <p className="text-muted-foreground md:text-xl">
                We believe in creating spaces where education meets experience,
                where critical thinking enhances rather than diminishes the
                beauty of these traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f2]">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-serif tracking-tighter sm:text-4xl text-[#3a3a3a]">
                Who Is This Retreat For?
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                  1
                </div>
                <h3 className="text-xl font-semibold">Beauty Enthusiasts</h3>
                <p className="text-sm text-muted-foreground">
                  Those interested in beauty, wellness, and self-care beyond
                  consumer trends.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                  2
                </div>
                <h3 className="text-xl font-semibold">Cultural Explorers</h3>
                <p className="text-sm text-muted-foreground">
                  Individuals looking to better understand the origins and
                  ethics of wellness practices.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9c8b7d] text-white">
                  3
                </div>
                <h3 className="text-xl font-semibold">Curious Minds</h3>
                <p className="text-sm text-muted-foreground">
                  Anyone curious about Asian and Asian American beauty culture.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button asChild className="bg-[#9c8b7d] hover:bg-[#7d6e62]">
                <Link href="/experience">Explore the Weekend Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
