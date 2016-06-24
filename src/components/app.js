import React from "react"
import TopScrolly from "./TopScrolly"

export default class App extends React.Component {
  render () {
    const sw = window.innerWidth
    const spacing = 20
    return (
      <div style={{
        margin: spacing,
        width: "100%",
        // width: sw - (spacing*2),
        maxWidth: 1400
      }}>
        <div // nav
          style={{
            position: "relative",
            width: 80,
            height: 80,
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <TopScrolly name="brand"/>
        </div>
        <h1>Sketchbook</h1>
        <div /* project videos*/
          style={{
            marginBottom: spacing
          }}>
          <iframe
            style={{
              // maxWidth: 500
            }}
            src="https://player.vimeo.com/video/172081140"
            width="640"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
          <p>
            <a href="">Intro</a>,
            <a href="">1.Life</a>,
            <a href="">2.Imagination</a>,
            <a href="">3.Meditation</a>,
            <a href="">4.Systems</a>
          </p>
        </div>
        <div // project unit
          style={{
          }}
        >
          <img
            src="img/dark-lord-grocery-delivery.jpg"
            style={{width: "100%"}}
          />
          <p>
            <a href="">full</a>,
            <a href="">detail 1 </a>,
            <a href="">detail 2 </a>,
            <a href="">detail 3</a>
          </p>
          <h2>Dark Lord Grocery Delivery</h2>
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
      </div>
    )
  }
}
