import React from "react";
import { FaGithub } from "react-icons/fa";
import { FloatingCard } from "../FloatingCard";
import { ProjectsStyled } from "./Projects.styles";

const Projects = () => {
    return (
        <ProjectsStyled>
            <FloatingCard></FloatingCard>
            <FloatingCard></FloatingCard>
            <FloatingCard></FloatingCard>
        </ProjectsStyled>
    )
}

export default Projects