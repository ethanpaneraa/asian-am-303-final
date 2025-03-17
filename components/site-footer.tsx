import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-[#f8f5f2] py-12">
      <div className="container grid gap-8 px-4 md:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-lg font-semibold">Luminara</h3>
          <p className="text-sm text-muted-foreground">
            An immersive experience in Asian and Asian American beauty and
            wellness traditions.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Experience
            </Link>
            <Link
              href="/insights"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Insights
            </Link>
            <Link
              href="/ethical-engagement"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Ethical Engagement
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Contact</h3>
          <address className="not-italic text-sm text-muted-foreground">
            <p>Evanston, IL</p>
            <p>info@luminara-retreat.com</p>
            <p>(555) 123-4567</p>
          </address>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="https://ethanpinedaa.dev/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://ethanpinedaa.dev/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://ethanpinedaa.dev/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Luminara Wellness Retreat. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
