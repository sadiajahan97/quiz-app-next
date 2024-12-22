import { Metadata } from "next";
import SignUpForm from "./components/sign-up-form";
import Link from "next/link";
import { Button } from "@quiz-app/components/ui/button";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Quiz App | Sign Up",
  description: "Created by Sadia Iffat Jahan",
};

export default function SignUpPage() {
  return (
    <main className="mx-auto flex h-screen w-fit flex-col justify-center gap-4">
      <SignUpForm />
      <p className="mt-2 text-center text-xs leading-none">
        Or sign up with{" "}
        <Link href="https://accounts.google.com/">
          <FaGoogle className="inline" />
        </Link>{" "}
        or{" "}
        <Link href="https://www.facebook.com/">
          <FaFacebook className="inline" />
        </Link>
      </p>
      <p className="mt-2 text-center text-xs">Already have an account?</p>
      <Button>
        <Link href="/sign-in">Sign In</Link>
      </Button>
    </main>
  );
}
