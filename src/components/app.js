import React from "react"
import TopScrolly from "./TopScrolly"
import SketchbookUnit from "./SketchbookUnit"

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    const projectData = this.props.data.projects[0]
    const {name: projectName, units} = projectData
    const spacing = 40
    return (
      <div style={{
        padding: spacing,
        width: `calc(100% - ${spacing * 2}px)`,
        maxWidth: 1000
      }}>
        <div // nav
          style={{
            position: "relative",
            width: 80,
            height: 80,
            marginBottom: spacing,
            // borderStyle: "solid",
            // borderWidth: 1,
            // borderRadius: 4,
            // overflow: "hidden",
          }}
        >
          <TopScrolly name="brand"/>
        </div>
        <h1
          style={{
            marginBottom: spacing,
          }}
        >{projectName}</h1>
        {units.map((data, index) => {
          return (
            <SketchbookUnit
              key={index}
              data={data}
            />
          )
        })}
      </div>
    )
  }
}

/*
        <div /* project videos
          style={{
            marginBottom: spacing
          }}>
          <iframe
            style={{
              // maxWidth: 500
            }}
            src="https://player.vimeo.com/video/172081140"
            width="100%"
            height="100%"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
          <h3>
            <p>
              <a href="">Intro</a>,
              <a href="">1-Life</a>,
              <a href="">2-Imagination</a>,
              <a href="">3-Meditation</a>,
              <a href="">4-Systems</a>
            </p>
          </h3>
        </div>





        <div // project unit
          style={{
          }}
        >
          <img
            src="img/dark-lord-grocery-delivery.jpg"
            style={{width: "100%"}}
          />
          <h2>Dark Lord Grocery Delivery</h2>
          <h3>
            <p>
              <a href="">full</a>,
              <a href="">detail 1</a>,
              <a href="">detail 2</a>,
              <a href="">detail 3</a>
            </p>
          </h3>
          <p>An 8x10.6" original sketchbook drawing from the Psychic Vomit Portrait series.</p>
          <p>Not all dark lords have glamorous jobs like stealing souls and ruling galaxies.</p>
          <p>Some deliver dark groceries.</p>
          <h3>
            <a
              href="https://www.etsy.com/listing/400376213/dark-lord-grocery-delivery?ref=shop_home_active_1"
            >
              SOLD
            </a>
          </h3>
        </div>






*/
