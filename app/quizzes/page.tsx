import { Metadata } from "next";

import { TrueFalseQuestionsForm } from "./components/true-false-questions-form";

export const metadata: Metadata = {
  title: "Quiz App | Quizzes",
  description: "Created by Sadia Iffat Jahan",
};

export default function QuizzesPage() {
  const questions = [
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
    "How many apples are there?",
  ];
  return (
    <main className="grow overflow-y-auto px-16 pb-8">
      <TrueFalseQuestionsForm questions={questions} />
    </main>
  );
}
