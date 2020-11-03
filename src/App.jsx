import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/home';
import Hero from './pages/hero';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/hero/:id'>
            <Hero />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
