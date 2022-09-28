import React from "react";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
import { QuestionProps } from "../../../models/Quiz/QuestionProps";
import Card from "../../shared/Card";
import AnswerCard from "./AnswerCard";

/*
 * This component represents a details card
 * */
// eslint-disable-next-line react/require-default-props
const QuestionCard = (props: { question: QuestionProps, onAnswerClick?: (answer: AnswerProps) => void }) => (
  <div className="grid grid-row-2 gap-5 ">
    <Card card={{ name: props.question.question, additionalStyling: "bg-mobileNavbarBackgroundColor p-6" }}>
      {props.question.question}
    </Card>
    <div className="grid grid-cols-2 gap-8 p-5">
      {props.question.answers.map((answer, index) => (
        <AnswerCard answer={answer} key={index} onClick={props.onAnswerClick} />
      ))}
    </div>
  </div>
);

export default QuestionCard;
