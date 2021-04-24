import { Route } from 'react-router-dom';
import Nav from './components/nav/nav.component'
import Home from './components/home/home.component'
import Profile from './components/profile/profile.component'
import auth0 from 'auth0-js'

import './App.scss'


function App(props) {

  var auth = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    responseType: "token id_token",
    scope: "openid profile email"
  })


  return (
    <div>
      <Nav />
      <div className="body">
        <Route path="/" exact render={props => <Home auth={auth} />} />
        <Route path="/profile" component={Profile} />
      </div>
    </div>
  );
}

export default App;
