import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import HeroDetails from './pages/hero-details';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/hero-details'>Hero Details</Link>
      </li>
    </ul>
  </nav>
);

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path='/hero-details'>
            <HeroDetails />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
