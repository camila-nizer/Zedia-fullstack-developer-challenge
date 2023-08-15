import './App.css';
import Logo from './logo.png';
import axios from 'axios'
import {useState} from 'react';

function App() {

  const [urlString, setUrlString] = useState('')
  const [arrayNumbers, setArrayNumbers]= useState([])

  let pegaUrl= (event) =>{
    setUrlString(event.target.value)
  }
  let sendUrl=() => {
    axios.get('http://localhost:3000/findPhones/', {params: {
        url: urlString
    }})
    .then(function (response){
        console.log(response)
        setArrayNumbers(response.data)
    })
    .catch(function (error){
        console.log(error)
    })
    .finally(function(){

    })

}

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo}/>
        <div className="container-input">
                <input className= "input-url" type="url" method="get" placeholder="Digite a url aqui" onChange={pegaUrl}>
                </input>
                <button className="submit-input" onClick={sendUrl}> &rarr;</button>
        </div>
        <div className="container-results">
          <div className='telefones'>
              <div className="informacoes"> 
                {arrayNumbers.length ? (
                <p className='informacoes-encontradas'>
                  Resultado(s) encontrado(s): {arrayNumbers.length}
                </p>
                ):null}
              </div>
          </div>
          {arrayNumbers.length ? (
            <>
              {arrayNumbers.map((arrayN, index) =>{
                return( 
                    <div className="exibir-arrays">
                      <p className='quantidade'> {arrayN.quantidade} x </p> 
                      <p className={index==0 ?('primeiro-telefone'):'telefone'}> {arrayN.telefone} </p>

                    </div>
                )
              }
              )}
            </>
            ):null} 
          </div>
      </header>
    </div>
  );
}
export default App;
