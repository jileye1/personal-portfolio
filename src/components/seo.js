import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ pageTitle }) => {
  const metaData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{metaData.site.siteMetadata.title} | {pageTitle}</title>
  )
}

export default Seo