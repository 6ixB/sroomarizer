import { Button } from "@/components/ui/button";
import { SignedIn } from "@clerk/nextjs";
import { NavMenu } from "./nav-menu";
import { Icons } from "../icons";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-background p-4 dark:border-gray-900">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center gap-x-8">
          <Link
            href="/"
            className="flex select-none items-center gap-x-2 font-bold text-primary dark:text-primary-foreground"
          >
            <Icons.sroomarizer className="size-10 fill-primary dark:fill-primary-foreground" />
            Sroomarizer
          </Link>
          <div className="flex items-center gap-x-4">
            <NavMenu />
            <SignedIn>
              <Link href="/">
                <Button>Buy Tokens 🪙</Button>
              </Link>
            </SignedIn>
          </div>
        </div>
        <div className="flex items-center gap-x-4 text-sm font-medium">
          The Perfect Way to Get Your Resume Graded 📝 🎓 ✨
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
