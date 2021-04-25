import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav/nav.component'
import Home from './components/home/home.component'
import Profile from './components/profile/profile.component'
import Callback from './components/callback/callback.component'
import { auth } from './utils/utils'

import './App.scss'


function App(props) {


  return (
    <div>
      <Nav auth={auth} {...props} />
      <div className="body">
        <Switch>
          <Route path="/" exact render={() => <Home auth={auth} />} {...props} />
          <Route path="/callback" render={() => <Callback auth={auth} />} {...props} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
