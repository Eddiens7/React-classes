import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa')
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas])

  function handleRegister(e) {
    e.preventDefault()

    if (input.trim() === "") return // Evita tarefa vazia

    setTarefas([...tarefas, { id: Date.now(), nome: input }])
    setInput("")
  }

  return (
    <>
      <div>
        <h1>Lista de tarefas</h1>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Digite uma tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Registrar" />
        </form>
      </div>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.nome}</li>
        ))}
      </ul>
    </>
  )
}

export default App
