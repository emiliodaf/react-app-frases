import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivational",
      frases: [
        "Just one small positive thought in the morning can change your whole dayust one small positive thought in the morning can change your whole day",
        "Opportunities don't happen, you create them",
        "Love your family, work super hard, live your passion",
        "When you live for a purpose you're adding reason for fight for"
       
      ]
    },
    {
      id: 2,
      nome: "Success",
      frases: [
        "Success is No Accident",
        "Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts",
        "Don't Count the Days, Make the Days Count",
        "He Who is Not Courageous Enough to Take Risks Will Accomplish Nothing in Life",
        "Don't Wait for Opportunity, Create it",
      ]
    },
    {
      id: 3,
      nome: "Inspirational",
      frases: [
        "Success is not final, failure is not fatal: it is the courage to continue that counts",
        "You are never too old to set another goal or to dream a new dream",
        "Go confidently in the direction of your dreams. Live the life you have imagined",
        "When you believe you can you're halfway there",

        
      ]
    }
  ]


  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index);
  }

  function gerarFrase(){
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className="container">
      <img
        alt="Logo frases"
        src={logoImg}
        className="logo"
      />

      <h2 className="title">Categories</h2>
      <section className="category-area">
        {allFrases.map( (item, index) => (
          <button 
          key={item.id}
          className="category-button"
          style={{ 
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
           }}

          onClick={ () => handleSwitchCategory(index) }
          >
            {item.nome}
          </button>
        ) )}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Generate Phrase</button>

      {textoFrase !== '' && <p className="textoFrase">{textoFrase}</p> }

    </div>
  )
}

export default App
