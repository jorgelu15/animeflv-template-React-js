import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "./fontawesome.css";
import Routes from "./helpers/configRouting";

const Home = lazy(() => import("./pages/Home"));
const Directorio = lazy(() => import("./pages/Directorio"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Switch>
          <Route path={Routes.home} component={Home} exact />
          <Route path={Routes.directorio} component={Directorio} exact />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;

