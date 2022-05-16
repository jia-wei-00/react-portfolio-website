import React from "react";
import styled from "styled-components";
import CTA from "./CTA";
import ME from "../../assets/one-piece.png";
import HeaderSocial from "./HeaderSocial";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Header = () => {
  return (
    <Head>
      <HeaderContainer className="container">
        <Flip left appear>
          <h5>Hello I'm</h5>
          <h1>Leong Jia Wei</h1>
          <h5 className="text-light">Web Developer</h5>
        </Flip>
        <Fade bottom>
          <CTA />
        </Fade>

        <HeaderSocial />
        <Zoom>
          <Me>
            <img src={ME} alt="Me" />
          </Me>
        </Zoom>
        <ScrollDown href="#contact">Scroll Down</ScrollDown>
      </HeaderContainer>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  height: 100vh;
  padding-top: 7.6rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: 100vh;
  }

  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

const Me = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 40rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5.5rem 1.5rem 1.5rem 1.5rem;
`;

const ScrollDown = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 200;
  font-size: 0.9rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
