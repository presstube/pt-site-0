import _ from "lodash"
import React from "react"

export default class App extends React.Component {
  render () {
    const data = this.props.data
    const {name, price, sold, images, description} = data
    return (
      <div // project unit
        style={{
        }}
      >
        <img
          src="img/dark-lord-grocery-delivery.jpg"
          style={{width: "100%"}}
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





