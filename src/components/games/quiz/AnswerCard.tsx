import React, { useEffect, useState } from "react";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
/*
 * This component represents a details card
 * */
const AnswerCard = (props: { answer: AnswerProps, onClick: (answer: AnswerProps) => void }) => {
  const [backgroundColour, setBackgroundColour] = useState("bg-white");

  useEffect(() => {
    setBackgroundColour("bg-white");
  }, [props.answer]);

  const selectAnswer = () => {
    if (props.answer.isCorrect) {
      setBackgroundColour("bg-green-600");
    } else {
      setBackgroundColour("bg-red-600");
    }
    props.onClick(props.answer);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={selectAnswer}
      role="button"
      tabIndex={0}
      className={`${backgroundColour} text-6xl rounded-3xl p-3`}
    >
      {props.answer.answer}
    </div>
  );
};

export default AnswerCard;
