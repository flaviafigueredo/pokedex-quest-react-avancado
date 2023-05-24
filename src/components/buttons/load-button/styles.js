import styled from 'styled-components'

export const LoadButton = styled.button`
    margin-top: 40px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    background-color: #e0e1dd;
    color: #14213D;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 40px -7px;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #c9cac6; 
        transform: scale(1.05);
    }
`