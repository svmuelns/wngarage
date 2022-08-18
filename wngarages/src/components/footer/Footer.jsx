import React from 'react'
import './Footer.css'
import footer from '../../assets/footer1.jpg'
import { FaPhoneAlt, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';

function FooterSection() {
    // const config = {
    //     origin: 'left',
    //     distance: '60px',
    //     duration: 2800,
    //     // reset: true,
    // }

    // sr.reveal(this.refs.culo, config)


    return (
        <footer className='footer' id='footer'>
            <div className='footer__wrap'>
                <div className='footer__titles'>
                    <LightSpeed left>
                    <h1 className='footer__title title'>
                        Best prices, in real time.
                    </h1>
                    </LightSpeed>
                    <a href="tel:305-438-8987" className='about-button hero-button primary-button button'>
                        <FaPhoneAlt />
                        Get a Quote
                    </a>


                </div>
                <img src={footer} className='footer-img' alt="footer" />
            </div>
            <Fade bottom>
            <div className='footer__div'>
                <div className='footer__infos'>
                    <div className='footer__info'>
                        <div className='footer__buttons'>
                            <a href="tel:305-438-8987" className='footer-button'>
                                <FaPhoneAlt />
                                Telephone
                            </a>
                            <a href="https://www.facebook.com/WN-Garage-duo-auto-repair-103639939067239" className='footer-button'>
                                <FaFacebook />
                                Facebook
                            </a>
                        </div>
                        <div className='footer__subheaders'>
                            <p className='button-subheader'>
                                305 438 8987
                            </p>
                            <p className='button-subheader'>
                                W&N Garage duo auto repair.
                            </p>
                        </div>
                    </div>
                    <div className='footer__info'>
                        <div className='footer__buttons'>
                            <a href="https://api.whatsapp.com/send?phone=13054388987" className='footer-button'>
                                <FaWhatsapp />
                                Whatsapp
                            </a>
                            <a href="mailto:duowngarage@gmail.com" className='footer-button'>
                                <FaEnvelope />
                                Email
                            </a>
                        </div>
                        <div className='footer__subheaders'>
                            <p className='button-subheader'>
                                +1 305 438 8987
                            </p>
                            <p className='button-subheader'>
                                duowngarage@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>

            <p id='madeby'>website made by <a href="http://linktr.ee/svmuelns" target="_blank">svmuelns</a></p>
        </footer>
    )
}

export default FooterSection