import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled, { createGlobalStyle } from "styled-components";

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
const Technologies = styled.b`
  font-size: 1.7em;
`;
const A = styled.a`
  color: #088958;
`;
const Button = styled.a`
  border: 2px solid #088958;
  padding: 0.15em 0.4em;
  margin: 0.3em 0.6em 0.3em 0;
  color: #088958;
  text-decoration: none;
  display: inline-block;
  &:hover {
    border: 2px solid #088958;
    padding: 0.15em 0.4em;
    background-color: #088958;
    color: white;
  }
`;
Button.defaultProps = {
  target: "_blank"
};

export default () => {
  return (
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
      <Container>
        <Header>Louchovsky dvur</Header>
        
      </Container>

      <Gauges gauges_site_id="xx" />
      <GoogleAnalytics google_analytics_site_id="xx" />
    </>
  );
};
