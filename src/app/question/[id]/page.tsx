import Navigation from "./Navigation";

const questions = [
  { question: "What is 5+6?", answer: "11" },
  { question: "What is 7+8?", answer: "15" },
  { question: "What is 10-9?", answer: "1" },
];

async function getQuestion(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return questions[id];
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const { question, answer } = await getQuestion(id);
  return (
    <>
      Question {question}
      Answer {answer}
      <Navigation id={id} max={questions.length} />
    </>
  );
}
