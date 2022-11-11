import React from 'react';

const ContactForm = () => {
    return (
        <div className='contact-form'>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact"/>
                <div className="input-group">
                    <label>Name</label>
                    <input type="text" name="name" />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="input-group">
                    <label>Message</label>
                    <textarea name="message"></textarea>
                </div>
                <div className="input-group">
                    <button type="submit">Send</button>
                </div>
            </form>
            
        </div>
    );
};

export default ContactForm;