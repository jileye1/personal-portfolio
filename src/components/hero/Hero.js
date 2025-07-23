import React from "react";
import { HeroContentStyled, ProfileCard } from "./Hero.styles";
import sunnies from '../../images/profile/sunnies.jpg'
import { FloatingCard } from "../FloatingCard";

const Hero = () => {
    return (
        <HeroContentStyled>
            <main className="main-content">
                <div className="hero-section">
                    <ProfileCard>
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
                
                    <div className="content-section">
                        <h1 className="main-heading">Hello</h1>
                        <h2 className="sub-heading">Here's who I am & what I do</h2>
                        
                        
                        <div className="description">
                            <p>
                                I'm a paragraph. I will soon be filled with information about myself and what I do.
                            </p>
                            
                            <p>
                                It's a great place for me to tell a story and let people know what I'm doing.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </HeroContentStyled>
    )
}

export default Hero