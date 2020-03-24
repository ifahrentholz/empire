import React from 'react'
import styled from 'styled-components'
import Star from '../icons/star.svg'
import StarFilled from '../icons/star-filled.svg'

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  right: 2rem;

  &:hover {
    cursor: pointer;
  }
`

const StarIcon = ({ filled, handleFavourite }) => (
  <IconContainer onClick={handleFavourite}>
    {filled ? <StarFilled /> : <Star />}
  </IconContainer>
)

export default StarIcon
