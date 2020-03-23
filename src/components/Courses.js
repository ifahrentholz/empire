import React from 'react'
import styled from 'styled-components'
import useRequest from '../hooks/useRequest'

const Container = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid white;
`

const renderCourse = ({ title }) => <p key={title}>{title}</p>

const Courses = () => {
  const url = ''
  const { data: courses, isLoading } = useRequest(url)

  return !isLoading ? (
    <Container>
      <h1>Courses</h1>
      {courses.map(renderCourse)}
    </Container>
  ) : (
    <p>Loading...</p>
  )
}

export default Courses
