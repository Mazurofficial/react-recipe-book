import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../api';
import CategoryList from '../../components/CategoryList/CategoryList';
import Preloader from '../../components/Preloader/Preloader';

export default function Main() {
   const [catalog, setCatalog] = useState([]);

   useEffect(() => {
      getAllCategories().then((data) => {
         setCatalog(data.categories);
      }); //eslint-disable-next-line
   }, []);

   return (
      <>
         {console.log(catalog)}
         {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}
      </>
   );
}
