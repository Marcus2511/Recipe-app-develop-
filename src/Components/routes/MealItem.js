import React from "react";
import classes from "./MealItem.module.css";
import { useNavigate } from "react-router-dom";

const MealItem = (props) => {
  console.log(props.data);
    let navigate=useNavigate();
  return (
    <>
    {(!props.data)?"NOT FOUND":props.data.map((item) => {
        return (
          <div className={classes.card} key ={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
            <img src={item.strMealThumb} alt="meal picture"></img>
            <h3>{item.strMeal}</h3>
          </div>
        );
      })} 
    </>
  );
};

export default MealItem;
