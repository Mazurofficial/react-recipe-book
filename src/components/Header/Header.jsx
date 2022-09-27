import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
   return (
      <header className="Header">
         <a href="/" className="Header-logo">
            Recipe-Book
         </a>
         <nav>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
         </nav>
      </header>
   );
}
