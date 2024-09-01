import { ModeToggle } from "@/components/mode-toggle";
import { SheetMenu } from "@/components/base/protected/sheet-menu";
import { ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center sm:mx-8">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
        <Link href={`/tokens`}>
          <Button variant="outline">🪙 100</Button>
        </Link>
          <ModeToggle />
          <ClerkLoaded>
            <UserButton
              userProfileUrl="/user-profile"
              userProfileMode="navigation"
            />
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}
