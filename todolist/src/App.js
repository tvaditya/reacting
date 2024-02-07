import TodoListImg from './assets/logo.png';
import {Titulo, Container, MainContainer,
    LeftContainer, RightContainer, LogoImage,
    SubHeadLine, HeadLine} from './styles';


function App() {
  return (
    <MainContainer>
        <Container>
            <LeftContainer>
                <HeadLine>
                    <LogoImage src={TodoListImg}/>
                    <Titulo>Organize sua vida com <span>simplicidade e eficiência</span></Titulo>
                </HeadLine>
                <SubHeadLine>Adicione ao lado as tarefas que deseja fazer hoje e não pare até ela estar vazia!</SubHeadLine>
            </LeftContainer>
            <RightContainer>
                Lado Direito
            </RightContainer>
        </Container>
    </MainContainer>
  );
}

export default App;
