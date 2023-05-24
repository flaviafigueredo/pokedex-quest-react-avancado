import styled from 'styled-components'

export const Section = styled.section`
    max-width: 1280px;
    display: flex;
    flex-direction: column;    
    align-items: center;
    padding: 10px;    
`

export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    gap: 30px;
`

export const Li = styled.li`
    padding: 10px;
    width: 200px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 40px 40px -7px;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`