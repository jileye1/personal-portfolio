import styled from "styled-components"
import { ClickableCard, FloatingCard } from "../Card"

export const ProjectsStyled = styled.div`
display: grid;
grid-template-columns: max-content;

gap: 2rem;
padding: 3rem;
justify-content: center;

${ClickableCard} {
    width: 100%;
    max-width: 85vw;
    
    border-radius: 10px;
    height: 8rem;

    h2 {
        font-size: 1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.3;
        margin-bottom: 0.5rem;
    }

    &:hover h2 {
        white-space: normal;
        overflow: visible;
    }
}

.project-card {
    
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        
    &.slide-in {
        animation: slideInFromBelow 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
}

@keyframes slideInFromBelow {
    from {
        transform: translateY(100px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@media (max-width: 768px) {

align-items: stretch;
}
`