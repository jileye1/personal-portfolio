import React from "react";
import { FaGithub } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { ClickableCard } from "../Card";
import { ProjectsStyled } from "./Projects.styles";

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { frontmatter: { date: DESC }}) {
                nodes {
                    frontmatter {
                        date(formatString: "YYYY")
                        title
                    }
                    id
                    excerpt
                }
            }
        }
    `)

    return (
        <ProjectsStyled>
            {
                data.allMdx.nodes.map((project) => (
                    <ClickableCard key={project.id}>
                        <h2>{project.frontmatter.title}</h2>
                        <p>Posted: {project.frontmatter.date}</p>
                    </ClickableCard>
                ))
            }
        </ProjectsStyled>
    )
}

export default Projects