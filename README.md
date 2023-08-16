# Zedia-fullstack-developer-challenge
FoneFinder: Desafio Desenvolvedor Full Stack (ZEDIA)

## Nome: 
Camila Nizer Porfirio da Rosa.

## Descrição do problema e da solução
Frontend: Criação de uma tela que receba os resultados do buscador de telefones (FoneFinder) com React

Backend: Projeto de API Rest com Node.js

Serviço de consulta que recebe uma URL e retorna com telefones localizados na página de destino ou páginas subsequentes do mesmo domínio.
Utilização do módulo request-promise e de regex para localizar os números telefônicos (Backend).

## Se a solução se concentra no Backend, Frontend ou é Full Stack

Full Stack

## Razões por trás de suas escolhas técnicas, incluindo arquitetônicas
#Backend

Iniciei filtragem somente pela tag body do HTML para afunilar as buscas.
Por já ter conhecimento prévio em Regex esta foi a escolha para identificação das cadeias de caracteres de interesse (telefones), gerando um array de números. 
Logo após realizei filtragem no array de números para excluir valores duplicados e fazer a contagem do número de vezes que os telefones aparecem.

Bibliotecas utilizadas: 
- https://www.npmjs.com/package/request-promise
- https://www.npmjs.com/package/body-parser
- https://www.npmjs.com/package/cors
- https://www.npmjs.com/package/express


#Frontend

Inicialmente implementei os requisitos básicos do projeto (inserção de logo, cores e layout). Após utilizei a biblioteca axios para fazer a conexão com o backend e retornar o array de maps contendo os telefones e o número de vezes o mesmo apareceu na página.
Bibliotecas utilizadas: 
- https://www.npmjs.com/package/axios

## Trocas que você pode ter feito, qualquer coisa que você deixou de fora, ou o que você pode fazer diferente se você gastar mais tempo no projeto

- Regex não contempla números 0800 e números de emergência.

- Obrigatório uso de "http://" ou "https://" no início da URL

- Aplicação não funciona com links que não sejam páginas web (pdf por exemplo)

- Código do Frontend se concentra no arquivo App.js, pois a centralização dos dados em um mesmo arquivo facilita na compreensão e utilização dos mesmos. A descentralização de dados em vários arquivos gera uma complexidade que ainda não foi possível de entender e realizar a abordagem desta forma.
- A API concentra-se na URL informada, ainda não consegui fazer a filtragem de páginas subsequentes

## Link para outro código do qual você está particularmente orgulhoso

https://github.com/camila-nizer/projetoConverteMoedas/tree/camila-nizer-porfirio-da-rosa

Este é um projeto de conversão de moedas realizado no semestre passado com utilização de AndroidStudio. Na época eu não tinha familiaridade com GitHub mas o documento "documentaçãoConverteMoedas.pdf" possui todas as informações do projeto.

## Link para o seu currículo ou perfil público

Linkedin: <https://www.linkedin.com/in/camila-nizer-porfirio-da-rosa>



