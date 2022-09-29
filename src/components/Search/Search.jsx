import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.scss';

export default function Search({ serchMeal }) {
   const [search, setSearch] = useState('');

   return (
      <div className="Search">
         <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Name of dish"
         />
         <Link
            to={`/searchedMeal/${search}`}
            onClick={() => setSearch('')}
            style={{ pointerEvents: search ? '' : 'none' }}
         >
            Search
         </Link>
      </div>
   );
}
