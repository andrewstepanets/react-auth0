import React from 'react'

import { Link } from 'react-router-dom'

import { isAuthenticated } from '../../utils/utils'


function Home({ auth }) {
  return (
    <div><h1>
      Home
      </h1>
      {/* { isAuthenticated() ? (
        <Link to="/profile">View Profile</Link>
      ) : (
        <button onClick={() => login()}>Log In</button>
      )
      } */}
      {
        isAuthenticated() && <Link to="/profile">View Profile</Link>
      }
    </div>
  )
}

export default Home