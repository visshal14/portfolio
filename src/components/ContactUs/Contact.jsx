import React from 'react'
import "./Contact.css"
import { GitHub, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
const Contact = () => {
    return (
        <div className='contact-main' id="contact">
            <div className='contact-left'>
                <div className='contact-form'>
                    <input placeholder="Your Name...." type="text" id="fname" name="fname" /><br />
                    <input placeholder="Your Email...." type="text" id="fname" name="fname" /><br />
                    <textarea id="" name="" rows="4" cols="50" placeholder='Message....' />
                    <button>Send Message</button>
                </div>
            </div>
            <div className='contact-right'>
                <div className='contact-right-heading'>
                    Let’s <span>talk</span> for something
                    special
                </div>
                <div className='contact-right-paragraph'>
                    I seek to push the limits of creativity
                    to create high engaging user-friendly,
                    and memorable interactive
                    experience.
                    <p><a href="/">vishalpal2912@gmail.com</a></p>
                </div>
            </div>
            <div className='contact-details'>
                <a href="/"><GitHub /></a >
                <a href="/"><Twitter /></a >
                <a href="/"><LinkedIn /></a >
                <a href="/"><Instagram /></a >

            </div>
        </div>
    )
}

export default Contact