import React from "react";
import classes from "./RecipeIndex.module.css"

const RecipeIndex=(props)=>{
    const alpha=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num=0;
    console.log(props)
    return(
        <>
            {alpha.map(item=>{
                return(
                    <div className={classes.numbox} key={num++} onClick={()=>props.alphaIndex(item)}>
                        <h3>{item}</h3>
                    </div>
                )
            })}
        </>
    );
}

export default RecipeIndex;