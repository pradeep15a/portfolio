import React from 'react';
import FooterLink from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import web from './../../assets/web.png';


const Contact = () => {
    return (  
        <div className='section-container'>
            <Header heading="Get in touch"
                    details="Interested to Collaborate? Feel free to drop an mail!"
            />

            {/* Form Section */}
            <div className="contact-form-container">
                <form className="contact-form"
                action="https://formspree.io/f/mlezbdjn"
                method="POST">
                    {/* Email ID Input */}
                    <input
                        type="mail"
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input' />
                    {/* Email Body */}
                    <textarea
                        type="text"
                        placeholder='Your message'
                        name='message'
                        className='input-box body-input' >

                    </textarea>

                    {/* Submit Button */}
                    <button type='submit' className="contact-btn">
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social Icons */}
            <div className="social-icons-container">
                <a href="https://github.com/pradeep15a" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/pradeep-a-a43187221/" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://instagram.com/93__pradeep" className="social-icon">
                    <img src={instagram} alt="social" />
                </a>
                <a href="https://profile-card-pradeep.vercel.app/" className="social-icon">
                    <img src={web} alt="social" />
                </a>
            </div>

            <FooterLink phrase="Read more " link="about me." toAddress='/about' />


            <div className="vector-frame">
                <img src={contactVector} alt="contact" className="about-vector" />
            </div>
        </div>
    );
}
 
export default Contact;
