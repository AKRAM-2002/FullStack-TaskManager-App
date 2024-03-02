import styled from "styled-components"
import MotivationalQuote from "../MotivationalComponent"

export default function Home(){
    return (
      <>
      <HomeStyled>
          <MotivationalQuote/>
          
          <ContentStyled>
          
          </ContentStyled>
      </HomeStyled>
      </>
    )
}



const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 1px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 80vh;
  padding: 1rem;
  font-size: 10px;
`

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 80%;
  gap: 0.7em;
`
