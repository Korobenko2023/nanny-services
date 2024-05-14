import styled from 'styled-components';
import home1x from '../../images/home1x.png';
import home2x from '../../images/home2x.png';
import { Link } from 'react-router-dom';

export const HomeDiv = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: ${(p) => p.theme.radii.lg};
  background-color: ${(p) => p.theme.colors.blue};
  background-image: image-set(url(${home1x}) 1x, url(${home2x}) 2x);
  background-repeat: no-repeat;
  background-position: right;
  padding: 0 ${p => p.theme.spasing(24)};

  @media screen and (max-width: 1024px) {
    padding: 0 ${p => p.theme.spasing(5)};
  }
`;

export const TextDiv = styled.div`
  height: 736px;
`;

export const TitleHome = styled.h1`
  max-width: 517px;
  font-weight: 500;
  font-size: 70px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.colors.white};  
  margin-bottom: ${p => p.theme.spasing(7)};
  padding-top: ${p => p.theme.spasing(71)}; 

  @media screen and (max-width: 1264px) {
    padding-top: ${p => p.theme.spasing(43)};
    font-size: 65px;
  }

  @media screen and (max-width: 720px) {
    font-size: 45px;
  }
`;

export const TextHome = styled.p`
  max-width: 517px;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: ${p => p.theme.spasing(16)}; 

  @media screen and (max-width: 420px) {
    margin-bottom: ${p => p.theme.spasing(9)}; 
  }
`;

export const LinkHome = styled(Link)`
  position: relative;
  display: inline-block;
  width: 231px;
  height: 60px;
  padding: ${p => p.theme.spasing(4)} ${p => p.theme.spasing(12)};
  gap: 18px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.border};
  border-radius: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
`;

export const HomeSvg = styled.svg`
  position: absolute;
  top: 22px;
  right: 45px;
  width: 15px;
  height: 17px;
  transition: transform 250ms ${(p) => p.theme.transition};
`;

export const StatBlock = styled.div`
  position: absolute;
  display: flex;
  gap: ${p => p.theme.spasing(4)}; 
  bottom: 50px;
  right: 50px;
  width: 284px;
  height: 118px;
  padding: ${p => p.theme.spasing(8)}; 
  border-radius: 20px;
  background-color: ${(p) => p.theme.colors.white};

  @media screen and (max-width: 1024px) {
    bottom: 30px;
    right: 30px;
  }

  @media screen and (max-width: 420px) {
    width: 214px;
    height: 100px;
    padding: ${p => p.theme.spasing(8)}; 
  }
`;

export const CheckBlock = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background-color: ${(p) => p.theme.colors.blue};

  @media screen and (max-width: 420px) {
    width: 44px;
    height: 44px;
  }
`;

export const StatSvg = styled.svg`
  width: 30px;
  height: 30px;
`;

export const StatText = styled.p`
  margin-bottom: ${p => p.theme.spasing(1)}; 
  font-weight: 400;
  font-size: 16px;
  letter-spacing: normal;
  color: ${(p) => p.theme.colors.textGray};
`;

export const StatCount = styled.p`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: normal;
  line-height: 1;
  color: ${(p) => p.theme.colors.textBlack};
`;




  
