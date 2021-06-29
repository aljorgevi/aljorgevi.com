import { graphql } from "gatsby"

export const featuredProjects = graphql`
  {
    allContentfulProject(filter: { featured: { eq: true } }) {
      nodes {
        title
        description
        url
        id
        github
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`
