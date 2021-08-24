import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './ContactPage.scss'

function ContactPage() {
    return (
        <div>
            <>
            <Header normal/>
            <div className="contact-page">
                <div className="contact-label">
                    <span id="contactus">Связь с нами</span>
                </div>
                <div className="contact-content">

                </div>
            </div>
            <Footer/>
            </>
        </div>
    )
}

export default ContactPage
