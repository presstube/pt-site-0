
import React from "react"

import Brand from "./brand"
import NavLink from "./nav-link"

export default class Nav extends React.Component {
  render () {
    return (
      <div
        style={{
          margin: 20
        }}
      >
        <Brand name="brand"/>
        <ul>
          <li><NavLink to="/sketchbook">Sketchbook</NavLink></li>
          <li><NavLink to="/wall">Wall</NavLink></li>
          <li><NavLink to="/boiled-drawings">Boiled Drawings</NavLink></li>
          <li><NavLink to="/mala">Mala</NavLink></li>
        </ul>
        <Brand name="brand"/>
      </div>
    )
  }
}
