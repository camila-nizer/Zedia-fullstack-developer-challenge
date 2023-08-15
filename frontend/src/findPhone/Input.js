import './Input.css'
import axios from 'axios'
import {useState} from 'react';

let Input= () => {
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
        <div className="container-input">
            <input className= "input-url" type="url" method="get" hint="Digite a url aqui" onChange={pegaUrl}>
                </input>
            <button className="submit-input" onClick={sendUrl}> &rarr;</button>
        </div>
        
    )  
}

export default Input