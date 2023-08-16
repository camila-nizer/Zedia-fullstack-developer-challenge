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
            let indexBodyOpen= html.indexOf("<body")
            let indexBodyClose=html.indexOf("</body>")
            let htmlBody= html.slice(indexBodyOpen,indexBodyClose)
            let filterTags=true
            let filterScript=true
            while(filterScript){
                let findIndexOpenScript= htmlBody.indexOf("<script")
                if(findIndexOpenScript>-1){
                    let findIndexCloseScript= htmlBody.indexOf("</script>",findIndexOpenScript)
                    let sliceOpenScript=htmlBody.slice(0,findIndexOpenScript)
                    let sliceCloseScript= htmlBody.slice(findIndexCloseScript)
                    htmlBody=sliceOpenScript+sliceCloseScript
                }else{
                    filterScript=false
                }
            }
            while(filterTags){
                let findIndexOpenTag= htmlBody.indexOf("<")
                if(findIndexOpenTag>-1){
                    let findIndexClosetag= htmlBody.indexOf(">", findIndexOpenTag)
                    let sliceOpenTag= htmlBody.slice(0,findIndexOpenTag)
                    let sliceCloseTag=htmlBody.slice(findIndexClosetag)
                    htmlBody= sliceOpenTag+sliceCloseTag
                }else{
                    filterTags=false
                }  
            }
            htmlNumbers= htmlBody.match(regexNumberPhone)
            if(htmlNumbers && htmlNumbers.length>0){
                for(i=0; i<htmlNumbers.length; i++){ //array (htmlPhones) for map (telefone:quantidade)
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
                for(j=0;j<keysOfMap.length; j++){ //maps for array of Maps
                    let insertToArrayFront={}
                    insertToArrayFront["telefone"]=keysOfMap[j]
                    insertToArrayFront["quantidade"]=htmlPhones[keysOfMap[j]]
                    arrayForFront.push(insertToArrayFront)                    
                }
                arrayForFront.sort(function(a,b){ // ordernar maps no array de maps
                    if(a.quantidade > b.quantidade){
                        return -1
                    }else{
                        return true
                    }
                })
                
                                
                res.status(200).send(arrayForFront)
            }
            else{
                res.status(200).send([])
            }           
        })
        .catch(function(error){
            console.log("Erro: ",error)
            res.status(400).send(error.message)
        })
}
module.exports = {
    "getPhones": getPhones
}
