import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    color: black;
    transition: .3s ease;
    cursor: pointer;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        color: #2185fb;
    }
`

interface Props {
    to?: any,
    children?: React.ReactNode,
}

const MyLink: React.FC<Props> = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      { children }
    </StyledLink>
  )
}

export default MyLink
