import { Main, Btn, Resultado } from "./styled-pages";
import { useState } from "react";

import useRequestData from "../hooks/useRequestData";

export const GameTarot = () => {
  const [resultadoCard, setResultadoCard] = useState(false);
  const data: any = useRequestData("tarot.json");
  const [cartaSorteada , setCartaSorteada]:any = useState([]);

  const reset = () => {
    window.location.reload();
    setResultadoCard(false);
  };

  const sorteo = () => {
    setResultadoCard(true);

    const numeroSorteada = Math.floor(Math.random() * data.cards.length);

    setCartaSorteada(data.cards[numeroSorteada]);

  };

  return (
    <Main>
      {resultadoCard ? (
        <Resultado id="resultado">
          {cartaSorteada ? (
            <div>
              <h1>Sua carta é :</h1>
              <img src={data.imageBackCard} alt="" />
              <h4>{cartaSorteada.name}</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          ) : (
            <h4>Loaging</h4>
          )}
          <Btn onClick={reset}>REINICIAR</Btn>
        </Resultado>
      ) : (
        <Btn id="play" onClick={sorteo}>
          PLAY
        </Btn>
      )}
    </Main>
  );
};
