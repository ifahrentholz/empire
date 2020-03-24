import React from 'react'
import styled from 'styled-components'
import useRequest from '../hooks/useRequest'
import Card from './styled/Card'

const Container = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid white;
`

const renderCourse = ({ title }) => <Card key={title}>{title}</Card>

const Courses = () => {
  const url = 'https://empire-api-alpha.now.sh/api/get-courses'
  const { data: courses, isLoading } = useRequest(url)

  if (isLoading) return <p>Loading...</p>

  return (
    <Container>
      <h1>Courses</h1>
      {courses.map(renderCourse)}
    </Container>
  )
}

export default Courses
