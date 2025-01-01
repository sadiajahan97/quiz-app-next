import { Metadata } from "next";
import Link from "next/link";
import { FaGoogle, FaFacebook } from "react-icons/fa";

import { Button } from "@quiz-app/components/ui/button";

import { SignInForm } from "./components/sign-in-form";

export const metadata: Metadata = {
  title: "Quiz App | Sign In",
  description: "Created by Sadia Iffat Jahan",
};

export default function SignInPage() {
  return (
    <main className="flex grow flex-col items-center justify-center gap-4">
      <SignInForm />
      <Link className="text-xs hover:underline" href="/forgot-password">
        Forgot Password?
      </Link>
      <p className="text-xs leading-none">
        Or sign in with{" "}
        <Link href="https://accounts.google.com/">
          <FaGoogle className="inline" />
        </Link>{" "}
        or{" "}
        <Link href="https://www.facebook.com/">
          <FaFacebook className="inline" />
        </Link>
      </p>
      <p className="text-xs">Or create a new account</p>
      <Button>
        <Link href="/sign-up">Sign Up</Link>
      </Button>
    </main>
  );
}
