"use client";

import * as React from "react";

import { Button } from "@quiz-app/components/ui/button";

import {
  MCQInterface,
  MultipleChoiceQuestion,
} from "./components/multiple-choice-question";

interface MultipleChoiceQuestionsFormProps {
  questions: MCQInterface[];
}

export function MultipleChoiceQuestionsForm({
  questions,
}: MultipleChoiceQuestionsFormProps) {
  const [answers, setAnswers] = React.useState<string[]>(
    Array(questions.length).fill("")
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(answers);
  }

  return (
    <form
      className="flex flex-col"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit(event)
      }
    >
      <ol className="list-decimal font-bold">
        {questions.map((question, questionNumber) => (
          <li className="my-8" key={questionNumber}>
            <MultipleChoiceQuestion
              answers={answers}
              question={question}
              questionNumber={questionNumber}
              setAnswers={setAnswers}
            />
          </li>
        ))}
      </ol>
      <Button className="mx-auto w-fit">Submit</Button>
    </form>
  );
}
