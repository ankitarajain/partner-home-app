import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import HeaderContainer from "./modules/HeaderContainer";
import SideMenuContainer from "./modules/SideMenuContainer";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

const Wrapper = styled.div``;
const Main = styled.div``;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <HeaderContainer />
          <SideMenuContainer />
          <Main></Main>
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
