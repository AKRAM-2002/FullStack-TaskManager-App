import styled from "styled-components"
import MotivationalQuote from "../MotivationalComponent"
import Tasks from "../../pages/Tasks/Tasks"
import { useGlobalState } from "../../context/globalProvider";

export default function Home(){
  const { theme } = useGlobalState(); 
    return (
      <>
      <HomeStyled>
          <MotivationalQuote/>
          <ContentStyled theme={theme}>
            <Tasks/>
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
  background-color: ${(props) => props.theme.borderColor2};
  border: 1px solid ${(props) => props.theme.borderColor2};
  border-opacity: 5;
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
