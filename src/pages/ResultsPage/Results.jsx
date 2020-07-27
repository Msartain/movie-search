import React from 'react';
import './ResultsPage.css'
import ResultsCard from '../../components/Results/ResultsCard';
import NewSearchButton from '../../components/NewSearch/NewSearchButton';

const ResultsPage = (props) => {


    return(
        <div className="results">
            <ResultsCard 
                omdb={props.movie[0]}
                imdb={props.movie[1]}
            />
            <NewSearchButton></NewSearchButton>
        </div>
    )
}

export default ResultsPage;