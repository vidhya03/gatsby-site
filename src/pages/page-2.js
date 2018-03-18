import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div style={{ color: 'rebeccapurple' }}>
    <h1>Hi from the second page</h1>
    <p>What a world.</p>
   <img src="https://source.unsplash.com/random/400x200" alt="image loading" />
   <br/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
