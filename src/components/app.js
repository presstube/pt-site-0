
import React from "react"

import Nav from "./nav"

export default class App extends React.Component {
  render () {
    return (
      <div
        style={{
          // width: window.innerWidth,
          // height: window.innerHeight,
          // backgroundColor: "pink"
        }}>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}
