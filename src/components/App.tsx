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
import FoodCategoryComponent from "./nutritional_Information/food/FoodCategory";
import FoodDetailsComponent from "./nutritional_Information/food_details/FoodDetailsComponent";
import Recipes from "./recipes/RecipesMenu";
import RecipeDetails from "./recipes/RecipeDetails";
import NutritionDetailsComponent from "./nutritional_Information/nutritional/NutritionDetailsComponent";
import NutrientActivityPage from "./nutritional_Information/nutritional/NutrientActivityPage";
import NutritionalInformation from "./nutritional_Information/NutritionalInformation";
import VideosComponent from "./videos/VideosComponent";
import AboutUs from "./aboutUs/AboutUs";
import ExternalGames from "./games/ExternalGames/ExternalGamesMenu";
import MentalHealth from "./mental_Health/MentalHealth";
import MentalHealthCaseStudy from "./mental_Health/MentalHealthCaseStudy";
import Blog from "./blog/Blog";
import BlogArticle from "./blog/BlogArticle";
import GetInvolved from "./get_Involved/GetInvolved";

const App: React.FC = () => (
  <div className="layout-container">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" />
        <Route index element={<HomePageComponents />} />
        <Route path="FoodAndNutrition">
          <Route index element={<NutritionalInformation showFood />} />

          <Route path="Nutrition">
            <Route index element={<NutritionalInformation showFood={false} />} />
            <Route path=":nutritionName">
              <Route index element={<NutritionDetailsComponent />} />
              <Route path=":nutrientName" element={<NutrientActivityPage />} />
            </Route>
          </Route>

          <Route path=":foodCategory">
            <Route index element={<FoodCategoryComponent />} />
            <Route path=":foodName" element={<FoodDetailsComponent />} />
          </Route>

          <Route path="FruitAndVegetables">
            <Route index element={<FoodCategoryComponent />} />
            <Route path=":foodCategory">
              <Route index element={<FoodCategoryComponent />} />
              <Route path=":foodName" element={<FoodDetailsComponent />} />
            </Route>
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
          <Route path=":recipeId" element={<RecipeDetails />} />
        </Route>
        <Route path="AboutUs">
          <Route index element={<AboutUs />} />
        </Route>
        <Route path="MentalHealth">
          <Route index element={<MentalHealth />} />
          <Route path=":caseStudyId" element={<MentalHealthCaseStudy />} />
        </Route>
        <Route path="Blog">
          <Route index element={<Blog />} />
          <Route path=":articleId" element={<BlogArticle />} />
        </Route>
        <Route path="GetInvolved">
          <Route index element={<GetInvolved />} />
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
          <Route path="ExternalGames">
            <Route
              index
              element={
                <GameContext>
                  <ExternalGames />
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
