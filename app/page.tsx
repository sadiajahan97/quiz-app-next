import { MultipleChoiceQuestionsForm } from "@quiz-app/components/multiple-choice-questions-form";

export default function HomePage() {
  const questions = [
    {
      options: ["Apple", "Ball", "Cat", "Dog"],
      question: "This is the first sample question.",
    },
    {
      options: ["Apple", "Ball", "Cat", "Dog"],
      question: "This is the second sample question.",
    },
  ];
  return (
    <main className="mx-auto flex h-screen w-fit flex-col justify-center">
      <MultipleChoiceQuestionsForm questions={questions} />
    </main>
  );
}
