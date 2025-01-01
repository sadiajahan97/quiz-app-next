import { Metadata } from "next";
import Link from "next/link";
import { FaGoogle, FaFacebook } from "react-icons/fa";

import { Button } from "@quiz-app/components/ui/button";

import { SignUpForm } from "./components/sign-up-form";

export const metadata: Metadata = {
  title: "Quiz App | Sign Up",
  description: "Created by Sadia Iffat Jahan",
};

export default function SignUpPage() {
  return (
    <main className="flex grow flex-col items-center justify-center gap-4">
      <SignUpForm />
      <p className="text-xs leading-none">
        Or sign up with{" "}
        <Link href="https://accounts.google.com/">
          <FaGoogle className="inline" />
        </Link>{" "}
        or{" "}
        <Link href="https://www.facebook.com/">
          <FaFacebook className="inline" />
        </Link>
      </p>
      <p className="text-xs">Already have an account?</p>
      <Button>
        <Link href="/sign-in">Sign In</Link>
      </Button>
    </main>
  );
}
