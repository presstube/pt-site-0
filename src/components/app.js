
import React from "react"

import Nav from "./Nav"
import FullscreenCJSUnit from "./FullscreenCJSUnit"

export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node
  }

  render () {
    return (
      <div>
        {this.props.children}
        <Nav />
        <FullscreenCJSUnit name="aunit"/>
      </div>
    )
  }
}
