/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      siteUrl: `https://www.yourdomain.tld`,
      title: 'The Learning of Gatsby'
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `blog`,
              path: `${__dirname}/blog`
          }
      }
  ]
}