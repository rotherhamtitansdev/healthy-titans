/* eslint-disable no-await-in-loop */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MemoryRouter } from "react-router";
import FirebaseAPI from "../../../api/FirebaseAPI";
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
          answer: "A wrong answer"
        },
        {
          answer: "Correct answer",
          isCorrect: true
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "Yet another wrong answer"
        }
      ]
    },
    {
      question: "Second question",
      answers: [
        {
          answer: "A wrong answer"
        },
        {
          answer: "Correct answer",
          isCorrect: true
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "And another wrong answer"
        }
      ]
    },
    {
      question: "Third question",
      answers: [
        {
          answer: "Correct answer",
          isCorrect: true
        },
        {
          answer: "A wrong answer"
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "And another wrong answer"
        }
      ]
    },
    {
      question: "Fourth question",
      answers: [
        {
          answer: "A wrong answer"
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "Yet Another wrong answer"
        },
        {
          answer: "Correct answer",
          isCorrect: true
        }
      ]
    },
    {
      question: "Fifth question",
      answers: [
        {
          answer: "A wrong answer"
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "Yet Another wrong answer"
        },
        {
          answer: "Correct answer",
          isCorrect: true
        }
      ]
    },
    {
      question: "Sixth question",
      answers: [
        {
          answer: "Correct answer",
          isCorrect: true
        },
        {
          answer: "A wrong answer"
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "And another wrong answer"
        }
      ]
    },
    {
      question: "Seventh question",
      answers: [
        {
          answer: "A wrong answer"
        },
        {
          answer: "Correct answer",
          isCorrect: true
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "Yet another wrong answer"
        }
      ]
    },
    {
      question: "Eighth question",
      answers: [
        {
          answer: "A wrong answer"
        },
        {
          answer: "Correct answer",
          isCorrect: true
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "And another wrong answer"
        }
      ]
    },
    {
      question: "Ninth question",
      answers: [
        {
          answer: "A wrong answer"
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "Yet Another wrong answer"
        },
        {
          answer: "Correct answer",
          isCorrect: true
        }
      ]
    },
    {
      question: "Tenth question",
      answers: [
        {
          answer: "A wrong answer"
        },
        {
          answer: "Another wrong answer"
        },
        {
          answer: "Yet Another wrong answer"
        },
        {
          answer: "Correct answer",
          isCorrect: true
        }
      ]
    }
  ]
};

describe("Quiz", () => {
  describe("Quiz functionality", () => {
    beforeEach(async () => {
      jest
        .spyOn(FirebaseAPI, "fetchQuizData")
        .mockImplementation(() => Promise.resolve(mockContent));
    });

    test("should alert whether answer was correct", async () => {
      const user = userEvent.setup();

      render(
        <GameContext>
          <QuizContext>
            <Quiz />
          </QuizContext>
        </GameContext>,
        { wrapper: MemoryRouter }
      );

      await user.click(screen.getByRole("button", { name: "BEGIN" }));
      expect(screen.getByText(/first question/i)).toBeVisible();
      expect(screen.getByText(/1 out of 10/)).toBeVisible();

      await user.click(screen.getByRole("button", { name: /^correct answer/i }));
      expect(screen.getByText(/^well done, you got the right answer!/i)).toBeVisible();
    });

    test("should alert whether answer was incorrect", async () => {
      const user = userEvent.setup();

      render(
        <GameContext>
          <QuizContext>
            <Quiz />
          </QuizContext>
        </GameContext>,
        { wrapper: MemoryRouter }
      );

      await user.click(screen.getByRole("button", { name: "BEGIN" }));
      expect(screen.getByText(/first question/i)).toBeVisible();
      expect(screen.getByText(/1 out of 10/)).toBeVisible();

      await user.click(screen.getByRole("button", { name: /^a wrong answer/i }));
      expect(screen.getByText(/^better luck next time/i)).toBeVisible();
    });

    test("cannot select multiple answers", async () => {
      const user = userEvent.setup();

      render(
        <GameContext>
          <QuizContext>
            <Quiz />
          </QuizContext>
        </GameContext>,
        { wrapper: MemoryRouter }
      );

      await user.click(screen.getByRole("button", { name: "BEGIN" }));
      await user.click(screen.getByRole("button", { name: /^a wrong answer/i }));
      expect(screen.getByText(/^better luck next time/i)).toBeVisible();

      await user.click(screen.getByRole("button", { name: /^correct answer/i }));
      expect(screen.getByText(/1 out of 10/)).toBeVisible();
    });

    test.each([
      [3, /good effort, keep learning/i],
      [4, /well done/i],
      [10, /excellent/i]
    ])("should give correct final score and text", async (score, text) => {
      const user = userEvent.setup();

      render(
        <GameContext>
          <QuizContext>
            <Quiz />
          </QuizContext>
        </GameContext>,
        { wrapper: MemoryRouter }
      );

      await user.click(screen.getByRole("button", { name: "BEGIN" }));

      for (let question = 1; question <= mockContent.questions.length; question++) {
        if (question <= score) {
          await user.click(screen.getByRole("button", { name: /^correct answer/i }));
        } else {
          await user.click(screen.getByRole("button", { name: /^a wrong answer/i }));
        }
        await user.click(screen.getByRole("button", { name: /^next/i }));
      }

      expect(screen.getByText(`Score: ${score} out of 10`)).toBeVisible();
      expect(screen.getByText(text)).toBeVisible();
    });
  });
});
