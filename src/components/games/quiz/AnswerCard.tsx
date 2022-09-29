import React, { useEffect, useState } from "react";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
import Card from "../../shared/Card";
import { useGameStartedContext } from "../GameContext";
import { useQuizContext } from "./QuizContext";

const AnswerCard = (props: { answer: AnswerProps }) => {
  const { getScore, setScore } = useGameStartedContext();
  const { selectedAnswer, setSelectedAnswer } = useQuizContext();
  const [background, setBackground] = useState("bg-mobileNavbarBackgroundColor");

  const isSelectedAnswer = () => selectedAnswer === props.answer;

  useEffect(() => {
    setBackground("bg-mobileNavbarBackgroundColor");
    if (isSelectedAnswer()) {
      if (props.answer.isCorrect) {
        setBackground("bg-[#8DED8E] bg-quiz_correct_answer");
      } else {
        setBackground("bg-[#FA5555] bg-quiz_incorrect_answer");
      }
    } else if (selectedAnswer && !selectedAnswer?.isCorrect && props.answer.isCorrect) {
      setBackground("bg-[#8DED8E] bg-quiz_tick");
    }
  }, [selectedAnswer]);

  const selectAnswer = () => {
    if (!selectedAnswer) {
      setSelectedAnswer(props.answer);
      if (props.answer.isCorrect) {
        setScore(getScore + 1);
      }
    }
  };

  return (
    <Card card={{ name: props.answer.answer, additionalStyling: `${background} bg-no-repeat bg-[center_right_1rem] p-8`, onClick: selectAnswer }}>
      {props.answer.answer}
    </Card>
  );
};

export default AnswerCard;
