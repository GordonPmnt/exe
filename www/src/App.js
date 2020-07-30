import React from 'react';
import Home from './components/routes/Home';
import Admin from './components/routes/Admin';
import Project from './components/routes/Project';
import Footer from './components/sub-compo/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>      
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/project/:id" render={() => <Project />} />
        <Route path="/admin" render={() => <Admin />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
