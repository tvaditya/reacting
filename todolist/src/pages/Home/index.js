import {LeftContainer, MainContainer, Container, Titulo, Botao} from "./styles";

import HomeImg from '../../assets/home.png';
import {useNavigate} from "react-router-dom";

export default function Component() {

    const navigate = useNavigate()
    function myFunction() {
        // alert("Clicou no botão");
        navigate("/todolist")
    }
    return (
        <>
            <MainContainer>
                <Container>
                    <LeftContainer>
                        <Titulo>Organize sua vida com <span>simplicidade e eficiência</span></Titulo>
                        {/*<a href={"/todolist"}>*/}
                        {/*    <Botao>Iniciar</Botao>*/}
                        {/*</a>*/}
                        <Botao onClick={myFunction}>Iniciar</Botao>
                    </LeftContainer>
                    <img src={HomeImg} alt={"Imagem Home"}/>
                </Container>
            </MainContainer>
        </>
    )
}