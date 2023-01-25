"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useScoring } from "../../ScoringContext";

export default function Question({
  answer,
  id,
  max,
}: {
  answer: string;
  id: number;
  max: number;
}) {
  const router = useRouter();
  const [score, addAnswered] = useScoring();
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="mt-4">
      <span className="block text-lg">Answer: </span>
      <input
        className="block outline-none rounded-lg border border-solid border-gray-200 hover:border-gray-400 focus:border-blue-600 focus:shadow-lg text-xl px-4 py-2"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="block rounded-md bg-green-300 hover:bg-green-400 hover:shadow-lg px-6 py-2 font-bold my-4"
        onClick={() => {
          setSubmitted(true);
          addAnswered(id, input === answer);
        }}
        disabled={submitted}
      >
        Submit
      </button>
      <div className="flex justify-between w-full mt-8">
        <button
          className="rounded-full w-12 h-12 bg-gray-200 hover:bg-gray-300 hover:shadow-md"
          disabled={id <= 0}
          onClick={() => router.push(`question/${id - 1}`)}
        >
          &lt;
        </button>
        <div>
          <span className="block text-sm font-light">
            Page: {id + 1}/{max + 1}
          </span>
          <span className="block text-sm font-light">
            Score: {score}/{max + 1}
          </span>
        </div>
        <button
          className="rounded-full w-12 h-12 bg-gray-200 hover:bg-gray-300 hover:shadow-md"
          disabled={id >= max}
          onClick={() => router.push(`question/${id + 1}`)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
