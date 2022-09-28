import React from 'react';
import MealItem from './MealItem/MealItem';
import './MealList.scss';

export default function MealList({ meals }) {
   return (
      <div className="MealList">
         {meals.map((meal) => {
            return <MealItem key={meal.idMeal} {...meal} />;
         })}
      </div>
   );
}
