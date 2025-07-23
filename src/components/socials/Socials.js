import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SocialLinks } from "./Socials.styles";

const Socials = () => {
    return (
        <SocialLinks>
            <li>
                <a
                    href="https://github.com/jileye1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/josephine-leye-604560371/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a
                    href="mailto:josie.leye@hotmail.co.uk"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </li>
        </SocialLinks>
    )
}

export default Socials

