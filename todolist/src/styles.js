import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    `
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    //background-color: black;
    `
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 584px;
    //background-color: yellow;
    `

export const HeadLine = styled.div`
    display: flex;
    align-items: center;
    
    span {
        color: #1F5FA3
    }
    `

export const SubHeadLine = styled.p`
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 16px;
    `
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: green;
    `

export const LogoImage = styled.img`
    margin-right: 8px;
    `

export const Titulo = styled.h1`
    color: #000;
    //font-family: Raleway;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    `