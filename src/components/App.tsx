import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import Navbar from "./app_header/Navbar/Navbar";
import Challenges from "./fitness_Challenges/ChallengesMenu";
import ChallengeDetailsComponent from "./fitness_Challenges/challenge_details/ChallengeDetailsComponent";
import Footer from "./Footer/Footer";
import BuildYourPlate from "./games/BuildYourPlate/BuildYourPlate";
import GameContext from "./games/GameContext";
import Games from "./games/GamesMenu";
import Quiz from "./games/quiz/Quiz";
import QuizContext from "./games/quiz/QuizContext";
import HomePageComponents from "./HomePageComponents";
import FoodCategory from "./nutritional_Information/food/FoodCategory";
import FoodDetailsComponent from "./nutritional_Information/food_details/FoodDetailsComponent";
import Recipes from "./recipes/RecipesMenu";
import NutritionDetailsComponent from "./nutritional_Information/nutritional/NutritionDetailsComponent";
import NutritionalInformation from "./nutritional_Information/NutritionalInformation";
import VideosComponent from "./videos/VideosComponent";
import AboutUs from "./aboutUs/AboutUs";

const App: React.FC = () => (
  <div className="layout-container">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" />
        <Route index element={<HomePageComponents />} />
        <Route path="NutritionalInformation">
          <Route index element={<NutritionalInformation />} />
          {["Fat", "SaltAndSugar", "Water", "Protein", "Carbs", "MacroAndMicroNutrients"].map(
            (nutritionCategory) => (
              <Route
                key={nutritionCategory}
                path={nutritionCategory}
                element={<NutritionDetailsComponent nutritionName={nutritionCategory} />}
              />
            )
          )}
          <Route path="FruitAndVegetables">
            <Route index element={<FoodCategory />} />
            <Route path=":foodCategory">
              <Route index element={<FoodCategory />} />
              <Route path=":foodName" element={<FoodDetailsComponent />} />
            </Route>
          </Route>
          <Route path=":foodCategory">
            <Route index element={<FoodCategory />} />
            <Route path=":foodName" element={<FoodDetailsComponent />} />
          </Route>
        </Route>
        <Route path="FitnessChallenges">
          <Route index element={<Challenges />} />
          <Route path=":challengeName" element={<ChallengeDetailsComponent />} />
        </Route>
        <Route path="Videos">
          <Route index element={<VideosComponent />} />
        </Route>
        <Route path="Recipes">
          <Route index element={<Recipes />} />
        </Route>
        <Route path="AboutUs">
          <Route index element={<AboutUs />} />
        </Route>
        <Route path="Games">
          <Route index element={<Games />} />
          <Route path="Quiz">
            <Route
              index
              element={
                <GameContext>
                  <QuizContext>
                    <Quiz />
                  </QuizContext>
                </GameContext>
              }
            />
          </Route>
          <Route path="BuildYourPlate">
            <Route
              index
              element={
                <GameContext>
                  <BuildYourPlate />
                </GameContext>
              }
            />
          </Route>
        </Route>
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
