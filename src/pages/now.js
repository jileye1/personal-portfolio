import * as React from 'react'
import Seo from '../components/seo'
import BaseLayout from '../components/baselayout/BaseLayout'

const NowPage = () => {
  return (
    <BaseLayout title="Now">
        <div>This is where everything I'm up to now will be</div>
    </BaseLayout>
  )
}

export const Head = () => <Seo pageTitle="Now" />

export default NowPage