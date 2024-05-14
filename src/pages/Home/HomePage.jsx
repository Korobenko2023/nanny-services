import { CheckBlock, HomeDiv, HomeSvg, LinkHome, StatBlock, StatCount, StatSvg, StatText, TextDiv, TextHome, TitleHome } from "./Home.styled";
import sprite from "../../images/sprite.svg";
    
export default function Home() {
    return (   
        <HomeDiv>
            <TextDiv>
                <TitleHome>Make Life Easier for the Family:</TitleHome>
                <TextHome>Find Babysitters Online for All Occasions</TextHome>
                <LinkHome to="/nannies">
                    Get started
                    <HomeSvg>
                        <use href={`${sprite}#Arrow-up`} />
                    </HomeSvg>
                </LinkHome>                     
            </TextDiv>
            <StatBlock>
              <CheckBlock>
                <StatSvg>
                  <use href={`${sprite}#check`}/>
                </StatSvg>
              </CheckBlock>
              <div>
                <StatText>Experienced nannies</StatText>
                <StatCount>15,000</StatCount>
              </div>
            </StatBlock>
        </HomeDiv>      
    );    
}
    