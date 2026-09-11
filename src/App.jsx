import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import HowItWorks from './pages/HowItWorks/HowItWorks'
import FAQ from './pages/FAQ/FAQ'
import Contact from './pages/Contact/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Terms from './pages/Terms/Terms'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/how-it-works" element={<HowItWorks/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<Terms/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App