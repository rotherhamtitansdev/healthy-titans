import React, { useEffect, useState } from "react";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
import Card from "../../shared/Card";
/*
 * This component represents a details card
 * */
// eslint-disable-next-line react/require-default-props
const AnswerCard = (props: { answer: AnswerProps, onClick?: (answer: AnswerProps) => void }) => {
  const [backgroundColour, setBackgroundColour] = useState("bg-mobileNavbarBackgroundColor");

  useEffect(() => {
    setBackgroundColour("bg-mobileNavbarBackgroundColor");
  }, [props.answer]);

  const selectAnswer = () => {
    if (props.onClick) {
      if (props.answer.isCorrect) {
        setBackgroundColour("bg-[#8DED8E]");
      } else {
        setBackgroundColour("bg-[#FA5555]");
      }
      props.onClick(props.answer);
    }
  };

  return (
    <Card card={{ name: props.answer.answer, additionalStyling: `${backgroundColour} p-8`, onClick: selectAnswer }}>
      {props.answer.answer}
    </Card>
  );
};

export default AnswerCard;
