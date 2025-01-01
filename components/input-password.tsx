"use client";

import { Eye, EyeOff } from "lucide-react";
import * as React from "react";

import { Input } from "./ui/input";
import { Toggle } from "./ui/toggle";

export function InputPassword(props: React.ComponentProps<"input">) {
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);
  return (
    <div className="flex items-center gap-2">
      <Input
        className="w-60"
        type={isPasswordVisible ? "text" : "password"}
        {...props}
      />
      <Toggle
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        size="sm"
        variant="outline"
      >
        {isPasswordVisible ? <EyeOff /> : <Eye />}
      </Toggle>
    </div>
  );
}
