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
import { Transition } from "react-transition-group";

function App() {
  const [theme, themeSwitch] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const routes = [
    {path: Routes.HOME, name: 'Home', Component: Homepage},
    {path: Routes.WORKS, name: 'WorksPage', Component: WorksPage},
    {path: Routes.WORK_DETAILS, name: 'WorkDetails', Component: WorkDetails},
  ];

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
        <TopNavigationContainer themeSwitch={themeSwitch} />
        <BackdropContainer>
          <ContactModalContainer />
        </BackdropContainer>
        <Switch>
          {routes.map(({path, name, Component}) => (
            <Route key={name} path={path} exact>
              {({ match }) => (
                  <Transition
                    in={match != null}
                    timeout={300}
                    className={"page"}
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </Transition>
              )}
            </Route>
          ))}
        </Switch>
    </ThemeProvider>
  );
}

export default App;
