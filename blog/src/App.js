import * as React from 'react';
import ButtonAppBar from './navbar'; 
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';


export default function App(){
 
  return(
    <>
      <ButtonAppBar />
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
      
 
     
    </>)
}