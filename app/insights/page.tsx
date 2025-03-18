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

export default function InsightsPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f2]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-serif tracking-tighter sm:text-4xl md:text-5xl text-[#3a3a3a]">
                Beauty & Wellness Insights
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                The academic framework behind the retreat, breaking down the key
                readings in accessible language.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">
            <Card className="overflow-hidden flex flex-col">
              <div className="relative aspect-square w-full">
                <Image
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_PATH || ""
                  }/wellness-pic1.png`}
                  alt="Yoga and meditation practice"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-serif">
                  The Branding of Wellness
                </CardTitle>
                <CardDescription className="text-sm">
                  How Ayurveda and yoga were transformed into consumer products
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground">
                  This theme explores how ancient practices like yoga and
                  Ayurveda have been commodified in Western markets. We examine
                  how these traditions have been stripped of their cultural and
                  spiritual contexts to become marketable products.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden flex flex-col">
              <div className="relative aspect-square w-full">
                <Image
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_PATH || ""
                  }/k-beauty.jpg`}
                  alt="K-Beauty products display"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-serif">
                  The Rise of K-Beauty
                </CardTitle>
                <CardDescription className="text-sm">
                  How Korean beauty reshaped global beauty standards
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground">
                  K-Beauty has become a global phenomenon, influencing beauty
                  standards and practices worldwide. This theme examines the
                  cultural, economic, and social factors that contributed to its
                  rise.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden flex flex-col">
              <div className="relative aspect-square w-full">
                <Image
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_PATH || ""
                  }/colorism.jpg`}
                  alt="Diverse skin tones and beauty products"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-serif">
                  Colorism & Beauty Hierarchies
                </CardTitle>
                <CardDescription className="text-sm">
                  Why skin whitening products remain a global billion-dollar
                  industry
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground">
                  This theme explores the complex relationship between skin
                  color, beauty standards, and power dynamics in Asian cultures.
                  We examine the historical and social factors behind fair skin
                  preference.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild className="bg-[#9c8b7d] hover:bg-[#7d6e62]">
              <Link href="/essay">Read our essay on beauty & wellness</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
