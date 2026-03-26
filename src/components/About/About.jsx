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
                details="Full Stack Engineer | Agile Delivery | Building useful products with clean execution"
            />
            
            <div className="about-main">
                <div className="about-main-left">
                    {/* Subsection 1 */}
                    <h3 className='about-sub-head'>Industry Journey</h3>
                    <p className="about-details">
                        Two years of industry experience focused on production-grade software for higher
                        education, balancing speed, quality, and long-term maintainability.
                    </p>

                    {/* Subsection 2 */}
                    <h3 className='about-sub-head'>Tech Craft</h3>
                    <p className="about-details">
                        End-to-end full stack engineering across development, testing, deployment, and
                        post-release ownership in Agile product environments.
                    </p>

                    {/* Subsection 3 */}
                    <h3 className='about-sub-head'>Project Highlights</h3>
                    <p className="about-details">
                        Built key capabilities for International Students and Scholars Management (US and
                        Australia regulatory sync) and Global Admissions, focused on SaaSifying the initial
                        admissions portal for scalable delivery.&nbsp;
                        <a href="https://github.com/pradeep15a" target="_blank" rel="noreferrer" className="abount-link-element">
                            GitHub Profile
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
