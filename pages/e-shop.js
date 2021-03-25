import React from "react"
import { Container, Card } from "react-bootstrap"
import styled from "styled-components";
import TextRed from "../components/TextRed";
import louchovske_maso from "../assets/louchovskemaso.jpeg";

const Header = styled.h3`
    font-size: 1.4em;
    font-weight: bold;
    color: #D24423;
    padding: 1em 0;
`;

const ButtonRedBorder = styled.a`
  border: 1px solid #D24423;
  font-size: 14px;
  padding: .5625em 1.2em;
  margin: 0.3em 0.6em 0.3em 0;
  color: #D24423;
  text-decoration: none;
  display: inline-block;
  &:hover {
    border: 1px solid #D24423;
    background-color: #D24423;
    text-decoration: none;
    color: white;
  }
`;
const Eshop = () => (
    <Container>
        <Card style={{ width: '18rem', borderColor: "#D24423", borderRadius: "0" }} className="mb-5">
            <Card.Img variant="top" src={louchovske_maso} fluid />
            <Card.Body>
                <Header>Louchovský balík masa 10 kg</Header>
                <TextRed>
                    Prvotřídní maso z našich mladých jalovic a volků. Od každého kousek.<br />
                    <b>Cena:2 900 Kč</b>
                </TextRed>
                <ButtonRedBorder href="mailto:hi@louchovskydvur.cz">chci masooo</ButtonRedBorder>
            </Card.Body>
        </Card>
    </Container>
);
export default Eshop;