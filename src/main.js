import React from "react"
import { render } from "react-dom"
import { Router, Route, hashHistory } from "react-router"

import App from "./components/App"
import Home from "./components/pages/Home"
import Sketchbook from "./components/pages/Sketchbook"
import Wall from "./components/pages/Wall"
import BoiledDrawings from "./components/pages/BoiledDrawings"
import Mala from "./components/pages/Mala"
import Yes from "./components/pages/Yes"

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}/>
      <Route path="/sketchbook" component={Sketchbook}/>
      <Route path="/wall" component={Wall}/>
      <Route path="/boiled-drawings" component={BoiledDrawings}/>
      <Route path="/mala" component={Mala}/>
      <Route path="/yes" component={Yes}/>
    </Route>
  </Router>
), document.getElementById("app"))
