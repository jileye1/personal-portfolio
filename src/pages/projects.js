import * as React from 'react'
import Seo from '../components/seo'
import BaseLayout from '../components/baselayout/BaseLayout'

const ProjectPage = () => {
  return (
    <BaseLayout title="Projects">
        <div>This is where the projects will be</div>
    </BaseLayout>
  )
}

export const Head = () => <Seo pageTitle="Projects" />

export default ProjectPage