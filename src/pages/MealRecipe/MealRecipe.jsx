import React, { useEffect, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import { getMealById } from '../../api';
import { useParams } from 'react-router-dom';

export default function MealRecipe() {
   const { id } = useParams();
   const [meal, setMeal] = useState({});
   const [ingredients, setIngredients] = useState([]);
   const [measures, setMeasures] = useState([]);

   useEffect(() => {
      getMealById(id).then((data) => {
         const recipe = data.meals[0];
         console.log(recipe);
         setMeal(recipe);
         let ingredientsCount = 0;
         const newIngredients = [];
         const newMeasures = [];
         for (const [key, value] of Object.entries(recipe)) {
            if (key.includes('strIngredient') && value !== '') {
               ingredientsCount = ingredientsCount + 1;
               newIngredients.push(value);
            }
         }
         setIngredients(newIngredients);
         for (const [key, value] of Object.entries(recipe)) {
            if (key.includes('strMeasure') && value !== '') {
               newMeasures.push(value);
            }
         }
         setMeasures(newMeasures);
      });
   }, [id]);

   const {
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strYoutube,
   } = meal;
   return (
      <div>
         {!meal ? (
            <Preloader />
         ) : (
            <div className="MealRecipe" id={idMeal}>
               <h1>{strMeal}</h1>
               <img
                  src={strMealThumb}
                  alt={strMeal}
                  height="200px"
                  width="200px"
               />
               <h3>{strCategory}</h3>
               <h4>{strArea}</h4>
               <p>{strInstructions}</p>
               <ul>
                  {ingredients.map((ingredient, id) => (
                     <li>
                        {ingredient} : {measures[id]}
                     </li>
                  ))}
               </ul>
               {/* <iframe
                  src={strYoutube}
                  frameborder="0"
                  title={strMeal}
               ></iframe> */}
            </div>
         )}
      </div>
   );
}
