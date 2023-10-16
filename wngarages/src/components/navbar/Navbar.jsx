import React, { useState } from 'react'
import './Navbar.css'
import {CgClose, CgMenu} from 'react-icons/cg'
import logo from '../../assets/logo2.png'

function Navbar() {
    // toggle menu: for closing or opening menu when clicking
    const[nav, setNav] = useState(false)
    function toggle() { setNav(!nav) }  // const toggle = () => setNav(!nav)

    // change nav color when scrolling
    const [color, setColor] = useState(false)
    function changeColor() {
        if (window.scrollY >= 620 & window.scrollY <= 1200) {
            setColor(true)
        } else if (window.scrollY >= 3100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
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
                        <a href="#home" onClick={toggle} className={`nav__link ${color? 'scrolling-font-color': ''}`}>
                            Home
                        </a>
                    </li>
                    <li className="nav__item"> 
                        <a href="#about" onClick={toggle} className={`nav__link ${color? 'scrolling-font-color': ''}`}>
                            About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#service" onClick={toggle} className={`nav__link ${color? 'scrolling-font-color': ''}`}>
                            Services
                        </a>
                    </li>
                    <li className="nav__item hide"> 
                        <a href="#delivery" onClick={toggle} className={`nav__link ${color? 'scrolling-font-color': ''}`}>
                            Delivery
                        </a>
                    </li>
                    <li className="nav__item"> 
                        <a href="#contact" onClick={toggle} className={`nav__link ${color? 'scrolling-font-color': ''}`}>
                            Contact
                        </a>
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
    )
}

export default Navbar