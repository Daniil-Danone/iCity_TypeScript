import React from 'react';
import styled from 'styled-components';


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

interface ButtonProps {
  onClick?: () => void,
  children: React.ReactNode,
}


const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;
