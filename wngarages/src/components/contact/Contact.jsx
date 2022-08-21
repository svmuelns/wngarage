import React from 'react'
import './Contact.css'
import Zoom from 'react-reveal/Zoom';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mnqrqeke");
    if (state.succeeded) {
        return <p className='contact__subheader subheader'>
            Thanks for contacting us!
        </p>;
    }
    return(
        <div>
        <p className='contact__subheader subheader'>
            You can send us an email for further information and we will contact you right back.
        </p>
        <form className='contact__form' onSubmit={handleSubmit}>
            <div className='contact-div'>
                <div className='name-div'>
                    <input name="Name" id="full-name" placeholder='Full name' type="text"/>
                </div>
                <div className='email-div'>
                    <input name="Email" id="email" placeholder='Your email' type="email"/>   
                    <ValidationError prefix='Email' field='email' errors={state.errors}/>
                </div>
            </div>
            <input name="Message" id="message" placeholder='Your message' type="text"/>
            <button className='contact-button hero-button primary-button button' type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
        </div>
    )
}
function ContactSection() {
    return (
        <section className='contact section' id='contact'>
            <div className='contact__container container'>
                <Zoom clear>
                <div className='contact__titles'>
                    <h1 className='contact__title title'>
                        Contact Us
                    </h1>
                    <Contact />
                </div>
                </Zoom>
            </div>
        </section>
    )
}

export default ContactSection