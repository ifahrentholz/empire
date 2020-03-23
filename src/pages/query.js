import { graphql } from 'gatsby'

export default graphql`
  query AllBlogs {
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
