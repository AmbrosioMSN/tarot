import styled from "styled-components";

export const Titulo = styled.h1`
 text-align: center;
 padding: 25px;
`

export const Main = styled.main`
  width: 100%;
  min-height: 45em;
  margin: 25px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 16.5%;

  img {
    width: 40%;
    margin-bottom: 20px;
  }

  p {
    cursor: default;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h5 {
    margin-bottom: 10px;
    text-decoration: underline;
  }
`;

export const Detalhes = styled.button`
  padding: 15px;
  background-color: wheat;
  color: #121214;
  border: 1px solid wheat;
  border-radius: 15%;
  margin-top: 20px;
  margin-bottom: 20px;

  cursor: pointer;

  :hover {
    transition: 0.5s;
    color: wheat;
    background-color: transparent;
  }
`;

export const TelaDetalhes = styled.div`
width: 70%;
height: 500px;
background-color: #121214;
position: absolute;
top: 0;
margin-top: 25%;
border: 5px solid white;

display: none;
justify-content: center;
align-items: center;

color: wheat;

img {
  width: 30%;
}

div{
  text-align: center;
  h2{
    margin-bottom: 25px;
  }
  p{
    margin-bottom: 40px;
  }
  button {
    padding: 15px;
    font-size: 15px;
  }
}
`

/* ------------------- GAME TAROT ---------------------- */

export const Btn = styled.button`
  padding: 25px;
  background-color: wheat;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid wheat;
  border-radius: 25px;
  color: #121214;
  cursor: pointer;

  :hover {
    transition: 0.5s;
    background-color: transparent;
    color: wheat;
  }
`;

export const Resultado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    text-align: center;
    padding: 25px;

    img {
      width: 45%;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    h4 {
        margin-bottom: 20px;
        text-decoration: underline;
    }
  }
`;
