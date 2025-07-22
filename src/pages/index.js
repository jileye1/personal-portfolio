import * as React from 'react'
import BaseLayout from "../components/baselayout/BaseLayout"
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <BaseLayout title="About Me">
      <p>Main Content</p>
    </BaseLayout>
  )
}

export const Head = () => <Seo pageTitle="About Me" />

export default IndexPage