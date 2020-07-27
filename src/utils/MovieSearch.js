
const imdbKey = process.env.REACT_APP_IMDB_KEY;
const key = process.env.REACT_APP_API_KEY;


async function getMovieInfo(movie){
    const omdbUrl = `https://www.omdbapi.com/?apikey=${key}&t=${movie}`;
    
    try {
        let data = await fetch(omdbUrl);
        let results = await data.json();
        let imdbResults = await getImdbData(movie);
        return [results, imdbResults];
    } catch (error) {
        console.log(error)
        alert('There was an error loading that movie. Please try again.')
    }
}

async function getImdbData(movie) {
    const imdbUrl = `https://imdb-api.com/en/api/SearchTitle/${imdbKey}/${movie}`;
    
    try {
        const data = await fetch(imdbUrl)
        let searchObject = await data.json();

        const movieId = searchObject.results;
        return  getImdbMovieData(movieId[0].id);
    } catch (error) {
        console.log(error);
    }
}

async function getImdbMovieData(id) {
    const imdbIdUrl = `https://imdb-api.com/en/api/Title/${imdbKey}/${id}`;

    try {
        const data = await fetch(imdbIdUrl);
        let movieData = await data.json();
        return movieData;
    } catch (error) {
        console.log(error);
    }
}

export default getMovieInfo;