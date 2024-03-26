import  { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3c987d8d'; 

const App = () => {
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovie('star wars');
    }, []);
    
    return(
        <div className='app'>
            <h1>Tus peliculas favoritas 🎬</h1>
            <div className='search'>
                <input 
                    placeholder='busca tus peliculas aqui'
                />
            </div>
        </div>
    );
}

export default App;