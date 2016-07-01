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
    maxWidth: 900,
    brandAnimationCompleted: false,
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize.bind(this))
    this.onResize()
  }

  ctrl = {
    onBrandAnimationComplete: () => {
      console.log("brand animation complete")
      this.setState({brandAnimationCompleted: true})
    }
  }

  onResize() {
    this.setState({maxWidth: 900 / window.devicePixelRatio})
  }

  render () {
    const projectData = this.props.data.projects[0]
    const {name: projectName, units} = projectData
    const {maxWidth, brandAnimationCompleted} = this.state
    const activeUnits = _.filter(units, {active:true})
    console.log("activeUnits: ", activeUnits)
    return (
      <div style={{
        position: "relative",
        marginTop: C.spacing,
        width: "100%",
        maxWidth: 900,
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