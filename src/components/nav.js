
import React from "react"

import TopScrolly from "./TopScrolly"
import NavLink from "./NavLink"

export default class Nav extends React.Component {
  render () {
    return (
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          margin: 20
        }}
      >
        <NavLink to="/home"><TopScrolly name="brand"/></NavLink>
        <ul>
          <li><NavLink to="/sketchbook">Sketchbook</NavLink></li>
          <li><NavLink to="/wall">Wall</NavLink></li>
          <li><NavLink to="/boiled-drawings">Boiled Drawings</NavLink></li>
          <li><NavLink to="/mala">Mala</NavLink></li>
        </ul>
        <NavLink to="/yes"><TopScrolly name="yesbutton"/></NavLink>
      </div>
    )
  }
}
/*
*/
