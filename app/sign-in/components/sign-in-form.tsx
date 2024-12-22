"use client";

import { Button } from "@quiz-app/components/ui/button";
import { Input } from "@quiz-app/components/ui/input";
import { useForm } from "react-hook-form";
import { Toggle, toggleVariants } from "@quiz-app/components/ui/toggle";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@quiz-app/components/ui/checkbox";
import { Label } from "@quiz-app/components/ui/label";

export default function SignInForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { register, setValue, watch } = useForm<AuthInput>();
  console.log(watch("rememberUser"));
  return (
    <form className="flex flex-col gap-4">
      <Input
        className="w-60"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <div className="flex items-center gap-2">
        <Input
          className="w-60"
          placeholder="Password"
          type={isPasswordVisible ? "text" : "password"}
          {...register("password", { required: true })}
        />
        <Toggle
          className={toggleVariants({ size: "sm", variant: "outline" })}
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <EyeOff /> : <Eye />}
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="remember-user"
          onClick={() => setValue("rememberUser", !watch("rememberUser"))}
        />
        <Input type="hidden" {...register("rememberUser")} />
        <Label
          className="text-xs font-normal tracking-widest"
          htmlFor="remember-user"
        >
          Remember Me
        </Label>
      </div>
      <Button disabled={!(watch("email") && watch("password"))}>Sign In</Button>
    </form>
  );
}
