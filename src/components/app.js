import React from "react"
import TopScrolly from "./TopScrolly"
import SketchbookUnit from "./SketchbookUnit"
import C from "../constants"

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    maxWidth: 900
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize)
    this.onResize()
  }

  onResize() {
    this.setState({maxWidth: 900 / window.devicePixelRatio})
  }

  render () {
    const projectData = this.props.data.projects[0]
    const {name: projectName, units} = projectData
    const {maxWidth} = this.state
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div style={{
          display: "inline-block",
          position: "relative",
          marginTop: C.spacing,
          width: "100%",
          // maxWidth,
          maxWidth: 900,
          textAlign: "left",
        }}>
          <div // nav
            style={{
              paddingLeft: C.spacing / 2,
              paddingRight: C.spacing / 2,
              position: "relative",
              width: 80,
              height: 80,
              marginBottom: C.spacing,
            }}
          >
            <TopScrolly name="brand"/>
          </div>
          <h1
            style={{
              paddingLeft: C.spacing / 2,
              paddingRight: C.spacing / 2,
              marginBottom: C.spacing,
            }}
          >
            {projectName}
          </h1>
          {units.map((data, index) => {
            return (
              <SketchbookUnit
                key={index}
                data={data}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
