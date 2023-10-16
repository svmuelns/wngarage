/*rfce*/
import React from 'react'
import './Hero.css'
import {FaFacebook, FaEnvelope, FaWhatsapp, FaPhoneAlt} from 'react-icons/fa'
import garage from '../../assets/light_bg_small.png'
import delivery from '../../assets/red_house.png'
import Fade from 'react-reveal/Fade';

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
                    <Fade left>
                    <h1 className='hero__subtitle'>We <span className="primary-color">fix your car.</span></h1>
                    </Fade>
                </div>
                <div className='hero__subheaders'>
                    <h3 className='hero__subheader'>
                        Need a car mechanic? We're here<br></br> to get you going, wherever and whenever you need it.
                    </h3>
                </div>
                <Fade left>
                <div className='hero__buttons'>
                    {/* <a href=":305-438-8987" className='hero-button primary-button button'>
                        <FaPhoneAlt />
                        Get a Quote
                    </a> */}
                    <button class="pushable">
                        <a href='tel:6122350262' class="front">
                            <FaPhoneAlt />
                            Get a Quote
                        </a>
                    </button>
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
                </Fade>
            </div>
        </section>
    )
}

export default HeroSection