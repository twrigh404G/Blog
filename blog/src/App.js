import * as React from 'react';
import ButtonAppBar from './navbar'; 
import Threehero from './Threehero'
import Blog from './blog';
import Footer from './footer';
import { Route, Switch } from "react-router-dom";

export default function App(){
  
  return(
    <>
      <ButtonAppBar />
      <Footer />
    </>)
}