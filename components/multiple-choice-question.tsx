import * as React from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { MCQForm } from "@quiz-app/schemas/multiple-choice-question";

export interface MCQInterface {
  options: string[];
  question: string;
}

interface MultipleChoiceQuestionProps {
  index: number;
  question: MCQInterface;
  setValue: UseFormSetValue<MCQForm>;
  watch: UseFormWatch<MCQForm>;
}

export function MultipleChoiceQuestion({
  index,
  question,
  setValue,
  watch,
}: MultipleChoiceQuestionProps) {
  React.useEffect(
    () => setValue(`${index}.question`, question.question),
    [index, question.question, setValue]
  );

  return (
    <div className="flex flex-col gap-4">
      <p>{question.question}</p>
      <RadioGroup
        onValueChange={(value) => setValue(`${index}.answer`, value)}
        value={watch(`${index}.answer`)}
      >
        {question.options.map((option, index) => (
          <div className="flex items-center space-x-2" key={index}>
            <RadioGroupItem id={`option-${index}`} value={option} />
            <Label
              className="text-base font-normal"
              htmlFor={`option-${index}`}
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
