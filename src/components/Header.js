// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import  "./css/normalize.css";
import "./css/style.css";

function Home() {
  return (
    <div className='header'>
       <ul>
         <li>
            <Link to="/">Главная</Link>
         </li>
         <li>
           <Link to="/about">О нас</Link>
         </li>                    
      </ul>
      {/* Здесь можно разместить содержимое для домашней страницы */}
      
    </div>
  );
}

export default Home;
