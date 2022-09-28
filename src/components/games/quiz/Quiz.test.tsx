import "@testing-library/jest-dom";
import {
  cleanup,
  fireEvent, render, screen, within,
} from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route } from "react-router";
import QuizData from "../../../data/QuizData";
import RoutingTestWrapper from "../../../tests/RoutingTestWrapper";
import App from "../../App";
import GameContext from "../GameContext";
import Quiz from "./Quiz";

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
    beforeEach(() => {
      const quizRoute = "/Games/Quiz";

      render(
        <RoutingTestWrapper path={quizRoute}>
          <Route
            path="/Games/Quiz"
            element={(
              <GameContext>
                <Quiz />
              </GameContext>
            )}
          />
        </RoutingTestWrapper>,
      );
      fireEvent.click(screen.getByTestId("game-begin"));
    });

    test("First question renders", () => {
      expect(screen.getByText(QuizData.questions[0].question)).toBeInTheDocument();
    });

    test("should alert whether answer was correct", () => {
      clickCorrectAnswer();
      expect(screen.getByText("Well done, you got the right answer!")).toBeInTheDocument();
      clickNext();

      clickIncorrectAnswer();
      expect(screen.getByText("Better luck next time!")).toBeInTheDocument();
    });

    test("should score 2 out of 4", () => {
      clickCorrectAnswer();
      clickNext();

      clickIncorrectAnswer();
      clickNext();

      clickIncorrectAnswer();
      clickNext();

      clickCorrectAnswer();
      clickNext();

      const quizEnd = within(screen.getByTestId("quiz-end"));

      quizEnd.getByText((_content, node) => !!node?.textContent?.includes("you scored2out of4"));
    });
  });
});
