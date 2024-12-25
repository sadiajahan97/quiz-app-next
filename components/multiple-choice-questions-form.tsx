"use client";

import {
  MCQInterface,
  MultipleChoiceQuestion,
} from "./multiple-choice-question";
import { MCQForm, mcqForm } from "@quiz-app/schemas/multiple-choice-question";
import { Button } from "@quiz-app/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface MultipleChoiceQuestionsFormProps {
  questions: MCQInterface[];
}

export function MultipleChoiceQuestionsForm({
  questions,
}: MultipleChoiceQuestionsFormProps) {
  const { handleSubmit, setValue, watch } = useForm<MCQForm>({
    resolver: zodResolver(mcqForm),
  });

  function onSubmit(data: MCQForm) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ol className="flex list-decimal flex-col gap-8 font-bold">
        {questions.map((question, index) => (
          <li key={index}>
            <MultipleChoiceQuestion
              index={index}
              question={question}
              setValue={setValue}
              watch={watch}
            />
          </li>
        ))}
      </ol>
      <Button>Submit</Button>
    </form>
  );
}
