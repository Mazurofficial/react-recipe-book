import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.scss';

export default function Header() {
   return (
      <header className="Header">
         <Link to="/" className="Header-logo">
            Recipe-Book
         </Link>
         <Search />
      </header>
   );
}
