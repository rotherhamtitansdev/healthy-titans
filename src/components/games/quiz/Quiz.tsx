/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuizData from "../../../data/QuizData";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
import { QuestionProps } from "../../../models/Quiz/QuestionProps";
import { QuizProps } from "../../../models/Quiz/QuizProps";
import QuestionCard from "./QuestionCard";
import QuizFinish from "./QuizFinish";

const Quiz = () => {
  const [getQuizData, setQuizData] = useState<QuizProps | undefined>();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerProps | undefined>();

  let currentQuestion: QuestionProps | undefined = getQuizData?.questions[questionNumber];

  const { quizName } = useParams();

  useEffect(() => {
    setQuizData(
      QuizData[
      quizName as unknown as keyof typeof QuizData
      ],
    );
  });

  useEffect(() => {
    currentQuestion = getQuizData?.questions[questionNumber];
    setSelectedAnswer(undefined);
  }, [questionNumber]);

  const nextQuestion = () => {
    if (getQuizData && questionNumber < getQuizData.questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const selectAnswer = async (answer: AnswerProps) => {
    setSelectedAnswer(answer);
    if (answer.isCorrect) {
      setScore(score + 1);
    }
    // eslint-disable-next-line no-promise-executor-return
    await new Promise<void>((done) => setTimeout(() => {
      nextQuestion();
      return done();
    }, 1000));
  };

  return (
    <div>
      {(getQuizData) ? (
        (currentQuestion && !quizFinished) ? (
          <div className="pl-4 pr-4 mt-4">
            <QuestionCard question={currentQuestion} onAnswerClick={selectAnswer} />
            {(selectedAnswer) ? (
              <div className="bg-white p-10 mt-10 rounded-3xl font-bold text-6xl">
                {selectedAnswer.isCorrect ? "Well done!" : "Better luck next time!"}
              </div>
            ) : null}
          </div>
        ) : (
          <QuizFinish score={score} totalQuestions={getQuizData.questions.length} />
        )
      )
        : (
          <h1>loading</h1>
        )}
    </div>
  );
};

export default Quiz;
