# Proffy
Plataforma para conectar professores e alunos feito com ReactJS e React Native durante NLW (Next Level Week) #02.

foi um projeto desenvolvido na Next Level Week promovido pela [Rocketseat](https://rocketseat.com.br), é uma aplicação Web e Mobile feita para auxiliar na conexão entre os alunos e os professores. Onde os professores tem a possibilidade de registrar aulas, e os alunos podem buscar pelas aulas cadastradas.


## Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

* [TypeScript](https://www.typescriptlang.org/)
* [Node](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.io/)
* [KnexJS](http://knexjs.org/)
* [SQLite3](https://www.sqlite.org/index.html)
* [Express](https://expressjs.com/)
* [Axios](https://github.com/axios/axios)
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)

## Executando a aplicação
### Pré-requisitos
- É necessário possuir o Node.js e o Expo instalados no computador
- Também, é preciso ter um gerenciador de pacotes seja o NPM ou Yarn.
### Executando  

  #### API
  > $ cd server
  > ##### Instalando as dependências do projeto.
  > $ yarn # ou npm install
  > ##### Execute as migrations
  > $ npm knex:migrate
  > ##### Execute os seeds
  > $ npm knex:seed
  > yarn knex:migrate
  > ##### Inicie a API
  > $ yarn start # ou npm start

  #### Aplicação web
  > $ cd web
  > ##### Instalando as dependências do projeto.
  > $ yarn # ou npm install
  > ##### Inicie a aplicação web
  > $ yarn start # ou npm start
  
  #### Aplicação mobile
  > $ cd web
  > ##### Instalando as dependências do projeto.
  > $ yarn # ou npm install
  > ##### Inicie a aplicação web
  > $ yarn start # ou npm start
  > A Expo será aberta, basta digitalizar o qrcode no terminal ou na página que será aberta.
  > Você pode installar o aplicativo Expo para testar no celular
  Se houver algum problema com as fontes, execute:
  expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
  

