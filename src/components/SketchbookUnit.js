import _ from "lodash"
import React from "react"

export default class SketchbookUnit extends React.Component {

  render () {
    // const {screenWidth, screenHeight} = this.state
    const {data} = this.props
    const {name, slug, price, sold, shopURL, images, description} = data
    const image = _.first(images)
    const {url: imageURL} = image

    const imageEl = (
      <img
        src={imageURL}
        width="100%"
        height="auto"
      />
    )

    return (
      <div
        ref={(node) => {this.node = node}}
        style={{
          marginBottom: 60
        }}
      >
        <h2 id={slug}>{name}</h2>
        {imageEl}
        <div
          style={{
            maxWidth: 500
          }}
        >
          {description.map((fragment, index) => <p key={index}>{fragment}</p>)}
          <h3>
            <a
              href={shopURL}
            >
              {sold ? "SOLD" : `BUY: $${price}`}
            </a>
          </h3>
        </div>
      </div>
    )
  }
}
