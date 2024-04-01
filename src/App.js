import  { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';

import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3c987d8d'; 

const movie1= {
    "Title": "Star Wars: Episode I - The Phantom Menace",
    "Year": "1999",
    "imdbID": "tt0120915",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}

const App = () => {
     const [movie, setMovie] = useState([]);
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

       setMovie(data.Search);
    }

    useEffect(() => {
        searchMovie('star wars');
    }, []);
    
    return(
        <div className='app'>
            <h1>Tus peliculas favoritas </h1> 
            <div className='icon'>🎬</div>
            <div className='search'>
                <input 
                    placeholder='busca tus peliculas aqui'
                    value="Superman"
                    onChange={() => {}}
                />
                <img src={searchIcon} 
                alt="search"
                onClick={() =>{}}
                />
            </div>
            <div className="container">
                <MovieCard movie1={movie[0]}/>
            </div>
        </div>
    );
}

export default App;