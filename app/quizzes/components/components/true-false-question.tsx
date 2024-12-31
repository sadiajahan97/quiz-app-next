import * as React from "react";
import { Label } from "@quiz-app/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@quiz-app/components/ui/radio-group";

export type TrueFalseAnswer = "True" | "False";

interface TrueFalseQuestionProps {
  answers: TrueFalseAnswer[];
  question: string;
  questionNumber: number;
  setAnswers: React.Dispatch<React.SetStateAction<TrueFalseAnswer[]>>;
}

export function TrueFalseQuestion({
  answers,
  question,
  questionNumber,
  setAnswers,
}: TrueFalseQuestionProps) {
  function handleValueChange(value: TrueFalseAnswer): void {
    setAnswers(
      answers.map((answer, index) =>
        index === questionNumber ? value : answer
      )
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <p>{question}</p>
      <RadioGroup
        onValueChange={(value: TrueFalseAnswer) => handleValueChange(value)}
        value={answers[questionNumber]}
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem
            id={`question-${questionNumber}-option-true`}
            value="True"
          />
          <Label
            className="text-base"
            htmlFor={`question-${questionNumber}-option-true`}
          >
            True
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            id={`question-${questionNumber}-option-false`}
            value="False"
          />
          <Label
            className="text-base"
            htmlFor={`question-${questionNumber}-option-false`}
          >
            False
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
