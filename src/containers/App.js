import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <div>
    
    <Router>
      <React.Fragment>
        <NavBar/>
        <Route exact path="/" render={Home}  />
        <Route exact path="/actors" render={Actors} />
        <Route exact path="/directors" render={Directors} />
        <Route exact path="/movies" render={Movies} />
      </React.Fragment>  
    </Router>
    </div>
  );
};

export default App
