import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import openInNewTab from "../../functions/Navigate";
import { fetchRecipes } from "../../api/FirebaseAPI";
import Card from "../shared/Card";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import MenuCard from "../shared/MenuCard";
import MenuTitle from "../shared/MenuTitle";
import { normalizeRecipeData, RecipeItem, RecipeMealType } from "../../models/Recipe";

const fallbackRecipes: RecipeItem[] = normalizeRecipeData([
  { name: "Chicken Salad", mealType: "Lunch", description: "A fresh and healthy chicken salad with mixed leaves." },
  { name: "Overnight Oats", mealType: "Breakfast", description: "Easy overnight oats with banana and berries." },
  { name: "Veggie Pasta", mealType: "Dinner", description: "Colourful vegetable pasta with tomato sauce." },
]);

const mealTypeFilters: Array<"All" | RecipeMealType> = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
];

const mealTypeIcons: Record<(typeof mealTypeFilters)[number], string> = {
  All: "🍽️",
  Breakfast: "🍳",
  Lunch: "🥪",
  Dinner: "🍲",
  Snacks: "🍎",
};
const mealWheelOptions: RecipeMealType[] = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const filterPrompts: Record<(typeof mealTypeFilters)[number], string> = {
  All: "Chef mode on! What would you like to cook today?",
  Breakfast: "Breakfast boost! What are you having this morning?",
  Lunch: "Lunch time! What are you having for lunch?",
  Dinner: "Dinner plans? Let's make something tasty tonight.",
  Snacks: "Snack attack! Pick something quick and healthy.",
};

