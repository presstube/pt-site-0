
import React from "react"

export default class Brand extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired
  }

  constructor(props) {
    const {name} = props
    super(props)
    this.loadLib(`${name}.js`)
  }

  state = {
    canvas: null,
    sw: 0,
    sh: 0,
    w: 0,
    h: 0,
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
    stage.addChild(root)
    stage.update()
    createjs.Ticker.setFPS(fps)
    createjs.Ticker.addEventListener("tick", stage)
    main.addEventListener("tick", this.onTick.bind(this))
    window.addEventListener("resize", this.onResize.bind(this))
    window.addEventListener("scroll", this.onScroll.bind(this))
    Object.assign(this, {stage, main, libProps})
    this.onResize()
  }

  onTick() {
    const {main} = this
    const {currentFrame, totalFrames} = main
    if (currentFrame === totalFrames - 1) main.stop()
    // console.log(main)
  }

  onScroll() {
    const {main} = this
    const {totalFrames} = main
    const {scrollTop} = document.body
    const frame = scrollTop < 0
      ? (totalFrames - 1) - Math.abs(scrollTop)
      : (totalFrames - 1)
    main.gotoAndStop(frame)
    console.log(scrollTop)
  }

  onResize() {
    const {stage, main} = this
    const {width: w, height: h} = this.libProps
    const {innerWidth: sw, innerHeight: sh, devicePixelRatio: dpr} = window
    let shrinkScale = 1
    if (sw >= sh) {
      shrinkScale = (sh < h) ? sh / h : 1
      shrinkScale = (w*shrinkScale >= sw) ? sw / w : shrinkScale
    } else {
      shrinkScale = sw < w ? sw / w : 1
      shrinkScale = (h*shrinkScale >= sh) ? sh / h : shrinkScale
    }
    this.setState({w, h, sw, sh, dpr, shrinkScale}, () => {
      stage.scaleX = stage.scaleY = dpr * shrinkScale
      // main.x = (sw / shrinkScale) / 2
      // main.y = (sh / shrinkScale) / 2
      stage.update()
    })
  }

  render() {
    const {w, h, sw, sh, dpr} = this.state
    // const {width, height} = this.libProps
    // console.log(width, height)
    console.log(this.libProps)
    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          // top: 0,
          // left: 0,
          width: w,
          height: h,
          borderStyle: "solid",
          borderWidth: 1
        }}
      >
        <canvas
          ref={el => {this.canvas=el}}
          width={w * dpr}
          height={h * dpr}
          style={{
            overflow: "hidden",
            width: w,
            height: h
          }}>
        </canvas>
      </div>
    )
  }
}
