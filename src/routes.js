import React from "react";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import SelectedUsers from "./components/SelectedUsers"

const routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/users" />
      </Route>
      <Route path="/users" component={MainComponent} />
      <Route path="/selected-users" component={SelectedUsers} />
    </Switch>
  );
};

export default routes;