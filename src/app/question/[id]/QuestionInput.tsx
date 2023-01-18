"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuestionInput({
  answer,
  id,
  max,
}: {
  answer: string;
  id: number;
  max: number;
}) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setSubmitted(true)} disabled={submitted}>
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
    </>
  );
}
