import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { NavMenu } from "./nav-menu";
import { Icons } from "../icons";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export default function NavBar() {
  return (
    <header className="container mx-auto flex justify-between p-4">
      <div className="flex items-center gap-x-8">
        <Link
          href="/"
          className="flex select-none items-center gap-x-2 font-bold text-primary dark:text-primary-foreground"
        >
          <Icons.sroomarizer className="size-10 fill-primary dark:fill-primary-foreground" />
          sroomarizer
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
        <SignedOut>
          <SignInButton>
            <Button>Grade your Resume with AI</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </header>
  );
}
