import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import ProtectedPanelLayout from "@/components/base/protected/protected-panel-layout";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI-Powered Resume Analyzer - Sroomarizer",
  description: "AI-Powered Resume Analyzer",
};

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl="/"
      appearance={{
        variables: {
          colorPrimary: "hsl(262.1, 83.3%, 57.8%)",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ProtectedPanelLayout>{children}</ProtectedPanelLayout>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
