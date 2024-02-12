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
    align-items: center;
    //background-color: black;
    `
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 584px;
    //background-color: yellow;
    `

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    //background-color: green;
    width: 500px;
    height: fit-content;
    margin-left: 52px;
    padding: 45px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    border-radius: 45px;
    background: #FFF;
    box-shadow: 0px 40px 100px 0px rgba(0, 0, 0, 0.08), 0px 10px 80px 0px rgba(0, 0, 0, 0.06), 
    0px 2px 15px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
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

export const SubTitulo = styled.p`
    color: rgba(53, 56, 62, 0.50);
    font-size: 20px;
    font-weight: 700;
    //line-weight: normal;
    `

export const Tarefa = styled.div`
    display: flex;
    width: 410px;
    padding: 15px;
    align-items: center;
    gap: 15px;
    //border-radius: 11.25px;
    //background: rgba(53, 56, 62, 0.05);
    
    border-radius: 22.5px;
    background: rgba(53, 56, 62, 0.05);
    
    svg{
        background: rgba(53, 56, 62, 0.10);
        padding: 8px;
        widht: 35px;
        border-radius: 12.5px;
        height: 35px;
        cursor: pointer;
    }
    
     p {
         font-size: 20px;
         font-weight: 700;
         color: #35383E;
     }
`

export const TarefaInfo = styled.input`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 410px;
    padding: 15px 15px 15px 10px;
    gap: 5px;
    border: none;
    outline: none;

    color: rgba(53, 56, 62, 0.50);
    font-size: 22px;
    font-weight: 800;
    `