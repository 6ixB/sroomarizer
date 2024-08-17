import { SignUp } from "@clerk/nextjs";

export default function AuthSignUpPage() {
  return (
    <main className="flex min-h-screen justify-center p-24">
      <SignUp />
    </main>
  );
}
