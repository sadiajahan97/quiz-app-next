"use client";

import * as React from "react";

import { Button } from "@quiz-app/components/ui/button";

import {
  TrueFalseQuestionAction,
  CreateTrueFalseQuestionInterface,
  CreateTrueFalseQuestion,
} from "./components/create-true-false-question";

function reducer(
  state: CreateTrueFalseQuestionInterface[],
  action: TrueFalseQuestionAction
): CreateTrueFalseQuestionInterface[] {
  switch (action.type) {
    case "add question":
      return [...state, { answer: undefined, question: "" }];
    case "remove question":
      return state.filter(
        (_, index) => index !== action.payload.questionNumber
      );
    case "update answer":
      return state.map((question, index) =>
        index === action.payload.questionNumber
          ? {
              ...question,
              answer: action.payload.newAnswer,
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

export function CreateTrueFalseQuestionsForm() {
  const [state, dispatch] = React.useReducer(reducer, [
    { answer: undefined, question: "" },
  ]);
  const [questionNumber, setQuestionNumber] = React.useState<number>(0);

  return (
    <form className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <b>
          Question {questionNumber + 1} of {state.length}
        </b>
        <CreateTrueFalseQuestion
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
