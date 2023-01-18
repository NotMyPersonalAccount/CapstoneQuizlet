"use client";

import { createContext, useContext, useMemo, useState } from "react";

const ScoringContext = createContext<
  [number, (id: number, correct: boolean) => void] | undefined
>(undefined);

export function ScoringProvider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);

  const addAnswered = useMemo(() => {
    return (id: number, correct: boolean) => {
      if (answered.includes(id)) return;
      setAnswered((answered) => {
        return [...answered, id];
      });
      if (correct) setScore((score) => score + 1);
    };
  }, [setAnswered]);

  return (
    <ScoringContext.Provider value={[score, addAnswered]}>
      {children}
    </ScoringContext.Provider>
  );
}

export function useScoring() {
  const context = useContext(ScoringContext);
  if (!context)
    throw new Error("useScoring must be used within a ScoringProvider");
  return context;
}
