import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from "./constant/themes";
import { useDarkMode } from "./hooks/useDarkMode";
import {
  Homepage,
  WorksPage,
  WorkDetails,
} from './pages';
import {
  TopNavigationContainer,
  ContactModalContainer,
  BackdropContainer
} from "./containers";
import { Routes } from "./constant/routes";

function App() {
  const [theme, themeSwitch] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
        <TopNavigationContainer themeSwitch={themeSwitch} />
        <BackdropContainer>
          <ContactModalContainer />
        </BackdropContainer>
        <Switch>
          <Route exact path={Routes.HOME}  component={ Homepage } />
          <Route exact path={Routes.WORKS}  component={ WorksPage } />
          <Route exact path={Routes.WORK_DETAILS}  component={ WorkDetails } />
        </Switch>
    </ThemeProvider>
  );
}

export default App;
