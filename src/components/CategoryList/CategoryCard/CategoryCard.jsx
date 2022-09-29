import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.scss';

export default function CategoryCard(props) {
   const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
      props;

   return (
      <div id={idCategory} className="CategoryCard">
         <img src={strCategoryThumb} alt={strCategory} />
         <div className="CategoryCard-info">
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription.slice(0, 75)}...</p>
            <Link to={`/category/${strCategory}`}>
               <button>Learn more</button>
            </Link>
         </div>
      </div>
   );
}
