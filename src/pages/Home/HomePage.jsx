import { HomeDiv, LinkHome, TextDiv, TextHome, TitleHome } from "./Home.styled";

export default function Home() {
    return (   
        <HomeDiv>
            <TextDiv>
                <TitleHome>Make Life Easier for the Family:</TitleHome>
                <TextHome>Find Babysitters Online for All Occasions</TextHome>
                <LinkHome to="/nannies">
                    Get started
                </LinkHome>   
                     
            </TextDiv>
        </HomeDiv>      
    );    
}
    