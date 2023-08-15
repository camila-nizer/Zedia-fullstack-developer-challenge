const rp= require('request-promise')


let regexNumberPhone =/(\+\d{2,2}[-. ]?)?((\(\d{2,2}\)[-. ]?)|(\d{2,2})[-. ]?)?((\9?\d{4,4})|(\9[-. ]\d{4,4}))[-. ]?\d{4}/g;
let getPhones = (req, res) =>{
    let url= req.query.url
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")
    rp(url)
        .then(function(html){
            let htmlPhones= {}
            let htmlNumbers=[]
            let indexBodyOpen= html.indexOf("<body>")
            let indexBodyClose=html.indexOf("</body>")
            let htmlBody= html.slice(indexBodyOpen,indexBodyClose)
            let fistFilter=true
            let secondFilter=true
            while(fistFilter){
                let findIndexOpenScript= htmlBody.indexOf("<script")
                if(findIndexOpenScript>-1){
                    let findIndexCloseScript= htmlBody.indexOf("</script>",findIndexOpenScript)
                    let sliceOpenScript=htmlBody.slice(0,findIndexOpenScript)
                    let sliceCloseScript= htmlBody.slice(findIndexCloseScript)
                    htmlBody=sliceOpenScript+sliceCloseScript
                }else{
                    fistFilter=false
                    
                }
            }
            while(secondFilter){
                let findIndexOpenTag= htmlBody.indexOf("<")
                if(findIndexOpenTag>-1){
                    let findIndexClosetag= htmlBody.indexOf(">", findIndexOpenTag)
                    let sliceOpenTag= htmlBody.slice(0,findIndexOpenTag)
                    let sliceCloseTag=htmlBody.slice(findIndexClosetag)
                    htmlBody= sliceOpenTag+sliceCloseTag
                }else{
                    secondFilter=false
                }  
            }
            htmlNumbers= htmlBody.match(regexNumberPhone)
            if(htmlNumbers && htmlNumbers.length>0){
                for(i=0; i<htmlNumbers.length; i++){
                    const telefone= htmlNumbers[i]
                    const quantTelefone= 1
                    if( htmlPhones[telefone] == null){
                        htmlPhones[telefone]=quantTelefone
                    }
                    else{
                        htmlPhones[telefone]=htmlPhones[telefone]+1
                    }
                }
                let keysOfMap= Object.keys(htmlPhones)
                let arrayForFront=[]
                for(j=0;j<keysOfMap.length; j++){
                    let insertToArrayFront={}
                    insertToArrayFront["telefone"]=keysOfMap[j]
                    insertToArrayFront["quantidade"]=htmlPhones[keysOfMap[j]]
                    arrayForFront.push(insertToArrayFront)
                }
                res.status(200).send(arrayForFront)
            }
            else{
                res.status(200).send([])
            }           
        })
        .catch(function(error){
        //const mensagemError=error.response.error
            console.log("Erro: ",error)
            res.send(error)
        })
}
module.exports = {
    "getPhones": getPhones
}



// let a=[]
// map= {"batata":1}
// map[telefone]
// a.push(map)