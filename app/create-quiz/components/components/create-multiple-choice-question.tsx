import { Input } from "@quiz-app/components/ui/input";
import { Button } from "@quiz-app/components/ui/button";
import { Textarea } from "@quiz-app/components/ui/textarea";
import * as React from "react";

export type Action =
  | {
      type: "add option";
      payload: { questionNumber: number };
    }
  | { type: "add question" }
  | {
      type: "remove option";
      payload: { optionNumber: number; questionNumber: number };
    }
  | { type: "remove question"; payload: { questionNumber: number } }
  | {
      type: "update option";
      payload: {
        newOption: string;
        optionNumber: number;
        questionNumber: number;
      };
    }
  | {
      type: "update question";
      payload: { newQuestion: string; questionNumber: number };
    };

export interface CreateMCQInterface {
  options: string[];
  question: string;
}

interface CreateMultipleChoiceQuestionProps {
  dispatch: React.ActionDispatch<[action: Action]>;
  questionNumber: number;
  state: CreateMCQInterface[];
}

export function CreateMultipleChoiceQuestion({
  dispatch,
  questionNumber,
  state,
}: CreateMultipleChoiceQuestionProps) {
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
        placeholder="Add question:"
        value={state[questionNumber]?.question}
      />
      <ol>
        {state[questionNumber]?.options?.map((option, optionNumber) => (
          <li
            className="my-4 flex items-center gap-4"
            key={`${questionNumber}-${optionNumber}`}
          >
            <b>{optionNumber + 1}.</b>
            <Input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: "update option",
                  payload: {
                    newOption: event.target.value,
                    optionNumber,
                    questionNumber,
                  },
                })
              }
              value={option}
            />
            <Button
              onClick={() =>
                dispatch({
                  type: "remove option",
                  payload: { optionNumber, questionNumber },
                })
              }
              type="button"
            >
              Remove option
            </Button>
          </li>
        ))}
      </ol>
      <Button
        className="mx-auto w-fit"
        onClick={() =>
          dispatch({
            type: "add option",
            payload: { questionNumber },
          })
        }
        type="button"
      >
        Add option
      </Button>
    </div>
  );
}
