import React from 'react'
import './Services.css'
import battery from '../../assets/battery.png'
import motor from '../../assets/motor1.png'
import oilchange from '../../assets/oil-change.png'
import sparkplugs from '../../assets/spark-plugs.png'
import starter from '../../assets/starter.png'
import tires from '../../assets/tires.png'
import service from '../../assets/service7.png'

function ServiceSection() {
  return (
    <section className='service' id='service'>
        <div className='about__polygon-end'></div>
        <div className='service__images'>
                <img src={service}></img>
            </div>
        <div className='service__container container'>
            <div className='service__info'>
                <h1 className='service__title title'>
                    Most common services
                </h1>
                <p className='service__subheader subheader'>
                    Diagnose, repair and replace.
                </p>
                <div className='service__grid grid'>
                    <div className='service__item' id='battery'>
                        <div className='item__icon'>
                            <img src={battery}></img>
                        </div>
                        <div className='item__subheader'>
                            <h3>Battery</h3>
                        </div>                    
                    </div>
                    <div className='service__item'>
                        <div className='item__icon'>
                            <img src={motor}></img>
                        </div>
                        <div className='item__subheader'>
                            <h3>Motor</h3>
                        </div>
                    </div>
                    <div className='service__item'>
                        <div className='item__icon'>
                            <img src={oilchange}></img>
                        </div>
                        <div className='item__subheader'>
                            <h3>Oil Change</h3>
                        </div>
                    </div>
                    <div className='service__item'>
                        <div className='item__icon'>
                            <img src={sparkplugs}></img>
                        </div>
                        <div className='item__subheader'>
                            <h3>Spark Plugs</h3>
                        </div>
                    </div>
                    <div className='service__item'>
                        <div className='item__icon'>
                            <img src={starter}></img>
                        </div>
                        <div className='item__subheader'>
                            <h3>Starter</h3>
                        </div>
                    </div>
                    <div className='service__item'>
                        <div className='item__icon'>
                            <img src={tires}></img>
                        </div>
                        <div className='item__subheader'>
                            <h3>Tires</h3>
                        </div>
                    </div>
                </div>
                <p className='service__footer subheader'>
                    If you don't know what the problem is, you can always... 
                </p>
                <div className='service__buttons'>
                    <a href="#contact" className='service-button hero-button primary-button button'>
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection