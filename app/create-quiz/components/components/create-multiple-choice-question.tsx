import * as React from "react";

import { Button } from "@quiz-app/components/ui/button";
import { Input } from "@quiz-app/components/ui/input";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@quiz-app/components/ui/select";
import { Textarea } from "@quiz-app/components/ui/textarea";



export type MCQAction =
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
      type: "update answer";
      payload: { newAnswer: string; questionNumber: number };
    }
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
  answer: string;
  options: string[];
  question: string;
}

interface CreateMultipleChoiceQuestionProps {
  dispatch: React.ActionDispatch<[action: MCQAction]>;
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
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {state[questionNumber]?.options?.map((option, optionNumber) => (
            <SelectItem key={optionNumber} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
