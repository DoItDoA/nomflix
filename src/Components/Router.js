import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home/index";
import TV from "Routes/TV/index";
import Search from "Routes/Search/index";
import Detail from "Routes/Detail/index";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
        {/* url경로를 아무거나 입력시 /로 이동시킨다 */}
      </Switch>
      {/* Route를 통해 경로 이동시 위에서 아래로 하나씩 훑어보고 일치할 때마다 이동한다. Switch는 단 한번만 이동하게 한다 */}
    </BrowserRouter>
  );
}

export default Router;
