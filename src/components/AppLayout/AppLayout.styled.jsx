import styled from 'styled-components';

export const AppLayoutDiv = styled.div`
  margin: 0 auto;
  padding: 0 ${p => p.theme.spasing(5)}; 
  width: 100%;
  max-width: 1440px;

  @media screen and (min-width: 768px) {
    padding: 0 ${p => p.theme.spasing(8)}; 
  }
`;

 