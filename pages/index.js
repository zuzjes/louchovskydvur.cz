import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled, { createGlobalStyle } from "styled-components";
import { Nav, Navbar, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import LouchovLogo from "../assets/louchov_logo.svg";

const GlobalStyle = createGlobalStyle`
  body {
    /* font-size: 1em; */
    /* font-family: "Work Sans", sans-serif; */
  }
`;
const A = styled.a`
  color: #D24423;
  cursor: pointer;
  :hover {
    color: #D24423;
  }
`;

const LouchovImg = styled.img`
    position: relative;
    margin-top: -3%;
    margin-left: 24em;
    margin-right: 24em;
`;

const Header = styled.h1`
  font-size: 4em;
  padding: 1em 0 0.3em 0;
  color: white;
  text-align: center;
`;
const RedBackground = styled.div`
  background-color: #D24423;
`;
const ButtonWhiteBorder = styled.a`
  border: 1px solid white;
  font-size: 14px;
  padding: .5625em 1.2em;
  margin: 0.3em 0.6em 0.3em 0;
  color: white;
  text-decoration: none;
  display: inline-block;
  &:hover {
    border: 1px solid white;
    background-color: white;
    text-decoration: none;
    color: #D24423;
  }
`;
export default () => (
  <>
    <GlobalStyle />
    <Head>
      <title>Louchovský dvůr</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      /> */}
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <Navbar className="pt-3 pb-3">
      <A href="/">Louchovský dvůr</A>
      <Nav className="ml-auto">
        <A href="#contact">Kontakt</A>
      </Nav>
    </Navbar>
    <RedBackground>
      <Container className="text-center pb-5" >
        <LouchovImg src={LouchovLogo} />
        <Header>"Kde je kráva krávou"</Header>
        <ButtonWhiteBorder href="mailto:">chci masooo</ButtonWhiteBorder>
      </Container>
    </RedBackground>
    <Gauges gauges_site_id="xx" />
    <GoogleAnalytics google_analytics_site_id="xx" />
  </>
);
