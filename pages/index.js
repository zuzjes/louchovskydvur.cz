import React from "react"

import styled from "styled-components";
import { Container, Image, Row, Col } from "react-bootstrap"
import LouchovLogo from "../assets/louchov_logo.svg";
import Louchov1 from "../assets/louchov1.jpeg";
import Louchov2 from "../assets/louchov2.jpeg";
import Louchov3 from "../assets/louchov3.png";
import Louchov4 from "../assets/louchov4.jpeg";
import H3red from "../components/H3red";
import TextRed from "../components/TextRed";

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
  @media (max-width: 844px) {
    display: none;
    margin-left: 0;
    margin-right: 0;
  }
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
const ContainerRight = styled(Container)`
  padding-right: 38px!important;
  @media (max-width: 844px) {
    padding-right: 15px!important;
  }
`;
const ContainerLeft = styled(Container)`
  padding-left: 38px!important;
  @media (max-width: 844px) {
    padding-left: 15px!important;
  }
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

const TextWithImageLeft = props => (
  <Row noGutters className="align-items-center">
    <Col md={6}>
      <Image src={props.src} fluid />
    </Col>
    <Col md={6} className="pb-4 pb-md-0">
      <ContainerLeft>
        <H3red className="pt-5 pt-md-0">{props.header}</H3red>
        <TextRed>
          {props.children}
        </TextRed>
        {!props.noButton &&
          <ButtonRedBorder href="mailto:hi@louchovskydvur.cz">chci masoooo</ButtonRedBorder>}
      </ContainerLeft>
    </Col>
  </Row>
)
const TextWithImageRight = props => (
  <Row noGutters className="align-items-center">
    <Col md={6} className="text-sm-left text-md-right pb-4 pb-md-0">
      <ContainerRight>
        <H3red className="pt-4 pt-md-0">{props.header}</H3red>
        <TextRed>
          {props.children}
        </TextRed>
        <ButtonRedBorder href="mailto:hi@louchovskydvur.cz">chci masoooo</ButtonRedBorder>
      </ContainerRight>
    </Col>
    <Col md={6} className="text-sm-left text-md-right">
        <Image src={props.src} fluid />
    </Col>
  </Row>
)

export default () => (
  <>
    <RedBackground>
      <Container className="text-center pb-5" >
        <span className="d-none d-sm-block">
          <LouchovImg src={LouchovLogo} />
        </span>
        <Header>"Kde je kráva krávou"</Header>
        <ButtonWhiteBorder href="mailto:hi@louchovskydvur.cz">chci masooo</ButtonWhiteBorder>
      </Container>
    </RedBackground>

    <TextWithImageLeft header="Jaké je naše maso?" src={Louchov1}>
      Trávou krmené, za sucha stařené, vakuově balené, chuťově nedostižné.<br /><br />
      Na naše volky a jalovičky nespěcháme, každý kus dostává čas přirozeně a pomalu vyrůst na pastvinách. Právě to má zásadní vliv na chuť námi nabízeného masa.<br /><br />
      Dobytek nezavíráme, zbytečně nepřevážíme, neočkujeme, nestresujeme. Většina našich zvířat stráví celý život na dohled kostela svatého Jakuba.
    </TextWithImageLeft>
    <TextWithImageRight header="Kde je kráva krávou" src={Louchov2} >
      Věříme, že naše krávy jsou vybaveny vším co potřebují k tomu, aby byly úspěšnými krávami. Snažíme se jim život komplikovat co nejméně.<br /><br />
      Šlechtění bezrohých zvířat nepodporujeme. Ulehčuje sice práci člověku, ale zbavuje dobytek jeho přirozenosti a bere mu jeho základní sebeobranný nástroj.
    </TextWithImageRight>

    <DarkGreenBackground>
      <Container className="text-center">
        <GreenHeader>Inovativní pastva</GreenHeader>
        <GreenText>
          Původně jsem si myslel, že chov krav je o dobytku. Potom mi došlo, že chov krav je hlavně o péči o travní porosty. Ještě později jsem si uvědomil, že o úspěchu a neúspěchu rozhodují půdní organismy, okem neviditelné.<br /><br />
          Aby půda fungovala, vodu zadržovala a její kvalita se zvyšovala, je potřeba, aby v ní byl život, což se neslučuje s používáním herbicidů nebo pesticidů. Většinu práce na našich pastvinách zastanou kopyta krav.
        </GreenText>
      </Container>
    </DarkGreenBackground>

    <TextWithImageLeft noButton header="Návrat vlků do Krušných hor" src={Louchov3}>
      Neboj se vlka nic. Ikdyž je za humny, doslova.<br /><br />
      Výskyt vlků na hranici Louchovského dvora se potvrdil dva týdny po převzetí hospodářstí. Každé jaro páchá zvěř na našich pastvinách ohromné škody. Pokud budou vlci likvidovat přemnoženou zvěř, budeme spolu vycházet.<br /><br />
      Nevěřím ve schopnost člověka zachovat v přírodě rovnováhu, návrat vlka je symbolem ozdravování krušnohorské přírody.<br /><br />
      <ButtonRedBorder href="/o-vlcich-a-lidech">chci vlkaaa</ButtonRedBorder>
    </TextWithImageLeft>
    <TextWithImageRight header="Udržitelnost" src={Louchov4} >
      Sedláci odjakživa tvořili základ ekonomického a společenského života ve svých obcích.<br /><br />
      Zvláště v Sudetech se tento přesah vytrácí a z půdy se často stává prostředek pro čerpání dotací.<br /><br />
      Domašín (pod který Louchov spadá) je zrovna příkladem obce, která své pozemky pronajímá řetězci firem končících v daňových rájích a osobám dlouhodbě obviněným z krácení daní.<br /><br />
      Proti těmto praktikách – zatím neúspěšně – bojujeme.
    </TextWithImageRight>
  </>
);
