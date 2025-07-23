import styled from "styled-components";

export const SocialLinks = styled.ul`
    display: flex;
    
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        a {
            color: var(--color-primary-dark);
            text-decoration: none;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            padding: 0.1rem 0.7rem;
            display: inline-block;

            &:hover {
                color: var(--color-primary);
                transform: scale(1.1);
            }
        }
    }
`