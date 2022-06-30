import React,{useState} from 'react'
import MealList from '../componets/MealList'
import './Daite.css'
function Daite ()
{
    const [mealData ,setMealDate]=useState(null);
    const[calories ,setCalories]=useState(2000);
  
  
    function getMealData()
    {
      fetch(
    `https://api.spoonacular.com/mealplanner/generate?apiKey=9739a465832a47c0be1391752d7c19be&timeFrame=day&targetCalories=${calories}`
      )
        .then((response) => response.json())
        .then((data) => 
        {
          setMealDate(data);
        })
        .catch(() =>
         {
          console.log("error");
        });
    }
    function handelchange(e)
    {
      setCalories(e.target.value);
  
    }
  
   
   
    
    return(
       <div className="App">
      <section className="controles">
        <input
        type="number"
        placeholder="calories (e.g.2000)"
        onChange={handelchange}
  
        />
        <button onClick={getMealData}>
          Ge Daliy Meal Plank
        </button>
        {mealData && <MealList mealData={mealData}/>}
  
      </section>
  


</div>

);
}

export default Daite;