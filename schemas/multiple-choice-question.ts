import { z } from "zod";

export const mcqForm = z
  .object({
    answer: z.string(),
    question: z.string(),
  })
  .array();

export type MCQForm = z.infer<typeof mcqForm>;
