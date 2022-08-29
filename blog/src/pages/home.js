import * as React from 'react';
import Hero from '../hero';
import Blog from '../blog';
import { Link } from 'react-router-dom';


export default function Home(){
  
  return(
    <>
        <Hero />
        <Blog />
    </>)
}