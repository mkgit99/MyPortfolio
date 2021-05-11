import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  //something
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageAnim = styled.img`
  @media screen and (max-width: 1440px) {
    transform: translate(60%, 0%) scale(0.8);
  }
  @media screen and (max-width: 768px) {
    transform: translate(-8%, 0%) scale(0.7);
  }
  @media screen and (max-width: 480px) {
    transform: translate(-25%, -10%) scale(0.4);
  }
`;
