export async function getMovies() {

    const response = await fetch('http://www.omdbapi.com/?apikey=78888592&s=batman&y=2015')
        .then(response => response.json());
        
    return await response.Search;
}
