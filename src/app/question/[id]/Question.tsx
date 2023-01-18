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
    <>
      <input onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          setSubmitted(true);
          addAnswered(id, input === answer);
        }}
        disabled={submitted}
      >
        Submit
      </button>
      {submitted && (
        <>
          <p>{input === answer ? "Correct" : "Incorrect"}</p>
          <div>
            <button
              disabled={id <= 0}
              onClick={() => router.push(`question/${id - 1}`)}
            >
              Previous
            </button>
            <button
              disabled={id >= max}
              onClick={() => router.push(`question/${id + 1}`)}
            >
              Next
            </button>
          </div>
        </>
      )}
      <p>
        Score: {score}/{max + 1}
      </p>
    </>
  );
}
