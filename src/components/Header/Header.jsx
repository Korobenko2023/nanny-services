import { ButtonWrapper, HeaderContainer, HeaderLink, HeaderLogo, HeaderNav, LinkWrapper, LogInButton, NavWrapper, RegisterButton } from "./Header.styled";

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
                  <ButtonWrapper>
                      <li>
                          <LogInButton type="button">Log In</LogInButton>
                      </li>
                      <li>
                          <RegisterButton type="button">Registration</RegisterButton>                          
                      </li>
                  </ButtonWrapper>
              </LinkWrapper>  
          </HeaderContainer>  
      </HeaderNav>
    );
};
    
    