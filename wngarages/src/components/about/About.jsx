import React from 'react'
import './About.css'
import about1 from '../../assets/about22.jpg'
import about2 from '../../assets/about11.jpg'
import Fade from 'react-reveal/Fade';


function AboutSection() {
    return (
        <section className='about section' id='about'>
            <div className='about__container container grid'>
                <div className='about__info'>
                    <Fade left>
                    <h1 className='about__title title'>
                        Dealing with your car,<br></br> professionally.
                    </h1>
                    </Fade>
                    <Fade left>
                    <p className='about__subheader subheader'>
                        At W&N Garage we focus on fast and long lasting repairs with high performance auto mechanics that come to your house, office or current location.
                    </p>
                    </Fade>
                    <a href="#service" className='about-button hero-button primary-button button'>
                        Services
                    </a>
                </div>
                <div className='about__img'>
                    <Fade right>
                    <div className="about__img-overlay">
                        <img src={about1} alt="about1" className="about__img-one"></img>
                    </div>

                    <div className="about__img-overlay">
                        <img src={about2} alt="about2" className="about__img-two"></img>
                    </div>
                    </Fade>
                </div>
                {/* <div className='about__polygon-end'></div> */}

            </div>
        </section>
    )
}

export default AboutSection