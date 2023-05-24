import styled from 'styled-components'

export const ThemeImg = styled.img`
    width: 40px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    border-radius: 50px;
`
export const StyledThemeButton = styled.div`
    background: none;
    border: none;
    transition: 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`