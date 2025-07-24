import styled from "styled-components"
import { FloatingCard } from "../Card"

export const ProfileCard = styled(FloatingCard)`
    text-align: center;
    position: sticky;

    .profile-image-container {
        margin-bottom: 1.5rem;
        position: relative;
        z-index: 2;

        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .profile-info {
        margin-bottom: 1rem;
        position: relative;
        z-index: 2;
        padding: 1rem;
        margin-top: -1rem;

        .profile-name {
            font-size: 1.8rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--color-text-primary);
        }

        .profile-divider {
            width: 50px;
            height: 3px;
            background: var(--color-primary-light);
            margin: 1rem auto;
            border-radius: 2px;
        }

        .profile-title {
            font-size: 0.9rem;
            letter-spacing: 2px;
            color: var(--color-text-secondary);
            font-weight: 500;
        }
    }
`

export const HeroContentStyled = styled.div`

    .profile-section, .content-section {
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Enter Animations */
    .slide-in-left {
        animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .slide-in-right {
        animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
    }

    /* Exit Animations */
    .slide-out-left {
        animation: slideOutLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        animation-delay: 0s;
    }

    .slide-out-right {
        animation: slideOutRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes slideInLeft {
        from {
            transform: translateX(-100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    /* Exit Keyframes */
    @keyframes slideOutLeft {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(-100px);
            opacity: 0;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100px);
            opacity: 0;
        }
    }

    /* Main Content */
    .main-content {
        min-height: calc(100vh - 80px);
        padding: clamp(2rem, 8vw, 6rem);
        display: flex;
        justify-content: center;
        align-content: center;
    }

    /* Hero Section */
    .hero-section {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: minmax(300px, 350px) minmax(350px, 450px);
        gap: 4rem;
        align-items: center;
        padding: 2rem;
    }

    

    /* Content Section */
    .content-section {

        .main-heading {
            font-size: 4rem;
            font-weight: 700;
            color: var(--color-text-primary);
            margin-bottom: 0.5rem;
            line-height: 1;
        }

        .sub-heading {
            font-size: 1.3rem;
            color: var(--color-text-secondary);
            font-weight: 400;
            margin-bottom: 2rem;
        }

        .description {
            color: var(--color-text-secondary);
            line-height: 1.7;

            p {
                margin-bottom: 1rem;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    // .skills-section {


    //     .section-header {
        
    //     }

    //     .skills-content {
    //         display: grid;
    //         grid-template-columns: 1fr 1fr;
    //     }
    
    // }

    /* Responsive Design */
    @media (max-width: 768px) {

        .main-content {
            padding: 2rem; /* Reduce from 6rem to 2rem on mobile */
        }

        .hero-section {
            grid-template-columns: 1fr;
            align-content: center;
            gap: 2rem;
            padding-top: 1rem;
        }

        ${ProfileCard} {
            position: static;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
            order: 1;
        }

        .content-section {
            padding: 2rem;
            order: 2;

            .main-heading {
                font-size: 3rem;
            }
        }

        // .skills-content {
        //     grid-template-columns: 1fr;
        // }
    }

`