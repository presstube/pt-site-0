
import React from "react"

import Nav from "./nav"

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}
