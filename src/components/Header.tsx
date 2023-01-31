import { Link } from "react-router-dom";

import { Cabeçalho, Logo, NavBar } from "./styled-components";

export const Header = () => {
  return (
    <Cabeçalho>

      <div>
        <Link to="/">
          <Logo src="../public/tarot.png" alt="" />
          <h2>Tarot</h2>
        </Link>
      </div>

      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/jogo">Jogar</Link>
      </NavBar>

    </Cabeçalho>
  );
};
