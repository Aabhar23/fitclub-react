import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Header = () => {
  return (
 <div className="header" id='Home'>
    <img src={Logo} alt="" className='logo'/>

    <ul className='header-menu'>
        <li><Link to='Home' spy={true} smooth={true}>Home</Link></li>
        <li><Link to='Program' spy={true} smooth={true}>Program</Link></li>
        <li><Link  to='reasons' spy={true} smooth={true}>Why us</Link></li>
        <li><Link  to='PLANS' spy={true} smooth={true} >Plans</Link></li>
        
       
    </ul>

 </div>
  );
};

export default Header;