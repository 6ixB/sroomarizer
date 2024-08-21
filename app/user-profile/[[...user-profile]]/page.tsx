import { SignUp, UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen justify-center p-24">
      <UserProfile/>
    </main>
  );
}
