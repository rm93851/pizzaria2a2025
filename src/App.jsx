import {useState} from 'react'

function App(){
  const [nome, setNome] = useState('Ronaldo');

  return (
    <div>
      <h3>Pizzaria 2a</h3>
      <input className="Nome"
        name="nome"
        placeholder="digite seu nome.."
        onChange={(e)=>setNome(e.target.value)}
        type="text"/>
        <button onClick={()=>{alert(nome)}}>
          CLIQUE AQUI
        </button>
    </div>
  )
}
export default App
