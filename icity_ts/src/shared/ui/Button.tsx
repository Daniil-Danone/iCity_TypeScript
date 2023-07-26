import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
  font-size: 20px;
  padding: 5px;
  background: none; 
  border: 1px solid #2185fb;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s ease-in-out;

  &:hover {
    color: white;
    background-color: #2185fb;
  }
`

interface Props {
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
  }


const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
