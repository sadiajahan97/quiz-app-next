import { z } from "zod";

export const newUser = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  displayPicture: z.string(),
});

export type NewUser = z.infer<typeof newUser>;
