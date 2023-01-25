import Question from "./Question";

const questions = [
  { question: "What is 5+6?", answer: "11" },
  { question: "What is 7+8?", answer: "15" },
  { question: "What is 10-9?", answer: "1" },
];

async function getQuestion(id: number) {
  // Simulate database query with 250ms delay before returning the question.
  await new Promise((resolve) => setTimeout(resolve, 250));
  return questions[id];
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const { question, answer } = await getQuestion(id);
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="rounded-lg bg-gray-100 shadow-lg px-8 py-4">
        <span className="block text-4xl font-semibold">{question}</span>
        <Question id={id} answer={answer} max={questions.length - 1} />
      </div>
    </div>
  );
}
