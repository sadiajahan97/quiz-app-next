import * as React from "react";

import { Label } from "@quiz-app/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@quiz-app/components/ui/radio-group";
import { Textarea } from "@quiz-app/components/ui/textarea";
import { TrueFalseAnswer } from "@quiz-app/types/true-false-question";

export type TrueFalseQuestionAction =
  | { type: "add question" }
  | { type: "remove question"; payload: { questionNumber: number } }
  | {
      type: "update answer";
      payload: {
        newAnswer: TrueFalseAnswer;
        questionNumber: number;
      };
    }
  | {
      type: "update question";
      payload: { newQuestion: string; questionNumber: number };
    };

export interface CreateTrueFalseQuestionInterface {
  answer: TrueFalseAnswer;
  question: string;
}

interface CreateTrueFalseQuestionProps {
  dispatch: React.ActionDispatch<[action: TrueFalseQuestionAction]>;
  questionNumber: number;
  state: CreateTrueFalseQuestionInterface[];
}

export function CreateTrueFalseQuestion({
  dispatch,
  questionNumber,
  state,
}: CreateTrueFalseQuestionProps) {
  return (
    <div className="flex flex-col gap-4">
      <Textarea
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          dispatch({
            type: "update question",
            payload: {
              newQuestion: event.target.value,
              questionNumber,
            },
          })
        }
        placeholder="Add question"
        value={state[questionNumber]?.question}
      />
      <RadioGroup
        onValueChange={(value: string) =>
          dispatch({
            type: "update answer",
            payload: {
              newAnswer: value as TrueFalseAnswer,
              questionNumber,
            },
          })
        }
        value={state[questionNumber]?.answer}
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
