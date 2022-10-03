import React from 'react';
import Search from '../Search/Search';
import './Footer.scss';
import ghIcon from './../../img/gh-icon.svg';

export default function Footer() {
   return (
      <header className="Footer">
         <Search />
         <a
            className="Footer-github"
            href="https://github.com/Mazurofficial/react-recipe-book"
         >
            <img src={ghIcon} alt="ghIcon" />
            Github
         </a>
      </header>
   );
}
