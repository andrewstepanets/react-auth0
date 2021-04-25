import auth0 from 'auth0-js'

export const auth = new auth0.WebAuth({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
  responseType: "token id_token",
  scope: "openid profile email"
})

export function login() {
  return auth.authorize()
}

function setSession(authResult) {
  // set the time that the access token will expired
  const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
  localStorage.setItem("access_token", authResult.accessToken)
  localStorage.setItem("id_token", authResult.idToken)
  localStorage.setItem("expires_at", expiresAt)
}

export function isAuthenticated() {
  const expiresAt = JSON.parse(localStorage.getItem("expires_at"))
  return new Date().getTime() < expiresAt
}




export function handleAuthentication(history) {
  return (
    auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult)
        history.push("/")
      } else if (err) {
        history.push("/")
        console.log(`Error: ${err.error}`);
      }
    })
  )
}

export function logout() {

  localStorage.removeItem("access_token")
  localStorage.removeItem("id_token")
  localStorage.removeItem("expires_at")
  auth.logout({
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    returnTo: "http://localhost:3000"
  })
}




