
import React from "react"

export default class Yes extends React.Component {
  render () {
    return (
      <div
        style={{
          height: 5000,
          minWidth: 400,
          maxWidth: 600,
          marginLeft: 260,
          paddingRight: 20
        }}
      >
        <h2
          style={{fontSize: "400%"}}
        ><span style={{fontSize: "50%"}}>Me:</span><br/>Is this what you seek?</h2>

        <h2
          style={{fontSize: "400%"}}
        ><span style={{fontSize: "50%"}}>You:</span><br/>Yes!</h2>

        <p>
          Great! That's wonderful. Get involved (by giving me your $) so I can keep on making this stuff:
        </p>


        <ol>
          <li>Support me on [Patreon].</li>
          <li>Buy a drawing on [Etsy] and wow people with your original Presstube art.</li>
          <li>[Book] me to draw all over your walls/floors/ceilings and blow the fuck out of people's minds when they come around.</li>
          <li>[Book] me as a code mercenary of who can also communicate, emote, and self-manage. Here I am on [Github].</li>
        </ol>

        <p>
          Not of the above tickle your fancy but you still want to help? Spread the word on social media:
        </p>

        <ul>
          <li>Tweet some tweets.</li>
          <li>Like some things.</li>
          <li>Snap some chats.</li>
          <li>Star some repos.</li>
        </ul>

        <p>
          Or send me a good old fashioned email at "j" at "presstube" dot com.
        </p>

        <p>
          Thanks!
          <br/>
          xoxo
          <br/>
          James Paterson
        </p>

      </div>
    )
  }
}
