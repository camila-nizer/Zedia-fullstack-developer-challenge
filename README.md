# Zedia-fullstack-developer-challenge
PhoneFinder: Desafio Desenvolvedor Full Stack (ZEDIA)

## Nome: 
Camila Nizer Porfirio da Rosa.

## Descrição do problema e da solução

Projeto de API Rest com Node.js
Serviço de consulta que recebe uma URL e retorna com telefones localizados na página de destino ou páginas subsequentes do mesmo domínio.
Utilização do módulo request-promise e de regex para localizar os números telefônicos (Backend).

## Se a solução se concentra no Backend, Frontend ou é Full Stack

Full Stack

## Razões por trás de suas escolhas técnicas, incluindo arquitetônicas
#Backend

Iniciei filtragem somente pela tag body do HTML para afunilar as buscas.
Por já ter conhecimento prévio em Regex esta foi a escolha para identificação das cadeias de caracteres de interesse (telefones), gerando um array de números. 
Logo após realizei filtragem no array de números para excluir valores duplicados.

Links de código pesquisado (Request-promise):

https://www.npmjs.com/package/request-promise

https://github.com/request/request-promise

#Frontend

Link de código pesquisado (Axios): 

https://www.npmjs.com/package/axios
https://github.com/axios/axios



## Trocas que você pode ter feito, qualquer coisa que você deixou de fora, ou o que você pode fazer diferente se você gastar mais tempo no projeto

Regex não contempla números 0800 e números de emergência.
Aplicação não funciona com links que sejam.pdf
Código do Frontend se concentra no arquivo App.js, inicialmente fiz vários arquivos para fazer um Clean Code mas não obtive sucesso.

## Link para outro código do qual você está particularmente orgulhoso

https://github.com/camila-nizer/projetoConverteMoedas/tree/camila-nizer-porfirio-da-rosa

Este é um projeto de conversão de moedas realizado no semestre passado com utilização de AndroidStudio

## Link para o seu currículo ou perfil público

Linkedin: <https://www.linkedin.com/in/camila-nizer-porfirio-da-rosa>



