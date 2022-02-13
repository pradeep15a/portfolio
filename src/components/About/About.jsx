import React from 'react';
import FooterLink from '../Footer/Footer';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import './About.css';

const About = () => {
    return (
        <div className="section-container">
            <Header
                heading="About me."
                details="App Developer | React developer | Full Time Coder | NODE Lover"
            />
            
            <div className="about-main">
                <div className="about-main-left">
                    {/* Subsection 1 */}
                    <h3 className='about-sub-head'>Student</h3>
                    <p className="about-details">
                        Currently studying in University Vishveshvaraya College Of Engineering,
                        Bangalore.&nbsp;
                        <a href="https://g.page/uvce-karnataka?share" target='_blank' className="abount-link-element">
                            Location here.
                        </a>
                    </p>

                    {/* Subsection 2 */}
                    <h3 className='about-sub-head'>FrontEnd Developer</h3>
                    <p className="about-details">
                        A Well mastered Front-End Developer with the latest tech. In Short React Developer.&nbsp;
                        <a href="https://profile-card-pradeep.vercel.app/" target='_blank' className="abount-link-element">
                            My Profile Card
                        </a>
                    </p>

                    {/* Subsection 3 */}
                    <h3 className='about-sub-head'>Mentor</h3>
                    <p className="about-details">
                        Teaching is one of my hobby. 
                        I've mentored to many of my friends and juniors about web development and other 
                        stuff and also learning things from them. In short I'm a team player!! &nbsp;
                        <a href="mailto:pradeepashok1122@gmail.com" target='_blank' className="abount-link-element">
                            Mail me for any other info!
                        </a>
                    </p>
                </div>

                <div className="about-main-right">
                    <img src={aboutAnime} alt="animation" className="about-anime" />
                </div>
            </div>


            <FooterLink 
            phrase="Check out my "
            link="projects!"
            toAddress='/projects'/>
            {/* Vector frame */}
            <div className="vector-frame">
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
}

export default About;