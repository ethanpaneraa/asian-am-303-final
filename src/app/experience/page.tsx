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
                What to expect during your transformative journey with Luminara
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="friday" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    Friday Evening: Framing Wellness & Beauty
                  </CardTitle>
                  <CardDescription>
                    Begin your journey with an evening of intentional
                    reflection. Over a curated tea ceremony, we explore the
                    roots of Asian beauty and wellness, setting the stage for an
                    immersive weekend.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        Tea & Identity Ceremony
                      </h3>
                      <p className="text-muted-foreground">
                        Guests experience Chinese, Japanese, and Ayurvedic tea
                        traditions, reflecting on wellness as both a personal
                        and cultural practice.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        Opening Discussion: The Globalization of Wellness
                      </h3>
                      <p className="text-muted-foreground">
                        A facilitated conversation on how beauty and wellness
                        trends are commodified and racialized in global markets.
                      </p>
                      <p className="text-sm text-[#9c8b7d]">
                        Reading Reference: Khan (2022), Jain (2015)
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Tea ceremony setting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="saturday-morning" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    Saturday Morning: K-Beauty & Digital Influences
                  </CardTitle>
                  <CardDescription>
                    The rise of K-Beauty has reshaped beauty ideals across the
                    world—but how do these trends shape Asian and Asian American
                    identities?
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        The K-Beauty Phenomenon: A Live Skincare Ritual
                      </h3>
                      <p className="text-muted-foreground">
                        A hands-on skincare session while discussing beauty
                        hierarchies in Korea and the U.S.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        Social Media & The Attention Economy
                      </h3>
                      <p className="text-muted-foreground">
                        How Asian beauty influencers navigate visibility,
                        authenticity, and commercialization.
                      </p>
                      <p className="text-sm text-[#9c8b7d]">
                        Reading Reference: Suh (2023)
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="K-Beauty skincare products"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="saturday-evening" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    Saturday Evening: Colorism, Skin, & Self-Perception
                  </CardTitle>
                  <CardDescription>
                    Why is fair skin still seen as ideal in many Asian cultures?
                    What does this mean for beauty, race, and power?
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        The Politics of Skin: A Fireside Discussion
                      </h3>
                      <p className="text-muted-foreground">
                        Tracing the history of skin lightening products and
                        beauty hierarchies across Asia.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        Shinrin-Yoku & Sound Bath Healing
                      </h3>
                      <p className="text-muted-foreground">
                        A sensory experience designed to encourage
                        self-reflection on the body, beauty, and well-being.
                      </p>
                      <p className="text-sm text-[#9c8b7d]">
                        Reading Reference: Parameswaran (2011)
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Sound bath meditation setting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sunday" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    Sunday Morning: Ethical Beauty & Wellness
                  </CardTitle>
                  <CardDescription>
                    As we close our retreat, we ask: What does it mean to engage
                    with beauty and wellness in a respectful, informed way?
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        Yoga & The Search for Authenticity
                      </h3>
                      <p className="text-muted-foreground">
                        A session on yoga&apos;s decontextualization in the West
                        and how to practice it ethically.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        Journaling & Closing Reflections
                      </h3>
                      <p className="text-muted-foreground">
                        A guided writing session on what beauty, wellness, and
                        self-care mean moving forward.
                      </p>
                      <p className="text-sm text-[#9c8b7d]">
                        Reading Reference: Jain (2015)
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Yoga and meditation space"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
