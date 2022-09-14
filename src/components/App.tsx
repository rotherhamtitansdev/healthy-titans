import React from "react";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import HomePageComponents from "./HomePageComponents";
import NutritionalInformation from "./nutritional_Information/NutritionalInformation";
import FoodCategory from "./nutritional_Information/food/FoodMenu";
import FoodDetailsComponent from "./nutritional_Information/food_details/FoodDetailsComponent";
import NutritionCategory from "./nutritional_Information/nutritional/NutritionCategory";
import Challenges from "./fitness_Challenges/ChallengesMenu";
import SignIn from "./auth/SignIn";
import AuthRoute from "./auth/AuthRoute";
import Recipes from "./recipes/RecipesMenu";
import Games from "./games/GamesMenu";
import Test from "./Test";
import ForgotPassword from "./ForgotPassword";
import VideosComponent from "./videos/VideosComponent";
import ChallengeDetailsComponent from "./fitness_Challenges/challenge_details/ChallengeDetailsComponent";
import NutritionDetailsComponent from "./nutritional_Information/nutritional/NutritionDetailsComponent";
import DND from "./DND";
import QuizMenu from "./games/quiz/QuizMenu";
import Quiz from "./games/quiz/Quiz";
import Footer from "./Footer/Footer";
import Navbar from "./app_header/Navbar/Navbar";
import BuildYourPlateContext from "./games/BuildYourPlate/BuildYourPlateContext";

const App: React.FC = () => (
  <div className="layout-container">
    <Navbar />
    <Routes>
      <Route path="/" />
      <Route index element={<HomePageComponents />} />
      <Route path="NutritionalInformation">
        <Route index element={<NutritionalInformation />} />
        <Route path="NutritionCategory">
          <Route index element={<NutritionCategory />} />
          <Route
            path=":nutritionName"
            element={<NutritionDetailsComponent />}
          />
        </Route>
        <Route path="FoodCategory">
          <Route index element={<FoodCategory />} />
          <Route path=":foodCategory">
            <Route index element={<FoodCategory />} />
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
      </Route>
      <Route path="Games">
        <Route index element={<Games />} />
        <Route path="Quiz">
          <Route index element={<QuizMenu />} />
          <Route path=":quizName" element={<Quiz />} />
        </Route>
        <Route path="BuildYourPlate">
          <Route index element={<BuildYourPlateContext />} />
        </Route>
      </Route>
      <Route
        path="test"
        element={(
          <AuthRoute>
            <Test />
          </AuthRoute>
        )}
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/dnd" element={<DND />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
