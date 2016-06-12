
import React from "react"

import Nav from "./Nav"

export default class App extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
        <Nav name="nav" maxWidth={600}/>
      </div>
    )
  }
}
