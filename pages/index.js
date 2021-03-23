import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled, { createGlobalStyle } from "styled-components";
import { Nav, Navbar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.5em;
  }
`;
const Container = styled.div`
  padding: 0 2em;
  font-family: "IBM Plex Sans", sans-serif;
  max-width: 800px;
  @media (max-width: 600px) {
    padding: 0 1em;
  }
`;
const Header = styled.h1`
  font-size: 2.8em;
  margin-block-end: 0.2em;
`;


export default () => (
  <>
    <GlobalStyle />
    <Head>
      <title>louchovsky dvur</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Louchov</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container>

      <Header>Louchovsky dvur</Header>

    </Container>

    <Gauges gauges_site_id="xx" />
    <GoogleAnalytics google_analytics_site_id="xx" />
  </>
);
