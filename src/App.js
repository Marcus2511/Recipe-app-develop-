import Meal from "./Components/routes/Meal";
import { Routes, Route } from "react-router-dom";
import RecipeInfo from "./Components/routes/RecipeInfo"
import { BrowserRouter } from "react-router-dom";
import RecipeIndex from "./Components/routes/RecipeIndex";
import MealItem from "./Components/routes/MealItem";
import Navbar from "./Navbar";


function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/:MealId" element={<RecipeInfo />} />
        </Routes>
    </div>
  );
}

export default App;
