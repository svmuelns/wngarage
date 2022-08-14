/*rfce*/
import React from 'react'
import './Hero.css'
import {FaFacebook, FaEnvelope, FaWhatsapp} from 'react-icons/fa'
import garage from '../../assets/light_bg_small.png'
import delivery from '../../assets/red_house.png'

function HeroSection() {
    return (
        <section className='hero' id='home'>

            <div className='hero__images'>
                <img src={garage} className='top'></img>
                <img src={delivery} className='bottom'></img>
            </div>

            <div className='hero__container container'>
                <div className='hero__titles'>
                    <h1 className='hero__title'>Save time,</h1>
                    <h1 className='hero__subtitle'>We <span className="primary-color">fix your car.</span></h1>
                </div>
                <div className='hero__subheaders'>
                    <h3 className='hero__subheader'>
                        Need a car mechanic? We're here<br></br> to get you going, wherever and whenever you need it.
                    </h3>
                </div>

                <div className='hero__buttons'>
                    <a href="#about" className='hero-button primary-button button'>
                        Get Started
                    </a>
                    {/* <a href="" className='secondary-button button'>
                        <FaMapMarkerAlt />
                        Garage
                    </a> */}
                </div>

                <div className='hero__socials'>
                    <a href="https://www.facebook.com/WN-Garage-duo-auto-repair-103639939067239" className='facebook'>
                        <FaFacebook />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=13054388987" className='whatsapp'>
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:duowngarage@gmail.com" className='email'>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection