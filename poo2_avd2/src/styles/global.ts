import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

.conteudo {
  width: 100%;
  background: #FFF;
  float: left;
  padding: 20px;
  height: 1000px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

body {
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  background: #4267B2
;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 0px 40px 0px 0px;
}

button {
  cursor: pointer;
}

#cadastro {
  width: 100%;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
}

#lista {
  float: left;
  width: 100%;
}

h1 {
  margin-bottom: 20px;
}

.iconePrincipal {
    width: 40px;
    height: auto;
    float: right;
  }

  .iconeAtualizar {
    width: 18px;
    height: auto;
    float: left;
  }

`;
