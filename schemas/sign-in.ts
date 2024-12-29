import { z } from "zod";

export const userAuth = z.object({
  email: z.string().nonempty(),
  password: z.string().nonempty(),
  rememberUser: z.boolean(),
});

export type UserAuth = z.infer<typeof userAuth>;
