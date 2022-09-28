import React, { useEffect, useState } from "react";
import QuizData from "../../../data/QuizData";
import { AnswerProps } from "../../../models/Quiz/AnswerProps";
import { QuestionProps } from "../../../models/Quiz/QuestionProps";
import Card from "../../shared/Card";
import { useGameStartedContext } from "../GameContext";
import QuestionCard from "./QuestionCard";
import QuizFinish from "./QuizFinish";

const QuizGameScreen = () => {
  const { getScore, setScore } = useGameStartedContext();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerProps | undefined>();
  const quizData = QuizData;

  let currentQuestion: QuestionProps | undefined = quizData.questions[questionNumber];

  useEffect(() => {
    currentQuestion = quizData?.questions[questionNumber];
    setSelectedAnswer(undefined);
  }, [questionNumber]);

  const nextQuestion = () => {
    if (quizData && questionNumber < quizData.questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const selectAnswer = async (answer: AnswerProps) => {
    setSelectedAnswer(answer);
    if (answer.isCorrect) {
      setScore(getScore + 1);
    }
  };

  return (
    (currentQuestion && !quizFinished) ? (
      <Card card={{ name: quizData.name, additionalStyling: "h-[40rem] w-full" }}>
        <div className="font-bold flex flex-row py-5 px-10">
          <div className="text-2xl">{quizData.name}</div>
          <div className="ml-auto">
            {questionNumber + 1}
            {" "}
            out of
            {" "}
            {quizData.questions.length}
          </div>
        </div>
        <div className="px-10 text-xl font-semibold text-homepageHeaderText">
          <QuestionCard question={currentQuestion} onAnswerClick={!selectedAnswer ? selectAnswer : undefined} />
          {selectedAnswer ? (
            <div className="pt-8 flex flex-col items-center gap-10">
              <Card card={{ name: "Answer feedback", additionalStyling: "bg-mobileNavbarBackgroundColor p-6 w-2/3 mx-auto" }}>
                {selectedAnswer.isCorrect ? "Well done, you got the right answer!" : "Better luck next time!"}
              </Card>
              <button
                className=" bg-titansBrightPink text-white text-xs font-bold py-4 px-20 rounded-full"
                type="button"
                onClick={nextQuestion}
                data-testid="next-button"
              >
                NEXT
              </button>
            </div>
          ) : null}
        </div>
      </Card>
    ) : <QuizFinish totalQuestions={quizData.questions.length} />
  );
};

export default QuizGameScreen;
