import React from 'react'
import styled from 'styled-components'

import Logo from '../../../shared/ui/Logo'
import MenuBlock from './MenuBlock'
import AuthBlock from './AuthBlock'


const Container = styled.div`
    position: relative;
    min-width: 1280px;
    max-width: 1280px;
    margin: 0 auto;
`

const StyledNavbar = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    background: #ffffff;
    z-index: 1;
    border-radius: 0 0 10px 10px;
    box-shadow: 1px 1px 4px lightgray;

    padding: 10px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Header: React.FC = () => {

    return (
        <Container>
            <StyledNavbar>
                <Logo/>
                <MenuBlock/>
                <AuthBlock/>
            </StyledNavbar>
        </Container>
    )
}

export default Header;
