import React, { useState } from 'react'
import './Navbar.css'
import {CgClose, CgMenu} from 'react-icons/cg'
import logo from '../../assets/logo-rojo-largo-perfect.png'

function Navbar() {
    const[nav, setNav] = useState(false)
    const toggle = () => setNav(!nav)

    return (
        <header className="header" id="header">
        <nav className="nav container">
            <a href="#" alt="logo" className="nav__logo" id="logo1">
                <img src={logo} className='logo'></img>
            </a>
            {/* <a href="#" alt="logo" className="nav__logo nav__logo-hidden" id="logo2">
                <img src={logo} className='logo'></img>
            </a> */}

            {/* conditional */}
            <div className={`nav__menu ${nav ? 'show-menu': ''}`} id="nav-menu" >

                <ul className="nav__list" id="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">Home</a>
                    </li>
                    <li className="nav__item"> 
                        <a href="#about" className="nav__link">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">Services</a>
                    </li>
                    <li className="nav__item hide"> 
                        <a href="#location" className="nav__link">Location</a>
                    </li>
                    <li className="nav__item"> 
                        <a href="#contact" className="nav__link">Contact</a>
                    </li>
                </ul>

                <div onClick={toggle} className="nav__close" id="nav-close">
                    <CgClose />
                </div>
            </div>

            <div onClick={toggle} className="nav__toggle" id="nav-toggle">
                <CgMenu/>
            </div>
        </nav>
    </header>











        // <header className="header" id="header">
        //     <nav className='navbar container'>
        //         <div className='logo__div'>
        //             <div className='logo'></div>
        //         </div>
        //         <ul className='nav__menu' id='nav-menu'>
        //             <li>Home</li>
        //             <li>About</li>
        //             <li>Services</li>
        //             <li>Contact</li>
        //         </ul>
        //         <div className='nav__toggle'>
        //             <FaBars />
        //         </div>
        //     </nav>
        // </header>
    )
}

export default Navbar