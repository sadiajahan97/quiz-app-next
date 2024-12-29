"use client";

import * as React from "react";
import {
  Action,
  CreateMCQInterface,
  CreateMultipleChoiceQuestion,
} from "./components/create-multiple-choice-question";
import { Button } from "@quiz-app/components/ui/button";

function reducer(
  state: CreateMCQInterface[],
  action: Action
): CreateMCQInterface[] {
  switch (action.type) {
    case "add option":
      return state.map((question, index) =>
        index === action.payload.questionNumber
          ? {
              ...question,
              options: [...question.options, ""],
            }
          : question
      );
    case "add question":
      return [...state, { options: [], question: "" }];
    case "remove option":
      return state.map((question, index) =>
        index === action.payload.questionNumber
          ? {
              ...question,
              options: question.options.filter(
                (_, i) => i !== action.payload.optionNumber
              ),
            }
          : question
      );
    case "remove question":
      return state.filter(
        (_, index) => index !== action.payload.questionNumber
      );
    case "update option":
      return state.map((question, index) =>
        index === action.payload.questionNumber
          ? {
              ...question,
              options: question.options.map((option, i) =>
                i === action.payload.optionNumber
                  ? action.payload.newOption
                  : option
              ),
            }
          : question
      );
    case "update question":
      return state.map((question, index) =>
        index === action.payload.questionNumber
          ? { ...question, question: action.payload.newQuestion }
          : question
      );
    default:
      return state;
  }
}

export function CreateMultipleChoiceQuestionsForm() {
  const [state, dispatch] = React.useReducer(reducer, [
    { options: [], question: "" },
  ]);
  const [questionNumber, setQuestionNumber] = React.useState<number>(0);

  return (
    <form className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <b>
          Question {questionNumber + 1} of {state.length}
        </b>
        <CreateMultipleChoiceQuestion
          dispatch={dispatch}
          questionNumber={questionNumber}
          state={state}
        />
      </div>
      <div className="flex justify-center gap-12">
        <Button
          disabled={questionNumber < 1}
          onClick={() => setQuestionNumber(questionNumber - 1)}
          type="button"
        >
          Previous question
        </Button>
        <Button
          disabled={questionNumber >= state.length - 1}
          onClick={() => setQuestionNumber(questionNumber + 1)}
          type="button"
        >
          Next question
        </Button>
        <Button
          onClick={() => {
            setQuestionNumber(state.length);
            dispatch({
              type: "add question",
            });
          }}
          type="button"
        >
          Add question
        </Button>
        <Button
          disabled={state.length < 2}
          onClick={() => {
            setQuestionNumber(Math.max(0, questionNumber - 1));
            dispatch({
              type: "remove question",
              payload: { questionNumber },
            });
          }}
          type="button"
        >
          Remove question
        </Button>
      </div>
      <Button className="mx-auto w-fit">Submit</Button>
    </form>
  );
}
