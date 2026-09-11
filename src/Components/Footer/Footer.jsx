import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-about'>
                <div className='footer-logo'>EasyTextShare</div>
                <p>Share important text safely and simply using a short code. Free, fast, and no account required.</p>
            </div>
            <div className='footer-col'>
                <div className='footer-heading'>Pages</div>
                <Link to="/" className='footer-link'>Home</Link>
                <Link to="/about" className='footer-link'>About</Link>
                <Link to="/how-it-works" className='footer-link'>How It Works</Link>
                <Link to="/faq" className='footer-link'>FAQ</Link>
                <Link to="/contact" className='footer-link'>Contact</Link>
            </div>
            <div className='footer-col'>
                <div className='footer-heading'>Legal</div>
                <Link to="/privacy-policy" className='footer-link'>Privacy Policy</Link>
                <Link to="/terms" className='footer-link'>Terms of Service</Link>
            </div>
        </div>
        <div className='footer-bottom'>
            © 2025 Tharupama Nayana. All rights reserved.
        </div>
    </div>
  )
}

export default Footer