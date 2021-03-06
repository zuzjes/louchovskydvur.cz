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
        <Header>"Kde je kr??va kr??vou"</Header>
        <ButtonWhiteBorder href="mailto:">chci masooo</ButtonWhiteBorder>
      </Container>
    </RedBackground>

    <TextWithImageLeft header="Jak?? je na??e maso?" src={Louchov1}>
      Tr??vou krmen??, za sucha sta??en??, vakuov?? balen??, chu??ov?? nedosti??n??.<br /><br />
      Na na??e volky a jalovi??ky nesp??ch??me, ka??d?? kus dost??v?? ??as p??irozen?? a pomalu vyr??st na pastvin??ch. Pr??v?? to m?? z??sadn?? vliv na chu?? n??mi nab??zen??ho masa.<br /><br />
      Dobytek nezav??r??me, zbyte??n?? nep??ev??????me, neo??kujeme, nestresujeme. V??t??ina na??ich zv????at str??v?? cel?? ??ivot na dohled kostela svat??ho Jakuba.
    </TextWithImageLeft>
    <TextWithImageRight header="Kde je kr??va kr??vou" src={Louchov2} >
      V??????me, ??e na??e kr??vy jsou vybaveny v????m co pot??ebuj?? k tomu, aby byly ??sp????n??mi kr??vami. Sna????me se jim ??ivot komplikovat co nejm??n??.<br /><br />
      ??lecht??n?? bezroh??ch zv????at nepodporujeme. Uleh??uje sice pr??ci ??lov??ku, ale zbavuje dobytek jeho p??irozenosti a bere mu jeho z??kladn?? sebeobrann?? n??stroj.
    </TextWithImageRight>

    <DarkGreenBackground>
      <Container className="text-center">
        <GreenHeader>Inovativn?? pastva</GreenHeader>
        <GreenText>
          P??vodn?? jsem si myslel, ??e chov krav je o dobytku. Potom mi do??lo, ??e chov krav je hlavn?? o p????i o travn?? porosty. Je??t?? pozd??ji jsem si uv??domil, ??e o ??sp??chu a ne??sp??chu rozhoduj?? p??dn?? organismy, okem neviditeln??.<br /><br />
          Aby p??da fungovala, vodu zadr??ovala a jej?? kvalita se zvy??ovala, je pot??eba, aby v n?? byl ??ivot, co?? se neslu??uje s pou????v??n??m herbicid?? nebo pesticid??. V??t??inu pr??ce na na??ich pastvin??ch zastanou kopyta krav.
        </GreenText>
      </Container>
    </DarkGreenBackground>

    <TextWithImageLeft noButton header="N??vrat vlk?? do Kru??n??ch hor" src={Louchov3}>
      Neboj se vlka nic. Ikdy?? je za humny, doslova.<br /><br />
      V??skyt vlk?? na hranici Louchovsk??ho dvora se potvrdil dva t??dny po p??evzet?? hospod????st??. Ka??d?? jaro p??ch?? zv???? na na??ich pastvin??ch ohromn?? ??kody. Pokud budou vlci likvidovat p??emno??enou zv????, budeme spolu vych??zet.<br /><br />
      Nev??????m ve schopnost ??lov??ka zachovat v p????rod?? rovnov??hu, n??vrat vlka je symbolem ozdravov??n?? kru??nohorsk?? p????rody.<br /><br />
      <ButtonRedBorder href="/o-vlcich-a-lidech">chci vlkaaa</ButtonRedBorder>
    </TextWithImageLeft>
    <TextWithImageRight header="Udr??itelnost" src={Louchov4} >
      Sedl??ci odjak??iva tvo??ili z??klad ekonomick??ho a spole??ensk??ho ??ivota ve sv??ch obc??ch.<br /><br />
      Zvl????t?? v Sudetech se tento p??esah vytr??c?? a z p??dy se ??asto st??v?? prost??edek pro ??erp??n?? dotac??.<br /><br />
      Doma????n (pod kter?? Louchov spad??) je zrovna p????kladem obce, kter?? sv?? pozemky pronaj??m?? ??et??zci firem kon????c??ch v da??ov??ch r??j??ch a osob??m dlouhodb?? obvin??n??m z kr??cen?? dan??.<br /><br />
      Proti t??mto praktik??ch ??? zat??m ne??sp????n?? ??? bojujeme.
    </TextWithImageRight>
  </>
);
