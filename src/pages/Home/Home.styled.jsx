import styled from 'styled-components';
import home1x from '../../images/home1x.png';
import home2x from '../../images/home2x.png';

export const HomeDiv = styled.div`
  position: relative;
  /* max-width: 1376px; */
  width: 100%;
  height: auto;
  border-radius: ${(p) => p.theme.radii.lg};
  background-color: ${(p) => p.theme.colors.blue};
  background-image: image-set(url(${home1x}) 1x, url(${home2x}) 2x);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  padding: ${p => p.theme.spasing(8)};



  /* background-repeat: no-repeat;
  background-position: top;
  background-size: cover;  */

 
`;
