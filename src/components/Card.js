import React from "react";
import styled from "styled-components";

export const Card = styled.div`
    background: ${props => props.color || 'white'};
    padding: 2rem;
    top: 120px;
    overflow: hidden;
`;

export const FloatingCard = styled(Card)`
    box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
`;

export const ClickableCard = styled(FloatingCard)`
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: translateY(-4px);
        box-shadow: -12px 12px 20px rgba(0, 0, 0, 0.2);
        background: var(--color-background-alt);
    }
    
    &:active {
        transform: translateY(-2px);
        transition: all 0.1s ease-in-out;
    }
`;
