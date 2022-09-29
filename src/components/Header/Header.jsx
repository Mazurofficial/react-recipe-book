import React from 'react';
import Search from '../Search/Search';
import './Header.scss';

export default function Header() {
   return (
      <header className="Header">
         <a href="/" className="Header-logo">
            Recipe-Book
         </a>
         <Search />
      </header>
   );
}
