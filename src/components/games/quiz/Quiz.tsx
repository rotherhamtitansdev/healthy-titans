import { DocumentData } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { fetchDataFromSubpath, fetchQuizzes } from "../../../api/FirebaseAPI";
import { QuizProps } from "../../../models/Quiz/QuizProps";
import AppHeader from "../../app_header/AppHeader";
import MenuHeader from "../../app_header/header/MenuHeader";
import MenuTitle from "../../shared/MenuTitle";
import { useGameStartedContext } from "../GameContext";
import GameStartScreen from "../GameStartScreen";
import QuizGameScreen from "./QuizGameScreen";

const fallbackQuizzes: QuizProps[] = [
  {
    id: "healthy-habits",
    title: "Healthy Habits Quickfire",
    description: "Movement, hydration and sleep basics.",
    name: "Healthy Habits",
    questions: [
      {
        question: "How many minutes of activity do kids need most days?",
        answers: [
          { answer: "60 minutes", isCorrect: true },
          { answer: "20 minutes" },
          { answer: "10 minutes" },
          { answer: "90 minutes" },
        ],
      },
      {
        question: "Best drink to pack for school or training?",
        answers: [
          { answer: "Water", isCorrect: true },
          { answer: "Energy drink" },
          { answer: "Sugary soda" },
          { answer: "High-sugar juice" },
        ],
      },
      {
        question: "What helps you recover after sport?",
        answers: [
          { answer: "Sleep and a balanced meal", isCorrect: true },
          { answer: "Skipping dinner" },
          { answer: "Only stretching" },
          { answer: "Staying on screens all night" },
        ],
      },
    ],
  },
  {
    id: "matchday-ready",
    title: "Matchday Ready",
    description: "Fuel and focus before training or games.",
    name: "Pre-match Prep",
    questions: [
      {
        question: "When should a larger pre-match meal be eaten?",
        answers: [
          { answer: "2–3 hours before activity", isCorrect: true },
          { answer: "Immediately at kickoff" },
          { answer: "Right after the match starts" },
          { answer: "Skip meals" },
        ],
      },
      {
        question: "What’s a simple snack 30–60 minutes pre-game?",
        answers: [
          { answer: "Banana or toast with honey", isCorrect: true },
          { answer: "Greasy burger" },
          { answer: "Heavy curry" },
          { answer: "Nothing, always fasted" },
        ],
      },
      {
        question: "Why test meals during normal training weeks?",
        answers: [
          { answer: "To avoid surprises on big days", isCorrect: true },
          { answer: "To waste food" },
          { answer: "To ignore your coach" },
          { answer: "No reason" },
        ],
      },
    ],
  },
  {
    id: "mindful-breaks",
    title: "Mindful Breaks",
    description: "Short resets for focus and calm.",
    name: "Mindful Breaks",
    questions: [
      {
        question: "A simple way to reset in class is to…",
        answers: [
          { answer: "Take 5 slow breaths", isCorrect: true },
          { answer: "Scroll socials fast" },
          { answer: "Skip water all day" },
          { answer: "Hold your breath" },
        ],
      },
      {
        question: "Good micro-break length?",
        answers: [
          { answer: "1–3 minutes", isCorrect: true },
          { answer: "30 minutes" },
          { answer: "No breaks ever" },
          { answer: "An entire movie" },
        ],
      },
      {
        question: "What pairs well with a reset?",
        answers: [
          { answer: "Quick stretch + sips of water", isCorrect: true },
          { answer: "Loud shouting" },
          { answer: "More screens only" },
          { answer: "Skipping lunch" },
        ],
      },
    ],
  },
  {
    id: "hydration-hero",
    title: "Hydration Hero",
    description: "Test your water and fluids knowledge.",
    name: "Hydration Hero",
    questions: [
      {
        question: "Best sign you need more water?",
        answers: [
          { answer: "Dark yellow urine", isCorrect: true },
          { answer: "Crystal-clear vision" },
          { answer: "Blue hair" },
          { answer: "Hunger only" },
        ],
      },
      {
        question: "When to sip during school?",
        answers: [
          { answer: "At each break and after PE", isCorrect: true },
          { answer: "Only at midnight" },
          { answer: "Never" },
          { answer: "Once a week" },
        ],
      },
      {
        question: "Great base drink for sport?",
        answers: [
          { answer: "Water", isCorrect: true },
          { answer: "Energy soda" },
          { answer: "Milkshake mid-game" },
          { answer: "Mystery potion" },
        ],
      },
    ],
  },
  {
    id: "recovery-essentials",
    title: "Recovery Essentials",
    description: "Sleep, fuel, and easy recovery habits.",
    name: "Recovery Essentials",
    questions: [
      {
        question: "Recovery starts with…",
        answers: [
          { answer: "Sleep and steady meals", isCorrect: true },
          { answer: "No food or water" },
          { answer: "All-nighters" },
          { answer: "Skipping breakfast" },
        ],
      },
      {
        question: "After training you should…",
        answers: [
          { answer: "Refuel and hydrate", isCorrect: true },
          { answer: "Sit in wet kit all day" },
          { answer: "Ignore hunger cues" },
          { answer: "Only stretch for hours" },
        ],
      },
      {
        question: "Good wind-down idea?",
        answers: [
          { answer: "Read or breathe quietly", isCorrect: true },
          { answer: "Heavy screens in bed" },
          { answer: "Energy drink at 11pm" },
          { answer: "Jumping jacks at midnight" },
        ],
      },
    ],
  },
];

