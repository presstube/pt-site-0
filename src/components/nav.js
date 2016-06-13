
import { browserHistory } from "react-router"

import React from "react"

export default class Nav extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    maxWidth: React.PropTypes.number
  }

  static defaultProps = {
    maxWidth: null
  }

  constructor(props) {
    const {name} = props
    super(props)
    this.loadLib(`${name}.js`)
  }

  state = {
    stage: null,
    main: null,
    libProps: {
      width: 0,
      height: 0
    },
    sw: 0,
    sh: 0,
    dpr: 1,
    shrinkScale: 1
  }

  loadLib(filename) {
    const libScript = document.createElement("script")
    libScript.src = filename
    libScript.addEventListener("load", this.onLibLoaded.bind(this))
    document.body.appendChild(libScript)
  }

  onLibLoaded() {
    const {name} = this.props
    const lib = window[name]
    const {properties: libProps} = lib
    const {fps} = libProps
    const root = new lib[name]
    const {main, numbers} = root
    const stage = new createjs.Stage(this.canvas)
    this.setState({stage, main, libProps}, () => {
      stage.addChild(root)
      stage.update()
      this.setupNumbers(numbers)
      createjs.Ticker.setFPS(fps)
      createjs.Ticker.addEventListener("tick", stage)
      main.addEventListener("tick", this.onMainTick.bind(this))
      window.addEventListener("resize", this.onResize.bind(this))
      window.addEventListener("scroll", this.onScroll.bind(this))
      this.onResize()
    })
  }

  setupNumbers(numbers) {
    numbers.children.forEach((number, index) => {
      number.gotoAndStop(index)
      number.addEventListener("click", (e) => {
        // reach out and touch somebody
        // browserHistory.push("/#/"+index)
        // this.props.history.push("/0");
        // console.log("number clicked ", index)
        // console.log(this.props.history)
        console.log(browserHistory)
        browserHistory.push("/#/0")
      })
    })
  }

  onMainTick() {
    const {main} = this.state
    const {currentFrame, totalFrames} = main
    if (currentFrame === totalFrames - 1) main.stop()
  }

  onScroll() {
    const {main} = this.state
    const {totalFrames} = main
    const {scrollTop} = document.body
    const frame = scrollTop < 0
      ? (totalFrames - 1) - Math.abs(scrollTop)
      : (totalFrames - 1)
    main.gotoAndStop(frame)
  }

  onResize() {
    const {stage, libProps} = this.state
    const {width} = libProps
    const maxWidth = this.props.maxWidth ? this.props.maxWidth : width
    const {innerWidth: sw, innerHeight: sh, devicePixelRatio: dpr} = window
    const shrinkScale = (maxWidth && sw > maxWidth)
      ? 1
      : sw / width
    this.setState({sw, sh, dpr, shrinkScale}, () => {
      stage.scaleX = stage.scaleY = dpr * shrinkScale
      stage.update()
    })
  }

  render() {
    const {sw, dpr, shrinkScale} = this.state
    const {width, height} = this.state.libProps
    const {maxWidth} = this.props
    const scaledHeight = height * shrinkScale
    const scaledWidth = width * shrinkScale
    let desktopStyle = {
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 6,
      margin: 20
    }
    desktopStyle = maxWidth && sw > maxWidth
      ? desktopStyle
      : {
      borderWidth: 1,
      borderStyle: "hidden hidden solid hidden"
    }
    return (
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          width: sw,
          height: scaledHeight,
        }}
      >
        <canvas
          ref={el => {this.canvas=el}}
          width={scaledWidth * dpr}
          height={scaledHeight * dpr}
          style={{
            borderColor: "#ccc",
            backgroundColor: "white",
            width: scaledWidth,
            height: scaledHeight,
            ...desktopStyle
          }}>
        </canvas>
      </div>
    )
  }
}



/*
import TopScrolly from "./TopScrolly"
// import NavLink from "./NavLink"

export default class Nav extends React.Component {
  render () {
    return (
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          // textAlign: "center"
          // margin: 20
        }}
      >
        <TopScrolly name="nav" maxWidth={666}/>
      </div>
    )
  }
}
        <NavLink to="/home"><TopScrolly name="brand"/></NavLink>
        <ul>
          <li><NavLink to="/sketchbook">Sketchbook</NavLink></li>
          <li><NavLink to="/wall">Wall</NavLink></li>
          <li><NavLink to="/boiled-drawings">Boiled Drawings</NavLink></li>
          <li><NavLink to="/mala">Mala</NavLink></li>
        </ul>
        <NavLink to="/yes"><TopScrolly name="yesbutton"/></NavLink>
*/
