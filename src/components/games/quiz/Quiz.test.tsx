import "@testing-library/jest-dom";
import {
  act,
  cleanup,
  fireEvent, render, screen
} from "@testing-library/react";
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
  ],
};

beforeEach(() => {
  jest.spyOn(FirebaseAPI, "fetchQuizData").mockImplementation(() => Promise.resolve(mockContent));
});

afterEach(() => {
  cleanup();
});

function clickCorrectAnswer() {
  fireEvent.click(screen.getByText("Correct answer"));
}

function clickIncorrectAnswer() {
  fireEvent.click(screen.getByText("A wrong answer"));
}

function clickNext() {
  fireEvent.click(screen.getByTestId("next-button"));
}

describe("Quiz", () => {
  test("navigate to quiz", () => {
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
    fireEvent.click(games);

    const quiz = screen.getByTestId("Quiz");
    expect(quiz).toBeInTheDocument();
    fireEvent.click(quiz);

    const begin = screen.getByTestId("game-begin");
    expect(begin).toBeInTheDocument();
  });

  describe("Quiz functionality", () => {
    beforeEach(async () => {
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
      fireEvent.click(screen.getByTestId("game-begin"));
    });

    test("First question renders", () => {
      expect(screen.getByText("First question")).toBeInTheDocument();
    });

    test("should alert whether answer was correct", () => {
      clickCorrectAnswer();
      expect(screen.getByText("Well done, you got the right answer!")).toBeInTheDocument();
      clickNext();

      clickIncorrectAnswer();
      expect(screen.getByText("Better luck next time!")).toBeInTheDocument();
    });

    test("should score 2 out of 6", () => {
      clickCorrectAnswer();
      clickNext();

      clickIncorrectAnswer();
      clickNext();

      clickIncorrectAnswer();
      clickNext();

      clickCorrectAnswer();
      clickNext();


      clickIncorrectAnswer();
      clickNext();

      clickIncorrectAnswer();
      clickNext();

      const quizScore = screen.getByTestId("game-score");
      expect(quizScore).toHaveTextContent("Score: 2 out of 6");
    });

    test("user can't select multiple answers", () => {
      clickIncorrectAnswer();
      expect(screen.getByText("Better luck next time!")).toBeInTheDocument();

      clickCorrectAnswer();
      expect(screen.getByText("Better luck next time!")).toBeInTheDocument();
    });
  });
});
