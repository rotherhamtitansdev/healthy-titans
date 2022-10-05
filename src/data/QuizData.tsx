import { QuizProps } from "../models/Quiz/QuizProps";

const QuizData: QuizProps = {
  name: "Food & Nutrition Quiz",
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
};

export default QuizData;
