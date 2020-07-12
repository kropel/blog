import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import IndexPage from "./pages";
import PostPage from "./pages/post";
import AdminPage from "./pages/admin";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/admin" exact component={AdminPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
