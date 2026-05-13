import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import { fetchImages, fetchRecipes } from "../../api/FirebaseAPI";
import { normalizeRecipeData, RecipeItem } from "../../models/Recipe";
import VideoPlayer from "../videos/VideoPlayer";
import DefaultLogo from "../../img/Logo.svg";
import trackAnalyticsEvent from "../../config/analytics";

const dummyRecipeVideo =
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";
const stickersKey = "recipe_stickers_v1";
const stickerDefinitions = [
  { id: "prep-master", label: "Prep Master", icon: "🧺" },
  { id: "cook-mode-hero", label: "Cook Mode Hero", icon: "👩‍🍳" },
  { id: "meal-breakfast", label: "Breakfast Explorer", icon: "🍳" },
  { id: "meal-lunch", label: "Lunch Explorer", icon: "🥪" },
  { id: "meal-dinner", label: "Dinner Explorer", icon: "🍲" },
  { id: "meal-snacks", label: "Snack Explorer", icon: "🍎" },
];

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipes, setRecipes] = useState<RecipeItem[]>([]);
  const [imageUrl, setImageUrl] = useState<string>();
  const [imageFallbackStep, setImageFallbackStep] = useState(0);
  const [displayVideoUrl, setDisplayVideoUrl] = useState<string>(dummyRecipeVideo);
  const [showMissionPopup, setShowMissionPopup] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const [isCookMode, setIsCookMode] = useState(false);
  const [cookStepIndex, setCookStepIndex] = useState(0);
  const [stickers, setStickers] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    fetchRecipes().then((data) =>
      setRecipes(normalizeRecipeData((data || []) as unknown[]))
    );
  }, []);

  const recipe = useMemo(
    () => recipes.find((item) => item.id === recipeId),
    [recipes, recipeId]
  );

  useEffect(() => {
    if (!recipe) return;

    const fallbackImage = `https://picsum.photos/seed/recipe-detail-${recipe.id}/900/600`;
    setImageFallbackStep(0);
    if (recipe.firebaseName) {
      fetchImages(recipe.firebaseName)
        .then((url) => setImageUrl(url))
        .catch(() => setImageUrl(fallbackImage));
    } else {
      setImageUrl(fallbackImage);
    }
  }, [recipe]);

  useEffect(() => {
    setDisplayVideoUrl(recipe?.videoUrl || dummyRecipeVideo);
  }, [recipe]);

  useEffect(() => {
    setCheckedIngredients([]);
    setIsCookMode(false);
    setCookStepIndex(0);
  }, [recipeId]);

  useEffect(() => {
    const fromStorage = window.localStorage.getItem(stickersKey);
    if (fromStorage) {
      setStickers(JSON.parse(fromStorage) as string[]);
    }
  }, []);

  useEffect(
    () => () => {
      window.speechSynthesis.cancel();
    },
    []
  );

  const unlockSticker = (stickerId: string) => {
    setStickers((prev) => {
      if (prev.includes(stickerId)) return prev;
      const updated = prev.concat(stickerId);
      window.localStorage.setItem(stickersKey, JSON.stringify(updated));
      return updated;
    });
  };

  const checkedCount = checkedIngredients.length;
  const totalIngredients = recipe?.ingredients.length || 0;
  const completionPercent =
    totalIngredients > 0 ? Math.round((checkedCount / totalIngredients) * 100) : 0;
  const totalMethodSteps = recipe?.method.length || 0;
  const currentCookStep = recipe?.method[cookStepIndex] || "";
  const isLastCookStep = totalMethodSteps > 0 && cookStepIndex === totalMethodSteps - 1;

  useEffect(() => {
    if (completionPercent === 100) unlockSticker("prep-master");
  }, [completionPercent]);

  useEffect(() => {
    if (!recipe) return;
    const mealSticker = `meal-${recipe.mealType.toLowerCase()}`;
    unlockSticker(mealSticker);
  }, [recipe]);

  useEffect(() => {
    if (!recipe) return;

    trackAnalyticsEvent("recipe_opened", {
      recipe_id: recipe.id,
      recipe_name: recipe.name,
      meal_type: recipe.mealType,
    });
  }, [recipe]);

  if (!recipe) {
    return (
      <>
        <AppHeader>
          <MenuHeader title="Recipe" body="We couldn't find that recipe." />
        </AppHeader>
        <div className="px-6 md:px-10 pb-20">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <Link className="text-[#D14267] font-semibold" to="/Recipes">
              Back to Recipes
            </Link>
          </div>
        </div>
      </>
    );
  }

  const speakCurrentStep = () => {
    if (!currentCookStep) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentCookStep);
    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <AppHeader>
        <MenuHeader title={recipe.name} body={recipe.description} />
      </AppHeader>

      <div className="px-6 md:px-10 pb-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-6">
              <div className="rounded-2xl overflow-hidden bg-slate-100 h-64">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      if (imageFallbackStep === 0) {
                        setImageFallbackStep(1);
                        e.currentTarget.src =
                          `https://picsum.photos/seed/recipe-detail-${recipe.id}/900/600`;
                        return;
                      }

                      if (imageFallbackStep === 1) {
                        setImageFallbackStep(2);
                        e.currentTarget.src = DefaultLogo;
                        return;
                      }

                      setImageFallbackStep(3);
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    Loading image...
                  </div>
                )}
                {imageFallbackStep > 2 && (
                  <div className="w-full h-full flex items-center justify-center text-4xl">🍽️</div>
                )}
              </div>
              <div>
                <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-4">
                  Recipe overview
                </h2>
                <p className="text-homepageHeaderText text-base md:text-lg font-medium mb-4">
                  {recipe.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {recipe.calories && (
                    <span className="inline-block rounded-full bg-[#EAF5FF] text-[#2464A5] px-3 py-1 text-sm font-semibold">
                      {recipe.calories} kcal
                    </span>
                  )}
                  {recipe.prepTime && (
                    <span className="inline-block rounded-full bg-slate-100 text-homepageHeaderText px-3 py-1 text-sm font-semibold">
                      Prep: {recipe.prepTime}
                    </span>
                  )}
                  {recipe.servings && (
                    <span className="inline-block rounded-full bg-slate-100 text-homepageHeaderText px-3 py-1 text-sm font-semibold">
                      Serves: {recipe.servings}
                    </span>
                  )}
                  {recipe.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-[#1F7A62] text-white px-3 py-1 text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-4 px-4 py-2 rounded-full bg-[#D14267] text-white text-sm font-semibold"
                  onClick={() => setShowMissionPopup(true)}
                >
                  Start cooking mission
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
            <h3 className="text-titansDarkBlue font-semibold text-2xl mb-3">Sticker board</h3>
            <p className="text-homepageHeaderText text-sm md:text-base font-medium mb-4">
              Unlock stickers by completing missions and trying different meal categories.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {stickerDefinitions.map((sticker) => {
                const unlocked = stickers.includes(sticker.id);
                return (
                  <div
                    key={sticker.id}
                    className={`rounded-2xl p-3 border text-center ${
                      unlocked ? "bg-[#FFF4F8] border-[#F5BDD0]" : "bg-slate-50 border-slate-100"
                    }`}
                  >
                    <p className={`text-3xl ${unlocked ? "recipe-card-enter" : "opacity-40"}`}>
                      {sticker.icon}
                    </p>
                    <p className="text-homepageHeaderText text-xs md:text-sm font-semibold mt-1">
                      {sticker.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
              <h3 className="text-titansDarkBlue font-semibold text-2xl mb-4">Ingredients</h3>
              {recipe.ingredients.length > 0 ? (
                <ul className="text-homepageHeaderText text-base md:text-lg font-medium space-y-3">
                  {recipe.ingredients.map((item, index) => (
                    <li key={item}>
                      <label
                        htmlFor={`ingredient-${index}`}
                        className="flex items-start gap-2 cursor-pointer"
                      >
                        <input
                          id={`ingredient-${index}`}
                          type="checkbox"
                          checked={checkedIngredients.includes(item)}
                          onChange={() => {
                            setCheckedIngredients((prev) =>
                              prev.includes(item)
                                ? prev.filter((value) => value !== item)
                                : prev.concat(item)
                            );
                          }}
                        />
                        <span>{item}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-homepageHeaderText text-base md:text-lg font-medium">
                  Ingredients will be added soon.
                </p>
              )}
              {totalIngredients > 0 && (
                <div className="mt-5">
                  <p className="text-homepageHeaderText text-sm font-semibold">
                    Ingredient prep: {checkedCount}/{totalIngredients} ({completionPercent}%)
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-[#D14267] transition-all duration-300"
                      style={{ width: `${completionPercent}%` }}
                    />
                  </div>
                  {completionPercent === 100 && (
                    <p className="mt-3 text-[#D14267] font-semibold recipe-card-enter">
                      Great job! You prepped everything. Ready to cook!
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
              <h3 className="text-titansDarkBlue font-semibold text-2xl mb-4">How to make it</h3>
              {recipe.method.length > 0 ? (
                <>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        isCookMode
                          ? "bg-[#D14267] text-white"
                          : "bg-slate-100 text-titansDarkBlue"
                      }`}
                      onClick={() => {
                        setIsCookMode(!isCookMode);
                        setCookStepIndex(0);
                      }}
                    >
                      {isCookMode ? "Exit cook mode" : "Start cook mode"}
                    </button>
                  </div>

                  {!isCookMode && (
                    <ol className="text-homepageHeaderText text-base md:text-lg font-medium space-y-3">
                      {recipe.method.map((step, index) => (
                        <li key={step}>{`${index + 1}. ${step}`}</li>
                      ))}
                    </ol>
                  )}

                  {isCookMode && (
                    <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 recipe-card-enter">
                      <p className="text-homepageHeaderText text-sm font-semibold mb-2">
                        Step {cookStepIndex + 1} of {totalMethodSteps}
                      </p>
                      <div className="h-2 rounded-full bg-white overflow-hidden mb-4">
                        <div
                          className="h-full bg-[#D14267] transition-all duration-300"
                          style={{ width: `${((cookStepIndex + 1) / totalMethodSteps) * 100}%` }}
                        />
                      </div>
                      <p className="text-titansDarkBlue text-lg md:text-xl font-semibold mb-5">
                        {currentCookStep}
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-full bg-white shadow text-sm font-semibold disabled:opacity-40"
                          onClick={() => setCookStepIndex((prev) => Math.max(0, prev - 1))}
                          disabled={cookStepIndex === 0}
                        >
                          Back
                        </button>
                        {!isLastCookStep && (
                          <button
                            type="button"
                            className="px-4 py-2 rounded-full bg-[#D14267] text-white text-sm font-semibold"
                            onClick={() =>
                              setCookStepIndex((prev) => Math.min(totalMethodSteps - 1, prev + 1))
                            }
                          >
                            Next step
                          </button>
                        )}
                        {isLastCookStep && (
                          <button
                            type="button"
                            className="px-4 py-2 rounded-full bg-[#2464A5] text-white text-sm font-semibold"
                            onClick={() => {
                              unlockSticker("cook-mode-hero");
                              setIsCookMode(false);
                              setCookStepIndex(0);
                            }}
                          >
                            Finish
                          </button>
                        )}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-full bg-[#1F7A62] text-white text-sm font-semibold"
                          onClick={speakCurrentStep}
                        >
                          Read step aloud
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 rounded-full bg-slate-100 text-titansDarkBlue text-sm font-semibold disabled:opacity-40"
                          onClick={() => {
                            window.speechSynthesis.cancel();
                            setIsSpeaking(false);
                          }}
                          disabled={!isSpeaking}
                        >
                          Stop voice
                        </button>
                      </div>
                      {isLastCookStep && (
                        <p className="mt-4 text-[#D14267] font-semibold">
                          Amazing. You completed cook mode!
                        </p>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <p className="text-homepageHeaderText text-base md:text-lg font-medium">
                  Method steps will be added soon.
                </p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
            <h3 className="text-titansDarkBlue font-semibold text-2xl mb-4">Watch recipe video</h3>
            <div className="max-w-2xl">
              <VideoPlayer
                videoUrl={displayVideoUrl}
                onError={() => {
                  setDisplayVideoUrl(dummyRecipeVideo);
                }}
              />
            </div>
            <Link className="inline-block mt-6 text-[#D14267] font-semibold" to="/Recipes">
              Back to Recipes
            </Link>
          </div>
        </div>
      </div>

      {showMissionPopup && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="recipe-popup max-w-md w-full bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h3 className="text-titansDarkBlue font-semibold text-2xl mb-3">Cooking mission</h3>
            <p className="text-homepageHeaderText text-base md:text-lg font-medium mb-4">
              Complete these mini goals while making {recipe.name}:
            </p>
            <ul className="text-homepageHeaderText text-base font-medium space-y-2 mb-6">
              <li>- Wash hands and prep your station.</li>
              <li>- Read all steps before starting.</li>
              <li>- Taste once before serving and adjust seasoning.</li>
            </ul>
            <button
              type="button"
              className="px-4 py-2 rounded-full bg-[#D14267] text-white text-sm font-semibold"
              onClick={() => setShowMissionPopup(false)}
            >
              Let&apos;s cook
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
