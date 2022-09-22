import React from "react";
import nutrition from "../../../img/nutritionNutritionPage.jpg";
import { MenuCardProps } from "../../../models/MenuCardProps";
import Menu from "../../shared/Menu";

const QuizMenu = () => {
  const quizzes: MenuCardProps[] = [
    {
      key: 0,
      name: "Nutrition",
      img: nutrition,
      path: "Nutrition",
    },
  ];

  return (
    <Menu header={{ title: "", body: "" }} cards={quizzes} />
  );
};
export default QuizMenu;
