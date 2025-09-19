import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const[nutri, setNutri] = useState([])

  useEffect(()=>{
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
        .then((r)=>r.json())
        .then((json)=>{
          console.log(json)
          setNutri(json)
        })

    }
    loadApi()
  }, [])

  return (
    <>
      <div className='container'>
        <header>
          <h1>React Nutri</h1>
        </header>

        {nutri.map((item)=>{
          return (
            <article key={item.id} className='post'>
              <p className='titulo'>{item.titulo}</p>
              <img src={item.capa} alt={item.titulo} className='capa'/>
              <p className='texto'>{item.subtitulo}</p>
              <a className='botao' href={item.categoria}>Acessar</a>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default App
