import React, { useEffect, useState } from "react";
import { HeroContentStyled, ProfileCard } from "./Hero.styles";
import sunnies from '../../images/profile/sunnies.jpg'
import { FloatingCard } from '../Card'

const Hero = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <HeroContentStyled>
            <main className="main-content">
                <div className="hero-section">
                    <ProfileCard
                        className={`profile-card ${animate ? 'slide-in' : ''}`}
                        style={{
                            animationDelay: `0.1s`
                        }}
                    >
                        <div className="profile-image-container">
                            <img 
                                src={sunnies} 
                                alt="Josie Leye"
                                className="profile-image"
                            />
                        </div>
                    
                        <div className="profile-info">
                            <h2 className="profile-name">Josie Leye</h2>
                            <div className="profile-divider"></div>
                            <p className="profile-title">FULL STACK SOFTWARE ENGINEER</p>
                        </div>
                    </ProfileCard>
                
                    <div 
                        className={`content-section ${animate ? 'slide-in' : ''}`}
                        style={{
                            animationDelay: `0s`
                        }}
                    >
                        <h1 className="main-heading">Hi there!</h1>
                        <h2 className="sub-heading">Welcome to my digital space</h2>
                        
                        
                        <div className="description">
                            <p>
                                I'm a recent Software Engineering graduate, I'm passionate about
                                creating elegant technical solutions to real world problems, and crafting the perfect cup of coffee,
                                to make everyday lives that little bit better.
                            </p>
                            
                            <p>
                                With a fresh mindset, 5 years of software engineering practice, 
                                and 12 years in hospitality and management, I bring both precision 
                                and creativity to everything I do!
                            </p>

                            <p>
                                Check out my projects!
                            </p>

                            <p>
                                Or, find me on: 
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="skills-section">
                    <div className="section-header">
                        <h2>What I brew with</h2>
                    </div>
                    <div className="skills-content">
                        <FloatingCard></FloatingCard>
                        <FloatingCard></FloatingCard>
                    </div>
                </div> */}
            </main>
        </HeroContentStyled>
    )
}

export default Hero