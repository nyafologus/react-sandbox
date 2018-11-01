import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/carousel" component={CarouselComponent} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
