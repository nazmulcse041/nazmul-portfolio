import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nazmul</a>
      <ul className='permalinks'>
        <li><a href="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Porfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
       <small>&copy; Nazmul Hasan.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer