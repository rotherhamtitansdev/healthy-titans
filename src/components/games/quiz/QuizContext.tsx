import React, { createContext, useContext, useState } from "react";
import Quiz from "./Quiz";

/* eslint-disable */

export type IsQuizStartedContext = {
  getIsQuizStarted: boolean
  setIsQuizStarted: (c: boolean) => void
}
export const QuizStartedContext = createContext<IsQuizStartedContext>({
  getIsQuizStarted: false,
  setIsQuizStarted: () => { },
});

export const useQuizStartedContext = () => useContext(QuizStartedContext);

const QuizStartedContextWrapper = ({ children }: any) => {
  const [getIsQuizStarted, setIsQuizStarted] = useState<boolean>(false);

  return (
    <QuizStartedContext.Provider value={{ getIsQuizStarted, setIsQuizStarted }}>
      <Quiz />
    </QuizStartedContext.Provider>
  );
};

export default QuizStartedContextWrapper;
