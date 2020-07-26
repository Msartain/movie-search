import React from 'react';
import MovieSearch from '../../components/Search/Search';
import './SearchPage.css';

const SearchPage = (props) => {
    return(
        <div className="search-page">
            <h1>Search a Movie.</h1>
            <MovieSearch 
                handleOnChange={props.handleOnChange}
                handleOnClick={props.handleOnClick}
            />
        </div>
    )
}

export default SearchPage;