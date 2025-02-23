import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Fooder';
import MoviesGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [movies, setMovies] = React.useState([]);
  const [watchlist, setWatchlist] = React.useState([]);

  React.useEffect(() => {
    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data))
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist(prev => {
      return prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    })
  };

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>

            <Routes>
              <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>} />
              <Route path="/watchlist" element={<WatchList movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>} />
            </Routes>
          </nav>
        </Router>
      </div>
      
      <Footer></Footer>
      
    </div>
  );
}

export default App;
