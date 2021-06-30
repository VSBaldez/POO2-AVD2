import styled from 'styled-components'

export const Container = styled.div`
  /*
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 3px;
  */
  margin-top: 15px;

   th, tr, td {
    border-bottom-color: #000;
    border-bottom: solid;
    border-color: #ddd;
    border-width: 1px;
    text-align:left;
  }

  tr:hover {
    background: #ddd;
  }

  table {
    width: 100%;
    margin-top: 10px;
    border-top: solid;
    border-width: 1px;
    border-color: #ddd;
  }

  td {
    padding: 10px;
    font-size: 14px;
  }

  .icone {
    width: 20px;
    height: auto;
  }

  .icone1 {
    width: 30px;
    height: auto;
  }

  button {
    background: transparent;
    border: none;
  }

  th {
    padding: 10px;
    background: #000;
    color: #FFF;
  }

  ul li {
    background: #fff;
    border-bottom: 1px solid #ddd;
    margin-top: 30px;
    list-style: none;
  }

  ul li a {
    text-decoration: none;
  }
  .opcoes {
    text-align:center;
    padding: 0px;
  }
`
export const Form = styled.form`
  width: 100%;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  input {
    margin-bottom: 10px;
  }

  input[type=text]{
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #5582D6;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background: #1C2F53;
  }

`
