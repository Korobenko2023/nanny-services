import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.header`
  position: relative;
  max-width: 1376px;
`;

export const HeaderContainer = styled.div`
  position: absolute; 
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${p => p.theme.spasing(5)};
  border-bottom: 1px solid;
  border-color: ${(p) => p.theme.colors.border};

  @media screen and (min-width: 1024px) {
    padding: ${p => p.theme.spasing(5)} ${p => p.theme.spasing(24)};
  }
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
  gap: ${p => p.theme.spasing(24)};

  @media screen and (max-width: 1024px) {
    gap: ${p => p.theme.spasing(12)};
  }

  @media screen and (max-width: 768px) {
    gap: ${p => p.theme.spasing(5)};
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spasing(10)};
`;

export const HeaderLink = styled(NavLink)`
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 4px;

   &.active::after {
    content: " ";
    position: absolute;
    left: 50%;
    bottom: -10px;   
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background-color: ${(p) => p.theme.colors.white};
    border-radius: ${(p) => p.theme.radii.xl};
    transition: transform ${(p) => p.theme.transition};
  }  
`;

export const ButtonWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spasing(2)};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogInButton = styled.button`
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.border};
  background-color: transparent;
  border-radius: ${(p) => p.theme.radii.lg};
  padding: ${p => p.theme.spasing(3)} ${p => p.theme.spasing(9)};
  max-width: 124px;
  height: 48px;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  transition:  color ${(p) => p.theme.transition},
    background-color ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.blue};
    background-color: ${(p) => p.theme.colors.white};
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 1;
    padding: ${p => p.theme.spasing(3)} ${p => p.theme.spasing(9)};
  }

  @media screen and (max-width: 720px) {
    padding: ${p => p.theme.spasing(3)} ${p => p.theme.spasing(6)};
  }
`;

export const RegisterButton = styled.button`
  border: 1px solid;
  border-color: transparent;
  background-color: ${(p) => p.theme.colors.blue};
  border-radius: ${(p) => p.theme.radii.lg};
  padding: ${p => p.theme.spasing(3)} ${p => p.theme.spasing(9)};
  max-width: 168px;
  height: 48px;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  transition:  color 250ms ${(p) => p.theme.transition},
    background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.blue};
    background-color: ${(p) => p.theme.colors.white};
  }
`;





