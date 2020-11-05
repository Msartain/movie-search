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


export const App = () => {
  
  const [search, setSearch] = useState('');
  const [movie, setMovie] = useState([]);


  const handleOnChange = e => {
    setSearch(e.target.value);
  };

  const handleOnClick = () => {
    getMovieInfo(search).then(results => {
      if (results[0].Response === "False") {
        setMovie('Movie not found!');
      }
      setMovie(results);
      console.log('Movie object:', movie)
    })
  };

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
            handleOnChange={handleOnChange}
            handleOnClick={handleOnClick}
          />
          } />
          <Route exact path='/results' render={() =>
          <ResultsPage 
            movie={movie}
          />
          } />
        </Switch>
      </Router>
     </>
    );
  };
