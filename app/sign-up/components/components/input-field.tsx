import * as React from "react";

interface InputFieldProps {
  children: React.ReactNode;
  errorMessage: string | undefined;
}

export function InputField({ children, errorMessage }: InputFieldProps) {
  return (
    <div>
      {children}
      {errorMessage && (
        <p className="mt-1 text-xs text-destructive">* {errorMessage}</p>
      )}
    </div>
  );
}
