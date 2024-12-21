"use client";

import { Input } from "@quiz-app/components/ui/input";
import { Toggle, toggleVariants } from "@quiz-app/components/ui/toggle";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function InputPassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <Input
        className="w-60"
        placeholder="Password"
        type={isPasswordVisible ? "text" : "password"}
      />
      <Toggle
        className={toggleVariants({ size: "sm", variant: "outline" })}
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        {isPasswordVisible ? <EyeOff /> : <Eye />}
      </Toggle>
    </div>
  );
}
