import * as React from "react";

import { Label } from "@quiz-app/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@quiz-app/components/ui/radio-group";

export interface MCQInterface {
  options: string[];
  question: string;
}

interface MultipleChoiceQuestionProps {
  answers: string[];
  question: MCQInterface;
  questionNumber: number;
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

export function MultipleChoiceQuestion({
  answers,
  question,
  questionNumber,
  setAnswers,
}: MultipleChoiceQuestionProps) {
  function handleValueChange(value: string): void {
    setAnswers(
      answers.map((answer, index) =>
        index === questionNumber ? value : answer
      )
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <p>{question.question}</p>
      <RadioGroup
        onValueChange={(value: string) => handleValueChange(value)}
        value={answers[questionNumber]}
      >
        {question.options.map((option, optionNumber) => (
          <div className="flex items-center gap-2" key={optionNumber}>
            <RadioGroupItem
              id={`question-${questionNumber}-option-${optionNumber}`}
              value={option}
            />
            <Label
              className="text-base font-normal"
              htmlFor={`question-${questionNumber}-option-${optionNumber}`}
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
