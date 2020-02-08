import React from 'react';
import './ResultsCard.css'

const ResultsCard = (props) => {
    return(
        <div className="results-card">
            <img src={props.movie.Poster} alt="movie poster"></img>
        </div>
    )
}

export default ResultsCard;