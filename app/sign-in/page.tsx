import { Metadata } from "next";
import { Input } from "@quiz-app/components/ui/input";
import { Button, buttonVariants } from "@quiz-app/components/ui/button";
import { Checkbox } from "@quiz-app/components/ui/checkbox";
import InputPassword from "./components/input-password";
import Link from "next/link";
import { Label } from "@quiz-app/components/ui/label";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Quiz App | Sign In",
  description: "Created by Sadia Iffat Jahan",
};

export default function SignInPage() {
  return (
    <main className="mx-auto flex h-screen w-fit flex-col justify-center gap-4">
      <Input className="w-60" placeholder="Email" />
      <InputPassword />
      <div className="flex items-center gap-2">
        <Checkbox id="remember-me" />
        <Label
          className="text-xs font-normal tracking-widest"
          htmlFor="remember-me"
        >
          Remember Me
        </Label>
      </div>
      <Button className={buttonVariants({ variant: "ghost" })}>Sign In</Button>
      <Link className="text-xs hover:underline" href="/forgot-password">
        Forgot Password?
      </Link>
      <p className="mt-2 text-center text-xs leading-none">
        Or sign in with{" "}
        <Link href="https://accounts.google.com/">
          <FaGoogle className="inline" />
        </Link>{" "}
        or{" "}
        <Link href="https://www.facebook.com/">
          <FaFacebook className="inline" />
        </Link>
      </p>
      <p className="mt-2 text-center text-xs">Or create a new account</p>
      <Button className={buttonVariants({ variant: "ghost" })}>Sign Up</Button>
    </main>
  );
}
