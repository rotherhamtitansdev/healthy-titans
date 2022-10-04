import React from "react";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
import { QuestionProps } from "../../../models/Quiz/QuestionProps";
import Card from "../../shared/Card";
import AnswerCard from "./AnswerCard";

/*
 * This component represents a details card
 * */
const QuestionCard = (props: { question: QuestionProps, onAnswerClick: (answer: AnswerProps) => void }) => (
  <div className="grid grid-row-2 gap-4">
    <Card card={{ name: props.question.question, additionalStyling: "h-200 rounded-3xl p-5" }}>
      <div className="text-6xl text-black font-bold place-items-center">
        {props.question.question}
      </div>
    </Card>
    <div className="grid grid-cols-2 gap-4">
      {props.question.answers.map((answer, index) => (
        <AnswerCard answer={answer} key={index} onClick={props.onAnswerClick} />
      ))}
    </div>
  </div>
);

export default QuestionCard;