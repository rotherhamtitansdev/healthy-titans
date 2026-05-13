import React, { useState } from "react";
import AppHeader from "../../app_header/AppHeader";
import MenuHeader from "../../app_header/header/MenuHeader";
import MenuTitle from "../../shared/MenuTitle";
import { useGameStartedContext } from "../GameContext";
import BuildYourPlateGameScreen from "./BuildYourPlateGameScreen";
import GameStartScreen from "../GameStartScreen";

const mealOptions = [
  {
    id: "breakfast",
    title: "Breakfast",
    emoji: "🍳",
    description: "Build a strong start with energy, fruit and protein.",
  },
  {
    id: "lunch",
    title: "Lunch",
    emoji: "🥪",
    description: "Put together a balanced plate for school or home.",
  },
  {
    id: "afternoon-snack",
    title: "Afternoon Snack",
    emoji: "🍎",
    description: "Pick smart bites to keep your energy steady.",
  },
  {
    id: "dinner",
    title: "Dinner",
    emoji: "🍲",
    description: "Create a colourful evening plate with good balance.",
  },
] as const;

const BuildYourPlate = () => {
  const { getIsGameStarted } = useGameStartedContext();
  const [selectedMeal, setSelectedMeal] = useState<(typeof mealOptions)[number] | undefined>();

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
        <MenuTitle title="Build your plate" />
        {getIsGameStarted && selectedMeal ? (
          <BuildYourPlateGameScreen mealTitle={selectedMeal.title} />
        ) : (
          <>
            {!selectedMeal && (
              <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-7 mb-6">
                <div className="mb-5">
                  <p className="uppercase tracking-[0.2em] text-xs font-bold text-[#D14267]">
                    Step 1
                  </p>
                  <h3 className="text-titansDarkBlue font-semibold text-2xl sm:text-3xl">
                    Pick a meal
                  </h3>
                  <p className="text-homepageHeaderText text-sm sm:text-base font-medium">
                    Choose what you want to build before the game starts.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {mealOptions.map((meal) => (
                    <button
                      key={meal.id}
                      type="button"
                      onClick={() => setSelectedMeal(meal)}
                      className="text-left rounded-[28px] border-2 border-slate-200 bg-gradient-to-br from-white to-[#F5F7FF] p-5 sm:p-6 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D14267]"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 rounded-full bg-[#FCE8EE] text-2xl flex items-center justify-center">
                          {meal.emoji}
                        </div>
                        <p className="text-titansDarkBlue text-xl font-bold">{meal.title}</p>
                      </div>
                      <p className="text-homepageHeaderText text-sm sm:text-base font-medium">
                        {meal.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedMeal && (
              <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="uppercase tracking-[0.2em] text-xs font-bold text-[#2464A5]">
                    Step 2
                  </p>
                  <p className="text-titansDarkBlue text-2xl font-semibold">
                    {selectedMeal.emoji} {selectedMeal.title}
                  </p>
                  <p className="text-homepageHeaderText text-sm sm:text-base font-medium">
                    Meal selected. Start the game or choose a different one.
                  </p>
                </div>
                <button
                  type="button"
                  className="text-[#D14267] font-semibold text-sm sm:text-base"
                  onClick={() => setSelectedMeal(undefined)}
                >
                  Change meal
                </button>
              </div>
            )}

            {selectedMeal && (
              <GameStartScreen
                name={`Build a ${selectedMeal.title.toLowerCase()} plate`}
                background="bg-byp_background md:bg-[center_bottom_3rem]"
                analyticsEventName="build_your_plate_started"
                analyticsParams={{ meal_type: selectedMeal.title.toLowerCase() }}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BuildYourPlate;
