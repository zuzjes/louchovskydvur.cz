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
const CardLouchov = styled(Card)`
    width: 30%; 
    border-color: #D24423; 
    border-radius: 0;
    @media (max-width: 1025px) {
        width: 50%;
        text-align: left;

    }
    @media (max-width: 850px) {
        width: 60%;
        text-align: -webkit-center;

    }
    @media (max-width: 650px) {
        width: 100%;
        text-align: -webkit-center;
    }
`;
const Eshop = () => (
    <Container className="pb-5">
        <CardLouchov className="mb-5">
            <Card.Img variant="top" src={louchovske_maso} fluid />
            <Card.Body>
                <Header>Louchovský balík masa 10 kg</Header>
                <TextRed>
                    Prvotřídní maso z našich mladých jalovic a volků. Od každého kousek.<br />
                    <b>Cena:2 900 Kč</b>
                </TextRed>
                <ButtonRedBorder href="mailto:hi@louchovskydvur.cz">chci masooo</ButtonRedBorder>
            </Card.Body>
        </CardLouchov>
    </Container>
);
export default Eshop;