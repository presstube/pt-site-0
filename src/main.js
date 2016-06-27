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
            "An 8x10.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
            "Not all dark lords have glamorous jobs like stealing souls and ruling galaxies.",
            "Some deliver dark groceries."
          ]
        },
        {
          name: "Dark Lard Grocery Delivery",
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
            "An 8x10.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
            "Not all dark lords have glamorous jobs like stealing souls and ruling galaxies.",
            "Some deliver dark groceries."
          ]
        }
      ]
    }
  ]
}

render(<App data={data}/>, document.getElementById("app"))
