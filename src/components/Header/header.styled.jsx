import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.header`
 position: relative;
  max-width: 1376px;
  /* top: 0;
  left: 0;
  position: absolute;
  z-index: 2; */
`;

export const HeaderContainer = styled.div`
  z-index: 2;
  /* top: 0;
  right: auto;
  left: auto; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${p => p.theme.spasing(5)};
  border-bottom: 1px solid;
  border-color: ${(p) => p.theme.colors.border};
  background-color: ${(p) => p.theme.colors.blue};
  position: absolute; 

  @media screen and (min-width: 1024px) {
    padding: 20px 96px;
  }
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spasing(5)} ${p => p.theme.spasing(24)};
  border-bottom: 1px solid;
  border-color: ${(p) => p.theme.colors.border}; */
`;

export const HeaderLogo = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};

   @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 92px;

  @media screen and (max-width: 1024px) {
    gap: 48px;
  }

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spasing(10)};
`;

export const HeaderLink = styled(Link)`
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
`;

