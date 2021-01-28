import { useState, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from "./constant/themes";
import { useDarkMode } from "./hooks/useDarkMode";
import {
  TopNavigationContainer,
  ContactModalContainer,
  BackdropContainer,
  MobileNavigationContainer
} from "./containers";
import { Routes } from "./constant/routes";
import { CSSTransition } from "react-transition-group";

const Homepage = lazy(() => import("./containers/homepage"));
const WorksPage = lazy(() => import("./containers/works"));
const WorkDetails = lazy(() => import("./containers/workDetails"));

function App() {
  const [theme, themeSwitch] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const routes = [
    {path: Routes.HOME, name: 'Home', Component: Homepage},
    {path: Routes.WORKS, name: 'WorksPage', Component: WorksPage},
    {path: Routes.WORK_DETAILS, name: 'WorkDetails', Component: WorkDetails},
  ];
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
        <TopNavigationContainer
            mobileNav={mobileNav}
            setMobileNav={setMobileNav}
            themeSwitch={themeSwitch}
        />
        <MobileNavigationContainer
            setMobileNav={setMobileNav}
        />
        <BackdropContainer>
          <ContactModalContainer />
        </BackdropContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(({path, name, Component}) => (
            <Route key={name} path={path} exact>
              {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames={"page"}
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
              )}
            </Route>
          ))}
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
