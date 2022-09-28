import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import './App.css';
import Page404 from './pages/404/Page404';
import Header from './components/Header/Header';
import Category from './pages/Category/Category';
import MealRecipe from './pages/MealRecipe/MealRecipe';

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<MealRecipe />} />
            <Route path="*" element={<Page404 />} />
         </Routes>
      </div>
   );
}

export default App;
