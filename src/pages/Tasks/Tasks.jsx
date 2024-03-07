import styled from "styled-components"
import { useGlobalState } from "../../context/globalProvider"
import CreateContent from "../../components/Modals/CreateContent";

const Tasks = () => {
  const { theme} = useGlobalState();

  return (
    <>
    <TaskStyled theme={theme}>
      <h1>Tasks</h1>
     
    </TaskStyled>
     <CreateContent/>
    </>
  )
}


const TaskStyled = styled.div`
  h1{
    color: ${(props) => props.theme.colorText};
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    padding: 1.3rem;
    border-radius: 1rem;
    overflow-y : auto;
    height: 100%;
    &::-webkit-scrollbar{
      width: 0.5rem;
    }
  }

`
export default Tasks