const Recipes = () => {
  const navigate = useNavigate();
  const [getRecipesData, setRecipesData] = useState<RecipeItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMealType, setSelectedMealType] = useState<(typeof mealTypeFilters)[number]>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showTipPopup, setShowTipPopup] = useState(false);
  const [currentTip, setCurrentTip] = useState("");
  const [filterToastText, setFilterToastText] = useState("");
  const [showFilterToast, setShowFilterToast] = useState(false);
  const [showMagicPopup, setShowMagicPopup] = useState(false);
  const [isPickingRecipe, setIsPickingRecipe] = useState(false);
  const [magicRecipe, setMagicRecipe] = useState<RecipeItem | undefined>();
  const [showWheelPopup, setShowWheelPopup] = useState(false);
  const [wheelResult, setWheelResult] = useState<RecipeMealType>("Breakfast");
  const [isWheelSpinning, setIsWheelSpinning] = useState(false);
  const [diabetesOnly, setDiabetesOnly] = useState(false);
  const pageSize = 6;
  const funTips = [
    "Pick one new vegetable this week and add it to your meal.",
    "Try rainbow plates: the more colors, the more fun and nutrients.",
    "Be a mini chef: measure one ingredient all by yourself today.",
    "Drink water before cooking, during cooking, and after eating.",
  ];

  useEffect(() => {
    if (!getRecipesData || getRecipesData.length === 0) {
      fetchRecipes()
        .then((data) => {
          const normalized = normalizeRecipeData((data || []) as unknown[]);
          setRecipesData(normalized.length > 0 ? normalized : fallbackRecipes);
        })
        .catch(() => setRecipesData(fallbackRecipes));
    }
  }, []);

  const filteredRecipes = useMemo(
    () =>
      getRecipesData.filter(
        (item) =>
          (selectedMealType === "All" || item.mealType === selectedMealType) &&
          (!diabetesOnly || item.tags?.includes("Diabetes friendly")) &&
          (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      ),
    [getRecipesData, searchTerm, selectedMealType, diabetesOnly]
  );

  const totalPages = Math.max(1, Math.ceil(filteredRecipes.length / pageSize));
  const paginatedRecipes = useMemo(
    () => filteredRecipes.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [filteredRecipes, currentPage]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedMealType]);

  const moreRecipesLink = "https://endchildfoodpoverty.org/full-time-meals";
  const openRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * funTips.length);
    setCurrentTip(funTips[randomIndex]);
    setShowTipPopup(true);
  };

  const openMagicPicker = () => {
    if (filteredRecipes.length === 0) return;

    setShowMagicPopup(true);
    setIsPickingRecipe(true);
    setMagicRecipe(undefined);

    let tick = 0;
    const tickInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
      setMagicRecipe(filteredRecipes[randomIndex]);
      tick += 1;
      if (tick > 8) {
        clearInterval(tickInterval);
        setIsPickingRecipe(false);
      }
    }, 160);
  };

  const onFilterClick = (filter: (typeof mealTypeFilters)[number]) => {
    setSelectedMealType(filter);
    setFilterToastText(filterPrompts[filter]);
    setShowFilterToast(false);
    setTimeout(() => setShowFilterToast(true), 10);
    setTimeout(() => setShowFilterToast(false), 2200);
  };

  const spinMealWheel = () => {
    setShowWheelPopup(true);
    setIsWheelSpinning(true);

    let tick = 0;
    const spinInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * mealWheelOptions.length);
      setWheelResult(mealWheelOptions[randomIndex]);
      tick += 1;
      if (tick > 14) {
        clearInterval(spinInterval);
        setIsWheelSpinning(false);
      }
    }, 120);
  };

  return (
    <>
      <AppHeader>
        <MenuHeader
          title="Recipes"
          body="There's nothing like being able to make your own delicious, nutritional and healthy meals. Please visit our videos page to find some more yummy recipes to try out and enjoy
Yum!
"
        />
      </AppHeader>

      <div className="px-6 md:px-10 pb-20 recipe-stage">
        <div className="recipe-blob one" />
        <div className="recipe-blob two" />
        <div className="recipe-blob three" />
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
            <MenuTitle
              title="Tasty Recipes"
              subtitle="Search and choose a recipe to view ingredients, calories and full steps."
            />
            <div className="mt-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search recipes..."
                className="w-full md:w-[24rem] rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base"
              />
              <p className="text-homepageHeaderText text-sm mt-3">
                {filteredRecipes.length} recipe{filteredRecipes.length === 1 ? "" : "s"} found
              </p>
              <button
                type="button"
                className="mt-3 px-4 py-2 rounded-full bg-[#D14267] text-white text-sm font-semibold"
                onClick={openRandomTip}
              >
                Surprise me with a healthy tip
              </button>
              <button
                type="button"
                className="mt-3 ml-2 px-4 py-2 rounded-full bg-[#2464A5] text-white text-sm font-semibold"
                onClick={openMagicPicker}
              >
                Magic recipe picker
              </button>
              <button
                type="button"
                className="mt-3 ml-2 px-4 py-2 rounded-full bg-[#1F7A62] text-white text-sm font-semibold"
                onClick={spinMealWheel}
              >
                Spin meal wheel
              </button>
              <div className="flex flex-wrap gap-2 mt-3">
                {mealTypeFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => onFilterClick(filter)}
                    className={`px-3 py-2 rounded-full text-sm font-semibold ${
                      selectedMealType === filter
                        ? "bg-[#D14267] text-white"
                        : "bg-slate-100 text-titansDarkBlue"
                    }`}
                  >
                    {`${mealTypeIcons[filter]} ${filter}`}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setDiabetesOnly((prev) => !prev)}
                  className={`px-3 py-2 rounded-full text-sm font-semibold ${
                    diabetesOnly ? "bg-[#1F7A62] text-white" : "bg-slate-100 text-titansDarkBlue"
                  }`}
                >
                  🩺 Diabetes friendly
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedRecipes.map((item, index) => (
              <div
                key={item.key}
                className="recipe-card-enter"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="relative">
                  <MenuCard
                    name={item.name}
                    path={`/Recipes/${item.id}`}
                    firebaseName={item.firebaseName}
                    key={item.key}
                  />
                  {item.tags?.includes("Diabetes friendly") && (
                    <span className="absolute top-3 left-3 bg-[#1F7A62] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      Diabetes friendly
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                className="px-3 py-2 rounded-full bg-white shadow text-sm font-semibold disabled:opacity-40"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    type="button"
                    className={`px-3 py-2 rounded-full text-sm font-semibold ${
                      currentPage === page
                        ? "bg-[#D14267] text-white"
                        : "bg-white shadow text-titansDarkBlue"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                type="button"
                className="px-3 py-2 rounded-full bg-white shadow text-sm font-semibold disabled:opacity-40"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}

          <Card
            card={{
              name: "More recipes",
              onClick: () => openInNewTab(moreRecipesLink),
              additionalStyling: "w-full",
            }}
          >
            <div className="py-6 md:py-10 md:text-2xl text-homepageHeaderText font-semibold text-center">
              More recipes
            </div>
          </Card>
        </div>
      </div>

      {showFilterToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4">
          <div className="recipe-filter-toast bg-white rounded-full shadow-lg px-5 py-3 text-sm md:text-base font-semibold text-titansDarkBlue">
            {filterToastText}
          </div>
        </div>
      )}

      {showTipPopup && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="recipe-popup max-w-md w-full bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h3 className="text-titansDarkBlue font-semibold text-2xl mb-3">Chef Mission</h3>
            <p className="text-homepageHeaderText text-base md:text-lg font-medium mb-6">
              {currentTip}
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-slate-100 text-titansDarkBlue text-sm font-semibold"
                onClick={() => setShowTipPopup(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-[#D14267] text-white text-sm font-semibold"
                onClick={openRandomTip}
              >
                New tip
              </button>
            </div>
          </div>
        </div>
      )}

      {showMagicPopup && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="recipe-popup max-w-md w-full bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h3 className="text-titansDarkBlue font-semibold text-2xl mb-3">Magic Recipe Picker</h3>
            <p className="text-homepageHeaderText text-base md:text-lg font-medium mb-4">
              {isPickingRecipe
                ? "Mixing tasty ideas..."
                : "Your next recipe mission is ready!"}
            </p>
            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 mb-5">
              <p className="text-titansDarkBlue font-semibold text-xl">
                {magicRecipe?.name || "Choosing..."}
              </p>
              {magicRecipe && (
                <p className="text-homepageHeaderText text-sm mt-2">{magicRecipe.description}</p>
              )}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-slate-100 text-titansDarkBlue text-sm font-semibold"
                onClick={() => setShowMagicPopup(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-[#2464A5] text-white text-sm font-semibold disabled:opacity-50"
                onClick={openMagicPicker}
                disabled={isPickingRecipe}
              >
                Pick again
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-[#D14267] text-white text-sm font-semibold disabled:opacity-50"
                disabled={!magicRecipe || isPickingRecipe}
                onClick={() => {
                  if (magicRecipe) navigate(`/Recipes/${magicRecipe.id}`);
                }}
              >
                Cook this
              </button>
            </div>
          </div>
        </div>
      )}

      {showWheelPopup && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="recipe-popup max-w-md w-full bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h3 className="text-titansDarkBlue font-semibold text-2xl mb-3">Spin The Meal Wheel</h3>
            <p className="text-homepageHeaderText text-base md:text-lg font-medium mb-4">
              {isWheelSpinning ? "Spinning..." : "Wheel complete! Try this category next:"}
            </p>
            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 mb-5 text-center">
              <p className={`text-5xl mb-2 ${isWheelSpinning ? "recipe-wheel-spin" : ""}`}>
                {mealTypeIcons[wheelResult]}
              </p>
              <p className="text-titansDarkBlue font-semibold text-xl">{wheelResult}</p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-slate-100 text-titansDarkBlue text-sm font-semibold"
                onClick={() => setShowWheelPopup(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-[#1F7A62] text-white text-sm font-semibold disabled:opacity-50"
                onClick={spinMealWheel}
                disabled={isWheelSpinning}
              >
                Spin again
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-[#D14267] text-white text-sm font-semibold disabled:opacity-50"
                onClick={() => {
                  onFilterClick(wheelResult);
                  setShowWheelPopup(false);
                }}
                disabled={isWheelSpinning}
              >
                Use this
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipes;
