/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { ScoreProps } from "../../../models/Quiz/ScoreProps";
import { useGameStartedContext } from "../GameContext";

const QuizFinish = (props: ScoreProps) => {
  const { getScore } = useGameStartedContext();
  const { setIsGameStarted } = useGameStartedContext();

  return (
    <div className="justify-center items-center flex fixed inset-0 z-50 mx-2">
      <div className="relative w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
        <div className="border-0 rounded-xl shadow-lg relative flex flex-col gap-y-6 bg-white outline-none focus:outline-none items-center py-10">
          <p className="text-titansDarkBlue font-semibold text-4xl" data-testid="quiz-score">
            Score: {getScore} out of {props.totalQuestions}
          </p>
          <p className="text-titansDarkBlue font-medium text-xl">Well done!</p>
          <button
            type="button"
            className="text-[12px] text-white font-bold w-44 h-11 rounded-full bg-titansBrightPink mb-6"
            onClick={() => {
              setIsGameStarted(false);
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizFinish;
