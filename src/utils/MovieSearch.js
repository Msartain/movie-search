
const imdbKey = process.env.REACT_APP_IMDB_KEY;
const key = process.env.REACT_APP_API_KEY;


async function getMovieInfo(movie){
    const omdbUrl = `https://www.omdbapi.com/?apikey=${key}&t=${movie}`;
    
    try {
        let data = await fetch(omdbUrl);
        let results = data.json();
        console.log(results)
        getImdbData(movie);
        return results;
    } catch (error) {
        console.log(error)
        alert('There was an error loading that movie. Please try again.')
    }
}

async function getImdbData(movie) {
    const imdbUrl = `https://imdb-api.com/en/api/SearchTitle/${imdbKey}/${movie}`;
    
    try {
        const data = await fetch(imdbUrl)
        console.log('data:', data);

        let searchObject = data.json;
        console.log('searchObject:', searchObject);

        const movieId = searchObject.results;
        console.log(movieId);

        getImdbMovieData(movieId[0].id);
    } catch (error) {
        console.log(error);
    }
}

async function getImdbMovieData(id) {
    const imdbIdUrl = `https://imdb-api.com/en/api/Title/${imdbKey}/${id}`;

    try {
        const data = await fetch(imdbIdUrl);
        let movieData = data.json;
        console.log(movieData);
        return movieData;
    } catch (error) {
        console.log(error);
    }
}

export default getMovieInfo;