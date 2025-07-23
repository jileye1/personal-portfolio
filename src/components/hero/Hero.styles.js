import styled from "styled-components"

export const HeroContentStyled = styled.div`
    min-height: 100vh;

    /* Create the sectioned background effect */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 30%;
      min-width: 320px;
      background: linear-gradient(135deg, var(--color-background-alt) 0%, var(--color-background-gradient) 100%);
      z-index: -1;
    }

    /* Main Content */
    .main-content {
        min-height: calc(100vh - 80px);
        padding: 2rem;
    }

    /* Hero Section */
    .hero-section {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 400px 1fr;
        gap: 4rem;
        align-items: center;
        padding-top: 2rem;
    }

    /* Profile Card */
    .profile-card {
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 245, 252, 0.95));
        padding: 2rem;
        text-align: center;
        box-shadow: 0 8px 32px rgba(147, 112, 219, 0.15);
        backdrop-filter: blur(10px);
        position: sticky;
        top: 120px;
        overflow: hidden;
    
    
        /* Subtle hover effect */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(147, 112, 219, 0.15);
        }

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

    /* Responsive Design */
    @media (max-width: 768px) {
        .hero-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding-top: 1rem;
        }

        .profile-card {
            position: static;
            order: 1;
        }

        .content-section {
            padding: 2rem;
            order: 2;

            .main-heading {
                font-size: 3rem;
            }
        }
    }

`