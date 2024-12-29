import { z } from "zod";

export const createMCQForm = z
  .object({
    answer: z.string(),
    options: z.string().array(),
    question: z.string(),
  })
  .array();

export const mcqForm = z
  .object({
    answer: z.string(),
    question: z.string(),
  })
  .array();

export type CreateMCQForm = z.infer<typeof createMCQForm>;
export type MCQForm = z.infer<typeof mcqForm>;
