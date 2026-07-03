import React from 'react'
import  { useEffect } from 'react'
import Lenis from "lenis";
import Hero from './Components/Hero'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
const App = () => {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 5.5,
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App