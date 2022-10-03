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
      strYoutube,
   } = meal;

   const YT_LINK =
      'https://www.youtube.com/embed/' +
      (strYoutube ? strYoutube.slice(-11) : '');

   return (
      <div>
         {!meal ? (
            <Preloader />
         ) : (
            <div className="MealRecipe" id={idMeal}>
               <img src={strMealThumb} alt={strMeal} />
               <div className="MealRecipe-info">
                  <h1>{strMeal}</h1>
                  <div className="MealRecipe-info-category">
                     <h3>CATEGORY: </h3>
                     <h4>{strCategory}</h4>
                  </div>
                  <div className="MealRecipe-info-area">
                     <h3>AREA: </h3>
                     <h4>{strArea}</h4>
                  </div>
                  <div className="MealRecipe-info-ingredients">
                     <h3>INGREDIENTS: </h3>
                     <ul>
                        {ingredients.map((ingredient, id) => (
                           <li key={`${idMeal}/${id}`}>
                              <h4>
                                 {ingredient} : <span>{measures[id]}</span>
                              </h4>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="MealRecipe-info-instruction">
                     <h3>INSTRUCTION: </h3>
                     <p>{strInstructions}</p>
                  </div>
                  {strYoutube && (
                     <div className="MealRecipe-info-video">
                        <h3>VIDEO RECIPE: </h3>
                        <iframe src={YT_LINK} title={strMeal}></iframe>
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
}
