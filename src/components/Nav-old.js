
import _ from "lodash"
import React from "react"
import TopScrolly from "./TopScrolly"

export default class Nav extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)
  }

  state = {
  }

  render() {

    const navLinks = _.times(10, (index) => {
      return <div
        style={{
          display: "inline-block",
          position: "relative",
          width: 80,
          height: 80,
          backgroundColor: "red"
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "red"
          }}
        >
          lalal
        </div>
      </div>
    })
    console.log(navLinks)

    return (
      <div
        style={{

          position: "relative",
          width: "100%",
          height: "80",
          backgroundColor: "white"
        }}
      >
        <TopScrolly name="brand"/>
        <div
          style={{
            display: "inline-block",
            width: 80,
            height: 80,
            backgroundColor: "red"
          }}
        >
        </div>
        {navLinks}
      </div>
    )
  }
}



/*
        {index}
import TopScrolly from "./TopScrolly"
// import NavLink from "./NavLink"

export default class Nav extends React.Component {
  render () {
    return (
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          // textAlign: "center"
          // margin: 20
        }}
      >
        <TopScrolly name="nav" maxWidth={666}/>
      </div>
    )
  }
}
        <NavLink to="/home"><TopScrolly name="brand"/></NavLink>
        <ul>
          <li><NavLink to="/sketchbook">Sketchbook</NavLink></li>
          <li><NavLink to="/wall">Wall</NavLink></li>
          <li><NavLink to="/boiled-drawings">Boiled Drawings</NavLink></li>
          <li><NavLink to="/mala">Mala</NavLink></li>
        </ul>
        <NavLink to="/yes"><TopScrolly name="yesbutton"/></NavLink>
*/
