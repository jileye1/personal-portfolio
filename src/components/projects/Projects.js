import React, { useEffect, useState } from "react";
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

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ProjectsStyled>
            {
                data.allMdx.nodes.map((project, index) => (
                    <ClickableCard 
                        key={project.id}
                        className={`project-card ${animate ? 'slide-in' : ''}`}
                        style={{
                            animationDelay: `${index * 0.2}s`
                        }}
                    >
                        <h2>{project.frontmatter.title}</h2>
                        <p>Posted: {project.frontmatter.date}</p>
                    </ClickableCard>
                ))
            }
        </ProjectsStyled>
    )
}

export default Projects