import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState ('')
  const [idade, setIdade] = useState('')
  const [user, setUser] = useState({
    nome: "usuário",
    email: "email@email.com",
    idade: "0"
    //Definir valores iniciais por padrão
  })

  function handleRegister(e){
    e.preventDefault()

    alert("Usuário registrado com sucesso!")

    setUser({
      nome: nome,
      email: email,
      idade :idade
    })

  }

  return (
    <>
    <div>
      <form onSubmit={handleRegister}>
        <input type="text" name="" id="" placeholder='Digite seu nome' value={nome} onChange={(e)=> setNome(e.target.value)}/>
        <br />
        <br />
        <input type="email" name="" id="" placeholder='Digite seu email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <br />
        <br />
        <input type="number" name="" id="" placeholder='Digite sua idade' value={idade} onChange={(e)=> setIdade(e.target.value)}/>
        <br /><br />
        <input type="submit" value="Registrar" />
      </form>
      <br /><br /><br />
    </div>

    <div>
      <span>Bem vindo, {user.nome}!</span>
      <br />
      <span>Email: {user.email}</span>
      <br />
      <span>Idade: {user.idade}</span>
    </div>
    </>
  )
}

export default App
