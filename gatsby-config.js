/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Aljorgevi`,
    description: `Jorge Mena Carcamo, Full Stack Developer personal website. HTML, CSS, and JavaScript, MERN Stack`,
    titleTemplate: `%s | Full Stack Developer Website. HTML, CSS, and JavaScript, MERN Stack`,
    url: `https://aljorgevi.com`,
    twitterUsername: `@aljorgevi`,
    image: `/aljorgevi-main.png`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENFUL_API_KEY,
      },
    },
  ],
}
