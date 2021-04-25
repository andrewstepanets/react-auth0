import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { isAuthenticated, logout, login } from '../../utils/utils'

import './nav.styles.scss'

function Nav({ history, auth }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={isAuthenticated() ? logout : login} >
            {isAuthenticated() ? "Log Out" : "Log In"}
          </button>
        </li>
      </ul>
    </nav >

  )
}

export default withRouter(Nav)