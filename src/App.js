import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Work from './Components/Work';
import Studio from './Components/Studio';
import Contact from './Components/Contact';
import Lenis from '@studio-freight/lenis';
import Footer from './Components/Footer';

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/work' element={<Work />}></Route>
        <Route path='/studio' element={<Studio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
