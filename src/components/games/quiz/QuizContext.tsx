// empty functions expected for context
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, createContext, useContext, useState, useMemo } from "react";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
import { QuestionProps } from "../../../models/Quiz/QuestionProps";

export type QuizContextType = {
  currentQuestion: QuestionProps | undefined;
  setCurrentQuestion: (c: QuestionProps | undefined) => void;
  selectedAnswer: AnswerProps | undefined;
  setSelectedAnswer: (c: AnswerProps | undefined) => void;
};

export const QuizContext = createContext<QuizContextType>({
  currentQuestion: undefined,
  setCurrentQuestion: () => {},
  selectedAnswer: undefined,
  setSelectedAnswer: () => {},
});

interface QuizStartedContextWrapperProps {
  children: React.ReactElement;
}

export const useQuizContext = () => useContext(QuizContext);

const QuizStartedContextWrapper: FC<QuizStartedContextWrapperProps> = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps>();
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerProps>();

  const value = useMemo(
    () => ({
      currentQuestion,
      setCurrentQuestion,
      selectedAnswer,
      setSelectedAnswer,
    }),
    [currentQuestion, selectedAnswer]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export default QuizStartedContextWrapper;
