import _ from "lodash"
import React from "react"
import C from "../constants"

export default class SketchbookUnit extends React.Component {

  constructor(props) {
    super(props)
    // window.addEventListener("scroll", () => {
    //   console.log("scroll")
    //   this.checkCull()
    //   // perform cull update
    // })
    // window.addEventListener("resize", () => {
    //   console.log("resize")
    //   // this.calcRect()
    //   // store getBoundingClientRect()
    //   this.checkCull()
    // })
  }

  state = {
    active: true,
    rect: null
  }

  componentDidMount() {
    // this.calcRect()
    // this.checkCull()
  }

  // calcRect() {
  //   this.rect = this.node.getBoundingClientRect()
  // }

  // checkCull() {
  //   this.rect = this.node.getBoundingClientRect()
  //   const {top, bottom} = this.rect
  //   const {innerHeight} = window
  //   // console.log(this.props.data.name)
  //   if ((top >= 0 && top <= innerHeight) ||
  //       (bottom >= 0 && bottom <= innerHeight) ||
  //       (top < 0 && bottom > innerHeight)) {
  //     this.setState({active: true})
  //   } else {
  //     this.setState({active: false})
  //   }
  // }

  render () {
    // const {screenWidth, screenHeight} = this.state
    const {active} = this.state
    const {data} = this.props
    const {name, slug, price, sold, shopURL, images, description} = data
    const image = _.first(images)
    const {url: imageURL/*, width, height*/} = image
    // const widthMult = window.innerWidth/width
    // const dpr = window.devicePixelRatio

    const imageEl = (
      <div
        // style={{
        //   // width: `calc(100% - ${width})`,
        //   // height: `calc(100% - ${width})`,
        //   // width: `calc(${width}px * calc(${width}px / 100%)px)`,
        //   // height: `calc(${height}px * calc(${width}px / 100%)px)`,
        //   width: (width * widthMult) * dpr,
        //   height: (height * widthMult) * dpr,
        //   // height: `calc(${height}px * calc(${width}px / 100%)px)`,
        //   backgroundColor: "grey",
        // }}
      >
        {active ?
          <img
            src={imageURL}
            width="100%"
            height="auto"
            // maxHeight="100%"
          /> : null
        }
      </div>
    )

    return (
      <div
        id={slug}
        ref={(node) => {this.node = node}}
        style={{
          marginBottom: "20%"
        }}
      >
        {imageEl}
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
            >
              {sold ? "SOLD" : `BUY: $${price}`}
            </a>
          </h3>
        </div>
      </div>
    )
  }
}
