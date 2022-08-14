import React from 'react'
import './Delivery.css'
import delivery from '../../assets/delivery1.png'

function DeliverySection() {
    return (
        <section className='delivery' id='delivery'>
            <div className='service__polygon-end'></div>
            <div className='delivery__container container'>
                <div className='delivery__titles'>
                    <h1 className='delivery__title title'>
                        Delivery? <span>Superfast.</span>
                    </h1>
                </div>
                <div className='delivery__info'>
                    <div className='delivery__subtitles'>
                        <div className='delivery__subtitle'>
                            <h1>1. </h1><span>Give us a call</span>
                        </div>
                        <div className='delivery__subtitle' id='subtitle'>
                            <h1>2. </h1><span>We come to you<span id='surprise'>r location</span></span>
                        </div>
                        <div className='delivery__subtitle'>
                            <h1>3. </h1><span>Wait until work is done</span>
                        </div>
                    </div>
                    <div className='delivery__images'>
                        <img src={delivery} className='delivery-img'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeliverySection