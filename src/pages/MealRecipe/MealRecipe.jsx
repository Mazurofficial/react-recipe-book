import React, { useEffect, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import { getMealById } from '../../api';
import { useParams } from 'react-router-dom';
import './MealRecipe.scss';

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
            if (
               key.includes('strIngredient') &&
               value !== '' &&
               value !== null
            ) {
               ingredientsCount = ingredientsCount + 1;
               newIngredients.push(value);
            }
         }
         setIngredients(newIngredients);
         for (const [key, value] of Object.entries(recipe)) {
            if (key.includes('strMeasure') && value !== '' && value !== null) {
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
      //   strYoutube,
   } = meal;
   return (
      <div>
         {!meal ? (
            <Preloader />
         ) : (
            <div className="MealRecipe" id={idMeal}>
               <img src={strMealThumb} alt={strMeal} />
               <div className="MealRecipe-info">
                  <h1>{strMeal}</h1>
                  <h3>
                     <span>CATEGORY: </span>
                     {strCategory}
                  </h3>
                  <h3>
                     <span>AREA: </span>
                     {strArea}
                  </h3>
                  <ul>
                     <span>INGREDIENTS: </span>
                     {ingredients.map((ingredient, id) => (
                        <li>
                           <h4>
                              {ingredient} : <span>{measures[id]}</span>
                           </h4>
                        </li>
                     ))}
                  </ul>
                  <p>
                     <span>INSTRUCTION: </span> <br />
                     {strInstructions}
                  </p>
               </div>

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
