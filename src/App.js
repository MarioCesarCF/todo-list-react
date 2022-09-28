import './App.css';
import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
const [title, setTitle] = useState("");
const [time, setTime] = useState("");
const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  
  const todo = {
    id: Math.random(),
    title,
    time,
    done: false,
  };
  console.log(todo);
  
  setTitle("");
  setTime("");
}

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>
      <div className="form-todo">
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">O que você vai fazer?</label>
            <input type="text" name="title" placeholder="Título da tarefa" onChange={(e) => setTitle(e.target.value)} value={title || ""} required />
            {/*No input acima foi usada uma técnica que seta um novo valor para o input a cada tecla digitada, e depois o value se torna o que está escrito no input. Na handleSubmit ele usa o setTitle("") para limpar o input após o envio. Já o value com title || "" pelo que entendi é para não dar erro enquanto a página é carregada e não teve nada informado.*/}
            <label htmlFor="time">Duração:</label>
            <input type="text" name="time" placeholder="Tempo estimado (em horas)" onChange={(e) => setTime(e.target.value)} value={time || ""} required />
          </div>
          <input type="submit" value="Criar tarefa" />
        </form>
      </div>
      <div className="list-todo">
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas.</p>}
      </div>
    </div>
  );
}

export default App;
