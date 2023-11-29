import React from 'react';
import styled from "styled-components";
import Navbar from './Navbar';
import Card from './Card';

function Home() {
  return (
    <Container>
        <Navbar />
        <Banner>
        <img src="./banner.jpg" alt="" />
        <img src="./mobile_banner.jpg" alt="" />
      </Banner>

      <Main>
       <Card 
       id={1}
        image={"https://m.media-amazon.com/images/I/61w+WVm67yL._SX679_.jpg"}
       price={249}
       rating={3}
       title={"Matrix Kids Edition Digital Watch"}
       />

       <Card id={2} image={"https://m.media-amazon.com/images/I/312dp6ZLIQL._AC_SR400,600_AGcontrast_.jpg"}
       price={9499}
       rating={4.5}
       title={"Nokia C32 with 50MP  "}/>

       <Card id={3} image={"https://m.media-amazon.com/images/I/41VSH+kNLOL._SY300_SX300_.jpg"}
       price={39990}
       rating={4}
       title={"Echo Dot"}/>

       <Card id={4} image={"https://m.media-amazon.com/images/I/71FGRi7gXzL._SX450_.jpg"}
       price={2500}
       rating={3}
       title={"Hisense 139 cm (55 inches) "}/>

       <Card id={5} image={"https://m.media-amazon.com/images/I/61SUj2aKoEL._SX522_.jpg"}
       price={20999}
       rating={4.5}
       title={"Apple AirPods Pro (2nd Generation)"}/>

       <Card id={6} image={"https://m.media-amazon.com/images/I/61ssa5-V61L._SY879_.jpg"}
       price={2500}
       rating={3}
       title={"VASTRAMAY Men's Cotton "}/>

       <Card id={7} image={"https://m.media-amazon.com/images/I/412lio2M4oL._SX300_SY300_QL70_FMwebp_.jpg"}
       price={29900}
       rating={4.5}
       title={"The Sleep Company SmartGRID Orthopedic Pro - Doctor"}/>

       <Card id={8} image={"https://m.media-amazon.com/images/I/71JbxWeTvZL._AC_SY175_.jpg"}
       price={349}
       rating={4}
       title={"Boult Audio BassBuds X1 in-Ear Wired Earphones with 10mm )"}/>

            
      </Main>
       
      
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;
const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Home;