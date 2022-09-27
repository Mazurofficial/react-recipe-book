import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Category.scss';

export default function Category(props) {
   const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
      props;
   const value = useLocation();
   console.log(value);

   return (
      <div id={idCategory} className="Category">
         <img src={strCategoryThumb} alt={strCategory} />
         <div className="Category-info">
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription.slice(0, 75)}...</p>
            <Link to={`/category/${strCategory}`}>
               <button>Learn more</button>
            </Link>
         </div>
      </div>
   );
}