const Quiz = () => {
  const { getIsGameStarted, setIsGameStarted } = useGameStartedContext();
  const [quizzes, setQuizzes] = useState<QuizProps[]>([]);
  const [selectedQuizId, setSelectedQuizId] = useState<string | undefined>();
  const loading = !quizzes.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    const loadQuizzes = async () => {
      let list: QuizProps[] = [];

      try {
        const res = await fetchQuizzes();
        if (res.length) {
          list = res;
        }
      } catch (e) {
        // ignore and fallback
      }

      // Legacy fallback: single quiz document
      if (!list.length) {
        try {
          const res = await fetchDataFromSubpath("QuizData", "Quiz");
          if (res) {
            const single = res as DocumentData as QuizProps;
            list = [{ ...single, id: "quiz-a", title: single.title || single.name }];
          }
        } catch (e) {
          // ignore, will fall back
        }
      }

      // Ensure at least two quizzes; append fallbacks if needed
      if (list.length === 0) {
        list = [...fallbackQuizzes];
      } else if (list.length === 1) {
        list = [...list, ...fallbackQuizzes];
      }

      setQuizzes(list);
      setSelectedQuizId(list[0].id);
      setCurrentPage(1);
    };

    loadQuizzes();
  }, []);

  const selectedQuiz = useMemo(
    () => quizzes.find((quiz) => quiz.id === selectedQuizId) || quizzes[0],
    [quizzes, selectedQuizId]
  );

  const totalPages = Math.max(1, Math.ceil(quizzes.length / pageSize));
  const paginatedQuizzes = useMemo(
    () => quizzes.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [quizzes, currentPage]
  );

  const handleQuizSelect = (quizId: string) => {
    setSelectedQuizId(quizId);
    // Require explicit start via GameStartScreen
    setIsGameStarted(false);
  };

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

        {!getIsGameStarted && (
          <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-7 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div>
                <p className="uppercase tracking-[0.2em] text-xs font-bold text-[#D14267]">
                  Pick your challenge
                </p>
                <h3 className="text-titansDarkBlue font-semibold text-2xl sm:text-3xl">
                  Choose a quiz set
                </h3>
                <p className="text-homepageHeaderText text-sm sm:text-base">
                  Tap a card to start immediately.
                </p>
              </div>
            </div>
          {loading && <p className="text-homepageHeaderText">Loading quizzes…</p>}
          {!loading && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {paginatedQuizzes.map((quiz) => {
                  const active = quiz.id === selectedQuizId;
                  return (
                    <button
                      key={quiz.id}
                      type="button"
                      onClick={() => handleQuizSelect(quiz.id as string)}
                      className={`text-left rounded-[28px] border-2 p-5 sm:p-6 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D14267] ${
                        active
                          ? "border-[#D14267] bg-gradient-to-br from-[#FDF1F5] via-white to-[#F0F8FF]"
                          : "border-slate-200 bg-gradient-to-br from-white to-[#F5F7FF]"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold ${
                            active ? "bg-[#D14267] text-white" : "bg-slate-100 text-[#D14267]"
                          }`}
                        >
                          ★
                        </div>
                        <span
                          className={`inline-flex items-center justify-center h-8 w-8 rounded-full text-xs font-bold ${
                            active ? "bg-[#D14267] text-white" : "bg-slate-100 text-[#D14267]"
                          }`}
                        >
                          {quiz.questions?.length || 0}
                        </span>
                        <span className="text-xs font-semibold text-homepageHeaderText">
                          Questions
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#D14267] mb-1">
                        {quiz.title || quiz.name}
                      </p>
                      <p className="text-titansDarkBlue text-2xl font-bold leading-snug">
                        {quiz.name}
                      </p>
                      {quiz.description && (
                        <p className="text-homepageHeaderText text-base mt-3">{quiz.description}</p>
                      )}
                    </button>
                  );
                })}
              </div>
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="px-3 py-2 rounded-full bg-white border text-sm font-semibold shadow disabled:opacity-40"
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const page = idx + 1;
                    const activePage = page === currentPage;
                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-full text-sm font-semibold ${
                          activePage
                            ? "bg-[#D14267] text-white shadow"
                            : "bg-white border text-titansDarkBlue shadow"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="px-3 py-2 rounded-full bg-white border text-sm font-semibold shadow disabled:opacity-40"
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        )}

        {getIsGameStarted && selectedQuiz && (
          <QuizGameScreen key={selectedQuiz.id} quizData={selectedQuiz} />
        )}
        {!getIsGameStarted && selectedQuiz && (
          <GameStartScreen
            name={selectedQuiz?.title || selectedQuiz?.name || "Quiz"}
            background="bg-quiz_background md:bg-auto md:bg-[center_bottom_7rem]"
            compact
            analyticsEventName="quiz_started"
            analyticsParams={{
              quiz_id: selectedQuiz.id,
              quiz_name: selectedQuiz.title || selectedQuiz.name,
            }}
          />
        )}
      </div>
    </>
  );
};

export default Quiz;
