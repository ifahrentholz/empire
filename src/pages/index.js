import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Blogs from '../components/Blogs'
import Courses from '../components/Courses'

const Container = styled.div`
  color: white;
`

const Title = styled.h1`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.2);
  font-size: 3rem;
`

const Main = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
`

const Index = ({ data }) => {
  const posts = data.allMdx.edges.map(post => post.node)
  return (
    <Container>
      <Title>MY EMPIRE</Title>
      <Main>
        <Blogs posts={posts} />
        <Courses />
      </Main>
    </Container>
  )
}

export const query = graphql`
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

export default Index
