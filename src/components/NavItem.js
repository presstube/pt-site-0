
import React from "react"

export default class NavItem extends React.Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
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
      <div
        style={{
          float: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          backgroundColor: "#fff"
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
