
import React from "react"

export default class TopScrolly extends React.Component {

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
    const {main} = root
    const stage = new createjs.Stage(this.canvas)
    this.setState({stage, main, libProps}, () => {
      stage.addChild(root)
      stage.update()
      createjs.Ticker.setFPS(fps)
      createjs.Ticker.addEventListener("tick", stage)
      main.addEventListener("tick", this.onMainTick.bind(this))
      window.addEventListener("resize", this.onResize.bind(this))
      window.addEventListener("scroll", this.onScroll.bind(this))
      this.onResize()
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
    // let desktopStyle = {
    //   borderStyle: "solid",
    //   borderWidth: 1,
    //   borderRadius: 6,
    //   margin: 20
    // }
    // desktopStyle = maxWidth && sw > maxWidth
    //   ? desktopStyle
    //   : {
    //   borderWidth: 1,
    //   borderStyle: "hidden hidden solid hidden"
    // }
    return (
      <div
        style={{
          display: "inline-block",
          position: "relative",
          // textAlign: "center",
          height: 80,
          width: 80
          // width: sw,
          // height: scaledHeight,
        }}
      >
        <canvas
          ref={el => {this.canvas=el}}
          width={scaledWidth * dpr}
          height={scaledHeight * dpr}
          style={{
            // display: "inline-block",
            borderColor: "#ccc",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            width: scaledWidth,
            height: scaledHeight,
            // ...desktopStyle
          }}>
        </canvas>
      </div>
    )
  }
}


/*

*/
