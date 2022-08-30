import * as React from 'react';
import ButtonAppBar from './navbar'; 
import Home from './pages/home';
import News from './pages/news';
import { Route, Routes } from 'react-router-dom';


export default function App(){
 
  return(
    <>
      <ButtonAppBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<div>Man, you better have my news bro</div>} />
      </Routes>
      
      

    </>)
}