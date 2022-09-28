import React from "react";
import { ScoreProps } from "../../../models/Quiz/ScoreProps";
import Card from "../../shared/Card";
import { useGameStartedContext } from "../GameContext";

const QuizFinish = (props: ScoreProps) => {
  const { getScore } = useGameStartedContext();

  return (
    <div>
      <Card card={{ name: "quiz-end", additionalStyling: "text-6xl p-5 m-5 rounded-3xl" }}>
        End of Quiz, you scored
        <span className="font-bold ml-3 mr-3">
          {getScore}
        </span>
        out of
        <span className="ml-3 mr-3">
          {props.totalQuestions}
        </span>
        well done!
      </Card>
    </div>
  );
};

export default QuizFinish;
