import { Main, Titulo, TelaDetalhes, Btn } from "./styled-pages";

import useRequestData from "../hooks/useRequestData";
import { Cards } from "../components/Cards";

import seven from '../assets/seven.png'

export const Home = () => {
  const data: any = useRequestData("tarot.json");

  return (
    <div>
      <Titulo>TODAS AS CARTAS DE TAROT</Titulo>
      <Main>
          {data.length !== 0 &&
            data.cards.map((card: any) => {
              return (
                <Cards
                  key={card.name}
                  nome={card.name}
                  imagem={data.imageBackCard}
                />
              );
            })}
            <TelaDetalhes>
              <img src={seven} alt="" />
              <div>
                <h2>Nome Da carta</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <Btn>SAIR</Btn>
              </div>
            </TelaDetalhes>
      </Main>
    </div>
  );
};
