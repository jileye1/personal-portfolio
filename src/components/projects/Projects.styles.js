import styled from "styled-components"
import { FloatingCard } from "../FloatingCard"

export const ProjectsStyled = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 2rem;
padding: 3rem;

${FloatingCard} {
transform: translateY(-50%);
transition: transform 1000ms ease-in-out;

}
`