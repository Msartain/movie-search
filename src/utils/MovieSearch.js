async function getMovieInfo(movie){
    const key = process.env.REACT_APP_API_KEY
    const url = `https://www.omdbapi.com/?apikey=${key}&t=${movie}`
    try {
        let data = await fetch(url)
        let results = data.json();
        return results;
    } catch (error) {
        console.log(error)
        alert('There was an error loading that movie. Please try again.')
    }
}

export default getMovieInfo;