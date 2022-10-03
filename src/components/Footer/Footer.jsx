import React from 'react';
import Search from '../Search/Search';
import './Footer.scss';

export default function Footer() {
   return (
      <header className="Footer">
         <Search />
         <a
            className="Footer-github"
            href="https://github.com/Mazurofficial/react-recipe-book"
         >
            Github
         </a>
      </header>
   );
}
