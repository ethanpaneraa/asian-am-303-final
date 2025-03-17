import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExperiencePage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f2]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-serif tracking-tighter sm:text-4xl md:text-5xl text-[#3a3a3a]">
                The Weekend Experience
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Step into a sanctuary of self-discovery. Over the course of a
                weekend, you'll explore beauty and wellness traditions rooted in
                Asian and Asian American histories—tracing their transformations
                from sacred rituals to billion-dollar industries. Through
                immersive experiences, thought-provoking discussions, and
                embodied practices, you'll leave with a deeper understanding of
                what it means to care for yourself while honoring the histories
                behind these traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="friday" className="w-full">
            <TabsList className="w-4xl mx-auto grid grid-cols-4">
              <TabsTrigger value="friday">Friday</TabsTrigger>
              <TabsTrigger value="saturday-morning">
                Saturday Morning
              </TabsTrigger>
              <TabsTrigger value="saturday-evening">
                Saturday Evening
              </TabsTrigger>
              <TabsTrigger value="sunday">Sunday</TabsTrigger>
            </TabsList>
            <TabsContent value="friday" className="mt-6">
              <div className="grid md:grid-cols-2 overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm h-full">
                <div className="flex flex-col">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-serif">
                      Friday Evening: Framing Wellness & Beauty
                    </h3>
                    <p className="text-muted-foreground">
                      The evening begins in quiet reflection. As the aroma of
                      steeping jasmine, matcha, and turmeric fills the air, we
                      invite you to consider: What does wellness mean to you?
                      Where do your self-care rituals come from? Over a curated
                      tea ceremony, you'll be guided through the histories of
                      Chinese, Japanese, and Ayurvedic traditions—uncovering how
                      these ancient practices have been rebranded and sold in
                      modern wellness spaces.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium text-sm text-[#9c8b7d] w-20">
                            6:00 PM
                          </span>
                          <h3 className="text-xl font-semibold">
                            Tea & Identity Ceremony
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          "Reclaiming Ritual" Activity: Before sipping their
                          tea, guests will write down a wellness practice they
                          currently engage in (e.g., yoga, skincare,
                          meditation). At the end of the weekend, they will
                          revisit their answers and reflect on what they've
                          learned.
                        </p>
                        <p className="text-muted-foreground mt-2">
                          <span className="font-medium">Framing Question:</span>{" "}
                          Do you see wellness as something personal or something
                          shaped by culture and commerce?
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium text-sm text-[#9c8b7d] w-20">
                            7:30 PM
                          </span>
                          <h3 className="text-xl font-semibold">
                            Opening Discussion: The Globalization of Wellness
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          A facilitated conversation on how beauty and wellness
                          trends are commodified and racialized in global
                          markets.
                        </p>
                        <p className="text-sm text-[#9c8b7d]">
                          Reading Reference: Khan (2022), Jain (2015)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/tea.webp`}
                    alt="Tea ceremony setting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="saturday-morning" className="mt-6">
              <div className="grid md:grid-cols-2 overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm h-full">
                <div className="flex flex-col">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-serif">
                      Saturday Morning: K-Beauty & Digital Influences
                    </h3>
                    <p className="text-muted-foreground">
                      In front of you, a carefully arranged K-Beauty skincare
                      ritual awaits—each step meticulously designed to create
                      the coveted 'glass skin' effect. As you apply serums and
                      masks, we'll discuss: Who gets to define beauty? How do
                      media, influencers, and digital culture shape the way we
                      see ourselves? The global K-Beauty boom has transformed
                      the beauty industry, but does it empower or reinforce
                      unattainable standards?
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium text-sm text-[#9c8b7d] w-20">
                            9:00 AM
                          </span>
                          <h3 className="text-xl font-semibold">
                            The K-Beauty Phenomenon: A Live Skincare Ritual
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          "Instagram vs. Reality" Activity: Guests will compare
                          real K-Beauty marketing campaigns vs. traditional
                          Korean beauty ideals and discuss how these standards
                          have shifted due to Westernization and social media.
                        </p>
                        <p className="text-muted-foreground mt-2">
                          <span className="font-medium">Framing Question:</span>{" "}
                          Does visibility in beauty spaces equal empowerment, or
                          does it come with new expectations?
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium text-sm text-[#9c8b7d] w-20">
                            11:00 AM
                          </span>
                          <h3 className="text-xl font-semibold">
                            Social Media & The Attention Economy
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          How Asian beauty influencers navigate visibility,
                          authenticity, and commercialization.
                        </p>
                        <p className="text-sm text-[#9c8b7d]">
                          Reading Reference: Suh (2023)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_PATH || ""
                    }/korean-skin-care.jpg`}
                    alt="K-Beauty skincare products"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="saturday-evening" className="mt-6">
              <div className="grid md:grid-cols-2 overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm h-full">
                <div className="flex flex-col">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-serif">
                      Saturday Evening: Colorism, Skin, & Self-Perception
                    </h3>
                    <p className="text-muted-foreground">
                      A single advertisement for a fairness cream can sell more
                      than a thousand words. Tonight, we gather around the fire
                      to examine the economy of skin tone—from India's 'Fair &
                      Lovely' campaigns to Korea's obsession with 'milky white'
                      complexions. Through stories, media, and lived
                      experiences, we confront the uncomfortable question: How
                      has colorism shaped our own perceptions of beauty?
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium text-sm text-[#9c8b7d] w-20">
                            4:00 PM
                          </span>
                          <h3 className="text-xl font-semibold">
                            The Politics of Skin: A Fireside Discussion
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          Interactive Media Analysis: Guests will watch
                          before-and-after fairness cream commercials and
                          discuss how beauty hierarchies are reinforced.
                        </p>
                        <p className="text-muted-foreground mt-2">
                          <span className="font-medium">Framing Question:</span>{" "}
                          How does the beauty industry capitalize on insecurity?
                          Who benefits from these ideals?
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium text-sm text-[#9c8b7d] w-20">
                            7:00 PM
                          </span>
                          <h3 className="text-xl font-semibold">
                            Shinrin-Yoku & Sound Bath Healing
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          A sensory experience designed to encourage
                          self-reflection on the body, beauty, and well-being.
                        </p>
                        <p className="text-sm text-[#9c8b7d]">
                          Reading Reference: Parameswaran (2011)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_PATH || ""
                    }/sound-bath.jpg`}
                    alt="Sound bath meditation setting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sunday" className="mt-6">
              <div className="grid md:grid-cols-2 overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm h-full">
                <div className="flex flex-col">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-serif">
                      Sunday Morning: Ethical Beauty & Wellness
                    </h3>
                    <p className="text-muted-foreground">
                      As the retreat draws to a close, we return to the body.
                      This morning's guided yoga session invites you to reflect
                      on the relationship between movement, breath, and cultural
                      meaning. In an industry where yoga has been rebranded into
                      a $16 billion market, what does it mean to practice with
                      authenticity? We'll end with a journaling
                      session—revisiting our initial thoughts on wellness and
                      exploring how our perspectives have shifted.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium text-sm text-[#9c8b7d] w-20">
                            8:30 AM
                          </span>
                          <h3 className="text-xl font-semibold">
                            Yoga & The Search for Authenticity
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          Revisiting the "Reclaiming Ritual" Activity: Guests
                          will look back at their original wellness practice and
                          consider what they've learned and how they'll engage
                          with it moving forward.
                        </p>
                        <p className="text-muted-foreground mt-2">
                          <span className="font-medium">Framing Question:</span>{" "}
                          How do we move forward with mindfulness—without
                          falling into the same cycles of consumption?
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium text-sm text-[#9c8b7d] w-20">
                            10:30 AM
                          </span>
                          <h3 className="text-xl font-semibold">
                            Journaling & Closing Reflections
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          A guided writing session on what beauty, wellness, and
                          self-care mean moving forward.
                        </p>
                        <p className="text-sm text-[#9c8b7d]">
                          Reading Reference: Jain (2015)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/yoga.jpeg`}
                    alt="Yoga and meditation space"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-16 mb-8 max-w-3xl mx-auto">
            <blockquote className="relative border-l-4 border-[#9c8b7d] pl-6 py-4 italic text-lg text-muted-foreground">
              <p>
                "In an era where self-care is marketed as an industry, what does
                it mean to truly engage in wellness? This retreat exists to
                challenge the superficial consumption of Asian beauty and
                wellness trends, instead offering a space to deeply engage with
                their histories, transformations, and cultural significance."
              </p>
              <footer className="mt-2 text-sm font-medium">
                — From our guiding philosophy
              </footer>
            </blockquote>
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild className="bg-[#9c8b7d] hover:bg-[#7d6e62]">
              <Link href="/contact">Book Your Experience</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
