import { z } from "zod";

export const userAuth = z.object({
  email: z.string(),
  password: z.string(),
  rememberUser: z.boolean(),
});

export type UserAuth = z.infer<typeof userAuth>;
