import React from "react";
import '../styles.css'
import MovieCard from './MovieCard';

function MoviesGrid({movies, watchlist, toggleWatchlist}) {
    
    const [searchTerm, setsearchTerm] = React.useState('');
    const [genre, setGenre] = React.useState('All Genres');
    const [rating, setRating] = React.useState('All Ratings');

    const handleSearchChange = (e) => {
        setsearchTerm(e.target.value);       
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);       
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value);       
    }

    const matchesGenre = (movie, genre) => {
        return (
            genre === "All Genres" ||
            movie.genre.toLowerCase() === genre.toLowerCase()
        );
    };

    const matchesRating = (movie, rating) => {
        switch (rating) {
          case "All Ratings":
            return true;
    
          case "Good":
            return movie.rating >= 8;
    
          case "Ok":
            return movie.rating >= 5 && movie.rating < 8;
    
          case "Bad":
            return movie.rating < 5;
    
          default:
            return false;
        }
    };

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    };

    const filteredMovies = movies.filter(movie =>
        matchesGenre(movie, genre) &&
        matchesRating(movie, rating) &&
        matchesSearchTerm(movie, searchTerm)
    );

    return (
        <div>
            <input 
                type="text" 
                className="search-input" 
                placeholder="Search Movies..."
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <div className="filter-bar">
                <div className="filter-slot">
                    <label >Genre</label>
                    <select className='filter-dropdown' value={genre} onChange={handleGenreChange}>
                        <option value="All Genres">All Genres</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                    </select>
                </div>

                <div className="filter-slot">
                    <label >Rating</label>
                    <select className='filter-dropdown' value={rating} onChange={handleRatingChange}>
                        <option value="All Ratings">All Ratings</option>
                        <option value="Good">Good</option>
                        <option value="Ok">Ok</option>
                        <option value="Bad">Bad</option>
                    </select>
                </div>

            
            </div>
            <div className="movies-grid">
                {
                    filteredMovies.map(movie => 
                        <MovieCard 
                            movie={movie} 
                            key={movie.id} 
                            toggleWatchlist={toggleWatchlist} 
                            isWatchListed={watchlist.includes(movie.id)}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default MoviesGrid;
