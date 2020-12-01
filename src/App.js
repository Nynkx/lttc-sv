import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import logo from "./logo.svg";
import "./App.css";

import "./scss/style.scss";

const MainLayout = React.lazy(() => import("./containers/MainLayout"));

const loading = <h1>loading...</h1>;

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            name="Home"
            to="/"
            render={(props) => <MainLayout {...props}></MainLayout>}
          ></Route>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
