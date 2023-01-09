import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/Meal"></Link>
                  <Link to="/MealItem"></Link>
                  <Link to="/RecipeIndex"></Link>
                  <Link to="/RecipeInfo"></Link>
                  <Link to="/Meal.module.css"></Link>
                  <Link to="/MealItem.module.css"></Link>
                  <Link to="/RecipeIndex.module.css"></Link>
                  <Link to="/RecipeInfo.module.css"></Link>
            </div>
      )
}
export default Navbar;