import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>EasyTextShare</div>
        <ul className='nav-menu'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
            <li><NavLink to="/how-it-works" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>How It Works</NavLink></li>
            <li><NavLink to="/faq" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>FAQ</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar