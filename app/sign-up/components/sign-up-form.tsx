"use client";

import { Button } from "@quiz-app/components/ui/button";
import { Input } from "@quiz-app/components/ui/input";
import { useForm } from "react-hook-form";
import { InputPassword } from "@quiz-app/components/ui/input-password";
import { Label } from "@quiz-app/components/ui/label";
import { NewUser, newUser } from "@quiz-app/schemas/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./components/input-field";

export default function SignUpForm() {
  const {
    formState: { errors },
    register,
  } = useForm<NewUser>({
    resolver: zodResolver(newUser),
  });
  return (
    <form className="flex flex-col gap-4">
      <InputField errorMessage={errors.name?.message}>
        <Input className="w-60" placeholder="Full Name" {...register("name")} />
      </InputField>
      <InputField errorMessage={errors.email?.message}>
        <Input className="w-60" placeholder="Email" {...register("email")} />
      </InputField>
      <InputField errorMessage={errors.password?.message}>
        <InputPassword placeholder="Password" {...register("password")} />
      </InputField>
      <InputField errorMessage={errors.confirmPassword?.message}>
        <InputPassword
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
      </InputField>
      <Label htmlFor="display-picture">
        Choose a profile picture &#40;optional&#41;:
      </Label>
      <Input
        accept="image/*"
        id="display-picture"
        type="file"
        {...register("displayPicture")}
      />
      <Button>Sign Up</Button>
    </form>
  );
}
