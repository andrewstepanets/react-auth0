import React, { useEffect } from 'react'

import { withRouter } from 'react-router-dom'

import { handleAuthentication } from '../../utils/utils'



function Callback({ location, history, auth }) {

  useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      handleAuthentication(history)
    } else {
      throw new Error("Invalid callback URL.")
    }
  })


  return (
    <div>
      <h1>Loading...</h1>
    </div>
  )
}

export default withRouter(Callback)