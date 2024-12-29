import { Metadata } from "next";
import { MultipleChoiceQuestionsForm } from "./components/multiple-choice-questions-form";

export const metadata: Metadata = {
  title: "Quiz App | Quizzes",
  description: "Created by Sadia Iffat Jahan",
};

export default function QuizzesPage() {
  const questions = [
    { options: ["1", "2", "3", "4"], question: "How many apples are there?" },
    { options: ["1", "2", "3", "4"], question: "How many apples are there?" },
    { options: ["1", "2", "3", "4"], question: "How many apples are there?" },
    { options: ["1", "2", "3", "4"], question: "How many apples are there?" },
    { options: ["1", "2", "3", "4"], question: "How many apples are there?" },
    { options: ["1", "2", "3", "4"], question: "How many apples are there?" },
  ];
  return (
    <main className="grow overflow-y-auto pb-8 pl-16">
      <MultipleChoiceQuestionsForm questions={questions} />
    </main>
  );
}
