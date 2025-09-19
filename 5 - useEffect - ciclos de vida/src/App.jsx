import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const[contador, setContador] = useState(0)

  useEffect(()=>{
    alert("Bem vindo ao site")
  }, []) 
    // Quando o array de dependências está vazio, o efeito executa apenas uma vez, logo após a montagem inicial do componente.

  useEffect(()=>{
    alert("Somando...")
  }, [contador]) 
    // Quando o array possui dependências, o efeito executa após a montagem e sempre que algum dos valores dentro desse array for atualizado (nesse caso, 'contador').

  useEffect(()=>{
    alert("Renderizou!")
  }) 
    // Quando não há array de dependências, o efeito executa após a montagem e em toda renderização do componente (sempre que o estado ou props mudarem).

  function handleContador(){
    setContador (contador +1)
  }
  
  return (
    <>
      <div>Contador <input type="button" onClick={handleContador} value={contador}/></div>
    </>
  )
}

export default App
