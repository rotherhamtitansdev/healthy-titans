import React, { useEffect, useState } from "react";
import QuizData from "../../../data/QuizData";
import Card from "../../shared/Card";
import { useGameStartedContext } from "../GameContext";
import GameModalScreen from "../GameModalScreen";
import AnswerCard from "./AnswerCard";
import { useQuizContext } from "./QuizContext";

const QuizGameScreen = () => {
  const {
    setModal, setModalContent, setIsGameStarted, getScore,
  } = useGameStartedContext();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const quizData = QuizData;

  const { currentQuestion, setCurrentQuestion } = useQuizContext();
  const { selectedAnswer, setSelectedAnswer } = useQuizContext();

  useEffect(() => {
    setCurrentQuestion(quizData?.questions[questionNumber]);
    setSelectedAnswer(undefined);
  }, [questionNumber]);

  const nextQuestion = () => {
    if (quizData && questionNumber < quizData.questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuizFinished(true);
      setModal(true);
      setModalContent({
        buttonFunc: () => {
          setIsGameStarted(false);
        },
        buttonText: "Play again",
        text: "Well done!",
        title: `Score: ${getScore} out of ${quizData.questions.length}`,
      });
    }
  };

  return (
    <>
      {quizFinished
        && (
          <GameModalScreen />
        )}
      {
        currentQuestion
        && (
          <Card card={{ name: quizData.name, additionalStyling: "h-[30rem] lg:h-[40rem] w-full mb-10" }}>
            <div className="font-bold flex flex-row pt-5 pb-8 px-10">
              <div className="text-lg lg:text-2xl">{quizData.name}</div>
              <div className="ml-auto">
                {questionNumber + 1}
                {" "}
                out of
                {" "}
                {quizData.questions.length}
              </div>
            </div>
            <div className="px-8 lg:px-10 lg:text-xl font-semibold text-homepageHeaderText">
              <div className="grid grid-row-2 gap-3 lg:gap-5">
                <Card card={{ name: currentQuestion.question, additionalStyling: "bg-mobileNavbarBackgroundColor p-4 lg:p-6" }}>
                  {currentQuestion.question}
                </Card>
                <div className="grid grid-cols-2 gap-4 lg:gap-8 p-2 lg:p-5">
                  {
                    currentQuestion.answers.map((answer, index) => (
                      <AnswerCard
                        answer={answer}
                        key={index}
                      />
                    ))
                  }
                </div>
              </div>
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
        )
      }
    </>
  );
};

export default QuizGameScreen;
