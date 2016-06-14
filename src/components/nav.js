
import _ from "lodash"
import React from "react"

import NavItem from "./NavItem"
import TopScrolly from "./TopScrolly"
import NavNumber from "./NavNumber"

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
    return (
      <div style={{height: 80}}>
        <NavItem><TopScrolly name="brand"/></NavItem>
        {_.times(10, index =>
          <NavItem><NavNumber number={index}></NavNumber></NavItem>
        )}
        <NavItem><div style={{
          width: 80, 
          textAlign: "center",
          fontSize: "120%"}}>YES</div></NavItem>
      </div>
    )
  }
}
