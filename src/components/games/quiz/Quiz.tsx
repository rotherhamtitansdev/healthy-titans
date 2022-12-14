import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { fetchDataFromSubpath } from "../../../api/FirebaseAPI";
import { QuizProps } from "../../../models/Quiz/QuizProps";
import AppHeader from "../../app_header/AppHeader";
import MenuHeader from "../../app_header/header/MenuHeader";
import MenuTitle from "../../shared/MenuTitle";
import { useGameStartedContext } from "../GameContext";
import GameStartScreen from "../GameStartScreen";
import QuizGameScreen from "./QuizGameScreen";

const Quiz = () => {
  const { getIsGameStarted } = useGameStartedContext();
  const [quizData, setQuizData] = useState<QuizProps | undefined>();

  useEffect(() => {
    fetchDataFromSubpath("QuizData", "Quiz").then((res) => {
      if (res) {
        setQuizData(res as DocumentData as QuizProps);
      }
    });
  }, []);

  return (
    <>
      <AppHeader>
        <MenuHeader
          title="Games"
          body={
            "Challenge yourself to see if you can build a healthy meal or test your knowledge on all of the fun food facts you've learned so far."
          }
        />
      </AppHeader>
      <div className="mx-7 xs:mx-8 sm:mx-12 md:mx-14">
        <MenuTitle title="Quiz" />
        {getIsGameStarted && quizData ? (
          <QuizGameScreen quizData={quizData} />
        ) : (
          <GameStartScreen
            name="Quiz"
            background="bg-quiz_background md:bg-auto md:bg-[center_bottom_7rem]"
          />
        )}
      </div>
    </>
  );
};

export default Quiz;
