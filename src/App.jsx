import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './Components/Footer'
import Layout from './Layout/Layout'
import Contact from './pages/Contact';
import ErrorPage from './pages/Error';

export default function App () {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index path='/' element={<Home />} />
            <Route index path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  )
}


// <Navbar />
//     <Home />
//     <Apout />
//     <Footer />