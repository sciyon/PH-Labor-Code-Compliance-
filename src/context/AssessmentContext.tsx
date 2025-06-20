"use client";

import { createContext, useState, useContext, ReactNode, useCallback } from "react";
import { questions } from "@/lib/questions";

type Answer = "yes" | "no" | "not-sure" | null;

interface AssessmentContextType {
  answers: Answer[];
  setAnswer: (questionIndex: number, answer: Answer) => void;
  resetAnswers: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(
  undefined
);

const initialState: Answer[] = Array(questions.length).fill(null);

export const AssessmentProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<Answer[]>(initialState);

  const setAnswer = useCallback((questionIndex: number, answer: Answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  }, []);

  const resetAnswers = useCallback(() => {
    setAnswers(initialState);
  }, []);

  return (
    <AssessmentContext.Provider value={{ answers, setAnswer, resetAnswers }}>
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error("useAssessment must be used within an AssessmentProvider");
  }
  return context;
};
