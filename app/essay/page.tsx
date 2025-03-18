import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function EssayPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="container max-w-4xl px-4 py-12 md:py-16 lg:py-24">
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Luminara
            </Link>
          </Button>

          <div className="mb-12 space-y-4">
            <div className="space-y-4">
              <h1 className="text-3xl font-serif tracking-tight sm:text-4xl md:text-5xl text-[#3a3a3a]">
                Beauty, Wellness, and Power: A Retreat into Global Consumption
              </h1>
              <div className="text-sm text-muted-foreground">
                <p className="mb-1">Ethan Pineda</p>
                <p className="mb-1">Professor Shalani Shankar</p>
                <p className="mb-1">
                  ASIAN_AM 303: Asian Persuasion - Advertising and Consumption
                </p>
                <p>March 16th, 2025</p>

                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <p className="font-bold">Reading Time:</p>
                  <span>15 minutes</span>

                  <p className="font-bold">Word Count:</p>
                  <span>1,853 words</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <p className="font-bold">Download raw PDF:</p>
                  <Link
                    href="/Pineda_Ethan_ASIAN_AM_303.pdf"
                    className="text-[#9c8b7d] hover:underline"
                  >
                    Beauty, Wellness, and Power: A Retreat into Global
                    Consumption (PDF)
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <nav className="mb-12 rounded-lg border bg-[#f8f5f2] p-4">
            <h2 className="mb-3 font-medium">Table of Contents</h2>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="#introduction"
                  className="text-[#9c8b7d] hover:underline"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#friday-evening"
                  className="text-[#9c8b7d] hover:underline"
                >
                  Friday Evening: Framing Wellness & Beauty
                </a>
              </li>
              <li>
                <a
                  href="#saturday-morning"
                  className="text-[#9c8b7d] hover:underline"
                >
                  Saturday Morning: K-Beauty & Digital Influences
                </a>
              </li>
              <li>
                <a
                  href="#saturday-evening"
                  className="text-[#9c8b7d] hover:underline"
                >
                  Saturday Evening: Colorism & Self-Perception
                </a>
              </li>
              <li>
                <a
                  href="#sunday-morning"
                  className="text-[#9c8b7d] hover:underline"
                >
                  Sunday Morning: Ethical Beauty & Wellness
                </a>
              </li>
              <li>
                <a
                  href="#conclusion"
                  className="text-[#9c8b7d] hover:underline"
                >
                  Conclusion
                </a>
              </li>
            </ul>
          </nav>

          <article className="prose prose-slate max-w-none">
            <section id="introduction">
              <h2 className="text-2xl font-serif tracking-tight text-[#3a3a3a]">
                Introduction
              </h2>
              <p>
                Asian and Asian American beauty and wellness standards and
                traditions have become deeply embedded within Western markets.
                The historical and cultural significance of traditions and
                customs have become repackaged into billion-dollar industries
                whose goals are to celebrate and commodify these cultural
                practices concurrently. Ayurveda and yoga, alongside K-Beauty
                and skin-lightening products, are framed by producers as being
                both ancient and modern materials goods. Goods that are
                accessible and yet, exotic offer Western consumers a curated
                experience of what it means to practice self-care while largely
                obscuring the histories of racialization, labor, and power that
                shape the nature of these products and services.
              </p>

              <p>
                As these traditions continue to maintain growth in mainstream
                media, they consider us to beg urgent questions regarding
                authenticity, racialized desirability, and the capitalist forces
                that dictate both beauty and wellness standards. In this paper,
                I introduce Luminara, a fictional weekend wellness retreat
                offered in the suburbs of Chicago. Luminara's focus is to
                provide its members with an immersive experience in Asian and
                Asian American beauty and wellness traditions while also making
                participants critically engage with their commodification of the
                historical and cultural roots of day-to-day activities.
              </p>

              <p>
                The goal of Luminara is not just to be a place for relaxation,
                it's meant to serve as a function to push guests to interrogate
                and move beyond surface-level engagement with how the beauty and
                wellness industries construct their ideas of what it considers
                to be authentic, desirable, and cultural ownership. This paper
                argues that wellness is not a neutral or universally accessible
                space. Rather, it is a contested site where racial, economic,
                and cultural hierarchies shape which traditions are valued, who
                profits from them, and how they are consumed. By examining the
                events and framework of Luminara, I highlight how beauty and
                wellness function not just as industries but as spaces shaped by
                historical and market forces.
              </p>

              <p>
                Wellness, especially in the Western world, has often been framed
                and positioned as an individual pursuit. In this context,
                wellness is frequently considered separate from its cultural and
                spiritual roots. Eastern practices such as Ayurveda and yoga
                have been heavily commodified for mass consumption, often at the
                expense of their original meanings and significance. As Hareem
                Khan discusses, Ayurveda's transition into the United States
                wellness industry operates through racialized narratives that
                portray it as both "ancient" and "universal," making it
                accessible to a broader audience while simultaneously detaching
                it from its historical and spiritual contexts. Khan writes that
                Ayurveda, as a cultural commodity, "activates unique forms of
                authenticity such that Ayurveda gets located to a racialized
                tradition while simultaneously deeming itself an inclusive
                ideology" (Khan 2022:20). This process masks the complex
                histories of casteism, colonialism, and South Asian social
                hierarchies embedded in these practices.
              </p>
            </section>

            <section id="friday-evening" className="mt-12">
              <h2 className="text-2xl font-serif tracking-tight text-[#3a3a3a]">
                Friday Evening: Framing Wellness & Beauty
              </h2>

              <p>
                Thus, during our first night on Friday at Lumivera, at 6:00 PM,
                guests will enter a softly lit-up room that is scented with
                jasmine. There, they will find delicate teacups and handwritten
                scrolls that are waiting for them. The Tea and Identity Ceremony
                is designed to offer a space for reflection on how wellness
                practices have been repackaged as "trends." Before sipping their
                tea, guests will participate in our Reclaiming Ritual activity,
                where they will write down a wellness practice they currently
                engage in such as yoga, skincare, or meditation and reflect on
                the origins of that practice. This exercise asks participants to
                confront how personal rituals may be products of global
                commodification.
              </p>

              <p>
                The evening will continue at 7:30 PM with an opening discussion
                on: The Globalization of Wellness. Drawing on Andrea Jain's
                analysis of yoga's commercialization, this conversation will
                push guests to consider how yoga, like Ayurveda, has been
                systematically rebranded to fit Western ideals of
                self-improvement. Jain makes the case that yoga has undergone a
                systematic and intentional "rebranding" process to make it more
                marketable and appealing as a universal product for global
                consumption. She writes, "the second half of the twentieth
                century witnessed an explosion of sundry yoga brands into the
                marketplace. Entrepreneurs began to brand yoga in the same ways
                other products and services are branded, by 'giving it a name,
                term, design, symbol, or any other feature that identifies one
                seller's good or services as distinct from those of other
                sellers.'" (Jain 2014:78).
              </p>

              <blockquote className="border-l-4 border-[#9c8b7d] pl-4 italic">
                "Yoga entrepreneurs and organizations seek to disseminate yoga
                to the general populace. To do that, yoga needs to stand out in
                the marketplace among available products and services by being
                branded or 'packaged' in ways that make it seem valuable,
                accessible, and unique."
                <footer className="text-sm">— Andrea Jain (2015:95)</footer>
              </blockquote>

              <p>
                This shift in branding led to the rise of what Jain calls
                "postural yoga brands," whose goals are to be widely consumed
                and globalized, positioning yoga as a "universal and scientific
                system that anyone can adopt as part of his or her larger
                worldview and practice" (Jain 2015:76). Because of how stripped
                it has become from its philosophical roots, yoga has essentially
                been repackaged and exported to align with Western ideals of
                physical fitness and self-improvement. In essence, yoga has
                transformed into a "diversified global market" where it is sold
                as a tool for "self-development through physical and
                psychological transformation" (Jain 2015:80). This shift
                reflects broader consumer culture trends, where ancient
                spiritual traditions are detached from their cultural contexts
                and repurposed into personalized products and services. Such
                reimaginings distance these practices from their original
                meanings, reducing them to commodities shaped by Western
                capitalist consumption.
              </p>

              <p>
                These tensions between authenticity and commodification are
                critical to understanding how the wellness industry handles
                traditional Asian practices. For Luminara, this discussion will
                not merely introduce guests to global wellness trends but will
                ask them to critically examine whether the "authenticity" of
                these practices is truly preserved or has become part of a
                larger marketing strategy. By grounding our first evening in
                reflection and conversation, we hope to set the tone for the
                weekend, encouraging guests to interrogate the global beauty and
                wellness industries and their participation within them.
              </p>
            </section>

            <section id="saturday-morning" className="mt-12">
              <h2 className="text-2xl font-serif tracking-tight text-[#3a3a3a]">
                Saturday Morning: K-Beauty & Digital Influences
              </h2>

              <p>
                Next, following our amazing and intellectual first night of
                activities, during the second Luminara will focus on the global
                phenomenon of Korean Beauty, or K-Beauty for short, and its
                impact on Asian American beauty standards. Each of our guests is
                to be invited to an introduction to a curated multi-step
                skincare routine ritual that will reflect not just self-care but
                also the commodification of beauty standards that are tied to
                racialized and global consumer patterns.
              </p>

              <p>
                Here, we base this activity on the research conducted by Suh,
                which showcases how Korean American women navigate conflicting
                beauty ideals that are shaped by both Western and Korean norms
                and expectations. One of the participants from Suh's
                ethnographic study revealed that "My mom always wanted me to do
                double eyelid surgery in Korean for that reason... I am also
                discouraged when I do personally put makeup in the same way as
                Americans do. Because of my different facial looks, I am not
                pretty and I put that style of makeup on my face" (Suh
                2023:1102).
              </p>

              <p>
                Thus, starting at 9:00 AM, guests at Luminara will partake in
                the K-Beauty Phenomena: Alive Skin Care Ritual demonstration
                followed by an activity called Instagram versus Reality. In this
                event, guests will be comparing the market campaigns of
                traditional beauty ideals, and learn how the Westernization of
                digital media reshapes traditional beauty standards. As we saw
                in Suh's work in how young Korean American females were
                "actively generating global imagination and discourses on
                K-beauty and K-fashion... but their empowerment and
                enlightenment were achieved by consuming commodities to
                discipline their bodies" (Suh, 2023:1107). Visibility, then,
                often comes with its own set of constraints.
              </p>

              <p>
                Following the early morning activity, later at 11:00 AM, the
                focus of the conversation shifts to a conversation on Social
                Media and the Attention Economy. Here, guests will begin to
                discuss how Asian beauty influencers negotiate their
                authenticity and commercial pressures as young women "willingly
                embraced consuming which made them constantly explore and
                purchase commodities to fulfill their desire" (Suh 2023:1107)
                highlighting just how empowerment and consumption are deeply
                woven with one another.
              </p>

              <p>
                Finally, we conclude Saturday morning finishes a guided
                journaling session where participants are asked: "In what ways
                am I participating in these cycles of consumption? How do I
                distinguish between cultural appreciation and commodification in
                my beauty practices?". Through this, we hope that guests can
                encourage critical self-reflection.
              </p>

              <p>
                Thus, through the Saturday morning rituals and events, we hope
                to showcase how beauty becomes a site of both adaptation as well
                as discipline. In this case, women are expected to not just
                follow high beauty standards but also be able to "code switch"
                between cultural codes of appearance depending on context and
                environment. Because of this, beauty is not only a ritual of
                self-expression and personal taste but also a performance of
                belonging and acceptability that is ultimately shaped by
                transnational media and market forces that demand constant
                surveillance and transformation of self. Beauty then is a kind
                of "soft power" that forces women to consume products that are
                supposed to promise empowerment where instead they promote
                racialized hierarchies and capitalism.
              </p>
            </section>

            <section id="saturday-evening" className="mt-12">
              <h2 className="text-2xl font-serif tracking-tight text-[#3a3a3a]">
                Saturday Evening: Colorism & Self-Perception
              </h2>

              <p>
                Lastly, to close off Saturday's activities, starting at 7:00 PM,
                our guests will participate in a sound bath healing event to
                cultivate stillness and reflection on colorism, self-perception,
                and beauty. As guests rest, they will be read the research
                conducted by Parameswaran which showcases how products such as
                Fair & Lovely market skin lightening as both a cure and
                transformation process that enables one to undergo "recovery
                purity" where their skin becomes fairer, marketing darker skin
                as an "accumulated poison" (Parameswaran 2011:68).
              </p>

              <blockquote className="border-l-4 border-[#9c8b7d] pl-4 italic">
                "The usage and language of detoxification and corrections feed
                off of insecurity, and as Parameswarn showcases, these products
                are 'buying their consumers' because of 'beauty's asymmetrical
                relation with differently raced bodies'"
                <footer className="text-sm">— Parameswaran (2011:75)</footer>
              </blockquote>

              <p>
                The idea behind these products and narratives do more than
                promise transformations, they are essentially teaching consumers
                that investing their labor and money earns a return on
                investment on their beauty (Parameswaran 2011:72). In this case,
                what is said to be "self-care" is just a projection and a
                structural hold on racial hierarchies.
              </p>
            </section>

            <section id="sunday-morning" className="mt-12">
              <h2 className="text-2xl font-serif tracking-tight text-[#3a3a3a]">
                Sunday Morning: Ethical Beauty & Wellness
              </h2>

              <p>
                The final morning of Luminara will invite our guests into one
                final quiet space of guided journaling and closing reflections.
                After a weekend of immersive discussions and critical
                engagements, participants will be asked to consider what beauty,
                wellness, and critical engagement with these topics and ideas
                ultimately mean moving forward. Guests will be reminded that
                these are not resolutions but rather, is a process that will
                leave them with different lingering questions regarding how
                global industries shape our perceptions of desirability and
                authenticity.
              </p>
            </section>

            <section id="conclusion" className="mt-12">
              <h2 className="text-2xl font-serif tracking-tight text-[#3a3a3a]">
                Conclusion
              </h2>

              <p>
                Ultimately, our goal here at Luminara is not to simply be a
                retreat for education and indulgence. Instead, we hope that it
                is a journey and reflection of the very structures that shape
                both beauty and wellness in our lives. By guiding our guests
                through these experiences, we hope that their participation in
                our retreat leaves them with an understanding that their
                participation in these markets carries both social and political
                weight that calls for a greater sense of mindfulness and
                responsibility.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
