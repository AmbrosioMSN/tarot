import { Cart, Detalhes } from "../pages/styled-pages"

export const Cards = (props: any) => {
  return (
    <Cart>
      <img src={props.imagem} alt="" />
      <h5>{props.nome}</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      <Detalhes>Detalhes</Detalhes>
    </Cart>
  );
};
