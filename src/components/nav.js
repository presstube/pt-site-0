
import React from "react"

import Brand from "./brand"

export default class Nav extends React.Component {
  render () {
    return (
      <div
        style={{
          margin: 10
        }}
      >
        <Brand name="brand" />
      </div>
    )
  }
}
