import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/style.css';

import Header from './components/Header';
import Home from './components/Home';
import Singlemovie from './components/Singlemovie';
import Toprated from './components/Toprated';
import Upcoming from './components/Upcoming';
import Moviesearch from './components/Moviesearch';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>

      
      <Route path='' element={<Home />} />
      <Route path='top-rated-page' element={<Toprated />} />
      <Route path='upcoming-movie' element={<Upcoming />} />
      <Route path='single-movie/:id' element={<Singlemovie />} />
      <Route path='movie-search' element={<Moviesearch />} />


    </Routes>
  </BrowserRouter>
);

