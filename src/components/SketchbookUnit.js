import _ from "lodash"
import React from "react"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.initWinHeight = window.innerHeight
  }

  render () {
    const {data} = this.props
    const {name, price, sold, images, description} = data
    // const initWinHeight = window.innerHeight
    return (
      <div // project unit
        style={{
        }}
      >
        <img
          src="img/dark-lord-grocery-delivery.jpg"
          width="auto"
          height={this.initWinHeight * 0.8}
          // style={{
          //   height: {screenHeight},
          //   width: "auto"
          // }}
          // style={{width: "100%"}}
        />
        <h2>{name}</h2>
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
        {description.map((fragment, index) => <p key={index}>{fragment}</p>)}
        <h3>
          <a
            href="https://www.etsy.com/listing/400376213/dark-lord-grocery-delivery?ref=shop_home_active_1"
          >
            {sold ? "SOLD" : `Buy | $${price}`}
          </a>
        </h3>
      </div>
    )
  }
}




/*



*/





