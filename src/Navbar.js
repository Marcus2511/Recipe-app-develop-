import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/Meal">Meal</Link>
                  <Link to="/MealItem">MealItem</Link>
                  <Link to="/RecipeIndex">RecipeIndex</Link>
                  <Link to="/RecipeInfo">RecipeInfo</Link>
            </div>
      )
}
export default Navbar;