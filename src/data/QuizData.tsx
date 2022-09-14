/**
 * This file is a basic data storing file.
 * All the data about different challenges is stored here.
 */
import football from "../img/football.svg";

const QuizData = {
  Nutrition: {
    name: "Nutrition",
    description: "This quiz tests your knowledge of nutrition!",
    img: football,
    questions: [
      {
        question: "First question",
        answers: [
          {
            answer: "A wrong answer",
          },
          {
            answer: "Correct answer",
            isCorrect: true,
          },
          {
            answer: "Another wrong answer",
          },
          {
            answer: "Yet another wrong answer",
          },
        ],
      },
      {
        question: "Second question",
        answers: [
          {
            answer: "A wrong answer",
          },
          {
            answer: "Correct answer",
            isCorrect: true,
          },
          {
            answer: "Another wrong answer",
          },
          {
            answer: "And another wrong answer",
          },
        ],
      },
      {
        question: "Third question",
        answers: [
          {
            answer: "Correct answer",
            isCorrect: true,
          },
          {
            answer: "A wrong answer",
          },
          {
            answer: "Another wrong answer",
          },
          {
            answer: "And another wrong answer",
          },
        ],
      },
      {
        question: "Fourth question",
        answers: [
          {
            answer: "A wrong answer",
          },
          {
            answer: "Another wrong answer",
          },
          {
            answer: "Yet Another wrong answer",
          },
          {
            answer: "Correct answer",
            isCorrect: true,
          },
        ],
      },
    ],
  },
};

export default QuizData;
