import './App.css';
import Home from '../goodys-homepage/Home';
import DriversPage from '../drivers-page/DriversPage';
import PartnersPage from '../partners-page/PartnersPage';
import UsersHomePage from '../users-page/UsersHomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/drivers-page" component={DriversPage} />
          <Route exact path="/partners-page" component={PartnersPage}/>
          <Route exact path="/users-home-page" component={UsersHomePage}/ >
        </Switch>
      </div>
    </Router>
  );
}

export default App;