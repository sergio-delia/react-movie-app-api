import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import MovieDetail from './components/MovieDetail';

const APIKEY = process.env.REACT_APP_APIKEY;
const APIURL = process.env.REACT_APP_APIURL;

async function fetchMovies(search = 'The godfather') {

  if (search.length < 3) {
    return;
  }

  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then(res => res.json());
  console.log(response);

  const { Error, Search: movies, totalResults: totalCount } = response;

  return { Error: Error ?? '', movies, totalCount };

}



async function fetchMovieByID(movieID) {


  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&i=' + movieID).then(res => res.json());

  return response;
  
}




function App() {


  const [movies, setMovies] = useState([]);

  const [totalCount, setTotalCount] = useState(0);

  const [error, setError] = useState('')

  const [selectedMovie, setSelectedMovie] = useState(null)


  async function selectMovie(movie){


    const newMovie = await fetchMovieByID(movie.imdbID);

    if(newMovie.Error){
      setError(newMovie.Error);
      setSelectedMovie(null);
    } else {
      setSelectedMovie(newMovie);
    }

    
  }




  const callApi = async (search = '') => {
    const data = await fetchMovies(search);

    setError(data.Error);
    if (!data.Error.length) {
      setMovies(data.movies);
      setTotalCount(data.totalCount);
      setSelectedMovie(data.movies[0]);
      console.log(movies, totalCount);
    } else {
      setMovies([]);
      setTotalCount(0);
    }
  }

  useEffect(() => {



    callApi('Godfather');
    return () => {

    }
  }, [])

  return (
    <div className="App container-fluid">
      <header className="App-header">
        <Navbar onSearchChange={callApi} />
        <h1>MY FAVOURITE MOVIES ({totalCount})</h1>
      </header>
      {
        !error ? <MovieList onSelectMovie={selectMovie} movies={movies} /> : <h2>{error}</h2>
      }
      <MovieDetail movie={selectedMovie} />
    </div>
  );
}

export default App;
