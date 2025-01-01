"use client";

import * as React from "react";

import { Button } from "@quiz-app/components/ui/button";

import {
  TrueFalseAnswer,
  TrueFalseQuestion,
} from "./components/true-false-question";

interface TrueFalseQuestionsFormProps {
  questions: string[];
}

export function TrueFalseQuestionsForm({
  questions,
}: TrueFalseQuestionsFormProps) {
  const [answers, setAnswers] = React.useState<TrueFalseAnswer[]>(
    Array(questions.length).fill(undefined)
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
            <TrueFalseQuestion
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
