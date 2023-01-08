import Meal from "./Components/Meal";
import { Routes, Route } from "react-router-dom";
import RecipeInfo from "./Components/RecipeInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={<RecipeInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
