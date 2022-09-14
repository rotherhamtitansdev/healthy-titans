import "@testing-library/jest-dom";
import {
  act,
  cleanup,
  fireEvent, render, screen, within,
} from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route } from "react-router";
import QuizData from "../../../data/QuizData";
import RoutingTestWrapper from "../../../tests/RoutingTestWrapper";
import App from "../../App";
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

function skipWait() {
  act(() => {
    jest.runAllTimers(); // trigger setTimeout
  });
}

describe("Nutrition quiz", () => {
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

    const nutritionQuiz = screen.getByTestId("Nutrition");
    expect(nutritionQuiz).toBeInTheDocument();
    fireEvent.click(nutritionQuiz);
  });

  describe("Quiz functionality", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      const nutritionQuizRoute = "/Games/Quiz/Nutrition";

      render(
        <RoutingTestWrapper path={nutritionQuizRoute}>
          <Route path="/Games/Quiz/:quizName" element={<Quiz />} />
        </RoutingTestWrapper>,
      );
    });

    test("First question renders", () => {
      expect(screen.getByText(QuizData.Nutrition.questions[0].question)).toBeInTheDocument();
    });

    test("should alert whether answer was correct", () => {
      clickCorrectAnswer();
      expect(screen.getByText("Well done!")).toBeInTheDocument();
      skipWait();

      clickIncorrectAnswer();
      expect(screen.getByText("Better luck next time!")).toBeInTheDocument();
    });

    test("should score 2 out of 4", () => {
      clickCorrectAnswer();
      skipWait();

      clickIncorrectAnswer();
      skipWait();

      clickIncorrectAnswer();
      skipWait();

      clickCorrectAnswer();
      skipWait();

      const quizEnd = within(screen.getByTestId("quiz-end"));

      quizEnd.getByText((_content, node) => !!node?.textContent?.includes("you scored2out of4"));
    });
  });
});
