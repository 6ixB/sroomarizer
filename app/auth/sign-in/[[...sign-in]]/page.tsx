import { SignIn } from "@clerk/nextjs";

export default function AuthSignInPage() {
  return (
    <main className="flex min-h-screen justify-center p-24">
      <SignIn />
    </main>
  );
}
