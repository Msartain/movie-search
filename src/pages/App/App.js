import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import getMovieInfo from '../../utils/MovieSearch'
import './App.css';

import NavBar from '../../components/NavBar/NavBar';

import LandingPage from '../LandingPage/LandingPage';
import SearchPage from '../SearchPage/Search';

class App extends Component {
  state = {
    search: '',
    movie: {}
  };

  handleOnChange = e => {
    this.setState({seacrh: e.target.value})
  };

  handleOnClick = () => {
    console.log('click ran')
    getMovieInfo(this.state.search).then(results => {
      this.setState({movie : results})
    })
  };


  render(){
    return (
     <>
     <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' render={() =>
          <LandingPage />
          } />
          <Route exact path='/search' render={() =>
          <SearchPage
            handleOnChange={this.handleOnChange}
            handleOnClick={this.handleOnClick}
          />
          } />
        </Switch>
      </Router>
     </>
    );

  }
}

export default App;
