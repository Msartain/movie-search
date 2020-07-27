import React from 'react';
import './ResultsCard.css'

const ResultsCard = ({ omdb, imdb }) => {
console.log(omdb);
console.log(imdb);

const movieCard = omdb.Response === "True" ? 
    ( 
        <div className="results-card">
            <div className="poster">
            <img src={omdb.Poster} alt="movie poster"></img>
            </div>
            <div className="movie-details">
                <span id="title">{omdb.Title}</span>
                <p id="cast">{omdb.Actors}</p>
                <p id="plot">{omdb.Plot}</p>
                <p id="release">Year: {omdb.Released}</p>
                <div id="ratings">
                    <span>Ratings:</span>
                    {omdb.Ratings.map( (rating) => 
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