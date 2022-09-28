import React from 'react';
import './MealItem.scss';
import { Link } from 'react-router-dom';

export default function MealItem(props) {
   const { strMeal, strMealThumb, idMeal } = props;
   return (
      <Link
         to={`/meal/${idMeal}`}
         id={idMeal}
         className="MealItem"
         style={{
            background: `url(${strMealThumb})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
      >
         <h2>{strMeal}</h2>
      </Link>
   );
}
