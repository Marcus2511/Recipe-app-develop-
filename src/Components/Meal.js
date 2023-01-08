import React, { useEffect, useState } from "react";
import classes from "./Meal.module.css"
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
const Meal=()=>{
    const [url, setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem]=useState();
    const [show, setShow]=useState(false)
    const [search, setSearch]=useState("")
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals)
            setItem(data.meals)
            setShow(true)
        })
    },[url])
    console.log(show);

    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const indexSearch=(KB)=>{
        if(KB.key==="Enter")
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    return(
        <div className={classes.main}>
            <div className={classes.heading}>
                <h1>Search your food Recipe</h1>
                <h3>"Patience is the secret to good food."</h3>
                <h4>Gail Simmons</h4>
            </div>
            <div className={classes.searchbox}>
                <input type="search" className={classes["search-bar"]} onChange={e=>setSearch(e.target.value)} onKeyPress={indexSearch}></input>
            </div>
            <div className={classes.container}>
                {
                    show? <MealItem data={item}/>:"NOT FOUND"
                }
            </div>
            <div className={classes.indexcontainer}>
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>
    );
};
export default Meal;