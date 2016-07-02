import React from "react"
import { render } from "react-dom"
import App from "./components/App"

const data = {
  projects: [
    {
      name: "Sketchbook",
      units: [

        {
          name: "Shared Hair",
          slug: "shared-hair",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400391895/shared-hair",
          images: [
            {
              name: "full",
              url: "img/shared-hair.jpg",
              width: 3000,
              height: 4537,
            },
          ],
          description: [
            "A formidable pair boasting conjoined energy hair.",
            "A 7.5\" x 11.3\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },

        {
          name: "West Meadow Beak Horn",
          slug: "west-meadow-beak-horn",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/386895490/west-meadow-beak-horn",
          images: [
            {
              name: "full",
              url: "img/west-meadow-beak-horn.jpg",
              width: 3200,
              height: 4348,
            },
          ],
          description: [
            "In the west meadow sentient cutaneous horns can sometimes be found sprouting from the turf. They can provide answers if you know the right questions.",
            "A 7.1\" x 9.7\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },

        {
          name: "Bashful Fringe",
          slug: "bashful-fringe",
          active: true,
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
          active: true,
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
          name: "Array of Moments",
          slug: "array-of-moments",
          active: true,
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
          name: "No Unsee",
          slug: "cannot-be-unseen",
          active: true,
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
            "As she unburdened herself it became clear that the image would haunt his dreams for all eternity.",
            "A 7.1\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },

        {
          name: "Crispin's Knoblets",
          slug: "crispins-knoblets",
          active: true,
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
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/387015402/deregistered-heart",
          images: [
            {
              name: "full",
              url: "img/deregistered-heart.jpg",
              width: 3300,
              height: 4469,
            },
          ],
          description: [
            "It's upside down. It's external. It's deregistered.",
            "A 7.2\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Dissapointment Skorba",
          slug: "dissapointment-skorba",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400390793/disappointment-skorba",
          images: [
            {
              name: "full",
              url: "img/dissapointment-skorba.jpg",
              width: 3600,
              height: 4808,
            },
          ],
          description: [
            "As it grew her mouthings craggled downward. It was not shaped as she had expected.",
            "A 7.2\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Dombrex Arising",
          slug: "dombrex-arising",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400385781/dombrex-arising",
          images: [
            {
              name: "full",
              url: "img/dombrex-arising.jpg",
              width: 3400,
              height: 4579,
            },
          ],
          description: [
            "The mantle froth reached a fever pitch and it was time for the dombrex to emerge. As he pushed his primary shaft up through the foam his teary eye saw light for the first time in millenia.",
            "A 7.1\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },

        {
          name: "Canadian Cyclops",
          slug: "canadian-cyclops",
          active: true,
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
          name: "Brumbic Formiculum",
          slug: "brenzored-trabient",
          active: true,
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
            "A 8\" x 10.7\" original sketchbook drawing from the Psychic Vomit Petri series.",
          ]
        },

        {
          name: "Traculent Squesh",
          slug: "tbd-1",
          active: true,
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
            "A 8\" x 10.7\" original sketchbook drawing from the Psychic Vomit Petri series.",
          ]
        },

        {
          name: "Energy Mustache Goblet",
          slug: "energy-mustache-goblet",
          active: true,
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
            "Forget gelfling essence, a few sips from the energy mustache goblet and you'll be singing the hymns of Tuntimus Prime and flailing your limbs in spasmodic abandon.",
            "A 8.1\" x 10.7\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Forensic Stalk Inspector",
          slug: "forensic-stalk-inspector",
          active: true,
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
            "The inspector's quivering mouth barrel can sense that you are lying. He detects vibrations being shucked from your nervous frame. Before him you cannot hide.",
            "A 7.1\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Garbage Cream Job Interview",
          slug: "garbage-cream-job-interview",
          active: true,
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
            "The enthusiasm is palpable. Ready sir, yes! Been ready all my life. Proud and smelly. Crisp and fetid. Garbage cream dollop against regal boxy stripes.",
            "The power triangle, though tiny, conducts a ferocious interrogation.",
            "A 7.1\" x 9.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },

        {
          name: "Dark Lord Grocery Delivery",
          slug: "dark-lord-grocery-delivery",
          active: true,
          price: 250,
          shopURL: "https://www.etsy.com/listing/400376213/dark-lord-grocery-delivery",
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
          name: "Prembus Bulbeeny",
          slug: "prembus-bulbeeny",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/shop/presstube",
          images: [
            {
              name: "full",
              url: "img/prembus-bulbeeny.jpg",
              width: 2000,
              height: 2646,
            },
          ],
          description: [
            "TODO: - re-export image - write description - post on shop",
            "An 8\" x 10.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Race to Single Point",
          slug: "race-you-to-single-point-consciousness",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/shop/presstube",
          images: [
            {
              name: "full",
              url: "img/race-you-to-single-point-consciousness.jpg",
              width: 3600,
              height: 5560,
            },
          ],
          description: [
            "TODO: - write description - post on shop",
            "An 8\" x 10.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Soup",
          slug: "shards-in-energon-soup",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/shop/presstube",
          images: [
            {
              name: "full",
              url: "img/shards-in-energon-soup.jpg",
              width: 2000,
              height: 2653,
            },
          ],
          description: [
            "TODO: - re-export image - write description - post on shop",
            "An 8\" x 10.6\" original sketchbook drawing from the Psychic Vomit Petri series.",
          ]
        },

        {
          name: "Choblet Mound Trifecta",
          slug: "choblet-mound-trifecta",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/shop/presstube",
          images: [
            {
              name: "full",
              url: "img/choblet-mound-trifecta.jpg",
              width: 3200,
              height: 4348,
            },
          ],
          description: [
            "TODO - describe - facts - w & h - post on etsy",
            "An 8\" x 10.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },

        {
          name: "Convergent Suspicion Vortex",
          slug: "convergent-suspicion-vortex",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/shop/presstube",
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

      ]
    }
  ]
}

render(<App data={data}/>, document.getElementById("app"))
