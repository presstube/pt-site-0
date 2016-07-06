import _ from "lodash"
import React from "react"
import TopScrolly from "./TopScrolly"
import SketchbookUnit from "./SketchbookUnit"
import C from "../constants"

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    maxWidth: this.getMaxWidth(),
    brandAnimationCompleted: true,
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize.bind(this))
    this.onResize()
  }

  ctrl = {
    onBrandAnimationComplete: () => {
      this.setState({brandAnimationCompleted: true})
    }
  }

  onResize() {
    this.setState({maxWidth: this.getMaxWidth()})
  }

  getMaxWidth() {
    const {innerWidth, innerHeight} = window
    const ratio = innerWidth / innerHeight
    console.log("ratio: ", ratio)
    // if (innerWidth < innerHeight) {
    if (ratio <= 0.8) {
      // portrait
      return "100%"
    } else {
      // landscape
      return innerWidth >= 500 ? 500 : "100%"
    }


    // return innerWidth >= 768 ? 768 : "100%"

  }

  render () {
    const projectData = this.props.data.projects[0]
    const {name: projectName, units} = projectData
    const {maxWidth, brandAnimationCompleted} = this.state
    const activeUnits = _.filter(units, {active:true})
    return (
      <div style={{
        position: "relative",
        marginTop: C.spacing,
        width: "100%",
        maxWidth: maxWidth,
        minHeight: window.innerHeight,
        textAlign: "left",
        margin: "auto",
      }}>
        <div // nav
          style={{
            paddingLeft: C.spacing / 2,
            paddingRight: C.spacing / 2,
            paddingTop: C.spacing,
            position: "relative",
            width: 80,
            height: 80,
            marginBottom: C.spacing,
          }}
        >
          <TopScrolly name="brand" ctrl={this.ctrl}/>
        </div>
        {brandAnimationCompleted ?
          <div
            style={{
              // width: "100%"
            }}
          >
            <h1
              style={{
                paddingLeft: C.spacing / 2,
                paddingRight: C.spacing / 2,
                marginTop: C.spacing,
                marginBottom: C.spacing,
              }}
            >
              {projectName}
            </h1>
            <h2
              style={{
                paddingLeft: C.spacing / 2,
                paddingRight: C.spacing / 2,
                marginTop: 0,
                marginBottom: C.spacing,
              }}
              >Original pen drawings for sale.</h2>
            {
              activeUnits.map((data, index) => {
                return (
                  <SketchbookUnit
                    key={index}
                    data={data}
                  />
                )
              })
            }

          </div> : null}
      </div>
    )
  }
}



/*
            <img
              src="img/bashful-fringe.jpg"
              width="100%"
            />

*/