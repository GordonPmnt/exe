import React from 'react';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Footer from './components/sub-compo/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project/:id" component={Project} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
