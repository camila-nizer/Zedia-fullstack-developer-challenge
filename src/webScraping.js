const rp= require('request-promise')

let htmlPhones= []
let htmlNumbers=[]
let regexNumberPhone =/(\+\d{2,2}[-. ]?)?((\(\d{2,2}\)[-. ]?)|(\d{2,2})[-. ]?)?((\9?\d{4,4})|(\9[-. ]\d{4,4}))[-. ]?\d{4}/g;
const getPhones = (req, res) =>{
    const url= req.query.url

    rp(url)
        .then(function(html){
            let indexBody= html.indexOf("<body>")
            let htmlBody= html.slice(indexBody)
            let isTrue=true
            let testc
            while(isTrue){
                let a= htmlBody.indexOf("<")
                if(a>-1){
                    let b= htmlBody.indexOf(">", a)
                    let test= htmlBody.slice(0,a)
                    let testb=htmlBody.slice(b)
                    htmlBody= test+testb
                }else{
                    isTrue=false
                }  
            }
            htmlBody= htmlBody.replaceAll(">","")

            //TODO: falta fazer refinamento para tag script e arrumar nomes das variáveis

            htmlNumbers= htmlBody.match(regexNumberPhone)
            for(i=0; i<htmlNumbers.length; i++){
                if(htmlPhones.indexOf(htmlNumbers[i])==-1){
                    htmlPhones.push(htmlNumbers[i])
                }
            }
            res.status(200).send(htmlPhones)
            
            console.log(htmlNumbers.length)
            console.log(htmlPhones.length)
            console.log(htmlNumbers)
        })
        .catch(function(err){
            console.log("Erro: ",err)
        })
}
module.exports = {
    "getPhones": getPhones
}