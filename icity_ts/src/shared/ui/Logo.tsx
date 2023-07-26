import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
    font-size: 30px;
    cursor: pointer;
    transition: .3s ease;

    &:hover {
        color: #2185fb;
    }
`

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      iCity
    </StyledLogo>
  )
}

export default Logo
