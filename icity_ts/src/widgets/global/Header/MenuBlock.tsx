import React from 'react'
import styled from 'styled-components'

import MyLink from '../../../shared/ui/Link'

const StyledMenuBlock = styled.div`
    display: flex;
    gap: 30px;
    font-size: 20px;
`

const MenuBlock: React.FC = () => {
  return (
    <StyledMenuBlock>
      <MyLink to={'#map'}>Карта</MyLink>
      <MyLink to={'#events'}>Мероприятия</MyLink>
    </StyledMenuBlock>
  )
}

export default MenuBlock
