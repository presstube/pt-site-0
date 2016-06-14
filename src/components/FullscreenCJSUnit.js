/*
  TODO:
  - should load cjs if not already loaded?
  - use async/await for async?
*/


import React from "react"

export default class FullscreenCJSUnit extends React.Component {

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

    const circle = new createjs.Shape()
    circle.graphics.beginFill("red").drawCircle(0, 0, 2)
    main.addChild(circle)

    createjs.Ticker.setFPS(60)
    createjs.Ticker.addEventListener("tick", stage)
    main.addEventListener("tick", this.onMainTick.bind(this))
    window.addEventListener("resize", this.onResize.bind(this))
    Object.assign(this, {stage, main, libProps, circle})
    this.onResize()
  }

  onMainTick() {
    const {main, circle} = this
    const mark = main.children[0]
    circle.x = mark.x
    circle.y = mark.y
    // console.log('c: ', main.children[0].children)
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
    this.setState({sw, sh, dpr, shrinkScale}, () => {
      stage.scaleX = stage.scaleY = dpr * shrinkScale
      main.x = (sw / shrinkScale) / 2
      main.y = (sh / shrinkScale) / 2
      stage.update()
    })
  }

  render() {
    const {sw, sh, dpr} = this.state
    return (
      <div
        style={{
          position: "absolute",
          overflow: "hidden",
          top: 0,
          left: 0,
          width: sw,
          height: sh
        }}
      >
        <canvas
          ref={el => {this.canvas=el}}
          width={sw * dpr}
          height={sh * dpr}
          style={{
            width: sw,
            height: sh,
            // backgroundColor: "grey"
          }}
          onClick={(e) => {
            const {main} = this
            const mark = main.children[0]
            console.log("click ", main.children[0])


          }}>
        </canvas>
      </div>
    )
  }
}
