import React from "react";
import App from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { Nav, Navbar, Row, Col, Container } from "react-bootstrap"
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "bootstrap/dist/css/bootstrap.min.css"

const GlobalStyle = createGlobalStyle`
  body {
    p, a, li {
      font-family: "Work Sans",sans-serif;
      line-height: 1.6em;
      font-weight: 400;
      font-size: .88rem;
    }
    h3, h1 {
      font-family: Hatton;
    }
  }
`;
const FooterHeader = styled.h3`
  font-size: 3em;
  color: #D24423;
  padding-bottom: 0.5em;
  font-family: Hatton;
`;

const A = styled.a`
  color: #D24423;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #D24423;
  }
`;
const NavLink = styled.a`
  color: #D24423;
  font-size: .88rem;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #D24423;
  }
`;

const SectionText = styled.p`
  color: #D24423;
`;

const LightGreenBackground = styled.div`
  background-color: #A0D2B1;
  padding: 3em;
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Head>
          <title>Louchovský dvůr</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="/hatton/hatton.css" rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400&display=swap" rel="stylesheet" />
        </Head>
        <Navbar className="pt-3 pb-4">
          <NavLink href="/">Louchovský dvůr</NavLink>
          <Nav className="ml-auto">
            <NavLink href="#contact">Kontakt</NavLink>
          </Nav>
        </Navbar>
        <Component {...pageProps} />
        <LightGreenBackground>
          <Container>
            <FooterHeader className="text-center">Erik Rudický</FooterHeader>
            <SectionText className="text-center">
              Louchov<br />
              <A href="tel:+420775159372">+420 775 159 372<br /></A>
              <A href="mailto:hi@louchovskydvur.cz">hi@louchovskydvur.cz</A>
            </SectionText>
            <Row>
              <Col md={6} sm={12}>
                <SectionText>
                  Jak nakoupit / <A href="/obchodni-podminky">Obchodní podmínky</A> / <A href="/ochrana-osobnich-udaju">Ochrana osobních údajů</A>
                </SectionText>
              </Col>
              <Col md={6} sm={12}>
                <SectionText className="text-right">
                  <A href="https://www.facebook.com/louchovsky" className="p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </A>
                  <A href="https://instagram.com/louchovskydvur" className="p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </A>
                </SectionText>
              </Col>
            </Row>
          </Container>
        </LightGreenBackground>

        <Gauges gauges_site_id="xx" />
        <GoogleAnalytics google_analytics_site_id="xx" />
      </>
    );
  }
}

export default MyApp;