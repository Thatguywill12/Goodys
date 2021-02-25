import './App.css';
import Home from '../goodys-homepage/Home';
import DriversPage from '../drivers-page/DriversPage';
import PartnersPage from '../partners-page/PartnersPage';
import UsersHomePage from '../users-page/UsersHomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UsersGeneralPage from '../users-general-product-page/UsersGeneralPage';
import RetailerPage from '../retailer-page/RetailerPage';
import UsersProductPage from '../users-product-page/UsersProductPage';
import SignIn from '../users-signUp-signIn-page/SignIn';
import Cart from '../cart-page/Cart';
// import SignUp from '../users-signUp-signIn-page/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/drivers-page" component={DriversPage} />
          <Route exact path="/partners-page" component={PartnersPage} />
          <Route exact path="/users-home-page" component={UsersHomePage} />
          <Route exact path="/users-general-product-page" component={UsersGeneralPage} />
          <Route exact path="/users-product-page" component={UsersProductPage} />
          <Route exact path="/retailer" component={RetailerPage} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/cart" component={Cart} />
          {/* <Route exact path= '/sign-up' component={SignUp} /> */}
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;