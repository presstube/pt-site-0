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
          thumb: "img/sketchbook/thumb/shared-hair.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-shared-hair.jpg",
          images: [
            {
              name: "big",
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
          name: "Dark Lord Grocery Delivery",
          slug: "dark-lord-grocery-delivery",
          active: true,
          price: 250,
          shopURL: "https://www.etsy.com/listing/400376213/dark-lord-grocery-delivery",
          sold: true,
          thumb: "img/sketchbook/thumb/dark-lord-grocery-delivery.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-dark-lord-grocery-delivery.jpg",
          images: [
            {
              name: "big",
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
          name: "West Meadow Beak Horn",
          slug: "west-meadow-beak-horn",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/386895490/west-meadow-beak-horn",
          thumb: "img/sketchbook/thumb/west-meadow-beak-horn.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-west-meadow-beak-horn.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/bashful-fringe.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-bashful-fringe.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/brenzored-trabient.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-brenzored-trabient.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/array-of-moments.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-array-of-moments.jpg",
          images: [
            {
              name: "big",
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
          slug: "no-unsee",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/400389011/no-unsee",
          thumb: "img/sketchbook/thumb/no-unsee.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-no-unsee.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/crispins-knoblets.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-crispins-knoblets.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/deregistered-heart.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-deregistered-heart.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/dissapointment-skorba.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-dissapointment-skorba.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/dombrex-arising.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-dombrex-arising.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/canadian-cyclops.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-canadian-cyclops.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/brenzored-trabient.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-brenzored-trabient.jpg",
          images: [
            {
              name: "big",
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
          active: false,
          price: 250,
          sold: false,
          shopURL: "#tbd-1",
          thumb: "img/sketchbook/thumb/.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/energy-mustache-goblet.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-energy-mustache-goblet.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/forensic-stalk-inspector.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-forensic-stalk-inspector.jpg",
          images: [
            {
              name: "big",
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
          thumb: "img/sketchbook/thumb/garbage-cream-job-interview.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-garbage-cream-job-interview.jpg",
          images: [
            {
              name: "big",
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
          name: "Prembus Bulbeeny",
          slug: "prembus-bulbeeny",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/463656373/prembus-bulbeeny",
          thumb: "img/sketchbook/thumb/prembus-bulbeeny.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-prembus-bulbeeny.jpg",
          images: [
            {
              name: "big",
              url: "img/prembus-bulbeeny.jpg",
              width: 0,
              height: 0,
            },
          ],
          description: [
            "TODO: - re-export image - write description - post on shop",
            "An 8\" x 10.6\" original sketchbook drawing from the Psychic Vomit Portrait series.",
          ]
        },
        {
          name: "Race to Single Point",
          slug: "race-to-single-point",
          active: true,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/listing/463659623/race-to-single-point",
          thumb: "img/sketchbook/thumb/race-to-single-point.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-race-to-single-point.jpg",
          images: [
            {
              name: "big",
              url: "img/race-you-to-single-point-consciousness.jpg",
              width: 0,
              height: 0,
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
          active: false,
          price: 250,
          sold: false,
          shopURL: "https://www.etsy.com/shop/presstube",
          thumb: "img/sketchbook/thumb/.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-.jpg",
          images: [
            {
              name: "big",
              url: "img/shards-in-energon-soup.jpg",
              width: 0,
              height: 0,
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
          shopURL: "https://www.etsy.com/listing/450178088/choblet-mound-trifecta",
          thumb: "img/sketchbook/thumb/choblet-mound-trifecta.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-choblet-mound-trifecta.jpg",
          images: [
            {
              name: "big",
              url: "img/choblet-mound-trifecta.jpg",
              width: 0,
              height: 0,
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
          shopURL: "https://www.etsy.com/listing/450178538/convergent-suspicion-vortex",
          thumb: "img/sketchbook/thumb/convergent-suspicion-vortex.jpg",
          big: "img/sketchbook/big/presstubecom-jamespaterson-2016-convergent-suspicion-vortex.jpg",
          images: [
            {
              name: "big",
              url: "img/convergent-suspicion-vortex.jpg",
              width: 0,
              height: 0,
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
