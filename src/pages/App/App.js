import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import getMovieInfo from '../../utils/MovieSearch'
import './App.css';

// - - - - - - - Components - - - - - - 
import NavBar from '../../components/NavBar/NavBar';

// - - - - - - - Pages - - - - - - 
import LandingPage from '../LandingPage/LandingPage';
import SearchPage from '../SearchPage/Search';
import ResultsPage from '../ResultsPage/Results';


class App extends Component {
  state = {
    search: '',
    movie: {}
  };

  handleOnChange = e => {
    this.setState({search: e.target.value})
  };

  handleOnClick = () => {
    getMovieInfo(this.state.search).then(results => {
      console.log('Results: ', results);
      console.log('Results[0]: ', results[0]);
      if (results[0].Response === "False") {
        this.setState({movie: 'Movie not found!'})
      }
      this.setState({movie : results})
      console.log('Movie object:', this.state.movie)
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
          <Route exact path='/search' render={({history}) =>
          <SearchPage
            history={history}
            handleOnChange={this.handleOnChange}
            handleOnClick={this.handleOnClick}
          />
          } />
          <Route exact path='/results' render={() =>
          <ResultsPage 
            movie={this.state.movie}
          />
          } />
        </Switch>
      </Router>
     </>
    );

  }
}

export default App;
