const axios = require('axios')

const url = 'https://empire-api-alpha.now.sh/api/set-courses'

exports.createPages = async ({ graphql }) => {
  const rawCourses = await graphql(`
    query AllCourses {
      allMdx(filter: { fileAbsolutePath: { regex: "//courses//" } }) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const courses = rawCourses.data.allMdx.edges.map(c => c.node.frontmatter)
  await axios.post(url, { courses })
}
