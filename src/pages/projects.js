import * as React from 'react'
import Seo from '../components/seo'
import BaseLayout from '../components/baselayout/BaseLayout'
import Projects from '../components/projects/Projects'

const ProjectPage = () => {
  return (
    <BaseLayout title="Projects">
        <Projects></Projects>
    </BaseLayout>
  )
}

export const Head = () => <Seo pageTitle="Projects" />

export default ProjectPage