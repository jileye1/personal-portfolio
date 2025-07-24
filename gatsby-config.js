/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Josie's Site`,
    siteUrl: `https://josieleye.netlify.app`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `myprojects`,
      path: `${__dirname}/myprojects`,
    }
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Josie's Portfolio Site`,
      short_name: `Josie's Site`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#bb8fce`,
      display: `minimal-ui`,
      icon: `src/images/icon.png`,
    }
  }]
};