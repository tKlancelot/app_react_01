import React from 'react';
import ContactForm from '../components/ContactForm';
// import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Square from '../components/Square';

const Contact = () => {

    return (
    <div id="contact" className="body">
        <Navigation />
        <main>
            <div className="contact">
                <div className="contact__header">
                    <Square top="-10%" left="-16%" width="56vw" height="56vw" radius="32%" rotation="10deg"/>
                    <Square top="25%" left="72%" width="40vw" height="40vw" radius="32%" rotation="-10deg"/>
                </div>
                <div className="contact__body">
                    <h2>Let's get in touch !</h2>
                    <ContactForm/>
                </div>

            </div>
        </main>
        <Footer/>
    </div>
    );
};

export default Contact;