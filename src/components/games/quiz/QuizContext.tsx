/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
import { QuestionProps } from "../../../models/Quiz/QuestionProps";

export type QuizContextType = {
  currentQuestion: QuestionProps | undefined
  setCurrentQuestion: (c: QuestionProps | undefined) => void
  selectedAnswer: AnswerProps | undefined
  setSelectedAnswer: (c: AnswerProps | undefined) => void
}

export const QuizContext = createContext<QuizContextType>({
  currentQuestion: undefined,
  setCurrentQuestion: () => { },
  selectedAnswer: undefined,
  setSelectedAnswer: () => { },
});

export const useQuizContext = () => useContext(QuizContext);

const QuizStartedContextWrapper = ({ children }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps>();
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerProps>();

  return (
    <QuizContext.Provider value={{
      currentQuestion, setCurrentQuestion, selectedAnswer, setSelectedAnswer,
    }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizStartedContextWrapper;