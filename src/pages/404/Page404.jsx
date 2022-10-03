import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.scss';

export default function Page404() {
   return (
      <div className="Page404">
         <h1>404</h1>
         <h3>page not found</h3>
         <Link to="/" className="Page404-btn">
            Return to main
         </Link>
      </div>
   );
}
