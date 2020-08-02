import React from 'react';
import './ResultsPage.css'
import ResultsCard from '../../components/Results/ResultsCard';
import NewSearchButton from '../../components/NewSearch/NewSearchButton';

const ResultsPage = (props) => {


    return(
        <div className="results">
            <ResultsCard 
                movie={props.movie}
            />
            <NewSearchButton></NewSearchButton>
        </div>
    )
}

export default ResultsPage;