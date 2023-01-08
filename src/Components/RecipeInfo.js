import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./RecipeInfo.module.css"
const RecipeInfo = () => {
    const [item, setItem]=useState();
  const { MealId } = useParams();
  if (MealId != "") {
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => setItem(data.meals[0]));

  }

  if(item){
    const url=item.strYoutube;
    const link=url.split("=");
    var vid=link[link.length-1]
  }
  console.log(vid)

  return (
    <>
      {
        (!item)?"":(<>
            <div className={classes.content}>
                <img src={item.strMealThumb} alt=""></img>
                <div className={classes.innercontent}>
                    <h1>{item.strMeal}</h1>
                    <h2>{item.strArea}</h2>
                    <h3>{item.strCategory}</h3>
                </div>
                <div className={classes.recipedetail}>
                    <div className={classes.ingredient}>
                        <h2>Ingredient</h2><br/>
                        <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                        <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                        <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
                        <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
                        <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
                        <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
                        <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
                        <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
                        <h4>{item.strIngredient9}:{item.strMeasure9}</h4>


                    </div>
                    <div className={classes.instruction}>
                        <h2>Instruction</h2><br/>
                        <h4>{item.strInstructions}</h4>
                    </div>
                    </div>
                    <div className={classes.video}>
                        <iframe src={`https://www.youtube.com/embed/${vid}`}>

                        </iframe>
                    </div>


            </div>
        </>)
      }
    </>
  );
};
export default RecipeInfo;
