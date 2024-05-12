import { HeaderContainer, HeaderLink, HeaderLogo, HeaderNav, LinkWrapper, NavWrapper } from "./header.styled";

export const Header = () => {
  return (
      <HeaderNav>          
          <HeaderContainer>
              <HeaderLogo to="/">Nanny.Services</HeaderLogo>
              <LinkWrapper>
                  <NavWrapper>
                      <HeaderLink to="/">Home</HeaderLink>
                      <HeaderLink to="/nannies">Nannies</HeaderLink>
                  </NavWrapper>
                  <ul>
                      <li>
                          <button type="button">Log In</button>
                      </li>
                      <li>
                          <button type="button">Registration</button>                          
                      </li>
                  </ul>
              </LinkWrapper>  
          </HeaderContainer>  
      </HeaderNav>
    );
};
    
    