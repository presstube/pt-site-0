
import React from "react"

import Nav from "./Nav"

export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node
  }

  render () {
    return (
      <div>
        {this.props.children}
        <Nav />
      </div>
    )
  }
}
