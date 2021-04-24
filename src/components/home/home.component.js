import React from 'react'


function Home(props) {
  return (
    <div><h1>
      Home
      </h1>
      <button onClick={() => props.auth.authorize()}>Log In</button>
    </div>
  )
}

export default Home