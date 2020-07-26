import React from 'react';
import './ResultsCard.css'

const ResultsCard = (props) => {

const movieCard = props.movie.Response === "True" ? 
    ( 
        <div className="results-card">
            <div className="poster">
            <img src={props.movie.Poster} alt="movie poster"></img>
            </div>
            <div className="movie-details">
                <span id="title">{props.movie.Title}</span>
                <p id="cast">{props.movie.Actors}</p>
                <p id="plot">{props.movie.Plot}</p>
                <p id="release">Year: {props.movie.Released}</p>
                <div id="ratings">
                    <span>Ratings:</span>
                    {props.movie.Ratings.map( (rating) => 
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