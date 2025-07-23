import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const LinkText = styled(Link)`
    text-decoration: none;
    color: var(--color-white);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    padding: 0.5rem 0;
    position: relative;

    &:hover {
        color: var(--color-accent-light);
        transform: translateY(-1px);
    }

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--color-accent-light);
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`