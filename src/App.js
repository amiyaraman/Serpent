import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  padding: 35px;

  min-height: 100vh;

  background-image: url(image/serpentbackgroundimage.png);
  background-repeat: no-repeat;
`;
function App() {
  return (
    <AppContainer>
      <AccountBox />
      
    </AppContainer>
  );
}

export default App;
