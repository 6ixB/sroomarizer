import { SignUp, UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <main className="flex max-h-screen justify-center p-16">
      <UserProfile/>
    </main>
  );
}
