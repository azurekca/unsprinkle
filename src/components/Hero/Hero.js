import React from "react";
import styled from "styled-components/macro";
import Picture from "../Picture";

const Hero = () => {
  return (
    <Wrapper>
      <HeroImage
        sources={[
          {
            type: "image/avif",
            srcset:
              "/images/hero-img.avif 1x, /images/hero-img@2x.avif 2x, /images/hero-img@3x.avif 3x",
          },
          {
            type: "image/jpg",
            srcset:
              "/images/hero-img.jpg 1x, /images/hero-img@2x.jpg 2x, /images/hero-img@3x.jpg 3x",
          },
        ]}
        src="/images/hero-img.jpg"
        alt="bright blue eyed young cat stares straight out of the screen"
      />
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled(Picture)`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
