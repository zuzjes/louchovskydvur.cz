import React from "react"
import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled, { createGlobalStyle } from "styled-components";
import { Nav, Navbar, Container, Image, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import LouchovLogo from "../assets/louchov_logo.svg";
import Louchov1 from "../assets/louchov1.jpeg";
import Louchov2 from "../assets/louchov2.jpeg";
import Louchov3 from "../assets/louchov3.png";
import Louchov4 from "../assets/louchov4.jpeg";

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

const SectionHeader = styled.h3`
  font-size: 3em;
  color: #D24423;
  padding-bottom: 1em;
`;

const Section = styled.div`
  padding-top: 7em;
`;

const SectionText = styled.p`
  color: #D24423;
`;
const RedBackground = styled.div`
  background-color: #D24423;
`;
const DarkGreenBackground = styled.div`
  background-color: #004133;
  padding: 3em;
`;
const GreenHeader = styled.h3`
  color: #A0D2B1;
`;
const GreenText = styled.p`
  color: #A0D2B1;
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

const TextSection = props => (
  <Section>
    <Container>
      <SectionHeader>{props.header}</SectionHeader>
      <SectionText>
        {props.children}
      </SectionText>
      <ButtonRedBorder href="mailto:">chci masoooo</ButtonRedBorder>
    </Container>
  </Section>
)
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
    <Row>
      <Col md={6}>
        <Image src={Louchov1} fluid />
      </Col>
      <Col md={6}>
        <TextSection header="Jaké je naše maso?">
          Trávou krmené, za sucha stařené, vakuově balené, chuťově nedostižné.<br /><br />
          Na naše volky a jalovičky nespěcháme, každý kus dostává čas přirozeně a pomalu vyrůst na pastvinách. Právě to má zásadní vliv na chuť námi nabízeného masa.<br /><br />
          Dobytek nezavíráme, zbytečně nepřevážíme, neočkujeme, nestresujeme. Většina našich zvířat stráví celý život na dohled kostela svatého Jakuba.
        </TextSection>
      </Col>
    </Row>
    <Row>
      <Col md={6} className="text-right">
        <TextSection header="Kde je kráva krávou" >
          Věříme, že naše krávy jsou vybaveny vším co potřebují k tomu, aby byly úspěšnými krávami. Snažíme se jim život komplikovat co nejméně.<br /><br />
          Základem našeho stáda jsou huňaté krávy Salers z francouzské Normandie a Cantalu. Jsou známy pro své mateřské pudy a ostré rohy, ideální kombinací do vlčí oblasti v horách.<br /><br />
          Šlechtění bezrohých zvířat nepodporujeme. Ulehčuje sice práci člověku, ale zbavuje dobytek jeho přirozenosti a bere mu jeho základní sebeobranný nástroj.
        </TextSection>
      </Col>
      <Col md={6}>
        <Image src={Louchov2} fluid />
      </Col>
    </Row>
    <DarkGreenBackground>
      <Container className="text-center">
        <GreenHeader>Inovativní pastva</GreenHeader>
        <GreenText>
          Původně jsem si myslel, že chov krav je o dobytku. Potom mi došlo, že chov krav je hlavně o péči o travní porosty. Ještě později jsem si uvědomil, že o úspěchu a neúspěchu rozhodují půdní organismy, okem neviditelné.<br /><br />
          Aby půda fungovala, vodu zadržovala a její kvalita se zvyšovala, je potřeba, aby v ní byl život, což se neslučuje s používáním herbicidů nebo pesticidů. Většinu práce na našich pastvinách zastanou kopyta krav.
        </GreenText>
      </Container>
    </DarkGreenBackground>
    <Row>
      <Col md={6}>
        <Image src={Louchov3} fluid />
      </Col>
      <Col md={6}>
        <TextSection header="Návrat vlků do Krušných hor">
          Neboj se vlka nic. Ikdyž je za humny, doslova.<br /><br />
          Výskyt vlků na hranici Louchovského dvora se potvrdil dva týdny po převzetí hospodářstí. Každé jaro páchá zvěř na našich pastvinách ohromné škody. Pokud budou vlci likvidovat přemnoženou zvěř, budeme spolu vycházet.<br /><br />
          Nevěřím ve schopnost člověka zachovat v přírodě rovnováhu, návrat vlka je symbolem ozdravování krušnohorské přírody.<br /><br />
        </TextSection>
      </Col>
    </Row>
    <Row>
      <Col md={6} className="text-right">
        <TextSection header="Udržitelnost" >
          Sedláci odjakživa tvořili základ ekonomického a společenského života ve svých obcích.<br /><br />
          Zvláště v Sudetech se tento přesah vytrácí a z půdy se často stává prostředek pro čerpání dotací.<br /><br />
          Domašín (pod který Louchov spadá) je zrovna příkladem obce, která své pozemky pronajímá řetězci firem končících v daňových rájích a osobám dlouhodbě obviněným z krácení daní.<br /><br />
          Proti těmto praktikách – zatím neúspěšně – bojujeme.
        </TextSection>
      </Col>
      <Col md={6}>
        <Image src={Louchov4} fluid />
      </Col>
    </Row>
    <Gauges gauges_site_id="xx" />
    <GoogleAnalytics google_analytics_site_id="xx" />
  </>
);
