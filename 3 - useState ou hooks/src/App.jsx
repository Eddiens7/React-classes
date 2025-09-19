import { useState } from 'react'
import './App.css'

function App() {

  //const [nome do estado, função que muda o estado] = useState("valor inicial do estado")
  const [aluno, setAluno] = useState("Aluno tal")

  function handleChangeName(){
    setAluno("Edmon")
  }

  function handleChangeName1(nome){
    setAluno(nome)
  }

  return (
    <>
      <h1>Curso de programação</h1>
      <p>Olá, {aluno}</p>

      <button onClick={handleChangeName}>
        Mudar nome
      </button>
      <br /><br />

      <button onClick={()=> handleChangeName1("Anny")}>
        Mudar nome
      </button>
    </>
  )
}

export default App
