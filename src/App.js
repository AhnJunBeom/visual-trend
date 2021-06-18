import React, {useState, useEffect} from 'react';
import Movie from './movie';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    };

    const getMovies = async() => {
        let data = await fetch('https://yts-proxy.nomadcoders1.now.sh/list_movies.json')
            .then(function(response) {
                return response.json();
            })
        console.log(data.data.movies);
        setMovies(data.data.movies);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return ( 
        <div>
            <h1 align='center'>NETFLEX</h1>
            <div style={divStyle}>{isLoading ? "Loading..." : movies.map(movie => {
                return (
                        <span><Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} bigPoster={movie.large_cover_image}/></span>
                )
            })}</div>
        </div>
    );
}

export default App;
