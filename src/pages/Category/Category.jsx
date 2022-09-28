import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../../api';
import Preloader from '../../components/Preloader/Preloader';
import MealList from '../../components/MealList/MealList';

export default function Category() {
   const { name } = useParams();
   const [meals, setMeals] = useState([]);

   useEffect(() => {
      getFilteredCategory(name).then((data) => {
         setMeals(data.meals);
      });
   }, [name]);
   return <div>{!meals ? <Preloader /> : <MealList meals={meals} />}</div>;
}
