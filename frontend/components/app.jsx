import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar';
import LandingPage from './landing_page/landing_page';
import Authentication from './authentication/authentication';

const App = () => (
  <div className="app">
    <Route path="/" component={Navbar}/>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/authentication" component={Authentication} />
  </div>
);

export default App;
