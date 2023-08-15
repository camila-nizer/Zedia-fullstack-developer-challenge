import './App.css';
import Logo from './logo.png';
import axios from 'axios'
import {useState} from 'react';

function App() {

  const [urlString, setUrlString] = useState('')
  const [arrayNumbers, setArrayNumbers]= useState([])

  let pegaUrl= (event) =>{
    setUrlString(event.target.value)
    console.log(urlString)
  }
  let sendUrl=() => {
    console.log("Passou aqui")
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
                <input className= "input-url" type="url" method="get" hint="Digite a url aqui" onChange={pegaUrl}>
                </input>
                <button className="submit-input" onClick={sendUrl}> &rarr;</button>
        </div>
        <div className="container-results">
            <div className="informacoes">
                <p className='informacoes-encontradas'>Foram encontrados {arrayNumbers.length} resultado(s) em xxxx segundos: </p>
            </div>
            <div className="telefones">
                {
                  arrayNumbers

                  /// TO DO: EXIBIR DADOS DO ARRAY UM ABAIXO DO OUTRO E AJUSTAR OS CÓDIGOS NOS OUTROS ARQUIVOS PARA FUNCIONAR E DIMINUIR CÓDIGO DO APP.JS
                

                  // for(i=0; i<arrayNumbers.length; i++){
                  //   arrayNumbers
                  // }
                }
            </div>
        </div>
      </header>
    </div>
  );
}
export default App;
