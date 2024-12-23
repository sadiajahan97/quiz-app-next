"use client";

import { Button } from "@quiz-app/components/ui/button";
import { Input } from "@quiz-app/components/ui/input";
import { useForm } from "react-hook-form";
import { Checkbox } from "@quiz-app/components/ui/checkbox";
import { Label } from "@quiz-app/components/ui/label";
import { InputPassword } from "@quiz-app/components/ui/input-password";
import { UserAuth, userAuth } from "@quiz-app/schemas/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignInForm() {
  const { register, watch } = useForm<UserAuth>({
    resolver: zodResolver(userAuth),
  });
  return (
    <form className="flex flex-col gap-4">
      <Input className="w-60" placeholder="Email" {...register("email")} />
      <InputPassword placeholder="Password" {...register("password")} />
      <div className="flex items-center gap-2">
        <Checkbox
          checked={watch("rememberUser")}
          id="remember-user"
          onCheckedChange={(checked) =>
            register("rememberUser").onChange({
              target: { name: "rememberUser", value: checked },
            })
          }
          {...register("rememberUser")}
        />
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
