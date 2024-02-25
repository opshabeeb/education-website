import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../components/pages/home/Home'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Plans from '../components/pages/plans/Plans'
import Courses from '../components/pages/courses/Courses'
import AboutUs from '../components/pages/aboutus/AboutUs'
import ContactUs from '../components/pages/contactus/ContactUs'
import Support from '../components/pages/support/Support'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='plan' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/about-us' element={<AboutUs/>} />
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/support' element={<Support/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes