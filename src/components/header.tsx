import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight"
          >
            Luminara
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Experience
          </Link>
          <Link
            href="/insights"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Insights
          </Link>
          <Link
            href="/engagement"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Ethical Engagement
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden md:flex bg-[#9c8b7d] hover:bg-[#7d6e62]"
          >
            <Link href="/contact">Book Now</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  About
                </Link>
                <Link
                  href="/experience"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Experience
                </Link>
                <Link
                  href="/insights"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Insights
                </Link>
                <Link
                  href="/engagement"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Ethical Engagement
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Contact
                </Link>
                <Button
                  asChild
                  className="mt-4 bg-[#9c8b7d] hover:bg-[#7d6e62]"
                >
                  <Link href="/contact">Book Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
