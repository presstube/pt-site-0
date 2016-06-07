import React from "react"
import { render } from "react-dom"
import { Router, Route, hashHistory } from "react-router"

import App from "./components/app"
import Sketchbook from "./components/sketchbook"
import Yes from "./components/yes"

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/sketchbook" component={Sketchbook}/>
      <Route path="/yes" component={Yes}/>
    </Route>
  </Router>
), document.getElementById("app"))
