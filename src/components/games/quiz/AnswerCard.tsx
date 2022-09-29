import React, { useEffect, useState } from "react";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
import Card from "../../shared/Card";
import { useGameStartedContext } from "../GameContext";
import { useQuizContext } from "./QuizContext";
/*
 * This component represents a details card
 * */
// eslint-disable-next-line react/require-default-props
const AnswerCard = (props: { answer: AnswerProps }) => {
  const { getScore, setScore } = useGameStartedContext();
  const { selectedAnswer, setSelectedAnswer } = useQuizContext();
  const [backgroundColour, setBackgroundColour] = useState("bg-mobileNavbarBackgroundColor");

  useEffect(() => {
    setBackgroundColour("bg-mobileNavbarBackgroundColor");
  }, [props.answer]);

  const selectAnswer = () => {
    if (!selectedAnswer) {
      setSelectedAnswer(props.answer);
      if (props.answer.isCorrect) {
        setBackgroundColour("bg-[#8DED8E]");
        setScore(getScore + 1);
      } else {
        setBackgroundColour("bg-[#FA5555]");
      }
    }
  };

  return (
    <Card card={{ name: props.answer.answer, additionalStyling: `${backgroundColour} p-8`, onClick: selectAnswer }}>
      {props.answer.answer}
    </Card>
  );
};

export default AnswerCard;
