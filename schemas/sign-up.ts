import { z } from "zod";

export const newUser = z
  .object({
    name: z.string().nonempty("Name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email format"),
    password: z.string().nonempty("Password is required"),
    confirmPassword: z.string(),
    displayPicture: z.string().optional(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type NewUser = z.infer<typeof newUser>;
