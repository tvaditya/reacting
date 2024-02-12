import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    `
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 584px;
    //background-color: yellow;
    `

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    //background-color: black;
    `

export const Titulo = styled.h1`
    color: #000;
    //font-family: Raleway;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    span {
        color: #1F5FA3
    }
`

export const Botao = styled.div`
    display: flex;
    justify-content: center;
    align_items: center;
    border-radius: 30px;
    background: #1F5FA3;
    width: 210px;
    height: 58px;
    margin-top: 12px;

    color: #FEF6F6;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    `