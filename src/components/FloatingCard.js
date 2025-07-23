import React from "react";
import styled from "styled-components";

export const FloatingCard = styled.div`
    background: ${props => props.color || 'white'};
    padding: 2rem;
    box-shadow: -8px 8px 10px ${props => props.shadowColor || 'rgba(0, 0, 0, 0.15)'};
    backdrop-filter: blur(10px);
    top: 120px;
    overflow: hidden;
`