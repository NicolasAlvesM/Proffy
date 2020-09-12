# Proffy
Plataforma para conectar professores e alunos feito com ReactJS e React Native durante NLW (Next Level Week) #02. 

## Oque é?
é um projeto que foi desenvolvido na Next Level Week promovido pela [Rocketseat](https://rocketseat.com.br), é uma aplicação Web e Mobile feita para auxiliar na conexão entre os alunos e os professores. Onde os professores tem a possibilidade de registrar aulas, e os alunos podem buscar pelas aulas cadastradas.


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

##Screenshots 
### Web

<img src="https://github.com/NicolasMorenoAlves/Proffy/blob/master/screenshots/web/Home.png" width="350"/> <img src="https://github.com/NicolasMorenoAlves/Proffy/blob/master/screenshots/web/Sem%20resultados.png" width="350"/> <img src="https://github.com/NicolasMorenoAlves/Proffy/blob/master/screenshots/web/Listagem.png" width="350"/> <img src="https://github.com/NicolasMorenoAlves/Proffy/blob/master/screenshots/web/Formul%C3%A1rio.png" width="350"/>

### Mobile
<img src="https://github.com/NicolasMorenoAlves/Proffy/blob/master/screenshots/mobile/Home%20(1).png" height="420"/> <img src="https://github.com/NicolasMorenoAlves/Proffy/blob/master/screenshots/mobile/Filtro%20expandido.png" height="420"/> <img src="https://github.com/NicolasMorenoAlves/Proffy/blob/master/screenshots/mobile/Favoritos.png" height="420"/> <img src="https://github.com/NicolasMorenoAlves/Proffy/blob/master/screenshots/mobile/Quero%20dar%20aulas.png" height="420"/>

## Executando a aplicação
### Pré-requisitos
- É necessário possuir o Node.js e o Expo instalados no computador
- Também, é preciso ter um gerenciador de pacotes seja o NPM ou Yarn.
### Executando  


  #### API
  ```
   $ cd server
   ##### Instalando as dependências do projeto.
   $ yarn # ou npm install
   ##### Execute as migrations
   $ npm knex:migrate
   ##### Execute os seeds
   $ npm knex:seed
   ##### Execute
   yarn knex:migrate
   ##### Inicie a API
   $ yarn start # ou npm start
  ```
  #### Aplicação web
  ```
   $ cd web
   ##### Instalando as dependências do projeto.
   $ yarn # ou npm install
   ##### Inicie a aplicação web
   $ yarn start # ou npm start
  ```
  
  #### Aplicação mobile
  ```
   $ cd mobile
   ##### Instalando as dependências do projeto.
   $ yarn # ou npm install
   ##### Inicie a aplicação web
   $ yarn start # ou npm start
   <br /><br /> O Expo será aberto, basta digitalizar o qrcode no terminal ou na página que será aberta.
   Você pode installar o aplicativo Expo para testar no celular
  ```
  ###### Se houver algum problema com as fontes, execute: 
  > $ expo install expo-font @expo-google-fonts/poppins @expo-google-fonts/archivo
  
  

