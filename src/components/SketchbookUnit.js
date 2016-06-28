import _ from "lodash"
import React from "react"
import C from "../constants"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.initWinHeight = window.innerHeight
  }

  render () {
    const {data, screenHeight} = this.props
    const {name, price, sold, shopURL, images, description} = data
    console.log("name: ", C)
    // const initWinHeight = window.innerHeight
    return (
      <div // project unit
        style={{
          marginBottom: 60
        }}
      >
        <img
          src={_.first(images).url}
          width="auto"
          // height={this.initWinHeight * 0.8}
          height={screenHeight * 0.7 * window.devicePixelRatio}
        />
        <h2>{name}</h2>
        {description.map((fragment, index) => <p key={index}>{fragment}</p>)}
        <h3>
          <a
            href={shopURL}
          >
            {sold ? "SOLD" : `BUY: $${price}`}
          </a>
        </h3>
      </div>
    )
  }
}




/*

        <h3>
          <p>
            {images.map((data, index, coll) => {
              const isLast = data === _.last(coll)
              return (
                <span key={index}>
                  <a href={data.url}>{data.name}</a>{isLast ? null : ", "}
                </span>
              )
            })}
          </p>
        </h3>


*/





