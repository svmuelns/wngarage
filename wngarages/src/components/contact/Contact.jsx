import React from 'react'
import './Contact.css'

function ContactSection() {
  return (
    <section className='contact section' id='contact'>
        <div className='contact__container container'>
            <div className='contact__titles'>
                <h1 className='contact__title title'>
                    Contact Us
                </h1>
                <p className='contact__subheader subheader'>
                    You can send us an email for further information and we will contact you right back.
                </p>
                <form className='contact__form' method="post">
                    {/* action="https://formspree.io/f/{form_id}" */}
                    <div className='contact-div'>
                        <input name="Name" id="name" placeholder='Your name' type="name"></input>
                        <input name="Email" id="email" placeholder='Your email' type="email"></input>   
                    </div>
                    <input name="Message" id="message" placeholder='Your message' type="text"></input>
                    <button className='contact-button hero-button primary-button button' type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    </section>
  )
}

export default ContactSection