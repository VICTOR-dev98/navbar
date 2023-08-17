import React from 'react'
import { FaBars } from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import logo from '../images/logo.jpg'
import './Navbar.css'


const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='logo'>
              <img src={logo} alt='logo' />
          </div>
          <ul className='nav-menu'>
              <li className='nav-item'><a href='/'>Home</a></li>
              <li className='nav-item'><a href='/'>About</a></li>
              <li className='nav-item'><a href='/'>FAQ</a></li>
              <li className='nav-item'><a href='/'>Contact</a></li>
          </ul>
          <div className='burger'>
              <FaBars size={30} style={{ color: '#f0f0f0' }} />
              <FaTimes />
          </div>
    </div>
  )
}

export default Navbar