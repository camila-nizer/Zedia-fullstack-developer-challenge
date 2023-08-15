const rp= require('request-promise')

let htmlPhones= []
let htmlNumbers=[]
let regexNumberPhone =/(\+\d{2,2}[-. ]?)?((\(\d{2,2}\)[-. ]?)|(\d{2,2})[-. ]?)?((\9?\d{4,4})|(\9[-. ]\d{4,4}))[-. ]?\d{4}/g;
const getPhones = (req, res) =>{
    const url= req.query.url
    console.log(url)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")

    rp(url)
        .then(function(html){
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

            //TO DO: implementar tabela hash para verificar quantas vezes o mesmo número incorre no array
            for(i=0; i<htmlNumbers.length; i++){
                if(htmlPhones.indexOf(htmlNumbers[i])==-1){
                    htmlPhones.push(htmlNumbers[i])
                }
            }
            res.status(200).send(htmlPhones)
        })
        .catch(function(err){
            console.log("Erro: ",err)
        })
}
// TO DO: OLHAR BUG (NÃO ESTÁ ATUALIZANDO O ARRAY QUANDO PASSA URL DIFERENTE)
module.exports = {
    "getPhones": getPhones
}