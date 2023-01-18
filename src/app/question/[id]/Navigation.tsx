"use client";

import { useRouter } from "next/navigation";

export default function Navigation({ id, max }: { id: number; max: number }) {
  const router = useRouter();
  return (
    <>
      {id > 0 && (
        <button onClick={() => router.push(`/question/${id - 1}`)}>
          Previous
        </button>
      )}
      {id < max - 1 && (
        <button onClick={() => router.push(`/question/${id + 1}`)}>Next</button>
      )}
    </>
  );
}
