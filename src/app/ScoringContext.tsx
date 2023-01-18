"use client";

import { createContext, useContext, useMemo, useState } from "react";

const ScoringContext = createContext<
  [number, (id: number, correct: boolean) => void] | undefined
>(undefined);

export function ScoringProvider({ children }: { children: React.ReactNode }) {
  const [answered, setAnswered] = useState<{ [key: string]: boolean }>({});

  const addAnswered = useMemo(() => {
    return (id: number, correct: boolean) => {
      if (answered[id] !== undefined) return;
      setAnswered((answered) => ({ ...answered, [id]: correct }));
    };
  }, [answered]);
  const score = useMemo(() => {
    return Object.values(answered).filter((correct) => correct).length;
  }, [answered]);
  console.log(answered);

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
