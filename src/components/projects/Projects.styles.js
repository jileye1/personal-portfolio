import styled from "styled-components"
import { FloatingCard } from "../Card"

export const ProjectsStyled = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 2rem;
padding: 3rem;

.project-card {
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        
    &.slide-in {
        animation: slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
}

@keyframes slideInFromRight {
    from {
        transform: translateX(100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`