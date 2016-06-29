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
          slug: "dark-lord-grocery-delivery",
          price: 250,
          shopURL: "https://www.etsy.com/listing/400376213/dark-lord-grocery-delivery?ref=shop_home_active_1",
          sold: true,
          images: [
            {
              name: "full",
              url: "img/dark-lord-grocery-delivery.jpg",
              width: 3700,
              height: 4892,
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
          slug: "array-of-moments",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/ca/listing/400297521/array-of-moments",
          images: [
            {
              name: "full",
              url: "img/array-of-moments.jpg",
              width: 3200,
              height: 4949,
            },
          ],
          description: [
            "The array of moments doesn't start with your birth or end with your death.",
            "A 7.5\" x 11.5\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Bashful Fringe",
          slug: "bashful-fringe",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/386818902/bashful-fringe",
          images: [
            {
              name: "full",
              url: "img/bashful-fringe.jpg",
              width: 3500,
              height: 4988,
            },
          ],
          description: [
            "Sitting and waiting patiently with burly, well developed antennae. Several intersection pockets are drifting through.",
            "A 8.1\" x 11.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Brenzored Trabient",
          slug: "brenzored-trabient",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400394365/brenzored-trabient",
          images: [
            {
              name: "full",
              url: "img/brenzored-trabient.jpg",
              width: 3000,
              height: 4595,
            },
          ],
          description: [
            "Sustained trauma steeping has triggered the mottling. It began slowly but is picking up speed now. Soon it will be time to rest forever.",
            "A 8.1\" x 11.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Brumbic Formiculum",
          slug: "brenzored-trabient",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400316175/brumbic-formiculum",
          images: [
            {
              name: "full",
              url: "img/brumbic-formiculum.jpg",
              width: 3000,
              height: 3969,
            },
          ],
          description: [
            "Velvety curvaceous verticals in a gentle s-curve soup. Dense packets of roughshod spuckings attract larger aerated gundies.",
            "A 8\" x 10.7\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Canadian Cyclops",
          slug: "canadian-cyclops",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400371433/canadian-cyclops",
          images: [
            {
              name: "full",
              url: "img/canadian-cyclops.jpg",
              width: 3500,
              height: 4809,
            },
          ],
          description: [
            "Fueled almost entirely by maple syrup and Molson Ex, he ranges through the great pines of the Canadian shield waiting for the age of man to conclude.",
            "A 7\" x 9\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "No Unsee",
          slug: "cannot-be-unseen",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400389011/cannot-be-unseen",
          images: [
            {
              name: "full",
              url: "img/cannot-be-unseen.jpg",
              width: 3500,
              height: 4809,
            },
          ],
          description: [
            "She unburdened herself of the imagery and a deep haunting took hold immediately.",
            "A 7.1\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Convergent Suspicion Vortex",
          slug: "convergent-suspicion-vortex",
          price: 250,
          sold: true,
          shopURL: "#convergent-suspicion-vortex",
          images: [
            {
              name: "full",
              url: "img/convergent-suspicion-vortex.jpg",
              width: 2000,
              height: 2744,
            },
          ],
          description: [
            "Do they know?",
            "A 7.1\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Crispin's Knoblets",
          slug: "crispins-knoblets",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/386886450/crispins-knoblets",
          images: [
            {
              name: "full",
              url: "img/crispins-knoblets.jpg",
              width: 3900,
              height: 5256,
            },
          ],
          description: [
            "Riding the vanguard of knoblet flavoring.",
            "A 7.1\" x 9.7\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Deregistered Heart",
          slug: "deregistered-heart",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/386886450/deregistered-heart",
          images: [
            {
              name: "full",
              url: "img/deregistered-heart.jpg",
              width: 3300,
              height: 4469,
            },
          ],
          description: [
            "It's upside down. It's external. It's a deregistered.",
            "A 7.2\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Dissapointment Skorba",
          slug: "dissapointment-skorba",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/386886450/dissapointment-skorba",
          images: [
            {
              name: "full",
              url: "img/dissapointment-skorba.jpg",
              width: 3600,
              height: 4808,
            },
          ],
          description: [
            "It was not shaped as she had expected.",
            "A 7.2\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Dombrex Arising",
          slug: "dombrex-arising",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/386886450/dombrex-arising",
          images: [
            {
              name: "full",
              url: "img/dombrex-arising.jpg",
              width: 3400,
              height: 4579,
            },
          ],
          description: [
            "He pushes through the foam and his teary eye sees light for the first time.",
            "A 7.1\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "TBD",
          slug: "tbd-1",
          price: 250,
          sold: false,
          shopURL: "#tbd-1",
          images: [
            {
              name: "full",
              url: "img/dongle-suspension-with-freshness-nodes.jpg",
              width: 2000,
              height: 2651,
            },
          ],
          description: [
            "",
          ]
        },
        {
          name: "Energy Mustache Goblet",
          slug: "energy-mustache-goblet",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400377945/energy-mustache-goblet",
          images: [
            {
              name: "full",
              url: "img/energy-mustache-goblet.jpg",
              width: 3600,
              height: 4732,
            },
          ],
          description: [
            "Forget gelfling essence; a few sips from the energy mustache goblet and you'll be flailing your limbs in spasmodic abandon.",
            "A 8.1\" x 10.7\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Forensic Stalk Inspector",
          slug: "forensic-stalk-inspector",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400386893/forensic-stalk-inspector",
          images: [
            {
              name: "full",
              url: "img/forensic-stalk-inspector.jpg",
              width: 3600,
              height: 4826,
            },
          ],
          description: [
            "The inspector's quivering mouth barrel can sense that you are lying. Before him you cannot hide.",
            "A 7.1\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Garbage Cream Job Interview",
          slug: "garbage-cream-job-interview",
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400514201/garbage-cream-job-interview",
          images: [
            {
              name: "full",
              url: "img/garbage-cream-job-interview.jpg",
              width: 3600,
              height: 4775,
            },
          ],
          description: [
            "The enthusiasm is palpable. Ready sir, yes. Been ready all my life. Proud and smelly. Crisp and fetid. Garbage cream dollop against regal boxy stripes.",
            "The power triangle, though tiny, conducts a ferocious interrogation.",
            "A 7.1\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
      ]
    }
  ]
}

render(<App data={data}/>, document.getElementById("app"))
