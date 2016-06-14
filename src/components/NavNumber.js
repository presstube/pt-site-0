
import React from "react"

export default class NavNumber extends React.Component {

  static propTypes = {
    number: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <div
        style={{
          float: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          // height: 80,
          backgroundColor: "#fff"
        }}
      >
        {this.props.number}
      </div>
    )
  }
}
