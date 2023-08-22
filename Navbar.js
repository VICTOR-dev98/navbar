import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import logo from '../images/logo.jpg'
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)

  return (
      <div className='navbar'>
          <div className='logo'>
              <img src={logo} alt='logo' />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'><a href='/'>Home</a></li>
              <li className='nav-item'><a href='/'>About</a></li>
              <li className='nav-item'><a href='/'>FAQ</a></li>
              <li className='nav-item'><a href='/'>Contact</a></li>
          </ul>
          <div className='burger' onClick={handleClick}>
              {click ? (<FaTimes size={30} style={{ color: '#f0f0f0' }}/>) : (<FaBars size={30} style={{ color: '#f0f0f0' }} />)}
          </div>
    </div>
  )
}

export default Navbar