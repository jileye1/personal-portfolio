import * as React from 'react'
import BaseLayout from "../components/baselayout/BaseLayout"
import Seo from '../components/seo'
import Hero from '../components/hero/Hero'

const IndexPage = () => {
  return (
    <BaseLayout title="About Me">
      <Hero/>
    </BaseLayout>
  )
}

export const Head = () => <Seo pageTitle="About Me" />

export default IndexPage