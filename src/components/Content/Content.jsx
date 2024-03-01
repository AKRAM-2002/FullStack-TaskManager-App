import styled from "styled-components"


export default function Home(){
    return <ContentStyled><main> <div></div></main></ContentStyled>
}

const ContentStyled = styled.div`
  position: relative;
  width: 80%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 80vh;
  padding: 1rem;
  font-size: 10px;
`
