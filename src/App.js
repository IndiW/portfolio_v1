import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Router>
        {/*<Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Blog' exact component={Blog} />
        </Switch>
      </Router>
    </>
  );
}

export default App;