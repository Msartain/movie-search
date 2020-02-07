import React from 'react';
import MovieSearch from '../../components/Search/Search';


const SearchPage = (props) => {
    return(
        <div className="search-page">
            <h1>This is the search page</h1>
            <MovieSearch 
                handleOnChange={props.handleOnChange}
                handleOnClick={props.handleOnClick}
            />
        </div>
    )
}

export default SearchPage;