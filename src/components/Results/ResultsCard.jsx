import React from 'react';
import './ResultsCard.css'

const ResultsCard = ({ movie }) => {

const movieCard = movie[0].Response === "True" ? 
    ( 
        <div className="results-card">
            <div className="poster">
            <img src={movie[0].Poster} alt="movie poster"></img>
            </div>
            <div className="movie-details">
                <span id="title">{movie[0].Title}</span>
                <p id="cast">{movie[0].Actors}</p>
                <p id="plot">{movie[0].Plot}</p>
                <p id="release">Year: {movie[0].Released}</p>
                <div id="ratings">
                    <span>Ratings:</span>
                    {movie[0].Ratings.map( (rating) => 
                        <p><strong>Source: </strong>{rating.Source} <strong>Rating: </strong>{rating.Value}</p>
                    )}
                </div>
                
            </div>

        </div>
    )
    :
    ( 
        <div className="results-card">
            <p className="no-movie-found">Sorry, no movie found by that title. Check the spelling or search for another title.</p>
        </div>)

    return(
        <div>
            {movieCard}
        </div>
    ) 
}

export default ResultsCard;