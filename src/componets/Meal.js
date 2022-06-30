import React,{useState,useEffect} from "react";
export default function Meal({meal})
{
    const [imageUrl,setimageUrl]=useState("");
    useEffect(()=>
    {
    fetch (
    `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=9739a465832a47c0be1391752d7c19be&includeNutrition=false`
      
    )
    .then((response) => response.json())
    .then((data) => 
    {
      setimageUrl(data.image);
    })
    .catch(() =>
     {
      console.log("error");
    });
},
    [meal.id]);

    return(
        <article>
    <h1>
    {meal.title}
    </h1>
    <img src = {imageUrl} alt =""/>
    <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
      <a href ={meal.sourceUrl}> got to recipe</a>




        </article>

    );
    }