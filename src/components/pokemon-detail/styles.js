import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;    
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-attachment: fixed;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
        width: 90%;
        margin: 0 auto;
    }
`

export const PokemonInfo = styled.div`
    padding: 30px;    
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 40px 40px -7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;    
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TypeUl = styled.ul`
    margin-top: 10px;
    display: flex;    
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const Li = styled.li`
    border: 1px solid #778da9;
    border-radius: 20px;
    padding: 10px 15px;
    line-height: 10px;    
`
export const AbilitiesUl = styled.ul`
    max-width: 1055px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AbilitiesLi = styled.li`
    border: 1px solid #778da9;
    border-radius: 20px;
    padding: 10px 15px;
`

export const MovesUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    max-width: 1055px;
`

export const ReturnButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 40px -7px;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`