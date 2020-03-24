import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useRequest from '../hooks/useRequest'
import Card from './styled/Card'
import StarIcon from './Star'

const Title = styled.h2`
  margin: 1rem 0;
  font-size: 2rem;
`

const Blogs = ({ posts }) => {
  const [favourites, setFavourites] = useState([])

  const { data, isLoading } = useRequest(
    'https://empire-api-alpha.now.sh/api/get-favourites'
  )

  useEffect(() => {
    data && setFavourites(data)
  }, [data])

  const isFavourite = title => favourites.find(f => f.title === title)

  const handleFavourite = title => async () => {
    const url = isFavourite(title)
      ? 'https://empire-api-alpha.now.sh/api/remove-favourite'
      : 'https://empire-api-alpha.now.sh/api/add-favourite'

    const { data: newFavourites } = await axios.post(url, { title })
    setFavourites(newFavourites)
  }

  const renderPost = ({ frontmatter: { title } }) => (
    <Card key={title}>
      {title}
      {!isLoading && (
        <StarIcon
          filled={isFavourite(title)}
          handleFavourite={handleFavourite(title)}
        />
      )}
    </Card>
  )

  return posts && posts.length > 0 ? (
    <>
      <Title>Blogs</Title>
      {posts.map(renderPost)}
    </>
  ) : null
}

export default Blogs
