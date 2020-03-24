import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Blogs from '../components/Blogs'
import Courses from '../components/Courses'

const Container = styled.div`
  color: white;
`

const Title = styled.h1`
  position: relative;
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.2);
  font-size: 3rem;
`

const Button = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  margin: 0;
  padding: 0.5rem 3rem;
  background: transparent;
  border: 1px solid white;
  color: inherit;

  &:hover {
    cursor: pointer;
  }
`

const Main = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
`

const Index = ({ data }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const posts = data.allMdx.edges.map(post => post.node)

  const handleAuthentication = () => setIsLoggedIn(current => !current)

  return (
    <Container>
      <Title>
        MY EMPIRE
        <Button onClick={handleAuthentication}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
      </Title>
      <Main>
        <Blogs posts={posts} />
        {isLoggedIn && <Courses />}
      </Main>
    </Container>
  )
}

export const query = graphql`
  query AllBlogs {
    allMdx(filter: { fileAbsolutePath: { regex: "//blog//" } }) {
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
