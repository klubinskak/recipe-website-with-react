import React, {useState} from 'react';
import '../navbar.css';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';



const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
      <nav className='nav'>
        <a href="/" className='logo nav__link'>Che fama.</a>
        <button onClick={handleToggle} className='hamburger-btn'><GiHamburgerMenu/></button>    
        <ul className={`nav__menu ${navbarOpen ? '' : 'nav__hide'}`}>
            <li className='nav__item'><a href="/" className='nav__link'>Home</a></li>
            <li className='nav__item'><a href="#recipes" className='nav__link'>Recipes</a></li>
            <li className='nav__item'><a href="/contact" className='nav__link'>Contact</a></li>
        </ul>
      </nav>
  )
}

export default Navbar