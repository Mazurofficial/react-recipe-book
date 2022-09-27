import React from 'react';
import Category from './Category/Category';
import './CategoryList.scss';

export default function CategoryList({ catalog }) {
   return (
      <div className="CategoryList">
         {catalog.map((category) => {
            return <Category key={category.idCategory} {...category} />;
         })}
      </div>
   );
}
