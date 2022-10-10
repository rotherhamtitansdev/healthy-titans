/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-unresolved */
import "@testing-library/jest-dom";
import {
  act,
  cleanup, render, screen
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import React from "react";
import { MemoryRouter, Route } from "react-router";
import FirebaseAPI from "../../../api/FirebaseAPI";
import RoutingTestWrapper from "../../../tests/RoutingTestWrapper";
import App from "../../App";
import GameContext from "../GameContext";
import Quiz from "./Quiz";
import QuizContext from "./QuizContext";

const mockContent = {
  name: "Test quiz",
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
    {
      question: "Fifth question",
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
    {
      question: "Sixth question",
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
      question: "Seventh question",
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
      question: "Eighth question",
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
      question: "Ninth question",
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
    {
      question: "Tenth question",
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
let user : UserEvent;

beforeEach(() => {
  jest.spyOn(FirebaseAPI, "fetchQuizData").mockImplementation(() => Promise.resolve(mockContent));
});

afterEach(() => {
  cleanup();
});

async function clickCorrectAnswer() {
  await user.click(screen.getByText("Correct answer"));
}

async function clickIncorrectAnswer() {
  await user.click(screen.getByText("A wrong answer"));
}

async function clickNext() {
  await user.click(screen.getByTestId("next-button"));
}

async function playQuizWithScore(score: number) {
  for (let index = 0; index < score; index++) {
    await clickCorrectAnswer().then(() => clickNext());
  }
  for (let index = score; index < mockContent.questions.length; index++) {
    await clickIncorrectAnswer().then(() => clickNext());
  }
}

describe("Quiz", () => {
  test("navigate to quiz", async() => {
    user = userEvent.setup();
    // Define width so carousel on homepage loads
    Object.defineProperties(window.HTMLElement.prototype, {
      offsetWidth: {
        get: () => 100,
      },
    });

    const home = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const games = home.getByTestId("Games");
    expect(games).toBeInTheDocument();
    await user.click(games);

    const quiz = screen.getByTestId("Quiz");
    expect(quiz).toBeInTheDocument();
    await user.click(quiz);

    const begin = screen.getByTestId("game-begin");
    expect(begin).toBeInTheDocument();
  });

  describe("Quiz functionality", () => {
    beforeEach(async () => {
      user = userEvent.setup();
      const quizRoute = "/Games/Quiz";

      await act(async () => {
        await render(
          <RoutingTestWrapper path={quizRoute}>
            <Route
              path="/Games/Quiz"
              element={(
                <GameContext>
                  <QuizContext>
                    <Quiz />
                  </QuizContext>
                </GameContext>
              )}
            />
          </RoutingTestWrapper>,
        );
      });
      await user.click(screen.getByTestId("game-begin"));
    });

    test("First question renders", () => {
      expect(screen.getByText("First question")).toBeInTheDocument();
    });

    test("should alert whether answer was correct", async() => {
      await clickCorrectAnswer();
      expect(screen.getByText("Well done, you got the right answer!")).toBeInTheDocument();
      await clickNext();

      await clickIncorrectAnswer();
      expect(screen.getByText("Better luck next time!")).toBeInTheDocument();
    });

    test("should score 3 out of 10", async() => {
      await playQuizWithScore(3);

      const quizScore = screen.getByTestId("modal-title");
      expect(quizScore).toHaveTextContent("Score: 3 out of 10");

      const scoreFeedback = screen.getByTestId("modal-text");
      expect(scoreFeedback).toHaveTextContent("Good effort, keep learning!");
    });

    test("should score 4 out of 10", async() => {
      await playQuizWithScore(4);

      const quizScore = screen.getByTestId("modal-title");
      expect(quizScore).toHaveTextContent("Score: 4 out of 10");

      const scoreFeedback = screen.getByTestId("modal-text");
      expect(scoreFeedback).toHaveTextContent("Well done!");
    });

    test("should score 10 out of 10", async() => {
      await playQuizWithScore(10);

      const quizScore = screen.getByTestId("modal-title");
      expect(quizScore).toHaveTextContent("Score: 10 out of 10");

      const scoreFeedback = screen.getByTestId("modal-text");
      expect(scoreFeedback).toHaveTextContent("Excellent!");
    });


    test("user can't select multiple answers", async() => {
      await clickIncorrectAnswer();
      expect(screen.getByText("Better luck next time!")).toBeInTheDocument();

      clickCorrectAnswer();
      expect(screen.getByText("Better luck next time!")).toBeInTheDocument();
    });
  });
});
