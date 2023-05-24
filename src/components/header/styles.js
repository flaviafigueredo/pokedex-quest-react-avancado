import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 80px 0 60px;

    @media (max-width: 688px) {
        padding: 0 60px 0 30px;
    }
`

export const Logo = styled.img`
    width: 150px;
`