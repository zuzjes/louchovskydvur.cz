import React from "react"
import { Image, Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import erik_image from "../assets/erik-kruh.png";

const Header = styled.h3`
    font-size: 3em;
    color: #D24423;
    padding-bottom: 0.5em;
    font-family: Hatton;
`;
const SectionText = styled.p`
  color: #D24423;
`;

const A = styled.a`
  color: #D24423;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #D24423;
  }
`;

const ErikRudicky = () => (
    <Container>
        <Row className="align-items-center">
            <Col md={6}>
                <Image src={erik_image} fluid className="p-5 mb-5" />
            </Col>
            <Col md={6}>
                <Header>Erik Rudický</Header>
                <SectionText>
                    Louchov<br />
                    <A href="tel:+420775159372">+420 775 159 372<br /></A>
                    <A href="mailto:hi@louchovskydvur.cz">hi@louchovskydvur.cz</A>
                </SectionText>
            </Col>
        </Row>
    </Container>
);
export default ErikRudicky;