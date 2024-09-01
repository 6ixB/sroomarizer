"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SheetMenu } from "@/components/base/protected/sheet-menu";
import { ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  const [token, setToken] = useState(0);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        // Fetch the token data
        let response = await fetch(`/api/service/token/123/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch token");
        }

        const data = await response.json();

        console.log(data);

        if (data.length === 0) {
          // If no data, create it
          response = await fetch(`/api/service/token/123/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Failed to create token");
          }

          // Get the result after creation
          const createdData = await response.json();
          setToken(createdData.tokenAmount);
          console.log("Token created successfully:", createdData);
        } else {
          // If data exists, set the token
          setToken(data[0].tokenAmount);
          console.log("Token fetched successfully:", data);
        }
      } catch (error) {
        console.error("Error fetching or creating token:", error);
      }
    };

    fetchTransaction();
  }, []);

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center sm:mx-8">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <div className="flex items-center gap-x-2 text-xs font-bold">
            <Coins className="size-4" />
            132
          </div>
          <ClerkLoaded>
            <UserButton
              userProfileUrl="/user-profile"
              userProfileMode="navigation"
            />
          </ClerkLoaded>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
