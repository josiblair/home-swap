import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AddHome from './components/AddHome/Add';
import Home from './components/HomePage/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';
import HowItWorks from './components/HowItWorks/About';
import Destinations from './components/Destinations/Homes';
import DetailedHome from './components/DetailedHome/DetailedHome';


//current componentDidMount() shows successful api request for information on specific query (when query is entered)


class App extends Component {

  // componentDidMount() {
  //   axios.get( 'https://api.mapbox.com/geocoding/v5/mapbox.places/${ query }.json?access_token=pk.eyJ1Ijoiam9zaWJsYWlyIiwiYSI6ImNqOGtub202YjBnMzUycW11cXRtM3JwMHUifQ.W4ZSzi0wEv3CNC8729Jpcw&types=place&limit=10&autocomplete=true' )
  //        .then( response => {
  //          console.log(response)
  //        })
  // }

  render() {
    return (
      <div className='App'>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/destinations' component={Destinations} />
            <Route path='/contact' component={Contact} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/addhome' component={AddHome} />
            <Route path='/about' component={HowItWorks} />
            <Route path='/displayhome/:id' component={DetailedHome} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
