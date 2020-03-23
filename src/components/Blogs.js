import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  margin: 1rem 0;
  font-size: 2rem;
`

const Blog = styled.p`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: #444;
  margin: 0.25rem 0;
  text-align: center;
  font-size: 1.25rem;
`

const renderPost = ({ frontmatter: { title } }) => (
  <Blog key={title}>{title}</Blog>
)

const Blogs = ({ posts }) =>
  posts && posts.length > 0 ? (
    <>
      <Title>Blogs</Title>
      {posts.map(renderPost)}
    </>
  ) : null

export default Blogs
