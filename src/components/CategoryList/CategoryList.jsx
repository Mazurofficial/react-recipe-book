import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import './CategoryList.scss';

export default function CategoryList({ catalog }) {
   return (
      <div className="CategoryList">
         {catalog.map((category) => {
            return <CategoryCard key={category.idCategory} {...category} />;
         })}
      </div>
   );
}
