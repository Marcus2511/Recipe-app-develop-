import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/Meal"></Link>
                  <Link to="/MealItem"></Link>
                  <Link to="/RecipeIndex"></Link>
                  <Link to="/RecipeInfo"></Link>
            </div>
      )
}
export default Navbar;