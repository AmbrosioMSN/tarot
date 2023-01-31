import styled from "styled-components";

/* ---------------------- HEADER DA PAGINA ------------------------ */
export const Cabeçalho = styled.header`
  background: wheat;
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  color: #121214;

  div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #424244;

      h2 {
        padding: 10px;
        font-style: italic;
      }

      :hover {
        transition: 0.8s;
        color: black;
        text-decoration: overline;
      }
    }
  }
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavBar = styled.nav`
  display: flex;

  border-bottom: 2px solid;
  a {
    padding: 10px;
    margin: 5px;
    border: 1px solid transparent;
    border-radius: 20px;
    font-weight: bold;

    color: #424244;
    text-decoration: none;

    :hover {
      transition: 0.8s;
      text-decoration: overline;
      color: black;
    }
  }
`;

/* ---------------------- FOOTER DA PAGINA ------------------------ */
export const Rodape = styled.footer`
  background: wheat;
  color: #121214;
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  p{
    text-decoration: underline;
  }
`;
