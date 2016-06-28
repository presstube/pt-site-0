import React from "react"
import { render } from "react-dom"
import App from "./components/App"

const data = {
  projects: [
    {
      name: "Sketchbook",
      units: [
        {
          name: "Dark Lord Grocery Delivery",
          price: 250,
          shopURL: "https://www.etsy.com/listing/400376213/dark-lord-grocery-delivery?ref=shop_home_active_1",
          sold: true,
          images: [
            {
              name: "full",
              url: "img/dark-lord-grocery-delivery.jpg"
            },
            {
              name: "detail 1",
              url: "img/dark-lord-grocery-delivery-d1.jpg"
            },
            {
              name: "detail 2",
              url: "img/dark-lord-grocery-delivery-d2.jpg"
            },
            {
              name: "detail 3",
              url: "img/dark-lord-grocery-delivery-d3.jpg"
            },
          ],
          description: [
            "Not all dark lords have glamorous jobs like stealing souls and ruling galaxies. Some deliver dark groceries.",
            "An 8\" x 10.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Array of Moments",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/ca/listing/400297521/array-of-moments",
          images: [
            {
              name: "full",
              url: "img/array-of-moments.jpg"
            },
            {
              name: "detail 1",
              url: "img/dark-lord-grocery-delivery-d1.jpg"
            },
            {
              name: "detail 2",
              url: "img/dark-lord-grocery-delivery-d2.jpg"
            },
            {
              name: "detail 3",
              url: "img/dark-lord-grocery-delivery-d3.jpg"
            },
          ],
          description: [
            "The array of moments doesn't start with your birth or end with your death.",
            "A 7.5\" x 11.5\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Bashful Fringe",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/386818902/bashful-fringe",
          images: [
            {
              name: "full",
              url: "img/bashful-fringe.jpg"
            },
            {
              name: "detail 1",
              url: "img/dark-lord-grocery-delivery-d1.jpg"
            },
            {
              name: "detail 2",
              url: "img/dark-lord-grocery-delivery-d2.jpg"
            },
            {
              name: "detail 3",
              url: "img/dark-lord-grocery-delivery-d3.jpg"
            },
          ],
          description: [
            "Sitting and waiting patiently with burly, well developed antennae. Several intersection pockets are drifting through.",
            "A 8.1\" x 11.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        }
      ]
    }
  ]
}

render(<App data={data}/>, document.getElementById("app"))
