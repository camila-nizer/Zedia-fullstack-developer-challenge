import './App.css';
import Logo from './logo.png';
import axios from 'axios'
import {useState} from 'react';

function App() {

  const [urlString, setUrlString] = useState('')
  const [arrayNumbers, setArrayNumbers]= useState([])
  const [mensagemError, setMensagemError]=useState('')
  const [msgmPlaceholder, setMsgmPlaceholder]=useState('Digite a URL aqui')
  const [tempo, setTempo]=useState('')

  let pegaUrl= (event) =>{
    setUrlString(event.target.value)
  }
  let sendUrl=() => {
    if(urlString.length>0){
      let dataInicial= new Date()
      axios.get('http://localhost:3000/findPhones/', {params: {
          url: urlString
      }})
      .then(function (response){
          console.log(response)
          setArrayNumbers(response.data)
          if(arrayNumbers.length==0){
            setMensagemError("Não foram encontrados números na página")
          }else{
            setMensagemError('')
          }
      let dataFinal= new Date()
      setTempo(dataFinal-dataInicial)
      })
      .catch(function (error){
          console.log(error)
          setMensagemError(error.response.data)
      })
    }else{
      setMsgmPlaceholder("Insira uma URL para pesquisar")
      setArrayNumbers('')
      setMensagemError('')
    }
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo}/>
        <div className="container-input">
          <input className= "input-url" id= "input-url-id" type="url" method="get" placeholder={msgmPlaceholder} onChange={pegaUrl} required>
          </input>
          <button className="submit-input" id="submit-input-id" onClick={sendUrl}> &rarr;</button>
        </div>
        <div className="container-results">
          <div className='telefones'>
              <div className="informacoes"> 
                {arrayNumbers.length ? (
                <p className='informacoes-encontradas'>
                  Resultado(s) encontrado(s): {arrayNumbers.length} . Tempo: {tempo} ms.
                </p>
                ): null}
                { mensagemError.length ? (
                    <p className='informacoes-encontradas'>{mensagemError}</p>
                  ): null}
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
