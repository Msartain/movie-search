import React from 'react';
import './ResultsPage.css'
import ResultsCard from '../../components/Results/ResultsCard';

const ResultsPage = (props) => {
    return(
        <div className="results">
            <h1>Results:</h1>
            <ResultsCard 
                movie={props.movie}
            />
        </div>
    )
}

export default ResultsPage;