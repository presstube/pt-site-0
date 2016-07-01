import _ from "lodash"
import React from "react"
import C from "../constants"

export default class SketchbookUnit extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    active: true,
  }

  render () {
    const {active} = this.state
    const {data} = this.props
    const {name, slug, price, sold, shopURL, images, description} = data
    const image = _.first(images)
    const {url: imageURL} = image

    return (
      <div
        id={slug}
        ref={(node) => {this.node = node}}
        style={{
          marginBottom: "20%"
        }}
      >
        <img
          src={imageURL}
          width="100%"
          height="auto"
        />
        <div
          style={{
            paddingLeft: C.spacing / 2,
            paddingRight: C.spacing / 2,
            maxWidth: 500
          }}
        >
          <h2>{name}</h2>
          {description.map((fragment, index) => <p key={index}>{fragment}</p>)}
          <h3>
            <a
              href={shopURL}
              // target="_blank"
            >
              {sold ? "SOLD" : `BUY: $${price}`}
            </a>
          </h3>
        </div>
      </div>
    )
  }
}
