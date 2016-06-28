import _ from "lodash"
import React from "react"
import C from "../constants"

export default class SketchbookUnit extends React.Component {

  constructor(props) {
    super(props)
    this.initWinHeight = window.innerHeight
  }

  // state = {
  //   active: false,
  //   rect: {top: 0, right: 0, bottom: 0, width: 0},
  //   screenWidth: window.innerWidth,
  //   screenHeight: window.innerHeight,
  // }

  componentDidMount() {
    // this.calcResize()
    // this.checkActive()
    // window.addEventListener("scroll", () => {
    //   this.checkActive()
    // })
    window.addEventListener("resize", () => {
      // this.calcResize()
      // this.checkActive()
    })
  }

  // calcResize() {
  //   this.setState({
  //     rect: this.node.getBoundingClientRect(),
  //     screenWidth: window.innerWidth,
  //     screenHeight: window.innerHeight,
  //   })
  // }

  // checkActive() {
  //   const rect = this.node.getBoundingClientRect()
  //   const {name} = this.props.data
  //   const {active} = this.state

  //   console.log(name, `top: ${rect.top}, bottom: ${rect.bottom}`)
  //   // console.log(name, "scrollTop: ", document.body.scrollTop)

  //   if ((rect.top >= window.innerHeight || rect.bottom <= 0)) {
  //     console.log(name, "out!")
  //     this.setState({active: false})
  //   } else if ((rect.top < window.innerHeight || rect.bottom > 0)) {
  //     console.log(name, "in!")
  //     this.setState({active: true})
  //   } else {
  //     // do nothing
  //   }
  // }

  render () {
    // const {screenWidth, screenHeight} = this.state
    const {data} = this.props
    const {name, slug, price, sold, shopURL, images, description} = data
    const image = _.first(images)
    const {url: imageURL, width, height} = image
    const isPortrait = window.innerHeight > window.innerWidth
    // const initWinWidth = window.innerWidth
    // const initWinHeight = window.innerHeight
    // const imageActive = false

    // const widthMultiplier = ((screenWidth - (C.spacing * 2)) / width)
    // const heightMultiplier = (screenHeight * 0.8) / height

    // const adjustedWidth = isPortrait
    //   ? width * widthMultiplier
    //   : width * heightMultiplier

    // const adjustedHeight = isPortrait
    //   ? height * widthMultiplier
    //   : height * heightMultiplier

    const imageEl = (
      <img
        src={imageURL}
        width="100%"
        height="auto"
      />
    )

    // const imagePlaceholderEl = (
    //   <div
    //     style={{
    //       width: adjustedWidth,
    //       height: adjustedHeight,
    //       backgroundColor: "grey"
    //     }}
    //   >
    //   </div>
    // )

    // const {active} = this.state

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


{active ? imageEl : imagePlaceholderEl}

*/





