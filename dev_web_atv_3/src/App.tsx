import { Provedor } from "./contexts/Contextibge";
import Principal from "./Pages/principal";
import "./index.css";
import Block from "./components/Block";
import styled from "styled-components";
import Title from "./components/Title";
import Item from "./components/item";

export default function App() {
 return (
  <WrapperSld>
   <Block>
    <Title>Regiões</Title>
    <Item>Centro-Oeste</Item>
    <Item>Norte</Item>
   </Block>
   <Block>
    <Title>Estados</Title>
   </Block>
   <Block>
    <Title>Mesoregião</Title>
   </Block>
  </WrapperSld>
 );
}

const WrapperSld = styled.div`
 display:flex;
 backgroundcolor:yellow;
`;