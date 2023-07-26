import React from 'react'
import styled from 'styled-components'
import Button from '../../../shared/ui/Button'

const StyledAuthBlock = styled.div`
    display: flex;
    gap: 10px;
`

const AuthBlock: React.FC = () => {
  return (
    <StyledAuthBlock>
        <Button onClick={() => console.log('auth')}>Войти</Button>
        <Button onClick={() => console.log('reg')}>Зарегистрироваться</Button>
    </StyledAuthBlock>
  )
}

export default AuthBlock
