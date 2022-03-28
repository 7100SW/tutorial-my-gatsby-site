/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        author: 'DTS',
        siteUrl: `https://www.ahcusa.com`,
        title: 'AHCUSA BROKERS',
        description: 'Portal for Brokers and Sales Agents',
        keywords: `Medicare, Alignment, Brokers, Sales Agents`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sass"
    ]
}