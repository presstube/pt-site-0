import _ from "lodash"
import React from "react"
import C from "../constants"

export default class SketchbookUnit extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    const {data} = this.props
    const {name, slug, price, sold, shopURL, description, thumb, big} = data

    return (
      <div
        id={slug}
        ref={(node) => {this.node = node}}
        style={{
          marginBottom: "20%"
        }}
      >
        <a href={big}>
          <img
            src={thumb}
            width="100%"
            height="auto"
          />
        </a>
        <div
          style={{
            paddingLeft: C.spacing / 2,
            paddingRight: C.spacing / 2,
            maxWidth: 500
          }}
        >
          <h2>{name}</h2>
          <p>{_.last(description)}</p>
          <h3>
            <a href={shopURL}>
              {sold ? "SOLD" : `BUY: $${price}`}
            </a>
          </h3>
        </div>
      </div>
    )
  }
}


/*
*/