import { Switch, Route } from 'react-router-dom';
import Nav from './components/nav/nav.component'
import Home from './components/home/home.component'
import Profile from './components/profile/profile.component'

import './App.scss'

function App() {
  return (
    <div>
      <Nav />
      <div className="body">

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
