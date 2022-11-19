import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SceneEmail3d from '../components/SceneEmail3d';
import ContactForm from '../components/ContactForm';

const Contact = () => {

    return (
    <div id="contact" className="body">
        <Navigation />
        <main>
            <div className="contact">
                <div className="contact__header">
                </div>
                <div className="contact__body">
                    <div className="contact__body__frame">
                        <div className="infos-frame">
                            <ContactForm/>
                        </div>
                        <div className="picture-frame">
                            <SceneEmail3d/>
                        </div>

                        {/* <div className="infos-frame">
                            <div className="infos-frame__item">
                                <a href="tel:+33763740559">
                                    <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.8826 0H1.11741C0.501211 0 0 0.467854 0 1.04304V34.957C0 35.5321 0.501277 36 1.11741 36H20.8826C21.4988 36 22 35.5321 22 34.957V1.04304C22 0.467854 21.4981 0 20.8826 0ZM18.5481 1.74993C18.8719 1.74993 19.1349 1.99552 19.1349 2.29832C19.1349 2.6005 18.8719 2.84608 18.5481 2.84608C18.2238 2.84608 17.9607 2.60056 17.9607 2.29832C17.9606 1.99614 18.2244 1.74993 18.5481 1.74993ZM17.3572 2.04794C17.5054 2.04794 17.6255 2.16001 17.6255 2.29832C17.6255 2.43657 17.5054 2.54864 17.3572 2.54864C17.2084 2.54864 17.089 2.43657 17.089 2.29832C17.089 2.16001 17.209 2.04794 17.3572 2.04794ZM16.6478 2.04794C16.796 2.04794 16.916 2.16001 16.916 2.29832C16.916 2.43657 16.796 2.54864 16.6478 2.54864C16.4996 2.54864 16.3796 2.43657 16.3796 2.29832C16.379 2.16001 16.499 2.04794 16.6478 2.04794ZM8.7977 1.74993H13.2017V2.84602H8.7977V1.74993ZM13.2016 34.3955H8.79764V33.2993H13.2016V34.3955ZM19.6687 31.9899H2.33064V4.12573H19.6687V31.9899Z" fill="url(#paint0_linear_1613_1121)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_1613_1121" x1="0.261263" y1="26.3922" x2="22.2281" y2="26.4112" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F3E4BD" stop-opacity="0.96"/>
                                        <stop offset="0.520833" stop-color="#BA994D" stop-opacity="0.81"/>
                                        <stop offset="1" stop-color="#FAEFD2" stop-opacity="0.89"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                            <div className="infos-frame__item">
                                <a href="mailTo:tarik.louatah@gmail.com">
                                    <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8374 0H0.963912C0.431955 0 0 0.489421 0 1.09219V20.478C0 21.0828 0.43194 21.5742 0.963912 21.5742H27.8374C28.3694 21.5742 28.8013 21.0832 28.8013 20.478V1.09219C28.8019 0.489105 28.3697 0 27.838 0H27.8374ZM25.7365 1.88946L14.3987 13.5225L3.06092 1.88946H25.7365ZM1.92722 3.57935L8.67565 10.7855L1.92722 17.9938V3.57935ZM3.06137 19.5873L10.1883 12.2754L14.3601 16.6918L18.6789 12.2754L25.7365 19.5873H3.06137ZM26.9915 17.9937L20.243 10.7858L26.9915 3.5796V17.9937Z" fill="url(#paint0_linear_146_4)"></path>
                                        <defs>
                                        <linearGradient id="paint0_linear_146_4" x1="0.342032" y1="15.8164" x2="29.0998" y2="15.8709" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F3E4BD" stop-opacity="0.96"></stop>
                                        <stop offset="0.520833" stop-color="#BA994D" stop-opacity="0.81"></stop>
                                        <stop offset="1" stop-color="#FAEFD2" stop-opacity="0.89"></stop>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div> */}
                    </div>

                </div>

            </div>
        </main>
        <Footer/>
    </div>
    );
};

export default Contact;