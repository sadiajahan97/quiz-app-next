import { Metadata } from "next";
import { CreateMultipleChoiceQuestionsForm } from "./components/create-multiple-choice-questions-form";

export const metadata: Metadata = {
  title: "Quiz App | Create Quiz",
  description: "Created by Sadia Iffat Jahan",
};

export default function CreateQuizPage() {
  return (
    <main className="grow overflow-y-auto p-8">
      <CreateMultipleChoiceQuestionsForm />
    </main>
  );
}
