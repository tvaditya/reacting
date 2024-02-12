import TodoListImg from './assets/logo.png';
import {Titulo, Container, MainContainer,
    LeftContainer, RightContainer, LogoImage,
    SubHeadLine, HeadLine, SubTitulo, TarefaInfo} from './styles';
import Tarefa from './components/Tarefa';
import Titulo from './components/Titulo';

import {useState, useRef, useEffect} from "react";
import axios from "axios";



export default function App() {
  // const tasks = [{id:Date.now() + '_' + Math.random(),text: "Tarefa anterior"},
  //     {id:Date.now() + '_' + Math.random(), text: "Tarefa nova"}]
  const [tasks, setTasks] = useState([]);

  const taskText = useRef("");

  async function removeTask(id) {
        console.log("Removendo tarefa...")
        await axios.delete(`https://plataforma.universodev.com.br/api/todolist/${id}`)
        setTasks(tasks.filter((task) => task.id !== id));
    }
    useEffect(() => {
      async function listTasks() {
        const {data: taskList} = await axios.get('https://plataforma.universodev.com.br/api/todolist/')
        setTasks(taskList);
      }
      listTasks();
    }, []);
  async function insertNewtask(event) {
    if (event.key === 'Enter') {
      const {data: newTaskInfo} = await axios.put('https://plataforma.universodev.com.br/api/todolist/',
          {text: taskText.current.value})
      // setTasks([...tasks, {id:Date.now() + '_' + Math.random(), text: taskText.current.value}]);
        setTasks([...tasks, {id: newTaskInfo.id, text: newTaskInfo.text}]);
      taskText.current.value = "";
    }
  }

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
                <Titulo>Minhas Tarefas</Titulo>
                <SubTitulo>Tarefas do dia...</SubTitulo>

                {tasks.map((task) => (
                    <Tarefa id={task.id} text={task.text} updateTasks={setTasks} />
                ))}

                <TarefaInfo input type={"text"}
                            placeholder={"Adicione a próxima tarefa..."}
                            onKeyDown = {insertNewtask}
                            ref={taskText}
                />
            </RightContainer>
        </Container>
    </MainContainer>
  );
}

// export default App;
